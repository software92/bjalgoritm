const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numArr = input[1].split(' ').map((x) => +x);
const target = +input[2];
const result = numArr.filter((num) => num === target).length;
console.log(result);
