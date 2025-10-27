def solution(answers):
    answer = []
    pattern1 = [1,2,3,4,5]
    pattern2 = [2,1,2,3,2,4,2,5]
    pattern3 = [3,3,1,1,2,2,4,4,5,5]
    
    pattern1_count = 0
    pattern2_count = 0
    pattern3_count = 0
    for i in range(len(answers)):
        if pattern1[i%len(pattern1)] == answers[i]:
            pattern1_count+=1
        if pattern2[i%len(pattern2)] == answers[i]:
            pattern2_count+=1
        if pattern3[i%len(pattern3)] == answers[i]:
            pattern3_count+=1
        
    max_score = max(pattern1_count, pattern2_count, pattern3_count)
    if pattern1_count == max_score: answer.append(1)
    if pattern2_count == max_score: answer.append(2)
    if pattern3_count == max_score: answer.append(3)
    return answer