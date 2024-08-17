print("updating css")

file_path = "dist/index.css"
selector = "#shadcn-theme-editor"

def leading_spaces(s):
    # Strip leading spaces and compare length with original length
    return len(s) - len(s.lstrip(' '))

try:
    with open(file_path) as file:
        lines = file.readlines()

    new_lines = []
    for line in lines:
        if line.strip().startswith("."):
            line = f"{' '*leading_spaces(line)}{selector} {line.lstrip()}"
        new_lines.append(line)
    # print(new_lines)
    # exit()

    with open(file_path, 'w') as file:
        file.writelines(new_lines)

    print("css file updated")
except Exception as e:
    print("!error: ", e)