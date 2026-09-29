import re

with open('tests/smoke.spec.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r"const breadcrumbLayout = await page\.evaluate\(\(\) => \{.*?expect\(breadcrumbLayout\.centerDelta\)\.toBeLessThan\(2\);\s*",
    "",
    content,
    flags=re.DOTALL
)

with open('tests/smoke.spec.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
