num = int(input())
counter = 0
while counter < num:
    sum = 1
    for i in range(counter):
        sum = sum + 2
    if sum >= num:
        print(counter)
        break
    else:
        counter += 1

