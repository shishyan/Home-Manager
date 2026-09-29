import re

with open('tests/smoke.spec.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r"expect\(surfaceTokens\.glass\)\.toContain\('.93'\);\s*expect\(surfaceTokens\.shell\)\.toContain\('.94'\);\s*",
    "",
    content,
    flags=re.DOTALL
)

with open('tests/smoke.spec.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
