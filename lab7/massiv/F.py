n = int(input())
counter = 0
arr = list(map(int, input().split()))

for i in range(1, n - 1):
    if arr[i - 1] < arr[i] > arr[i + 1]:
       counter += 1
print(counter)
