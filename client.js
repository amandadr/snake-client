const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541 // PORT number here,
  });

  const username = 'Name: ADR';
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //When I finally connect...
  conn.on('connect', function() {
    console.log('I have connected!');
    conn.write(`${username}`);
  })
 
  conn.on("data", (data) => {
    console.log('user says:', data);
  });
  
  return conn;
};
module.exports = {
  connect,
};