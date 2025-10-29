def solution(players, callings):
    answer = []
    rank = {player: i for i, player in enumerate(players)}
    for player in callings:
        cur_idx=rank[player]
        front_player=players[cur_idx-1]
        players[cur_idx], players[cur_idx-1] = players[cur_idx-1], players[cur_idx]
        rank[player] -= 1
        rank[front_player] += 1
    
    return players