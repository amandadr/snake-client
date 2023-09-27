// Interval:
let interval;
// setup interface to handle user input from stdin
const setupInput = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === '\u0057' || key === '\u0077') {
      clearInterval(interval);
      interval = setInterval(() => {
        connection.write('Move: up');
      }, 100);
    } else if (key === '\u0041' || key === '\u0061') {
      clearInterval(interval);
      interval = setInterval(() => {
        connection.write('Move: left');
      }, 100);
    } else if (key === '\u0053' || key === '\u0073') {
      clearInterval(interval);
      interval = setInterval(() => {
        connection.write('Move: down');
      }, 100);
    } else if (key === '\u0044' || key === '\u0064') {
      clearInterval(interval);
      interval = setInterval(() => {
        connection.write('Move: right');
      }, 100);
    } else if (key === '\u0030') {
      connection.write('Say: YUMM')
    } else if (key === '\u0031') {
      connection.write('Say: YUMMY')
    } else if (key === '\u0032') {
      connection.write('Say: YIKES')
    }
  });
  return stdin;
};

module.exports = {
  setupInput,
};