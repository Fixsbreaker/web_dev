def make_chocolate(small, big, goal):
    max_big = min(big, goal // 5)
    remaining_goal = goal - (max_big * 5)
    
    if small >= remaining_goal:
        return remaining_goal
    else:
        return -1