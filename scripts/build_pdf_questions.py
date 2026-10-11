# -*- coding: utf-8 -*-
"""
Builds authentic CBSE Computer Science questions extracted directly from:
1. question-bank.pdf (Official CBSE Class 12 CS Competency Bank)
2. 2024-25-sqp.pdf & 2024-25-ms.pdf (Official 2024-25 Sample Question Paper & Marking Scheme)
3. practice-questions-2.pdf & practice-questions-marking-scheme.pdf (Official 2023-24 Practice Paper)
"""

import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

# Helper to escape single quotes and backslashes for JS single-quoted strings
def js_str(s):
    if s is None:
        return "''"
    # Replace backslash with double backslash
    s = s.replace('\\', '\\\\')
    # Replace single quote with \'
    s = s.replace("'", "\\'")
    # Replace newlines with \n
    s = s.replace('\r\n', '\n').replace('\r', '\n')
    lines = s.split('\n')
    return "'" + "\\n".join(lines) + "'"

print("Builder initialized successfully.")
