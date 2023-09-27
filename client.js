const net = require("net");
const { IP, PORT, USER } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //When I finally connect...
  conn.on('connect', function() {
    console.log('I have connected!');
    conn.write(USER);
  });
 
  conn.on("data", (data) => {
    console.log('user says:', data);
  });
  
  return conn;
};
module.exports = {
  connect,
};