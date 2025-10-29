import sys

def dfs(idx):
    global visited
    visited[idx] = True
    print(idx, end=' ')
    for nxt in range(1,N+1):
        if not visited[nxt] and graph[idx][nxt]:
            dfs(nxt)

def bfs(idx):
    global visited, q
    while q:
        cur = q.pop(0)
        print(cur, end=' ')
        for nxt in range(1,N+1):
            if not visited[nxt] and graph[cur][nxt]:
                visited[nxt] = True
                q.append(nxt)
            
# 0. 입출력 
input = sys.stdin.readline
# N: 정점 수, M: 간선 수, V: 초기값
N, M, V = map(int, input().split())

graph = [[False] * (N+1) for _ in range(N+1)]
visited = [False] * (N+1)

# 1. graph 정보 입력
for _ in range(M):
    a, b = map(int, input().split())
    graph[a][b] = True
    graph[b][a] = True

# 2. DFS
dfs(V)
print()

# 3. BFS
visited = [False] * (N+1)
visited[V] = True
q=[V]
bfs(V)
