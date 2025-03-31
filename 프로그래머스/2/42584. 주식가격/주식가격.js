function solution(prices) {
    let stack = [];
    let n = prices.length;
    let answer = new Array(n).fill(0);
    
    for(let i = 0;i<n;i++) {
        while(stack.length >0 && prices[stack[stack.length-1]] > prices[i]) {
            let j = stack.pop()
            answer[j] = i-j
        }
        stack.push(i)
    }
    while(stack.length>0) {
        let j = stack.pop()
        answer[j] = prices.length - 1 - j
    }
    console.log(stack)
    return answer;
}