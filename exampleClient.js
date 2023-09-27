const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');

const username = 'Kool-Aid Man';

console.log('Client :)');

const client = net.createConnection(
  {
    host: '99.228.192.84', 
    port: 3001
  }
);

client.write(`${username} has entered the chat!`);

// move the snake using setInterval
//  client.write('Move: Up');
stdin.on('data', data => {
  client.write(`${username}: ${data}`);
})

client.setEncoding('utf8');

client.on('data', data => {
  console.log(data);
})
// snake: client.write('move: up')
// setInterval(() => {
//   client.write(`${username}: Hello World!!!`);

// }, 4000)
//host: "99.228.192.84", 