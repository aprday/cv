const fs = require('fs');
const path = require('path');

function Task(filePaths) {
    this.filePaths = filePaths;
    this.destPath = '';
    this.destExt = '';
}

const Pipe = function () {
    this.filePaths = [];
    this.tasks = [];
    this.dests = [];
    this.destPath = '';
    this.destExt = '';
}
Pipe.prototype.deploy = function (filePath, index) {
    const self = this;
    return function (buffer) {
        const fileName = path.parse(filePath).name;
        const fileExt = path.parse(filePath).ext;
        self.tasks.forEach(function (task) {
            if (~task.filePaths.indexOf(filePath)) {
                mkdirs(task.dest,0777, function () {
                    const ext = task.ext || fileExt;
                    const destPath = task.dest + '/' + fileName + ext;
                    fs.writeFile(destPath, buffer, (err) => {
                        if (err) {
                            throw err;
                        }
                        console.log(filePath, '->', destPath);
                    });
                })
            }
        });
        
    }
}
Pipe.prototype.match = function (filePath, reg, callback) {
    const self = this;
    const filePaths = readFilePaths(filePath, reg);
    const task = new Task(filePaths);
    self.tasks.push(task);
    filePaths.forEach(function (file, index) {
        fs.readFile(file, function (err, buffer) {
            if (err) throw err;
            if (typeof callback === 'function') {
                callback(buffer.toString(), filePath, self.deploy(file, index));
            } else {
                self.deploy(file, index)(buffer)
            }
        });
    });
    return this;
}

Pipe.prototype.dest = function (destPath, ext) {
    const task = this.tasks.pop();
    task.dest = destPath;
    task.ext = ext;
    this.tasks.push(task);
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
