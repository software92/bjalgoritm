const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((x) => parseInt(x));

const original_pins = [1, 1, 2, 2, 2, 8];
const result = original_pins.map((pin, index) => pin - input[index]);
console.log(result.join(' '));

// 틀린 이유
// original_pins 배열 함수 map을 사용하지 않아 수차례 TypeError로 실패
