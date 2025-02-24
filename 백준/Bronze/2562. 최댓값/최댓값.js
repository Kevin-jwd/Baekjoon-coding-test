const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input.map(Number);

let maxVal = 0;
let maxIndex = 0;

for(let i = 0; i<numbers.length;i++) {
    if(maxVal < numbers[i]) {
        maxVal = numbers[i]
        maxIndex = i+1
    }
}
console.log(maxVal)
console.log(maxIndex)
