const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let result = 0;
for (const alphabet of input) {
  const num = alphabet.charCodeAt();
  if (num < 68) {
    result += 3;
  } else if (num < 71) {
    result += 4;
  } else if (num < 74) {
    result += 5;
  } else if (num < 77) {
    result += 6;
  } else if (num < 80) {
    result += 7;
  } else if (num < 84) {
    result += 8;
  } else if (num < 87) {
    result += 9;
  } else {
    result += 10;
  }
}
console.log(result);
