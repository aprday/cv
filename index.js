const pipe = require('./build/pipe.js');
const pug = require('pug');
const less = require('less');
const pkg = require('./package.json');
const config = require(pkg.configPath);
const title = pkg.htmlTitle;

config.title = title;

pipe.match('./src', /[a-zA-Z]*.less$/g).use(function (src, path, callback) {
    less.render(src, function (e, res) {
        callback(res.css, path);
    });
}).use(function (src, path, callback) {
    callback(src, path);
}).dest('./dist/css', '.css');

pipe.match('./src/pug/index.pug').use(function (src, path, callback) {
    const compiledFunction = pug.compileFile(path);
    const output = compiledFunction(config);
    callback(output);
}).dest('./dist', '.html');

pipe.match('./src/assert/').dest('./dist/static');