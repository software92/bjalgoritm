const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let count = 0;
for (const i in input) {
  const index = +i;
  count += 1;

  if (input[index] === 'j') {
    if (input[index - 1] === 'l' || input[index - 1] === 'n') {
      count -= 1;
    }
  }
  if (input[index] === '-') {
    if (input[index - 1] === 'c' || input[index - 1] === 'd') {
      count -= 1;
    }
  }
  if (input[index] === '=') {
    if (input[index - 1] === 's' || input[index - 1] === 'c') {
      count -= 1;
    }
    if (input[index - 1] === 'z') {
      count -= 1;
      if (input[index - 2] === 'd') {
        count -= 1;
      }
    }
  }
}
console.log(count);
