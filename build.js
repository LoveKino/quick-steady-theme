'use strict';

let {
    readFile, writeFile
} = require('mz/fs');

let path = require('path');

readFile(path.join(__dirname, './index.css'), 'utf-8').then(text => {
    let code = `module.exports = \`${text}\`;`;
    return writeFile(path.join(__dirname, 'lib/raw.js'), code, 'utf-8');
});
