const fs = require('fs');
const path = require('path');

function Task(src, reg) {
    this.src = src;
    this.reg = reg;
    this.queue = []
}

Task.prototype.use = function (callback) {
    const self = this;
    const fn = function (next) {
        return function (str, path) {
            callback(str, path, next);
        };
    };
    this.queue.push(fn);
    return this;
}
Task.prototype.run = function (path, ext) {
    const self = this;
    const filePaths = readFilePaths(self.src, self.reg);
    filePaths.forEach(function (filePath, index) {
        fs.readFile(filePath, function (err, buffer) {
            if (err) {
                throw err;
            }
            if (self.queue.length > 0) {
                const str = buffer.toString();
                self.queue.push(self.deploy(filePath, path, ext));
                var dispatch = self.queue.reduceRight(function (previousCall, currentCall) {
                    return currentCall(previousCall);
                });
                dispatch(str, filePath);
            } else {
                self.deploy(filePath, path, ext)(buffer)
            }
        });
    });
}

Task.prototype.deploy = function (filePath, destPath, ext) {
    const self = this;
    return function (buffer) {
        const fileName = path.parse(filePath).name;
        const fileExt = path.parse(filePath).ext;
        mkdirs(destPath, 0777, function () {
            ext = ext || fileExt;
            destPath = destPath + '/' + fileName + ext;
            fs.writeFile(destPath, buffer, (err) => {
                if (err) {
                    throw err;
                }
                console.log(filePath, '->', destPath);
            });
        })
    };
}
Task.prototype.dest = function (path, ext) {
    const self = this;
    self.run(path, ext);
    return this;
}

const Pipe = function () {
    this.descript = Math.random();
}

Pipe.prototype.match = function (src, reg) {
    return new Task(src, reg, this.descript);
}

function readFilePaths(filePath, reg) {
    let filePaths = [];
    const loop = arguments.callee;
    const stat = fs.lstatSync(filePath);
    if (stat.isDirectory()) {
        dirs = fs.readdirSync(filePath);
        dirs.forEach(function (dir) {
            var result = loop(filePath + '/' + dir, reg);
            filePaths = filePaths.concat(result);
        });
    } else {
        if (reg) {
            if (reg.test(filePath)) {
                filePaths.push(filePath);
            }
        } else {
            filePaths.push(filePath);
        }
    }
    return filePaths;
}
function mkdirs(dirpath, mode, callback) {
    fs.exists(dirpath, function(exists) {
        if(exists) {
                callback(dirpath);
        } else {
                //尝试创建父目录，然后再创建当前目录
                mkdirs(path.dirname(dirpath), mode, function(){
                    fs.mkdir(dirpath, mode, callback);
                });
        }
    });
};

module.exports = new Pipe();
