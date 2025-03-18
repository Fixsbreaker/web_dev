n = int(input())
students = {}
for _ in range(n):
    name, *marks = input().split()
    students[name] = list(map(float, marks))
name = input()
avg = sum(students[name]) / len(students[name])
print("{:.2f}".format(avg))