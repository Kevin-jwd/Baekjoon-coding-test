function solution(answers) {
    var answer = [];
    
    let pattern1 = [1, 2, 3, 4, 5];
    let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let scores = [0, 0, 0];
    
    for(let i = 0; i<answers.length;i++) {
        if(pattern1[i % pattern1.length] == answers[i]) {
            scores[0] ++;
        }
        if(pattern2[i % pattern2.length] == answers[i]) {
            scores[1] ++;
        }
        if(pattern3[i % pattern3.length] == answers[i]) {
            scores[2] ++;
        }
    }
    let maxScore = Math.max(...scores);
    for(let j = 0;j<scores.length;j++) {
        if(scores[j] == maxScore)
        {
            answer.push(j+1);
        }
    }
    return answer;
}