const fs = require('fs');

if (fs.existsSync('your-files-here')) {
  console.log('Directory already exists');
} else {
  fs.mkdir('your-files-here', (err) => {
    if (err) {
      console.log('Error : ', err);
    } else {
      console.log('directory created');
    }
  });
}
