num = input()[::-1]
counter = 0
sum = 0

for i in num:
    if i == "1":
        sum += 2 ** counter
        counter += 1
    else:
        counter += 1

print(sum)