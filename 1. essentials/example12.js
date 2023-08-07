const fs = require('fs');

/// fs.renameSync('./your-files-here/move.md', 'lib');

// console.log('folder is moved');

// fs.rmdir('./your-files-here', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('directory is removed');
//   }
// });

fs.readdirSync('./dir').forEach((file) => {
  fs.renameSync(`./dir/${file}`, `./library/${file}`);
});

console.log('files removed');

fs.rmdir('./dir');

console.log('directory is removed');
