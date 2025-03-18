num = int(input())
count = 0
while 2 ** count < num:
    print(2 ** count)
    count += 1