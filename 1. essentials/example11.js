const fs = require('fs');

// fs.renameSync('./readme.md', './readme-updated.md');

// console.log('readme.md file renamed');

// fs.rename('./readme.md', './renamed-readme.md', (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Renamed is done');
// });

// fs.unlinkSync('renamed-readme.md');

fs.unlink('javascript.md', (error) => {
  if (error) {
    throw error;
  }

  console.log('file is gone');
});
