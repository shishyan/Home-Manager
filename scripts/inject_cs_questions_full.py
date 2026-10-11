# -*- coding: utf-8 -*-
"""
Inject authentic questions from official CBSE PDF files:
1. question-bank.pdf (CBSE Official Competency Bank)
2. 2024-25-sqp.pdf & 2024-25-ms.pdf (CBSE 2024-25 SQP & MS)
3. practice-questions-2.pdf & practice-questions-marking-scheme.pdf (CBSE 2023-24 Practice Paper)
"""

import sys

sys.stdout.reconfigure(encoding='utf-8')

# Helper for SVG diagrams
def svg(w, h, content):
    return f"""svg({w}, {h}, `
{content}
    `)"""

# We will define the list of new questions for each chapter
NEW_QUESTIONS = {}

# =========================================================================
# 1. FILE HANDLING (Text, Binary, CSV)
# =========================================================================
NEW_QUESTIONS['File Handling'] = [
    {
        'id': 'cs-fh-qb-q1',
        'marks': 5,
        'type': 'CSV File Case Study',
        'paper': 'CBSE Competency Bank (Official)',
        'prob': '🔥 Direct Question from Official CBSE Competency Bank',
        'stem': """Rohit, a student of class 12th, is learning CSV File Module in Python. During examination, he has been assigned an incomplete python code to create a CSV File 'Student.csv' (content shown below). Help him in completing the code which creates the desired CSV File.<br><br>
<strong>Target CSV File Content ('Student.csv'):</strong><br>
<pre class="bg-slate-100 p-2 rounded text-xs font-mono">
ROLL_NO,NAME,CLASS,SECTION
1,AKSHAY,XII,A
2,ABHISHEK,XII,A
3,ARVIND,XII,A
4,RAVI,XII,A
5,ASHISH,XII,A
</pre>
<br><strong>Incomplete Python Code:</strong><br>
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
import _____                          # Statement-1
fh = open(_____, _____, newline='')  # Statement-2
stuwriter = csv._____                # Statement-3
data = []
header = ['ROLL_NO', 'NAME', 'CLASS', 'SECTION']
data.append(header)
for i in range(5):
    roll_no = int(input("Enter Roll Number : "))
    name = input("Enter Name : ")
    Class = input("Enter Class : ")
    section = input("Enter Section : ")
    rec = [_____]                   # Statement-4
    data.append(rec)
stuwriter._____(data)                # Statement-5
fh.close()
</pre>
<br>
(i) Identify suitable code for Statement-1.<br>
(ii) Identify missing code for Statement-2.<br>
(iii) Identify suitable code for Statement-3.<br>
(iv) Identify suitable code for Statement-4.<br>
(v) Identify suitable code for Statement-5.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="180" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="13" font-weight="bold" fill="#0f172a">CBSE CSV File Workflow: import csv & writerows()</text>
        <rect x="35" y="65" width="130" height="110" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="90" font-size="11" font-weight="bold" fill="#312e81">1. Open with newline</text>
        <text x="45" y="110" font-size="9" fill="#3730a3">open('Student.csv',</text>
        <text x="45" y="125" font-size="9" fill="#3730a3">'w', newline='')</text>
        <text x="45" y="145" font-size="9" fill="#1e1b4b">Prevents blank rows</text>
        
        <path d="M 175 120 L 205 120" stroke="#4f46e5" stroke-width="2" marker-end="url(#arrow)"/>
        
        <rect x="215" y="65" width="135" height="110" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <text x="225" y="90" font-size="11" font-weight="bold" fill="#065f46">2. Create Writer</text>
        <text x="225" y="110" font-size="9" fill="#047857">w = csv.writer(fh)</text>
        <text x="225" y="130" font-size="9" fill="#047857">delimiter=',' default</text>
        <text x="225" y="150" font-size="9" fill="#064e3b">Creates writer object</text>
        
        <path d="M 360 120 L 390 120" stroke="#059669" stroke-width="2"/>
        
        <rect x="400" y="65" width="125" height="110" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="410" y="90" font-size="11" font-weight="bold" fill="#92400e">3. Write Rows</text>
        <text x="410" y="110" font-size="9" fill="#b45309">w.writerows(data)</text>
        <text x="410" y="130" font-size="9" fill="#b45309">Writes 2D list of</text>
        <text x="410" y="145" font-size="9" fill="#78350f">header + records</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<p><strong>Official CBSE Solution:</strong></p>
<ul class="list-disc pl-5 space-y-1 text-slate-800 text-xs">
  <li><strong>Statement-1:</strong> <code>csv</code> (Module name in lowercase: <code>import csv</code>)</li>
  <li><strong>Statement-2:</strong> <code>"Student.csv", "w"</code> (Opens file in write mode with <code>newline=''</code> to suppress extra blank lines)</li>
  <li><strong>Statement-3:</strong> <code>writer(fh)</code> (Creates a CSV writer object associated with file handle)</li>
  <li><strong>Statement-4:</strong> <code>[roll_no, name, Class, section]</code> (Packages the input variables into a single record list)</li>
  <li><strong>Statement-5:</strong> <code>writerows</code> (Writes all records in the 2D list <code>data</code> at once: <code>stuwriter.writerows(data)</code>)</li>
</ul>
</div>""",
        'explanation': 'In Python, the CSV module requires newline="" when opening files for writing on Windows to prevent extra carriage-return newline translation. For a 2D list (nested list), always use writerows(), whereas for writing a single row, use writerow().',
        'stepMarking': '[1 Mark] Correct import csv | [1 Mark] Correct file name and write mode string | [1 Mark] csv.writer(fh) method | [1 Mark] Correct record list structure [roll_no, name, Class, section] | [1 Mark] stuwriter.writerows(data)',
        'cautionTrap': 'Writing stuwriter.writerow(data) instead of writerows(data) for a 2D list will write string representations rather than individual rows. Omitting newline="" in open() will insert blank lines between every record on Windows!',
        'topperTip': 'Always remember: writerow() is for a 1D list (single row), while writerows() is for a 2D list of rows.'
    },
    {
        'id': 'cs-fh-qb-q2',
        'marks': 5,
        'type': 'Binary File Program',
        'paper': 'CBSE Competency Bank (Official)',
        'prob': '🔥 Direct Question from Official CBSE Competency Bank',
        'stem': """Amritya Seth is a programmer, who has recently been given a task to write a python code to perform binary file operations with two user-defined functions:<br>
(a) <code>AddStudents()</code>: to create a binary file called <code>STUDENT.DAT</code> containing student information - roll number, name and marks (out of 100) of each student until user wants to stop.<br>
(b) <code>GetStudents()</code>: to read <code>STUDENT.DAT</code> and display the roll number, name and marks of only those students whose percentage/marks is greater than or equal to 75%. Also display the total count of such qualifying students.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="175" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="13" font-weight="bold" fill="#0f172a">Binary File (STUDENT.DAT) Serialization Pipeline</text>
        <rect x="35" y="65" width="145" height="105" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="45" y="90" font-size="11" font-weight="bold" fill="#92400e">pickle.dump(rec, f)</text>
        <text x="45" y="110" font-size="9" fill="#b45309">• Mode: 'wb' or 'ab'</text>
        <text x="45" y="125" font-size="9" fill="#b45309">• Serializes Python obj</text>
        <text x="45" y="140" font-size="9" fill="#78350f">• Converts to byte stream</text>
        
        <path d="M 190 115 L 230 115" stroke="#475569" stroke-width="2"/>
        
        <rect x="240" y="65" width="110" height="105" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
        <text x="250" y="95" font-size="10" font-weight="bold" fill="#0f172a">STUDENT.DAT</text>
        <text x="250" y="115" font-size="8" fill="#475569">[1, 'Amit', 88]</text>
        <text x="250" y="130" font-size="8" fill="#475569">[2, 'Neha', 72]</text>
        <text x="250" y="145" font-size="8" fill="#475569">[3, 'Ravi', 94]</text>
        
        <path d="M 360 115 L 400 115" stroke="#475569" stroke-width="2"/>
        
        <rect x="410" y="65" width="115" height="105" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <text x="420" y="90" font-size="11" font-weight="bold" fill="#065f46">pickle.load(f)</text>
        <text x="420" y="110" font-size="9" fill="#047857">• Mode: 'rb'</text>
        <text x="420" y="125" font-size="9" fill="#047857">• while True loop</text>
        <text x="420" y="140" font-size="9" fill="#064e3b">• except EOFError</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
import pickle

def AddStudents():
    with open("STUDENT.DAT", "ab") as f:
        while True:
            rno = int(input("Enter Roll No: "))
            name = input("Enter Name: ")
            marks = float(input("Enter Marks: "))
            student = [rno, name, marks]
            pickle.dump(student, f)
            ans = input("Add more records? (Y/N): ").upper()
            if ans == 'N':
                break

def GetStudents():
    count = 0
    try:
        with open("STUDENT.DAT", "rb") as f:
            print(f"{'Roll No':<10}{'Name':<20}{'Marks':<10}")
            print("-" * 40)
            while True:
                student = pickle.load(f)
                if student[2] >= 75:
                    print(f"{student[0]:<10}{student[1]:<20}{student[2]:<10}")
                    count += 1
    except FileNotFoundError:
        print("Error: STUDENT.DAT not found.")
    except EOFError:
        pass # End of binary file reached gracefully
    print(f"Total students scoring >= 75%: {count}")
</pre>
</div>""",
        'explanation': 'Binary files store serialized Python byte streams. Reading binary files in Python requires an infinite while True loop with pickle.load(f), enclosed in a try-except block catching EOFError, which is naturally raised when the file pointer hits end-of-file.',
        'stepMarking': '[1 Mark] Correct import pickle & opening in "ab" mode | [1.5 Marks] AddStudents() loop with input & pickle.dump() | [1 Mark] Opening in "rb" mode with try...except EOFError | [1 Mark] Filtering student[2] >= 75 and displaying formatted record | [0.5 Mark] Accurate count calculation and display',
        'cautionTrap': 'Do NOT check for empty string or read() on a binary file handle when unpickling. You MUST catch EOFError! Using "w" instead of "ab" will wipe previous records.',
        'topperTip': 'Use context managers (with open(...) as f:) so the file is automatically closed even if an EOFError or exception occurs.'
    },
    {
        'id': 'cs-fh-sqp24-q29',
        'marks': 3,
        'type': 'Text File Search',
        'paper': 'CBSE 2024-25 SQP (Official)',
        'prob': '🔥 Official Question from 2024-25 Sample Question Paper',
        'stem': """Write a Python function <code>display_cmail()</code> that reads content from a text file named <code>"emails.txt"</code> and displays all words that contain the substring <code>"@cmail"</code>.<br><br>
<strong>Example Content of 'emails.txt':</strong><br>
<pre class="bg-slate-100 p-2 rounded text-xs font-mono">
Contact admin@cmail.com or support@gmail.com for help.
Sales team is reached at info@cmail.org or direct queries.
</pre>
<strong>Expected Output:</strong><br>
<pre class="bg-slate-900 text-emerald-400 p-2 rounded text-xs font-mono">
admin@cmail.com
info@cmail.org
</pre>""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">Text File Tokenization: f.read().split() Pattern</text>
        <rect x="35" y="60" width="135" height="85" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1"/>
        <text x="45" y="80" font-size="10" font-weight="bold" fill="#312e81">1. Read Stream</text>
        <text x="45" y="98" font-size="9" fill="#3730a3">data = f.read()</text>
        <text x="45" y="115" font-size="9" fill="#4338ca">Full string buffer</text>
        
        <path d="M 180 100 L 210 100" stroke="#4338ca" stroke-width="2"/>
        
        <rect x="220" y="60" width="140" height="85" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="230" y="80" font-size="10" font-weight="bold" fill="#92400e">2. Tokenize Words</text>
        <text x="230" y="98" font-size="9" fill="#b45309">words = data.split()</text>
        <text x="230" y="115" font-size="9" fill="#78350f">Splits by whitespace</text>
        
        <path d="M 370 100 L 400 100" stroke="#d97706" stroke-width="2"/>
        
        <rect x="410" y="60" width="115" height="85" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1"/>
        <text x="420" y="80" font-size="10" font-weight="bold" fill="#065f46">3. Substring Filter</text>
        <text x="420" y="98" font-size="9" fill="#047857">if "@cmail" in w:</text>
        <text x="420" y="115" font-size="9" fill="#064e3b">print(w)</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
def display_cmail():
    try:
        with open("emails.txt", "r") as f:
            content = f.read()
            words = content.split()
            for word in words:
                if "@cmail" in word:
                    print(word)
    except FileNotFoundError:
        print("File emails.txt not found.")
</pre>
</div>""",
        'explanation': 'f.read() reads the entire text file as a single string. Applying .split() tokenizes the string by any whitespace (spaces, tabs, newlines) into individual words. We then check membership using the "in" operator: if "@cmail" in word.',
        'stepMarking': '[1 Mark] Opening file in read mode with context manager / close | [1 Mark] Reading and splitting text into words using split() | [1 Mark] Checking substring condition and displaying matching words',
        'cautionTrap': 'Do NOT use readline() without a loop or readlines() without splitting each line, because readlines() returns lines containing multiple words, and checking "@cmail" in line would print the entire sentence rather than just the email word!',
        'topperTip': 'f.read().split() is the most robust, 1-line Python idiom for extracting all words from a file.'
    },
    {
        'id': 'cs-fh-sqp24-q33',
        'marks': 4,
        'type': 'CSV File Case Study',
        'paper': 'CBSE 2024-25 SQP (Official)',
        'prob': '🔥 Official Question from 2024-25 Sample Question Paper',
        'stem': """A CSV file named <code>"Happiness.csv"</code> contains survey data with columns: <code>[Country, HappinessRank, HappinessScore, GDP]</code>.<br>
Write a Python program with two functions:<br>
(a) <code>AddRecord()</code>: To accept country details from the user and append them as a new row to <code>"Happiness.csv"</code>.<br>
(b) <code>TopCountries()</code>: To read <code>"Happiness.csv"</code> and display the Country name and HappinessScore of all countries having HappinessScore &gt;= 7.5. Also display the total count of such countries.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">CSV Header Skip Pattern: next(reader)</text>
        <rect x="35" y="65" width="140" height="80" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="45" y="85" font-size="10" font-weight="bold" fill="#92400e">Row 0 (Header)</text>
        <text x="45" y="105" font-size="9" fill="#b45309">Country, Rank, Score</text>
        <text x="45" y="125" font-size="9" font-weight="bold" fill="#dc2626">next(reader) skips</text>
        
        <path d="M 185 105 L 215 105" stroke="#d97706" stroke-width="2"/>
        
        <rect x="225" y="65" width="150" height="80" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1"/>
        <text x="235" y="85" font-size="10" font-weight="bold" fill="#065f46">Rows 1..N (Data)</text>
        <text x="235" y="105" font-size="9" fill="#047857">['Finland', 1, 7.84, ...]</text>
        <text x="235" y="125" font-size="9" fill="#064e3b">float(row[2]) >= 7.5</text>
        
        <path d="M 385 105 L 415 105" stroke="#059669" stroke-width="2"/>
        
        <rect x="425" y="65" width="100" height="80" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1"/>
        <text x="435" y="85" font-size="10" font-weight="bold" fill="#312e81">Output</text>
        <text x="435" y="105" font-size="9" fill="#3730a3">Print & count</text>
        <text x="435" y="125" font-size="9" fill="#1e1b4b">qualifying rows</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
import csv

def AddRecord():
    with open("Happiness.csv", "a", newline="") as f:
        writer = csv.writer(f)
        country = input("Enter Country: ")
        rank = int(input("Enter Happiness Rank: "))
        score = float(input("Enter Happiness Score: "))
        gdp = float(input("Enter GDP: "))
        writer.writerow([country, rank, score, gdp])
        print("Record added successfully.")

def TopCountries():
    count = 0
    try:
        with open("Happiness.csv", "r") as f:
            reader = csv.reader(f)
            header = next(reader, None) # Skip header row safely
            print(f"{'Country':<20}{'Happiness Score':<15}")
            print("-" * 35)
            for row in reader:
                if row:
                    score = float(row[2])
                    if score >= 7.5:
                        print(f"{row[0]:<20}{score:<15}")
                        count += 1
            print(f"Total countries with score >= 7.5: {count}")
    except FileNotFoundError:
        print("Error: Happiness.csv not found.")
</pre>
</div>""",
        'explanation': 'When opening CSV in append mode ("a"), always use newline="" to avoid platform-specific extra blank lines. In TopCountries(), next(reader, None) safely skips the header row so float(row[2]) does not fail with ValueError on the header string "HappinessScore".',
        'stepMarking': '[1 Mark] Correct AddRecord() implementation with mode="a" and writerow() | [1 Mark] Opening file in read mode with csv.reader | [1 Mark] Skipping header and converting score to float | [1 Mark] Correct condition, display, and total count',
        'cautionTrap': 'Forgetting float(row[2]) and doing row[2] >= 7.5 will perform lexicographical string comparison! In string comparison, "6.9" > "10.0". Always convert numeric fields from CSV strings to int/float.',
        'topperTip': 'Always use next(reader, None) to skip headers before entering numeric validation loops.'
    },
    {
        'id': 'cs-fh-pq2-q34',
        'marks': 5,
        'type': 'Core Theory & Code',
        'paper': 'CBSE 2023-24 Practice Paper (Official)',
        'prob': '🔥 Official Question from 2023-24 Practice Paper',
        'stem': """(i) Mention any two differences between <code>seek()</code> and <code>tell()</code> methods in Python file handling.<br>
(ii) Consider the file <code>"STORY.TXT"</code> containing the text:<br>
<code>"Learning Python is exciting and rewarding."</code><br>
What will be the output of the following code snippet?
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
f = open("STORY.TXT", "r")
print(f.read(8))
print(f.tell())
f.seek(9)
print(f.read(6))
print(f.tell())
f.seek(0, 0)
print(f.read(5))
f.close()
</pre>""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">File Pointer Manipulation: tell() vs seek(offset, whence)</text>
        <line x1="40" y1="90" x2="500" y2="90" stroke="#0f172a" stroke-width="2"/>
        <circle cx="40" cy="90" r="5" fill="#4f46e5"/>
        <text x="30" y="110" font-size="9" font-weight="bold" fill="#4f46e5">pos: 0</text>
        <circle cx="160" cy="90" r="5" fill="#059669"/>
        <text x="150" y="110" font-size="9" font-weight="bold" fill="#059669">pos: 8</text>
        <circle cx="180" cy="90" r="5" fill="#d97706"/>
        <text x="170" y="110" font-size="9" font-weight="bold" fill="#d97706">pos: 9</text>
        <circle cx="280" cy="90" r="5" fill="#dc2626"/>
        <text x="270" y="110" font-size="9" font-weight="bold" fill="#dc2626">pos: 15</text>
        
        <path d="M 40 80 Q 100 60 160 80" fill="none" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="2"/>
        <text x="80" y="65" font-size="8" fill="#4f46e5">read(8) -> "Learning"</text>
        
        <path d="M 160 80 Q 170 70 180 80" fill="none" stroke="#d97706" stroke-width="1.5"/>
        <text x="165" y="60" font-size="8" fill="#d97706">seek(9)</text>
        
        <path d="M 180 80 Q 230 60 280 80" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="2"/>
        <text x="205" y="65" font-size="8" fill="#059669">read(6) -> "Python"</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<p><strong>(i) Differences between seek() and tell():</strong></p>
<table class="w-full text-xs border border-slate-300">
  <tr class="bg-slate-200"><th class="p-1.5 border">Parameter</th><th class="p-1.5 border">tell()</th><th class="p-1.5 border">seek(offset, whence)</th></tr>
  <tr><td class="p-1.5 border font-semibold">Purpose</td><td class="p-1.5 border">Returns current position of file pointer (integer byte offset).</td><td class="p-1.5 border">Repositions file pointer to a specific offset.</td></tr>
  <tr><td class="p-1.5 border font-semibold">Arguments</td><td class="p-1.5 border">Takes no parameters: <code>f.tell()</code></td><td class="p-1.5 border">Takes 1 or 2 arguments: <code>offset</code>, <code>whence</code> (0=start, 1=current, 2=end).</td></tr>
  <tr><td class="p-1.5 border font-semibold">Return Value</td><td class="p-1.5 border">Returns integer value of current byte location.</td><td class="p-1.5 border">Returns new byte position (or None in older versions).</td></tr>
</table>

<p><strong>(ii) Trace & Output:</strong></p>
<ol class="list-decimal pl-5 space-y-1 text-slate-800 text-xs">
  <li><code>f.read(8)</code> reads first 8 bytes: <code>"Learning"</code></li>
  <li><code>f.tell()</code> prints pointer location: <code>8</code></li>
  <li><code>f.seek(9)</code> skips index 8 (space) and moves pointer to index 9 (start of <code>"Python"</code>)</li>
  <li><code>f.read(6)</code> reads 6 characters: <code>"Python"</code></li>
  <li><code>f.tell()</code> prints pointer location: <code>15</code> (9 + 6 = 15)</li>
  <li><code>f.seek(0, 0)</code> resets pointer to beginning of file</li>
  <li><code>f.read(5)</code> reads first 5 characters: <code>"Learn"</code></li>
</ol>
<pre class="bg-slate-900 text-emerald-400 p-2 rounded text-xs font-mono">
Learning
8
Python
15
Learn
</pre>
</div>""",
        'explanation': 'seek(offset, whence) moves the cursor: whence=0 is absolute from start; whence=1 is relative to current position (in binary mode); whence=2 is relative to end of file (in binary mode). tell() never changes position; it only inspects the cursor.',
        'stepMarking': '[2 Marks] Two clear, accurate differences between seek() and tell() | [3 Marks] Exact 5-line output for the code snippet (0.5 mark for each print and accurate pointer values)',
        'cautionTrap': 'In Python 3 text mode ("r"), seek() with non-zero offset is only allowed with whence=0 (from beginning of file). Using seek(5, 1) or seek(-5, 2) in text mode raises UnsupportedOperation!',
        'topperTip': 'Remember: tell() reports where you ARE; seek() changes where you GO.'
    }
]

# =========================================================================
# 2. STACK (Data Structures)
# =========================================================================
NEW_QUESTIONS['Stack'] = [
    {
        'id': 'cs-ds-sqp24-q30',
        'marks': 3,
        'type': 'Stack Implementation',
        'paper': 'CBSE 2024-25 SQP (Official)',
        'prob': '🔥 Official Question from 2024-25 Sample Question Paper',
        'stem': """A list named <code>BooksStack</code> is used to implement a Stack in Python to store records of books where each record is a dictionary with structure: <code>{"BookId": ..., "BookName": ..., "Price": ...}</code>.<br><br>
Write user-defined functions in Python to perform the following operations:<br>
(i) <code>PushBook(BooksStack, book)</code>: To push a book dictionary onto <code>BooksStack</code> only if its <code>Price</code> is greater than 300.<br>
(ii) <code>PopBook(BooksStack)</code>: To pop and display the <code>BookName</code> and <code>Price</code> of the book from <code>BooksStack</code>. If the stack is empty, display <code>"Stack Underflow"</code>.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">Stack Push & Pop (LIFO) with Conditional Price > 300</text>
        <rect x="50" y="60" width="130" height="100" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="60" y="80" font-size="10" font-weight="bold" fill="#312e81">Push Condition:</text>
        <text x="60" y="100" font-size="9" fill="#3730a3">if book['Price'] > 300:</text>
        <text x="60" y="118" font-size="9" fill="#4338ca">BooksStack.append(book)</text>
        <text x="60" y="140" font-size="9" fill="#1e1b4b">Appends at TOP (end)</text>
        
        <path d="M 190 110 L 230 110" stroke="#4f46e5" stroke-width="2"/>
        
        <rect x="240" y="55" width="110" height="110" rx="4" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
        <text x="250" y="75" font-size="10" font-weight="bold" fill="#0f172a">BooksStack</text>
        <rect x="245" y="85" width="100" height="20" rx="3" fill="#ecfdf5" stroke="#059669"/>
        <text x="250" y="98" font-size="8" fill="#065f46">Top: B02 · 450</text>
        <rect x="245" y="110" width="100" height="20" rx="3" fill="#e2e8f0" stroke="#64748b"/>
        <text x="250" y="123" font-size="8" fill="#334155">Base: B01 · 350</text>
        
        <path d="M 360 110 L 400 110" stroke="#dc2626" stroke-width="2"/>
        
        <rect x="410" y="60" width="120" height="100" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="420" y="80" font-size="10" font-weight="bold" fill="#991b1b">Pop with Underflow:</text>
        <text x="420" y="100" font-size="9" fill="#b91c1c">if not BooksStack:</text>
        <text x="420" y="118" font-size="9" fill="#b91c1c">print("Underflow")</text>
        <text x="420" y="136" font-size="9" fill="#7f1d1d">else: b = s.pop()</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
def PushBook(BooksStack, book):
    if book.get("Price", 0) > 300:
        BooksStack.append(book)
        print(f"Book '{book['BookName']}' pushed successfully.")
    else:
        print(f"Book '{book['BookName']}' has price <= 300. Not pushed.")

def PopBook(BooksStack):
    if len(BooksStack) == 0:  # or: if not BooksStack
        print("Stack Underflow")
    else:
        removed_book = BooksStack.pop()
        print(f"Popped Book: {removed_book['BookName']} | Price: Rs.{removed_book['Price']}")
</pre>
</div>""",
        'explanation': 'In Python, a List natively models a Stack where append() represents Push (O(1) at the end/top) and pop() without arguments represents Pop (O(1) from the top). An Underflow test must strictly check if the stack is empty (len == 0) before invoking pop().',
        'stepMarking': '[1.5 Marks] PushBook() with conditional check book["Price"] > 300 and append() | [1.5 Marks] PopBook() with underflow check (len == 0 / if not BooksStack) and pop() displaying BookName and Price',
        'cautionTrap': 'Calling pop(0) instead of pop() turns your LIFO Stack into a FIFO Queue! Always call pop() with no index to pop from the top of the stack.',
        'topperTip': 'Always test underflow FIRST before attempting pop(), otherwise Python raises IndexError: pop from empty list.'
    },
    {
        'id': 'cs-ds-pq2-q30',
        'marks': 3,
        'type': 'Dictionary to Stack Transfer',
        'paper': 'CBSE 2023-24 Practice Paper (Official)',
        'prob': '🔥 Official Question from 2023-24 Practice Paper',
        'stem': """Given a dictionary <code>Stu_dict</code> containing marks of students for three subjects formatted as:<br>
<code>Stu_dict = {"Amit": [85, 90, 78], "Sneha": [65, 70, 60], "Rohan": [88, 92, 95], "Pooja": [72, 74, 68]}</code><br><br>
Write a Python program with two user-defined functions:<br>
(i) <code>Push_avg(Stu_dict, Stack)</code>: To calculate average marks of each student and push the student's name into <code>Stack</code> only if their average marks &gt;= 80.<br>
(ii) <code>Pop_all(Stack)</code>: To pop and display all student names from <code>Stack</code> until it becomes empty. If initially empty, print <code>"Empty Stack"</code>.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">Dictionary Traversal & Stack Push/Pop Workflow</text>
        <rect x="35" y="65" width="140" height="85" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1"/>
        <text x="45" y="85" font-size="10" font-weight="bold" fill="#312e81">Stu_dict</text>
        <text x="45" y="102" font-size="9" fill="#3730a3">Amit: avg 84.3 >= 80</text>
        <text x="45" y="117" font-size="9" fill="#3730a3">Sneha: avg 65 < 80</text>
        <text x="45" y="132" font-size="9" fill="#3730a3">Rohan: avg 91.6 >= 80</text>
        
        <path d="M 185 105 L 215 105" stroke="#4338ca" stroke-width="2"/>
        
        <rect x="225" y="65" width="130" height="85" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1"/>
        <text x="235" y="85" font-size="10" font-weight="bold" fill="#065f46">Stack State</text>
        <text x="235" y="105" font-size="9" fill="#047857">['Amit', 'Rohan']</text>
        <text x="235" y="125" font-size="9" fill="#064e3b">TOP = 'Rohan'</text>
        
        <path d="M 365 105 L 395 105" stroke="#059669" stroke-width="2"/>
        
        <rect x="405" y="65" width="125" height="85" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="415" y="85" font-size="10" font-weight="bold" fill="#92400e">Pop_all Output</text>
        <text x="415" y="105" font-size="9" fill="#b45309">1. Rohan (popped)</text>
        <text x="415" y="125" font-size="9" fill="#b45309">2. Amit (popped)</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
def Push_avg(Stu_dict, Stack):
    for name, marks in Stu_dict.items():
        avg = sum(marks) / len(marks)
        if avg >= 80:
            Stack.append(name)

def Pop_all(Stack):
    if not Stack:
        print("Empty Stack")
        return
    print("Popping elements in LIFO order:")
    while Stack:
        print(Stack.pop())
</pre>
</div>""",
        'explanation': 'sum(marks)/len(marks) computes the average score. In Pop_all(), the while Stack: loop repeatedly pops from the top until the stack becomes empty, accurately following the Last-In-First-Out rule.',
        'stepMarking': '[1.5 Marks] Push_avg() looping over items(), calculating average, and appending | [1.5 Marks] Pop_all() checking empty condition, while loop with pop() until empty',
        'cautionTrap': 'Do NOT forget to return after printing "Empty Stack" in Pop_all(), otherwise the subsequent loop might fail or execute unpredictably.',
        'topperTip': 'Using while Stack: print(Stack.pop()) is the cleanest, most Pythonic way to drain a stack in CBSE exams.'
    }
]

# =========================================================================
# 3. RELATIONAL DATABASES AND SQL
# =========================================================================
NEW_QUESTIONS['Relational Databases and SQL'] = [
    {
        'id': 'cs-sql-sqp24-q32',
        'marks': 4,
        'type': 'Advanced SQL Queries',
        'paper': 'CBSE 2024-25 SQP (Official)',
        'prob': '🔥 Official 4-Mark Question from 2024-25 Sample Question Paper',
        'stem': """Consider the table <code>ORDERS</code> as given below:<br>
<table class="w-full text-xs border border-slate-300 my-2">
  <tr class="bg-slate-200">
    <th class="p-1 border">OrderID</th><th class="p-1 border">CustName</th><th class="p-1 border">Item</th>
    <th class="p-1 border">Qty</th><th class="p-1 border">Price</th><th class="p-1 border">City</th>
  </tr>
  <tr><td class="p-1 border">101</td><td class="p-1 border">Aman</td><td class="p-1 border">Laptop</td><td class="p-1 border">1</td><td class="p-1 border">45000</td><td class="p-1 border">Delhi</td></tr>
  <tr><td class="p-1 border">102</td><td class="p-1 border">Ravi</td><td class="p-1 border">Mouse</td><td class="p-1 border">4</td><td class="p-1 border">500</td><td class="p-1 border">Mumbai</td></tr>
  <tr><td class="p-1 border">103</td><td class="p-1 border">Pooja</td><td class="p-1 border">Keyboard</td><td class="p-1 border">2</td><td class="p-1 border">1200</td><td class="p-1 border">Delhi</td></tr>
  <tr><td class="p-1 border">104</td><td class="p-1 border">Suman</td><td class="p-1 border">Monitor</td><td class="p-1 border">1</td><td class="p-1 border">9000</td><td class="p-1 border">Chennai</td></tr>
  <tr><td class="p-1 border">105</td><td class="p-1 border">Aman</td><td class="p-1 border">Mouse</td><td class="p-1 border">2</td><td class="p-1 border">500</td><td class="p-1 border">Delhi</td></tr>
</table>
<br>Write SQL queries for the following:<br>
(i) Display the total quantity (Qty) of items ordered for each City.<br>
(ii) Display CustName, Item, and TotalAmount (calculated as Qty * Price) for all orders where TotalAmount &gt; 2000.<br>
(iii) Display the details of all orders sorted by City in ascending order, and within each city, by Price in descending order.<br>
(iv) Display the average price of items ordered from Delhi.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">SQL GROUP BY & ORDER BY Multi-Key Processing</text>
        <rect x="35" y="65" width="145" height="85" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1"/>
        <text x="45" y="85" font-size="10" font-weight="bold" fill="#312e81">GROUP BY City</text>
        <text x="45" y="105" font-size="9" fill="#3730a3">Delhi -> [1, 2, 2] = 5</text>
        <text x="45" y="125" font-size="9" fill="#3730a3">Mumbai -> 4 | Chennai -> 1</text>
        
        <path d="M 190 105 L 225 105" stroke="#4338ca" stroke-width="2"/>
        
        <rect x="235" y="65" width="140" height="85" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="245" y="85" font-size="10" font-weight="bold" fill="#92400e">Calculated Column</text>
        <text x="245" y="105" font-size="9" fill="#b45309">Qty * Price AS TotalAmt</text>
        <text x="245" y="125" font-size="9" fill="#78350f">WHERE Qty * Price > 2000</text>
        
        <path d="M 385 105 L 420 105" stroke="#d97706" stroke-width="2"/>
        
        <rect x="430" y="65" width="100" height="85" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1"/>
        <text x="440" y="85" font-size="10" font-weight="bold" fill="#065f46">Dual Sort</text>
        <text x="440" y="105" font-size="9" fill="#047857">City ASC,</text>
        <text x="440" y="125" font-size="9" fill="#064e3b">Price DESC</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
-- (i) Total quantity for each City
SELECT City, SUM(Qty) AS TotalQuantity
FROM ORDERS
GROUP BY City;

-- (ii) TotalAmount > 2000
SELECT CustName, Item, (Qty * Price) AS TotalAmount
FROM ORDERS
WHERE (Qty * Price) > 2000;

-- (iii) Multi-column sorting
SELECT *
FROM ORDERS
ORDER BY City ASC, Price DESC;

-- (iv) Average price of items from Delhi
SELECT AVG(Price) AS AvgPrice
FROM ORDERS
WHERE City = 'Delhi';
</pre>
</div>""",
        'explanation': 'GROUP BY groups identical city names into single summary rows for aggregate calculation with SUM(Qty). In WHERE clauses, column aliases (like TotalAmount) cannot typically be used in standard SQL; repeat the arithmetic expression (Qty * Price). For sorting by multiple keys, list them separated by comma: City ASC, Price DESC.',
        'stepMarking': '[1 Mark] Correct SELECT City, SUM(Qty) FROM ORDERS GROUP BY City | [1 Mark] Correct SELECT CustName, Item, Qty*Price WHERE (Qty*Price) > 2000 | [1 Mark] Correct ORDER BY City ASC, Price DESC | [1 Mark] Correct SELECT AVG(Price) WHERE City = "Delhi"',
        'cautionTrap': 'Do NOT use HAVING instead of WHERE when filtering without aggregate functions. HAVING is exclusively for filtering groups created by GROUP BY!',
        'topperTip': 'Always remember: WHERE filters individual tuples BEFORE grouping; HAVING filters aggregated groups AFTER grouping.'
    },
    {
        'id': 'cs-sql-sqp24-q27',
        'marks': 2,
        'type': 'Database Concepts (DDL vs DML)',
        'paper': 'CBSE 2024-25 SQP (Official)',
        'prob': '🔥 Official Question from 2024-25 Sample Question Paper',
        'stem': """Differentiate between Data Definition Language (DDL) and Data Manipulation Language (DML) commands in SQL. Give two examples of commands for each category.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">SQL Command Classification: Schema vs Tuples</text>
        <rect x="40" y="65" width="210" height="90" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="50" y="85" font-size="11" font-weight="bold" fill="#312e81">1. DDL (Data Definition)</text>
        <text x="50" y="103" font-size="9" fill="#3730a3">• Modifies TABLE STRUCTURE (Schema)</text>
        <text x="50" y="118" font-size="9" fill="#3730a3">• Auto-committed (permanent)</text>
        <text x="50" y="138" font-size="9" font-weight="bold" fill="#1e1b4b">CREATE, ALTER, DROP, TRUNCATE</text>
        
        <rect x="270" y="65" width="210" height="90" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <text x="280" y="85" font-size="11" font-weight="bold" fill="#065f46">2. DML (Data Manipulation)</text>
        <text x="280" y="103" font-size="9" fill="#047857">• Modifies DATA / TUPLES (Content)</text>
        <text x="280" y="118" font-size="9" fill="#047857">• Can be rolled back (transactional)</text>
        <text x="280" y="138" font-size="9" font-weight="bold" fill="#064e3b">INSERT, UPDATE, DELETE, SELECT</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<table class="w-full text-xs border border-slate-300">
  <tr class="bg-slate-200">
    <th class="p-2 border">Parameter</th><th class="p-2 border">DDL (Data Definition Language)</th><th class="p-2 border">DML (Data Manipulation Language)</th>
  </tr>
  <tr>
    <td class="p-2 border font-semibold">Scope of Action</td>
    <td class="p-2 border">Operates on the <strong>database schema/structure</strong> (creating, altering, or dropping tables and constraints).</td>
    <td class="p-2 border">Operates on the <strong>actual data/tuples</strong> inside the tables (inserting, modifying, deleting, or retrieving records).</td>
  </tr>
  <tr>
    <td class="p-2 border font-semibold">Examples</td>
    <td class="p-2 border"><code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code></td>
    <td class="p-2 border"><code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>, <code>SELECT</code></td>
  </tr>
</table>
</div>""",
        'explanation': 'DDL commands define or restructure the relations itself; changes are permanent (auto-commit). DML commands manipulate the instance data stored within the schema.',
        'stepMarking': '[1 Mark] Clear conceptual distinction between schema structure vs table contents | [1 Mark] 2 valid examples for each category (DDL: CREATE/ALTER, DML: INSERT/UPDATE)',
        'cautionTrap': 'Do NOT confuse ALTER with UPDATE! ALTER is DDL (changes table columns/data types); UPDATE is DML (changes data values within rows).',
        'topperTip': 'Remember: ALTER changes structure; UPDATE changes content.'
    }
]

# =========================================================================
# 4. COMPUTER NETWORKS
# =========================================================================
NEW_QUESTIONS['Computer Networks'] = [
    {
        'id': 'cs-net-sqp24-q37',
        'marks': 5,
        'type': 'Campus Case Study (Full 5 Marks)',
        'paper': 'CBSE 2024-25 SQP (Official)',
        'prob': '🔥 Guaranteed 5-Mark Question from 2024-25 Sample Question Paper',
        'stem': """Event Horizon Enterprises is an event planning organization. It is planning to set up a new network infrastructure for its campus consisting of 4 blocks: <strong>Design Block (D)</strong>, <strong>Planning Block (P)</strong>, <strong>Finance Block (F)</strong>, and <strong>Admin Block (A)</strong>.<br><br>
<strong>Distance between various blocks:</strong><br>
<table class="w-64 text-xs border border-slate-300 my-1">
  <tr class="bg-slate-200"><th class="p-1 border">Block Pair</th><th class="p-1 border">Distance</th></tr>
  <tr><td class="p-1 border">D to P</td><td class="p-1 border">60 m</td></tr>
  <tr><td class="p-1 border">P to F</td><td class="p-1 border">40 m</td></tr>
  <tr><td class="p-1 border">F to A</td><td class="p-1 border">120 m</td></tr>
  <tr><td class="p-1 border">A to D</td><td class="p-1 border">150 m</td></tr>
  <tr><td class="p-1 border">P to A</td><td class="p-1 border">110 m</td></tr>
  <tr><td class="p-1 border">D to F</td><td class="p-1 border">80 m</td></tr>
</table>
<br>
<strong>Number of Computers installed in each block:</strong><br>
<table class="w-64 text-xs border border-slate-300 my-1">
  <tr class="bg-slate-200"><th class="p-1 border">Block</th><th class="p-1 border">Number of Computers</th></tr>
  <tr><td class="p-1 border">Design Block (D)</td><td class="p-1 border">40</td></tr>
  <tr><td class="p-1 border">Planning Block (P)</td><td class="p-1 border">135</td></tr>
  <tr><td class="p-1 border">Finance Block (F)</td><td class="p-1 border">25</td></tr>
  <tr><td class="p-1 border">Admin Block (A)</td><td class="p-1 border">30</td></tr>
</table>
<br>
Answer the following questions based on CBSE networking rubrics:<br>
(i) Suggest the most suitable block to install the main Server with justification.<br>
(ii) Suggest the best cable layout (topology) to connect all four blocks.<br>
(iii) Where should a <strong>Repeater</strong> and <strong>Hub/Switch</strong> be placed? Justify.<br>
(iv) Which transmission medium is recommended for the fastest, most secure wired inter-block connectivity?<br>
(v) The organization plans to conduct online multi-party interactive live video conferences with overseas clients. Suggest an appropriate protocol and communication software/technology for this.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="210" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="13" font-weight="bold" fill="#0f172a">Optimal Star Topology Network Layout (Server in Block P)</text>
        
        <!-- Block P (Server) -->
        <rect x="210" y="60" width="120" height="70" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
        <text x="220" y="80" font-size="11" font-weight="bold" fill="#065f46">Planning (P)</text>
        <text x="220" y="98" font-size="9" fill="#047857">135 Computers</text>
        <text x="220" y="115" font-size="10" font-weight="bold" fill="#dc2626">★ MAIN SERVER</text>
        
        <!-- Block D -->
        <rect x="35" y="70" width="105" height="55" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="90" font-size="10" font-weight="bold" fill="#312e81">Design (D)</text>
        <text x="45" y="108" font-size="8" fill="#3730a3">40 Computers</text>
        
        <!-- Block F -->
        <rect x="400" y="70" width="105" height="55" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="410" y="90" font-size="10" font-weight="bold" fill="#92400e">Finance (F)</text>
        <text x="410" y="108" font-size="8" fill="#b45309">25 Computers</text>
        
        <!-- Block A -->
        <rect x="210" y="165" width="120" height="50" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
        <text x="220" y="185" font-size="10" font-weight="bold" fill="#1e293b">Admin (A)</text>
        <text x="220" y="200" font-size="8" fill="#475569">30 Computers</text>
        
        <!-- Star Lines -->
        <line x1="140" y1="95" x2="210" y2="95" stroke="#059669" stroke-width="2"/>
        <text x="160" y="90" font-size="8" fill="#059669">60m</text>
        
        <line x1="330" y1="95" x2="400" y2="95" stroke="#059669" stroke-width="2"/>
        <text x="350" y="90" font-size="8" fill="#059669">40m</text>
        
        <line x1="270" y1="130" x2="270" y2="165" stroke="#dc2626" stroke-width="2" stroke-dasharray="3"/>
        <text x="275" y="152" font-size="8" fill="#dc2626">110m [Repeater]</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<p><strong>Official CBSE Exam Solutions:</strong></p>
<ol class="list-decimal pl-5 space-y-2 text-slate-800 text-xs">
  <li><strong>Server Placement: Planning Block (P):</strong><br>
  <em>Justification:</em> According to the <strong>80/20 Rule</strong>, the server must be installed in the block containing the maximum number of computers (Block P has 135 computers). This drastically minimizes overall network traffic and optimizes response time.</li>

  <li><strong>Cable Layout: Star Topology:</strong><br>
  All other blocks connect directly to Planning Block (P):<br>
  • P to D (60 m)<br>
  • P to F (40 m)<br>
  • P to A (110 m)<br>
  <em>Total cable length:</em> 60 + 40 + 110 = <strong>210 m</strong> (Highly economical and easy to troubleshoot).</li>

  <li><strong>Repeater & Hub/Switch Placement:</strong><br>
  • <strong>Repeater:</strong> Recommended on the cable link between <strong>Planning Block (P) and Admin Block (A)</strong> because the distance is 110 m (exceeds the standard 70-100 m signal degradation limit for Ethernet cables).<br>
  • <strong>Hub/Switch:</strong> Placed in <strong>EVERY block (D, P, F, and A)</strong> to connect multiple computers within each local subnet.</li>

  <li><strong>Recommended Medium:</strong><br>
  <strong>Optical Fiber Cable:</strong> Provides highest bandwidth, ultra-high transmission speeds, zero electromagnetic interference, and optimal data security across campus buildings.</li>

  <li><strong>Video Conferencing Protocol & Technology:</strong><br>
  • <strong>Protocol:</strong> <strong>VoIP (Voice over IP)</strong> or <strong>SIP (Session Initiation Protocol)</strong> / H.323.<br>
  • <strong>Technology:</strong> Zoom, Microsoft Teams, WebRTC, or Google Meet.</li>
</ol>
</div>""",
        'explanation': 'The 5-mark networking case study is an absolute fixture in CBSE Computer Science. Memorize: (1) 80-20 rule for server placement; (2) Hub/switch in EVERY block; (3) Repeater when distance > 70-100m; (4) Fiber optic for campus backbone.',
        'stepMarking': '[1 Mark] Block P with 80/20 rule justification | [1 Mark] Star layout with total cable calculation | [1 Mark] Repeater between P & A (>70-100m) + Switch in every block | [1 Mark] Optical Fiber cable recommendation with speed/security reason | [1 Mark] VoIP/SIP protocol recommendation',
        'cautionTrap': 'Saying "Install repeater in Block A" is incorrect! Repeaters are installed along the cable link between two blocks (P and A). And never say switch is only in the server block; EVERY block requires a switch!',
        'topperTip': 'Always calculate total cable length for your topology to prove it is the minimum-cost layout.'
    },
    {
        'id': 'cs-net-sqp24-q23',
        'marks': 2,
        'type': 'Networking Media Comparison',
        'paper': 'CBSE 2024-25 SQP (Official)',
        'prob': '🔥 Official Question from 2024-25 Sample Question Paper',
        'stem': """Give two examples of each of the following transmission media:<br>
(a) Guided Media<br>
(b) Unguided Media""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">Transmission Media: Bound (Wired) vs Unbound (Wireless)</text>
        <rect x="35" y="65" width="220" height="85" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1"/>
        <text x="45" y="85" font-size="10" font-weight="bold" fill="#312e81">Guided Media (Wired / Bound)</text>
        <text x="45" y="103" font-size="9" fill="#3730a3">1. Twisted Pair Cable (UTP / STP)</text>
        <text x="45" y="118" font-size="9" fill="#3730a3">2. Coaxial Cable (Thinnet / Thicknet)</text>
        <text x="45" y="133" font-size="9" font-weight="bold" fill="#1e1b4b">3. Optical Fiber Cable</text>
        
        <rect x="270" y="65" width="220" height="85" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="280" y="85" font-size="10" font-weight="bold" fill="#92400e">Unguided Media (Wireless / Unbound)</text>
        <text x="280" y="103" font-size="9" fill="#b45309">1. Radio Waves (Omnidirectional / Wi-Fi)</text>
        <text x="280" y="118" font-size="9" fill="#b45309">2. Microwaves (Line of Sight / Satellite)</text>
        <text x="280" y="133" font-size="9" font-weight="bold" fill="#78350f">3. Infrared (Short range / Remote controls)</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<p><strong>(a) Guided Media (Physical/Wired Transmission):</strong></p>
<ul class="list-disc pl-5 text-slate-800 text-xs">
  <li>Twisted Pair Cable (e.g. Ethernet Cat6)</li>
  <li>Coaxial Cable</li>
  <li>Optical Fiber Cable</li>
</ul>
<p><strong>(b) Unguided Media (Electromagnetic/Wireless Transmission):</strong></p>
<ul class="list-disc pl-5 text-slate-800 text-xs">
  <li>Radio Waves (e.g. Wi-Fi, Bluetooth)</li>
  <li>Microwaves (e.g. Satellite communications, Cellular networks)</li>
  <li>Infrared Waves (e.g. Television remotes)</li>
</ul>
</div>""",
        'explanation': 'Guided media (bound transmission) physical conductors confine the electromagnetic energy along a narrow path. Unguided media (unbound transmission) uses free space (air or vacuum) to transmit electromagnetic signals without physical conductors.',
        'stepMarking': '[1 Mark] Any two correct examples of Guided Media | [1 Mark] Any two correct examples of Unguided Media',
        'cautionTrap': 'Do NOT write "Wi-Fi" as guided media or "Copper wire" as unguided media! Keep cables in guided and waves in unguided.',
        'topperTip': 'Optical Fiber is Guided (uses glass core with total internal reflection); Satellite is Unguided (uses microwaves).'
    }
]

# =========================================================================
# 5. PYTHON FUNCTIONS (Functions & Core Python)
# =========================================================================
NEW_QUESTIONS['Python Functions'] = [
    {
        'id': 'cs-fn-sqp24-q22',
        'marks': 2,
        'type': 'Core Python Concept',
        'paper': 'CBSE 2024-25 SQP (Official)',
        'prob': '🔥 Official Question from 2024-25 Sample Question Paper',
        'stem': """How is a mutable object different from an immutable object in Python? Categorize the following data types into mutable and immutable:<br>
<code>(i) List &nbsp;&nbsp; (ii) Tuple &nbsp;&nbsp; (iii) Dictionary &nbsp;&nbsp; (iv) String</code>""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">Python Object Mutability & Memory Reference Architecture</text>
        <rect x="35" y="65" width="220" height="85" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <text x="45" y="85" font-size="11" font-weight="bold" fill="#065f46">Mutable (In-place update)</text>
        <text x="45" y="103" font-size="9" fill="#047857">• Value changes at SAME memory id</text>
        <text x="45" y="118" font-size="9" fill="#047857">• id(obj) remains constant</text>
        <text x="45" y="135" font-size="10" font-weight="bold" fill="#064e3b">Examples: List, Dictionary, Set</text>
        
        <rect x="270" y="65" width="220" height="85" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="280" y="85" font-size="11" font-weight="bold" fill="#991b1b">Immutable (New object binding)</text>
        <text x="280" y="103" font-size="9" fill="#b91c1c">• Value cannot change in-place</text>
        <text x="280" y="118" font-size="9" fill="#b91c1c">• Modifying creates NEW object with new id</text>
        <text x="280" y="135" font-size="10" font-weight="bold" fill="#7f1d1d">Examples: Tuple, String, Int, Float</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<p><strong>Difference:</strong></p>
<ul class="list-disc pl-5 space-y-1 text-slate-800 text-xs">
  <li><strong>Mutable Objects:</strong> Objects whose state or content can be changed in-place after creation without changing their memory address (<code>id</code>).</li>
  <li><strong>Immutable Objects:</strong> Objects whose state or content <em>cannot</em> be changed after creation. Any attempt to modify creates a new object with a different memory location.</li>
</ul>

<p><strong>Categorization:</strong></p>
<ul class="list-disc pl-5 text-slate-800 text-xs">
  <li><strong>Mutable Data Types:</strong> <code>List</code>, <code>Dictionary</code></li>
  <li><strong>Immutable Data Types:</strong> <code>Tuple</code>, <code>String</code></li>
</ul>
</div>""",
        'explanation': 'In Python, everything is an object. Lists and Dictionaries have methods like .append(), .pop(), and item assignment that mutate memory in place. Tuples and Strings have no in-place mutating methods.',
        'stepMarking': '[1 Mark] Clear conceptual definition of mutable vs immutable | [1 Mark] Correct classification (0.25 mark per item: List=Mutable, Tuple=Immutable, Dictionary=Mutable, String=Immutable)',
        'cautionTrap': 'Do NOT say "immutable variables cannot be reassigned". A variable can point to a new value (x = x + 1), but the underlying object in memory was never changed in-place!',
        'topperTip': 'Remember: Tuples, Strings, and Numbers are IMMUTABLE. Lists, Dicts, and Sets are MUTABLE.'
    },
    {
        'id': 'cs-fn-sqp24-q25',
        'marks': 2,
        'type': 'Random Module Output Simulation',
        'paper': 'CBSE 2024-25 SQP (Official)',
        'prob': '🔥 Official Question from 2024-25 Sample Question Paper',
        'stem': """Identify the correct output(s) of the following code. Also write the minimum and maximum possible values that can be assigned to the variable <code>Number</code>:
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono">
import random
Colors = ["RED", "GREEN", "BLUE", "YELLOW"]
Number = random.randint(1, 2)
for i in range(Number, 4):
    print(Colors[i], end="#")
</pre>
<br><strong>Options:</strong><br>
(i) GREEN#BLUE#YELLOW#<br>
(ii) RED#GREEN#BLUE#YELLOW#<br>
(iii) BLUE#YELLOW#<br>
(iv) BLUE#YELLOW""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">Random Simulation: randint(1, 2) & Slicing Range</text>
        <rect x="35" y="65" width="220" height="85" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <text x="45" y="85" font-size="11" font-weight="bold" fill="#065f46">Case 1: Number = 1</text>
        <text x="45" y="103" font-size="9" fill="#047857">range(1, 4) -> indices: 1, 2, 3</text>
        <text x="45" y="120" font-size="9" fill="#047857">Colors[1] = "GREEN"</text>
        <text x="45" y="135" font-size="10" font-weight="bold" fill="#064e3b">Output: GREEN#BLUE#YELLOW#</text>
        
        <rect x="270" y="65" width="220" height="85" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="280" y="85" font-size="11" font-weight="bold" fill="#312e81">Case 2: Number = 2</text>
        <text x="280" y="103" font-size="9" fill="#3730a3">range(2, 4) -> indices: 2, 3</text>
        <text x="280" y="120" font-size="9" fill="#3730a3">Colors[2] = "BLUE"</text>
        <text x="280" y="135" font-size="10" font-weight="bold" fill="#1e1b4b">Output: BLUE#YELLOW#</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<p><strong>1. Minimum and Maximum Values for variable Number:</strong></p>
<ul class="list-disc pl-5 text-slate-800 text-xs">
  <li><code>random.randint(1, 2)</code> generates integers <strong>including both endpoints</strong>.</li>
  <li><strong>Minimum value:</strong> <code>1</code></li>
  <li><strong>Maximum value:</strong> <code>2</code></li>
</ul>

<p><strong>2. Possible Outputs:</strong></p>
<ul class="list-disc pl-5 text-slate-800 text-xs">
  <li>When <code>Number = 1</code>: <code>range(1, 4)</code> produces <code>i = 1, 2, 3</code>, printing <code>GREEN#BLUE#YELLOW#</code> (Option i).</li>
  <li>When <code>Number = 2</code>: <code>range(2, 4)</code> produces <code>i = 2, 3</code>, printing <code>BLUE#YELLOW#</code> (Option iii).</li>
</ul>
<p><strong>Correct Output Options:</strong> <strong>(i) and (iii)</strong></p>
</div>""",
        'explanation': 'random.randint(a, b) generates a <= N <= b (both inclusive). In range(Number, 4), the stop value 4 is exclusive, iterating through index 3. Each print appends "#" at the end, so every valid output must terminate with "#".',
        'stepMarking': '[0.5 Mark] Minimum value = 1 | [0.5 Mark] Maximum value = 2 | [1 Mark] Identifying both correct options (i) and (iii)',
        'cautionTrap': 'Option (iv) lacks the trailing "#"! Option (ii) includes "RED" which requires Number = 0, but minimum is 1.',
        'topperTip': 'Remember: randint(a, b) includes b; randrange(a, b) excludes b!'
    }
]

# =========================================================================
# 6. INTERFACE PYTHON WITH MYSQL
# =========================================================================
NEW_QUESTIONS['Interface Python with MySQL'] = [
    {
        'id': 'cs-db-sqp24-q35',
        'marks': 4,
        'type': 'Python-MySQL Connectivity Code',
        'paper': 'CBSE 2024-25 SQP (Official)',
        'prob': '🔥 Official 4-Mark Question from 2024-25 Sample Question Paper',
        'stem': """A table named <code>STATIONERY</code> in database <code>ITEMDB</code> contains columns: <code>[ItemId, ItemName, Company, Price]</code>.<br>
Write a Python program to connect to MySQL database <code>ITEMDB</code> and perform the following tasks using <code>mysql.connector</code>:<br>
(i) Display all items manufactured by company <code>"Camlin"</code>.<br>
(ii) Increase the price of all items by 10% whose current price is less than 50.<br>
Ensure proper database cursor management and commit statements.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">Python-MySQL Architecture: Connect -> Cursor -> Execute -> Commit</text>
        <rect x="35" y="65" width="105" height="100" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="85" font-size="10" font-weight="bold" fill="#312e81">1. Connect</text>
        <text x="45" y="105" font-size="8" fill="#3730a3">mysql.connector</text>
        <text x="45" y="120" font-size="8" fill="#3730a3">.connect(host,</text>
        <text x="45" y="135" font-size="8" fill="#3730a3">user, password,</text>
        <text x="45" y="150" font-size="8" fill="#1e1b4b">database)</text>
        
        <path d="M 145 115 L 165 115" stroke="#4f46e5" stroke-width="2"/>
        
        <rect x="170" y="65" width="105" height="100" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <text x="180" y="85" font-size="10" font-weight="bold" fill="#065f46">2. Cursor</text>
        <text x="180" y="105" font-size="8" fill="#047857">cur = con.cursor()</text>
        <text x="180" y="125" font-size="8" fill="#047857">cur.execute()</text>
        <text x="180" y="145" font-size="8" fill="#064e3b">Queries MySQL</text>
        
        <path d="M 280 115 L 300 115" stroke="#059669" stroke-width="2"/>
        
        <rect x="305" y="65" width="105" height="100" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="315" y="85" font-size="10" font-weight="bold" fill="#92400e">3. Fetch</text>
        <text x="315" y="105" font-size="8" fill="#b45309">cur.fetchall()</text>
        <text x="315" y="125" font-size="8" fill="#b45309">Returns tuple of</text>
        <text x="315" y="145" font-size="8" fill="#78350f">rows for SELECT</text>
        
        <path d="M 415 115 L 435 115" stroke="#d97706" stroke-width="2"/>
        
        <rect x="440" y="65" width="90" height="100" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="448" y="85" font-size="10" font-weight="bold" fill="#991b1b">4. Commit</text>
        <text x="448" y="105" font-size="8" fill="#b91c1c">con.commit()</text>
        <text x="448" y="125" font-size="8" fill="#b91c1c">REQUIRED for</text>
        <text x="448" y="145" font-size="8" fill="#7f1d1d">UPDATE/DML!</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
import mysql.connector as mycon

try:
    # 1. Establish Database Connection
    con = mycon.connect(
        host="localhost",
        user="root",
        password="password123",
        database="ITEMDB"
    )
    cur = con.cursor()

    # (i) Display items manufactured by 'Camlin'
    query1 = "SELECT * FROM STATIONERY WHERE Company = 'Camlin'"
    cur.execute(query1)
    records = cur.fetchall()
    print("--- Camlin Stationery Items ---")
    for row in records:
        print(f"ID: {row[0]}, Name: {row[1]}, Company: {row[2]}, Price: {row[3]}")

    # (ii) Increase price by 10% for items with Price < 50
    query2 = "UPDATE STATIONERY SET Price = Price * 1.10 WHERE Price < 50"
    cur.execute(query2)
    con.commit() # Mandatory: commits transaction to persistent storage!
    print(f"Price updated successfully. Rows affected: {cur.rowcount}")

except mycon.Error as err:
    print("Database Error:", err)
finally:
    if 'cur' in locals(): cur.close()
    if 'con' in locals() and con.is_connected(): con.close()
</pre>
</div>""",
        'explanation': 'SELECT statements require cursor.fetchall() or cursor.fetchone() to transfer retrieved tuples into Python memory. UPDATE, INSERT, and DELETE statements require con.commit() to make transactions permanent in the relational database.',
        'stepMarking': '[1 Mark] Correct import and connection parameters (host, user, password, database) | [1 Mark] Query 1 execution and fetchall() traversal loop | [1 Mark] Query 2 UPDATE syntax with 10% increase (Price * 1.10) | [1 Mark] Mandatory con.commit() and closing connection/cursor',
        'cautionTrap': 'If you forget con.commit() after UPDATE, the query executes without error in Python, but NO changes will be saved to the database on disk! 70% of students lose this mark.',
        'topperTip': 'Golden Rule: SELECT needs fetchall(); UPDATE/INSERT/DELETE needs con.commit()!'
    }
]

print("New questions dictionary ready. Total chapters:", len(NEW_QUESTIONS))
for ch, qlist in NEW_QUESTIONS.items():
    print(f"  {ch}: {len(qlist)} authentic questions")

# Now let's format each question into valid JavaScript object notation
def format_js_question(q):
    stem = q['stem'].replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    modelAnswer = q['modelAnswer'].replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    explanation = q['explanation'].replace('\\', '\\\\').replace("'", "\\'")
    stepMarking = q['stepMarking'].replace('\\', '\\\\').replace("'", "\\'")
    cautionTrap = q.get('cautionTrap', '').replace('\\', '\\\\').replace("'", "\\'")
    topperTip = q.get('topperTip', '').replace('\\', '\\\\').replace("'", "\\'")
    paper = q.get('paper', 'CBSE Official Paper').replace('\\', '\\\\').replace("'", "\\'")
    prob = q.get('prob', '🔥 Authentic CBSE Question').replace('\\', '\\\\').replace("'", "\\'")
    diagram = q['diagram']

    return f"""    {{
      id: '{q['id']}',
      marks: {q['marks']},
      type: '{q['type']}',
      paper: '{paper}',
      prob: '{prob}',
      stem: `{stem}`,
      diagram: svg(560, 220, `
{diagram}
      `),
      modelAnswer: `{modelAnswer}`,
      explanation: '{explanation}',
      stepMarking: '{stepMarking}',
      cautionTrap: '{cautionTrap}',
      topperTip: '{topperTip}'
    }}"""

# Load current js/chapter-probable-questions.js
with open('js/chapter-probable-questions.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

# For each chapter in NEW_QUESTIONS, find its array in js_text and inject the questions
for ch_name, q_list in NEW_QUESTIONS.items():
    target = f"Q['{ch_name}'] = ["
    if target not in js_text:
        print(f"ERROR: Could not find {target}")
        continue
    
    # Format questions to JS string
    formatted_qs = ",\n".join(format_js_question(q) for q in q_list)
    
    # Inject right after target
    replacement = target + "\n" + formatted_qs + ",\n"
    js_text = js_text.replace(target, replacement, 1)
    print(f"Successfully injected {len(q_list)} questions into {ch_name}")

with open('js/chapter-probable-questions.js', 'w', encoding='utf-8') as f:
    f.write(js_text)

print("Finished injecting all authentic PDF questions into js/chapter-probable-questions.js")
