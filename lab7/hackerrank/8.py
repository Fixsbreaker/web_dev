def wrap(string, max_width):
    wrapped = ""
    for i in range(0, len(string), max_width):
        wrapped += string[i:i+max_width] + "\n"
    return wrapped
s = input()
width = int(input())
print(wrap(s, width))
