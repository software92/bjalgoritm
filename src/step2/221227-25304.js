const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let totalPrice = +input[0];
const items = input.slice(2);

for (const item of items) {
  const newItem = item.split(' ').map((x) => +x);
  const itemPrice = newItem.reduce((acc, cur) => acc * cur);
  totalPrice = totalPrice - itemPrice;
}

console.log(totalPrice ? 'No' : 'Yes');

// 이전에 문제 풀때는 문제가 없었는데,
// 배열의 항목에서 문자를 숫자로 바꿀 때 parseInt()를 사용할 때 반복적으로 오답 처리 되었다
