num1 = int(input())
num2 = int(input())
num3 = int(input())
num4 = int(input())

for i in range(num1, num2 + 1):
    if i % num4 == num3:
        print(i)