function solution(s){
    let stack = [];
    for(const char of s) {
        if(char === "(") {
            stack.push(char)
        } else if(char === ")") {
            if(stack.length === 0) {
                return false
            } else {
                stack.pop()
            }
        }
    }

    return stack.length === 0;
}