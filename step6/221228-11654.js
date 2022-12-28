const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const result = input.charCodeAt();

console.log(result);

// String.charCodeAt(): 문자를 아스키코드로 변환하는 함수
