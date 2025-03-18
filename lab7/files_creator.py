import os

directory = r"/Users/alnurkunbolov/WebstormProjects/web_dev/lab7/functions"

letters = ['A', 'B', 'C']

for letter in letters:
    filename = f"{letter}.py"
    with open(os.path.join(directory, filename), 'w') as file:
        file.write('')
