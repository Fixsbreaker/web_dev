n = int(input())
counter = 0
arr = list(map(int, input().split()))

for i in arr:
    if i > 0:
        counter += 1
print(counter)