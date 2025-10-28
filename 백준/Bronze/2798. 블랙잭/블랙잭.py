import sys
from itertools import combinations

n, m = map(int, sys.stdin.readline().split())  # 카드 개수, 목표값
cards = list(map(int, sys.stdin.readline().split()))  # 카드 목록

result=0
for combo in combinations(cards,3):
    total=sum(combo)
    if total<=m:
        result=max(result,total)
        
print(result)
        