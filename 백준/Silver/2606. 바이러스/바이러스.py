import sys

def dfs(idx):
	global count,visited
	visited[idx] = True

	for nxt in range(1,N+1):
		if not visited[nxt] and graph[idx][nxt]:
			count += 1
			dfs(nxt)

input = sys.stdin.readline
N = int(input().strip())
M = int(input().strip())

graph = [[False] * (N+1) for _ in range(N+1)]
visited = [False] * (N+1)
count = 0

for _ in range(M):
	a,b = map(int, input().split())
	graph[a][b] = True
	graph[b][a] = True
	
dfs(1)
print(count)
	