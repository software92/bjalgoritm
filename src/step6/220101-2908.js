const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let newArr = '';
for (const index in input) {
  newArr = input[index] + newArr;
}
const nums = newArr.split(' ');
console.log(nums[0] > nums[1] ? nums[0] : nums[1]);

// 문자를 역순으로 재배치
