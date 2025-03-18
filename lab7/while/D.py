num = int(input())
count = 0
while count < num:
    if 2 ** count == num:
        print('YES')
        break
    else:
        count += 1
else:
    print('NO')