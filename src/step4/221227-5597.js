const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((x) => +x);

const sortArr = input.sort((a, b) => a - b);
let result = [];
for (i = 1; i < 31; i++) {
  result.push(i);
}
for (const student of sortArr) {
  result = result.filter((num) => num !== student);
}
result.forEach((num) => console.log(num));
