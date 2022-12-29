const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cases = input.slice(1);
for (const one of cases) {
  const [count, word] = one.split(' ');
  let result = '';
  for (const text of word) {
    result += text.repeat(count);
  }
  console.log(result);
}

// input의 case중 문자열 앞이나 뒤에 공백이 포함되는 경우가 있어 타입 에러가 나타남
// trim() 사용 후 문제 해결
