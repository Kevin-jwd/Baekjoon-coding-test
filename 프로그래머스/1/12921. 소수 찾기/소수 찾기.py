def solution(n):

    is_prime = [True] * (n + 1)
    is_prime[0], is_prime[1] = False, False  

    # 에라토스테네스의 체 알고리즘
    for i in range(2, int(n**0.5) + 1):
        if is_prime[i]:
            for j in range(i*i, n + 1, i):
                is_prime[j] = False

    # 소수 개수 세기
    return sum(is_prime)