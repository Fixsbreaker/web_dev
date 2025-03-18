from math import sqrt

num1 = int(input())
num2 = int(input())
for i in range(num1, num2 + 1):
    if sqrt(i) ** 2 == i:
        print(i)
