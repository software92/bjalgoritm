const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = +input[0];
const numArr = input[1].split('', count);
const sum = numArr.reduce((acc, cur) => +acc + +cur);

console.log(sum);
