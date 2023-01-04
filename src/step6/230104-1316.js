const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const wordArr = input.slice(1);
let resultArr = [];
for (const word of wordArr) {
  let alphabetGroup = [];
  let isGroup = true;

  if (word.length === 1) {
    alphabetGroup.push(word);
  } else {
    word.split('').reduce((pre, cur) => {
      const preIs = !!alphabetGroup.find((item) => item === pre);
      if (!preIs) {
        alphabetGroup.push(pre);
      }
      if (pre !== cur) {
        alphabetGroup.push(cur);
      }
      return cur;
    });
    for (const alphabet of alphabetGroup) {
      const checkAlphabet = alphabetGroup.filter((item) => item === alphabet);
      if (checkAlphabet.length > 1) {
        isGroup = false;
      }
    }
  }
  if (isGroup) {
    resultArr.push(word);
  }
}
console.log(resultArr.length);

// 그룹단어
// - 하나의 문자가 연속되는 건 가능
// - 하나의 문자가 연속되지 않고 다른 문자를 사이에 두고 중복 사용 불가능

// -> 연속되는 문자를 제외한 문자 모두 입력 (arr)
// -> arr에서 중복되는 문자가 있으면 그룹 문자 아님 (filtering)
