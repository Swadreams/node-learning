const fs = require('fs');

let stream = fs.createReadStream('./library/move.md', 'utf-8');

let data;

stream.once('data', (chunk) => {
  console.log('read stream started');
  console.log('=============');
  console.log(chunk);
});

stream.on('data', (chunk) => {
  console.log(`chunk : ${chunk.length}`);
  data += chunk;
});

stream.on('end', () => {
  console.log(`finished : ${data.length}`);
});

// fs.readFile('./library/move.md', 'utf-8', (err, message) => {
//   console.log('file read :', message);
// });

console.log('reading the file');
