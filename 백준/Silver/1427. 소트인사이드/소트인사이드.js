const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (input) => {
    const sortedNumber = input
        .split("")
        .sort((a, b) => b - a) 
        .join("");

    console.log(sortedNumber);
    rl.close();
});