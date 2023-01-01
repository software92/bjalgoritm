const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

let result = [];
for (const alphabet of input) {
  const targetIndex = result.findIndex((obj) => obj.alphabet === alphabet);
  if (targetIndex === -1) {
    result.push({
      alphabet,
      count: 1,
    });
  } else {
    result[targetIndex].count += 1;
  }
}
result.sort((a, b) => b.count - a.count);
const maxCountArr = result.filter((obj) => obj.count === result[0].count);
console.log(
  maxCountArr.length > 1 ? '?' : maxCountArr[0].alphabet.toUpperCase()
);

// trim()을 사용하지 않아 반복적인 에러 발생
// 예제에는 나타나지 않지만, 공백이 문자로 취급되어 가장 많이 입력되었을 때 이를 확인할 때 에러가 발생하는 것 같다.
