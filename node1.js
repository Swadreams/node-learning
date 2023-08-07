// How to use module in node

const fs = require('fs');
let text = fs.readFileSync('file1.txt', 'utf-8');
text = text.replace('sample', 'new text');

fs.writeFileSync('file2.txt', text);
console.log('creating a new file');
