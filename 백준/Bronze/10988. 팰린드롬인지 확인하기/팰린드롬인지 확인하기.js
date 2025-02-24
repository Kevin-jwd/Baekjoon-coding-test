const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const length = input.length;

for (let i = 0; i < Math.floor(length / 2); i++) {
    if (input[i] !== input[length - 1 - i]) { 
        console.log(0); 
        return; 
    }
}
console.log(1);