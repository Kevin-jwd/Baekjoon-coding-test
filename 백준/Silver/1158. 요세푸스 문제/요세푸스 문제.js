const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (input) => {
    let [n, k] = input.split(" ").map(Number);
    const queue = [];

    // 1부터 N까지 큐에 추가
    for (let i = 1; i <= n; i++) {
        queue.push(i);
    }

    const result = [];
    let index = 0;

    while (queue.length > 0) {
        index = (index + k - 1) % queue.length; // k번째 사람 찾기 (0-based index)
        result.push(queue.splice(index, 1)[0]); // 제거 후 결과 배열에 추가
    }

    console.log(`<${result.join(", ")}>`);
    rl.close();
});

class Queue {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }
    size() {
        return this.items.length;
    }
    pop() {
        return this.items.shift();
    }
}
