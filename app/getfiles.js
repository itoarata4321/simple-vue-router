const fs = require('fs');
const path = require('path');

var files = [];

function setAllFiles(dir) {
  const filenames = fs.readdirSync(dir);
  filenames.forEach((filename) => {
    const fullPath = path.join(dir, filename);
    const stats = fs.statSync(fullPath);
    if (stats.isFile() && (fullPath.match(/\.js$/) || fullPath.match(/\.vue$/))) {
      files.push('./' + fullPath);
    } else if (stats.isDirectory()) {
      setAllFiles(fullPath);
    }
  });
}

// JSディレクトリ
const dir = './src/js';
setAllFiles(dir)
console.log(files);
