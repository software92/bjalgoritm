const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const target = +input;

const findDistance = () => {
  let num = 1;
  let distance = 1;
  if (target !== 1) {
    // while에서 distance가 2인 숫자의 범위부터 계산
    while (num < target) {
      result = distance;
      num = num + 6 * distance;
      distance += 1;
    }
  }
  console.log(distance);
};

findDistance();

// 1
// 7
// 19
// 37
// 61
// 6 12 18 24

// input: N

// num = 1;
// num = num + 6*(i-1)
// // i=0
// // max number: 1 + 6*i

// 1. N이 몇번쨰 칸인지 확인
// 2. 방수 계산
