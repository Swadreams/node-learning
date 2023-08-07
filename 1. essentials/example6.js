const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('customEvent', (messsage, user) => {
  console.log(`${user}: ${messsage}`);
});

emitter.emit('customEvent', 'Hello world', 'Computer');

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  if (input === 'exit') {
    emitter.emit('customEvent', 'Good by!', 'Process');
    process.exit();
  } else {
    emitter.emit('customEvent', data.toString().trim(), 'terminal');
  }
});
