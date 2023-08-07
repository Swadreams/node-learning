const fs = require('fs');

let md = `
    This is a New File
    ==================

    ES6 Templates strings are cool. They honor whitespace.

    * Template strings
    * Node File System
    * Readline CLIs
`;

fs.writeFile('javascript.md', md.trim(), function (err) {
  if (err) {
    throw err;
  }
  fs.appendFileSync('javascript.md', '\n\n#### Node.js everyone!');
  console.log('markdown created');
});
