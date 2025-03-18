v = int(input())
t = int(input())

if v * t > 109:
    print(v * t - 109)
else:
    if v < 0:
        print(109 + v * t)
    else:
        print(109 - v * t)
