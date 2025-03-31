function solution(board, moves) {
    let answer = 0;
    let stack = [];

    for (let i = 0; i < moves.length; i++) {
        let move = moves[i] - 1; 

        for (let j = 0; j < board.length; j++) {
            if (board[j][move] !== 0) { 
                let doll = board[j][move];
                board[j][move] = 0; 

                if (stack.length > 0 && stack[stack.length - 1] === doll) {
                    stack.pop(); 
                    answer += 2; 
                } else {
                    stack.push(doll);
                }
                break; 
            }
        }
    }

    return answer;
}