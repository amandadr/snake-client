const net = require("net");
const stdin = process.stdin;
const {connect} = require('./client');

connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });


setupInput();