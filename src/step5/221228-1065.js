// 풀기 전에
// 한수: 정수의 자리수가 등차수열을 이루는 숫자
// ex)
// 123 - 1 > 2 > 3, 순으로 1씩 늘어나는 등차수열이 됨
// 147 - 1 > 4 > 7, 순으로 3씩 늘어나는 등차수열이 됨
// 1 - 1, 등차수열인지 확인할 수 있는 숫자가 부족
// 46 - 4 > 6, 등차수열인지 확인할 수 있는 숫자가 부족
// => 비교할 숫자가 부족한 한자리, 두자리 숫자는 모두 한수로 취급**
// 3자리 수는 99 + 한수 구하기
// 2자리, 1자리수는 그 숫자만큼이 한수 개수

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();

// const targetNum = +input; // '111'
// let result = 0;

// if (!input[2]) {
//   result = targetNum;
// } else {
//   for (i = 1; i < targetNum + 1; i++) {
//     if (!String(i)[2]) {
//       result += 1;
//     } else {
//       if ((+String(i)[0] + +String(i)[2]) / 2 === +String(i)[1]) {
//         result += 1;
//       }
//     }
//   }
// }
// console.log(result);

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const targetNum = +input; // '111'
let result = 0;

for (i = 1; i < targetNum + 1; i++) {
  const num = String(i);
  if (i < 100) {
    result += 1;
  } else {
    if ((+num[0] + +num[2]) / 2 === +num[1]) {
      result += 1;
    }
  }
}

console.log(result);
