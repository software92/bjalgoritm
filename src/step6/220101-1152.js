const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const resultArr = input.filter((word) => word.length > 0);
console.log(resultArr.length);

// 입력되는 문자열이 공백이 되는 경우를 생각하지 못했다.
