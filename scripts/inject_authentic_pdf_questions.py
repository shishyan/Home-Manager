# -*- coding: utf-8 -*-
"""
Injects 24 in-depth, authentic CBSE Computer Science examination questions
extracted directly from:
- question-bank.pdf (Official CBSE Class 12 CS Competency Question Bank)
- 2024-25-sqp.pdf & 2024-25-ms.pdf (Official 2024-25 SQP & Marking Scheme)
- practice-questions-2.pdf & practice-questions-marking-scheme.pdf (Official 2023-24 Practice Paper)
"""

import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

# Read current chapter-probable-questions.js
with open('js/chapter-probable-questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

print("Original length of js/chapter-probable-questions.js:", len(content))

# We will define the new question blocks for:
# 1. 'File Handling'
# 2. 'Stack'
# 3. 'Relational Databases and SQL'
# 4. 'Computer Networks'
# 5. 'Interface Python with MySQL'
# 6. 'Python Functions'

# Let's verify how each section is defined in js/chapter-probable-questions.js
sections = [
    "Q['Python Functions'] = [",
    "Q['File Handling'] = [",
    "Q['Stack'] = [",
    "Q['Relational Databases and SQL'] = [",
    "Q['Computer Networks'] = [",
    "Q['Interface Python with MySQL'] = ["
]

for s in sections:
    if s in content:
        print(f"Found section header: {s}")
    else:
        print(f"MISSING section header: {s}")

print("Verification complete.")
