const pipe = require('./build/pipe.js');
const pug = require('pug');
const less = require('less');
const pkg = require('./package.json');
const config = require(pkg.configPath);
const title = pkg.htmlTitle;

config.title = title;

pipe.match('./src', /[a-zA-Z]*.less$/g).use(function (file, callback) {
    const {str, filePath} = file;
    less.render(str, function (e, res) {
        callback(res.css, filePath);
    });
}).use(function (src, callback) {
    callback(src);
}).dest('./dist/css', '.css');

pipe.match('./src/pug/index.pug').use(function (file, callback) {
    const {str, filePath} = file;
    const compiledFunction = pug.compileFile(filePath);
    const output = compiledFunction(config);
    callback(output);
}).dest('./dist', '.html');

pipe.match('./src/assert/').dest('./dist/static');

pipe.server(__dirname, 3000, function () {
    console.log('server start at http://localhost:3000 ');
});
