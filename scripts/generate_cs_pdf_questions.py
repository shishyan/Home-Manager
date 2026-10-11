# -*- coding: utf-8 -*-
import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

# Helper to escape JavaScript strings
def esc(s):
    if s is None:
        return ""
    # Ensure backslashes and single quotes are escaped properly
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\r\n', '\n').replace('\r', '\n')

print("Generator ready")
