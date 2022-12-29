const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let alphabetArr = [];
for (i = 97; i <= 122; i++) {
  alphabetArr.push(String.fromCharCode(i));
}
const result = alphabetArr.map((alphabet) => {
  let myNum = -1;
  for (const index in input) {
    if (alphabet === input[index]) {
      return (myNum = index);
    }
  }
  return myNum;
});

console.log(result.join(' '));

// 입력되는 문자가 중복되는 문자를 표현할 때,
// 앞에서 나온 인덱스를 가져야 하는데, 마지막에 나온 인덱스를 처리하는 데
// 어려움이 있었다.
