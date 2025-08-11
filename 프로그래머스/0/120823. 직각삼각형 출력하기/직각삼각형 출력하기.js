const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line.trim());
}).on('close', function () {
  const n = Number(lines[0]);
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }
});