# -*- coding: utf-8 -*-
"""
Second batch of authentic CBSE Computer Science questions from:
- question-bank.pdf (Q4, Q5, Q6, Q7, Q8, Q9, Q11, Q12)
- practice-questions-2.pdf (Q28, Q31, Q32, Q33, Q35)
"""

import sys

sys.stdout.reconfigure(encoding='utf-8')

def svg(w, h, content):
    return f"""svg({w}, {h}, `
{content}
    `)"""

BATCH_2 = {}

# =========================================================================
# 1. FILE HANDLING
# =========================================================================
BATCH_2['File Handling'] = [
    {
        'id': 'cs-fh-qb-q8',
        'marks': 3,
        'type': 'Binary File Search & Exception Handling',
        'paper': 'CBSE Competency Bank (Official)',
        'prob': '🔥 Direct Question from Official CBSE Competency Bank',
        'stem': """Arun has been assigned an incomplete <code>search()</code> function to search for a student by roll number in a pickled binary file <code>student.dat</code>.<br>
• The file contains student records formatted as <code>[roll_no, name, marks]</code>.<br>
• Each student record was written to the file using <code>pickle.dump()</code>.<br>
Help Arun complete the code to accept a roll number from the user, search for the record, display their details, and handle the end of file gracefully with a custom message if not found.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">Pickle Search Loop with EOFError Guard & Found Flag</text>
        <rect x="35" y="65" width="135" height="85" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1"/>
        <text x="45" y="85" font-size="10" font-weight="bold" fill="#312e81">1. Initialize</text>
        <text x="45" y="103" font-size="9" fill="#3730a3">found = False</text>
        <text x="45" y="118" font-size="9" fill="#3730a3">target_rno = int(input)</text>
        <text x="45" y="133" font-size="9" fill="#4338ca">open("student.dat","rb")</text>
        
        <path d="M 180 105 L 210 105" stroke="#4338ca" stroke-width="2"/>
        
        <rect x="220" y="65" width="145" height="85" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="230" y="85" font-size="10" font-weight="bold" fill="#92400e">2. Read & Match</text>
        <text x="230" y="103" font-size="9" fill="#b45309">while True:</text>
        <text x="230" y="118" font-size="9" fill="#b45309">  rec = pickle.load(f)</text>
        <text x="230" y="133" font-size="9" fill="#78350f">  if rec[0] == target_rno</text>
        
        <path d="M 375 105 L 405 105" stroke="#d97706" stroke-width="2"/>
        
        <rect x="415" y="65" width="115" height="85" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1"/>
        <text x="425" y="85" font-size="10" font-weight="bold" fill="#065f46">3. EOF Guard</text>
        <text x="425" y="103" font-size="9" fill="#047857">except EOFError:</text>
        <text x="425" y="118" font-size="9" fill="#047857">if not found:</text>
        <text x="425" y="133" font-size="9" fill="#064e3b">  print("Not Found")</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
import pickle

def search():
    target_rno = int(input("Enter Roll Number to search: "))
    found = False
    try:
        with open("student.dat", "rb") as f:
            while True:
                student = pickle.load(f)
                if student[0] == target_rno:
                    print(f"Record Found! Roll No: {student[0]}, Name: {student[1]}, Marks: {student[2]}")
                    found = True
                    break
    except FileNotFoundError:
        print("Error: student.dat does not exist.")
    except EOFError:
        pass
    
    if not found:
        print(f"Roll Number {target_rno} not found in student.dat.")
</pre>
</div>""",
        'explanation': 'In binary files, pickle.load() consumes one pickled object at a time. When end of file is reached, it raises EOFError. Using a boolean flag "found" ensures we notify the user if the searched roll number does not exist.',
        'stepMarking': '[1 Mark] Correct import and file open in "rb" mode | [1 Mark] while True loop with pickle.load() and matching condition student[0] == target_rno | [1 Mark] Handling EOFError and testing found flag',
        'cautionTrap': 'Do NOT put print("Not found") inside the while loop else branch! That would print "Not found" for every single non-matching record before reaching the target.',
        'topperTip': 'Always use a boolean flag (found = False) outside the loop to cleanly handle "Not found" cases.'
    },
    {
        'id': 'cs-fh-qb-q9',
        'marks': 5,
        'type': 'CSV File Operations',
        'paper': 'CBSE Competency Bank (Official)',
        'prob': '🔥 Direct Question from Official CBSE Competency Bank',
        'stem': """Radha Shah is a programmer who needs to perform the following CSV file operations with two user-defined functions:<br>
(a) <code>CSVOpen()</code>: to create a CSV file called <code>BOOKS.CSV</code> in append mode containing book records: <code>[Title, Author, Price]</code>.<br>
(b) <code>CSVRead()</code>: to read <code>BOOKS.CSV</code> and display all records where the field <code>Title</code> starts with the letter <code>'R'</code> (case-insensitive). Also display the total count of such books.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">CSV String Inspection: row[0].upper().startswith('R')</text>
        <rect x="40" y="65" width="140" height="85" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1"/>
        <text x="50" y="85" font-size="10" font-weight="bold" fill="#312e81">CSV Rows Stream</text>
        <text x="50" y="103" font-size="9" fill="#3730a3">['Robotics', 'A. Roy', 450]</text>
        <text x="50" y="118" font-size="9" fill="#3730a3">['Python', 'B. Rao', 350]</text>
        <text x="50" y="133" font-size="9" fill="#3730a3">['Rust Guide', 'C. Sen', 600]</text>
        
        <path d="M 190 105 L 220 105" stroke="#4338ca" stroke-width="2"/>
        
        <rect x="230" y="65" width="145" height="85" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="240" y="85" font-size="10" font-weight="bold" fill="#92400e">Filter: Title[0]=='R'</text>
        <text x="240" y="103" font-size="9" fill="#b45309">row[0].startswith('R')</text>
        <text x="240" y="118" font-size="9" fill="#b45309">or row[0][0].upper()=='R'</text>
        <text x="240" y="133" font-size="9" fill="#78350f">Case-insensitive check</text>
        
        <path d="M 385 105 L 415 105" stroke="#d97706" stroke-width="2"/>
        
        <rect x="425" y="65" width="105" height="85" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1"/>
        <text x="435" y="85" font-size="10" font-weight="bold" fill="#065f46">Display & Count</text>
        <text x="435" y="103" font-size="9" fill="#047857">Count: 2 Books</text>
        <text x="435" y="118" font-size="9" fill="#047857">Robotics (450)</text>
        <text x="435" y="133" font-size="9" fill="#064e3b">Rust Guide (600)</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
import csv

def CSVOpen():
    with open("BOOKS.CSV", "a", newline="") as f:
        writer = csv.writer(f)
        while True:
            title = input("Enter Book Title: ")
            author = input("Enter Author: ")
            price = float(input("Enter Price: "))
            writer.writerow([title, author, price])
            ch = input("Add more books? (Y/N): ").upper()
            if ch == 'N':
                break

def CSVRead():
    count = 0
    try:
        with open("BOOKS.CSV", "r") as f:
            reader = csv.reader(f)
            print(f"{'Title':<25}{'Author':<20}{'Price':<10}")
            print("-" * 55)
            for row in reader:
                if row and len(row) >= 3:
                    if row[0].strip().upper().startswith('R'):
                        print(f"{row[0]:<25}{row[1]:<20}{row[2]:<10}")
                        count += 1
            print(f"Total books starting with 'R': {count}")
    except FileNotFoundError:
        print("Error: BOOKS.CSV not found.")
</pre>
</div>""",
        'explanation': 'row[0].strip().upper().startswith("R") safely handles leading spaces and ensures case-insensitivity. Always check if row is non-empty before indexing to prevent IndexError on blank trailing lines.',
        'stepMarking': '[2.5 Marks] CSVOpen() with append mode, newline="", loop and writerow() | [2.5 Marks] CSVRead() with csv.reader, row validation, starts with R condition, and counter',
        'cautionTrap': 'Writing row[0][0] == "R" without checking if row and row[0] are non-empty will raise IndexError if a blank line exists in the CSV file!',
        'topperTip': 'Use row[0].startswith(("R", "r")) for a clean, tuple-based multi-case check.'
    },
    {
        'id': 'cs-fh-pq2-q28',
        'marks': 3,
        'type': 'Text File Word Counter',
        'paper': 'CBSE 2023-24 Practice Paper (Official)',
        'prob': '🔥 Official Question from 2023-24 Practice Paper',
        'stem': """Write a function <code>COUNT()</code> in Python to read content from a text file named <code>"REPORT.TXT"</code>, and count and display the occurrences of the words <code>"IS"</code> or <code>"ARE"</code> (case-insensitive).<br><br>
<strong>Example Content of 'REPORT.TXT':</strong><br>
<code>"This is an annual report. Solar cells are efficient. Is it ready? Yes, they are."</code><br>
<strong>Expected Output:</strong><br>
<code>Count of IS/ARE: 4</code>""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">Tokenization & Punctuation-Safe Word Counting</text>
        <rect x="40" y="65" width="140" height="85" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1"/>
        <text x="50" y="85" font-size="10" font-weight="bold" fill="#312e81">Raw Text Tokens</text>
        <text x="50" y="103" font-size="9" fill="#3730a3">"This", "is", "an",</text>
        <text x="50" y="118" font-size="9" fill="#3730a3">"cells", "are",</text>
        <text x="50" y="133" font-size="9" fill="#3730a3">"Is", "it", "ready?"</text>
        
        <path d="M 190 105 L 220 105" stroke="#4338ca" stroke-width="2"/>
        
        <rect x="230" y="65" width="140" height="85" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="240" y="85" font-size="10" font-weight="bold" fill="#92400e">Punctuation Strip</text>
        <text x="240" y="103" font-size="9" fill="#b45309">clean_w = w.strip(".,?!")</text>
        <text x="240" y="118" font-size="9" fill="#b45309">clean_w.upper()</text>
        <text x="240" y="133" font-size="9" fill="#78350f">in ['IS', 'ARE']</text>
        
        <path d="M 380 105 L 410 105" stroke="#d97706" stroke-width="2"/>
        
        <rect x="420" y="65" width="110" height="85" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1"/>
        <text x="430" y="85" font-size="10" font-weight="bold" fill="#065f46">Result Counter</text>
        <text x="430" y="103" font-size="9" fill="#047857">count = 4</text>
        <text x="430" y="118" font-size="9" fill="#047857">"is": 1, "are": 1</text>
        <text x="430" y="133" font-size="9" fill="#064e3b">"Is": 1, "are.": 1</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
def COUNT():
    count = 0
    try:
        with open("REPORT.TXT", "r") as f:
            text = f.read()
            words = text.split()
            for w in words:
                clean_word = w.strip(".,?!;:-()\"'").upper()
                if clean_word in ["IS", "ARE"]:
                    count += 1
        print("Count of IS/ARE:", count)
    except FileNotFoundError:
        print("Error: REPORT.TXT not found.")
</pre>
</div>""",
        'explanation': 'Using w.strip(".,?!;:-()") removes trailing punctuation so words like "are." or "Is?" match accurately. .upper() normalizes case differences so both lowercase and uppercase variations match seamlessly.',
        'stepMarking': '[1 Mark] Correct file open and read() with split() into words | [1 Mark] Punctuation-safe case-insensitive match for "IS" and "ARE" | [1 Mark] Incrementing count and displaying final result',
        'cautionTrap': 'If you use text.count("is"), it will also count substrings inside other words like "Th[is]" and "d[is]cuss"! You MUST tokenize into words with split().',
        'topperTip': 'Always tokenize with split() and strip punctuation before exact word matching.'
    }
]

# =========================================================================
# 2. RELATIONAL DATABASES AND SQL
# =========================================================================
BATCH_2['Relational Databases and SQL'] = [
    {
        'id': 'cs-sql-qb-q5',
        'marks': 5,
        'type': 'Multi-Table Relational Queries & Joins',
        'paper': 'CBSE Competency Bank (Official)',
        'prob': '🔥 Direct Question from Official CBSE Competency Bank',
        'stem': """In a Database, there are two tables with the instances given below:<br>
<strong>Table: STUDENTS</strong><br>
<table class="w-full text-xs border border-slate-300 my-1">
  <tr class="bg-slate-200"><th class="p-1 border">ADMNO</th><th class="p-1 border">NAME</th><th class="p-1 border">CLASS</th><th class="p-1 border">SEC</th><th class="p-1 border">RNO</th><th class="p-1 border">ADDRESS</th><th class="p-1 border">PHONE</th></tr>
  <tr><td class="p-1 border">1211</td><td class="p-1 border">MEENA</td><td class="p-1 border">12A</td><td class="p-1 border">D</td><td class="p-1 border">4</td><td class="p-1 border">A-26</td><td class="p-1 border">3245678</td></tr>
  <tr><td class="p-1 border">1212</td><td class="p-1 border">VANI</td><td class="p-1 border">10A</td><td class="p-1 border">D</td><td class="p-1 border">1</td><td class="p-1 border">B-25</td><td class="p-1 border">5456789</td></tr>
  <tr><td class="p-1 border">1213</td><td class="p-1 border">MEENA</td><td class="p-1 border">12B</td><td class="p-1 border">A</td><td class="p-1 border">1</td><td class="p-1 border">NULL</td><td class="p-1 border">NULL</td></tr>
  <tr><td class="p-1 border">1214</td><td class="p-1 border">KARISH</td><td class="p-1 border">10B</td><td class="p-1 border">B</td><td class="p-1 border">3</td><td class="p-1 border">AB-234</td><td class="p-1 border">4567890</td></tr>
  <tr><td class="p-1 border">1215</td><td class="p-1 border">SURANJ</td><td class="p-1 border">12A</td><td class="p-1 border">A</td><td class="p-1 border">2</td><td class="p-1 border">C-12</td><td class="p-1 border">9876543</td></tr>
</table>
<br>
<strong>Table: SPORTS</strong><br>
<table class="w-full text-xs border border-slate-300 my-1">
  <tr class="bg-slate-200"><th class="p-1 border">ADMNO</th><th class="p-1 border">GAME</th><th class="p-1 border">COACH</th><th class="p-1 border">GRADE</th></tr>
  <tr><td class="p-1 border">1211</td><td class="p-1 border">CRICKET</td><td class="p-1 border">RAVI</td><td class="p-1 border">A</td></tr>
  <tr><td class="p-1 border">1212</td><td class="p-1 border">TENNIS</td><td class="p-1 border">KAPIL</td><td class="p-1 border">B</td></tr>
  <tr><td class="p-1 border">1214</td><td class="p-1 border">SWIMMING</td><td class="p-1 border">MEHRA</td><td class="p-1 border">A</td></tr>
  <tr><td class="p-1 border">1215</td><td class="p-1 border">CRICKET</td><td class="p-1 border">RAVI</td><td class="p-1 border">A</td></tr>
</table>
<br>
Write SQL queries / answers for:<br>
(i) Identify the Primary Key for table STUDENTS and Foreign Key for table SPORTS.<br>
(ii) What is the Degree and Cardinality of table STUDENTS?<br>
(iii) Write an SQL query to display the NAME, GAME, and GRADE of all students who play 'CRICKET'.<br>
(iv) Write an SQL query to count the number of students who have not provided an ADDRESS.<br>
(v) Write an SQL query to display the number of students enrolled in each GAME from table SPORTS.""",
        'diagram': """
        <rect x="20" y="20" width="520" height="150" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">Relational Equi-Join on Foreign Key: STUDENTS.ADMNO = SPORTS.ADMNO</text>
        <rect x="40" y="65" width="180" height="85" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="50" y="85" font-size="10" font-weight="bold" fill="#312e81">STUDENTS (Parent Table)</text>
        <text x="50" y="103" font-size="9" fill="#3730a3">ADMNO: Primary Key (PK)</text>
        <text x="50" y="118" font-size="9" fill="#3730a3">Degree = 7 attributes (cols)</text>
        <text x="50" y="133" font-size="9" fill="#1e1b4b">Cardinality = 5 tuples (rows)</text>
        
        <path d="M 220 105 L 290 105" stroke="#4338ca" stroke-width="2" stroke-dasharray="3"/>
        <text x="235" y="98" font-size="8" fill="#4338ca">ADMNO Join</text>
        
        <rect x="290" y="65" width="190" height="85" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <text x="300" y="85" font-size="10" font-weight="bold" fill="#065f46">SPORTS (Child Table)</text>
        <text x="300" y="103" font-size="9" fill="#047857">ADMNO: Foreign Key (FK)</text>
        <text x="300" y="118" font-size="9" fill="#047857">Degree = 4 | Cardinality = 4</text>
        <text x="300" y="133" font-size="9" fill="#064e3b">References STUDENTS(ADMNO)</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<p><strong>(i) Keys:</strong></p>
<ul class="list-disc pl-5 text-slate-800 text-xs">
  <li><strong>Primary Key (STUDENTS):</strong> <code>ADMNO</code> (Uniquely identifies every student tuple).</li>
  <li><strong>Foreign Key (SPORTS):</strong> <code>ADMNO</code> (References parent table STUDENTS primary key).</li>
</ul>

<p><strong>(ii) Degree and Cardinality (STUDENTS):</strong></p>
<ul class="list-disc pl-5 text-slate-800 text-xs">
  <li><strong>Degree:</strong> <code>7</code> (Number of columns/attributes: ADMNO, NAME, CLASS, SEC, RNO, ADDRESS, PHONE).</li>
  <li><strong>Cardinality:</strong> <code>5</code> (Number of rows/tuples).</li>
</ul>

<p><strong>(iii) Equi-Join Query for Cricket Players:</strong></p>
<pre class="bg-slate-900 text-emerald-400 p-2 rounded text-xs font-mono">
SELECT St.NAME, Sp.GAME, Sp.GRADE
FROM STUDENTS St, SPORTS Sp
WHERE St.ADMNO = Sp.ADMNO
  AND Sp.GAME = 'CRICKET';
</pre>

<p><strong>(iv) NULL Check Query:</strong></p>
<pre class="bg-slate-900 text-emerald-400 p-2 rounded text-xs font-mono">
SELECT COUNT(*) 
FROM STUDENTS
WHERE ADDRESS IS NULL;
</pre>

<p><strong>(v) Grouping by Game:</strong></p>
<pre class="bg-slate-900 text-emerald-400 p-2 rounded text-xs font-mono">
SELECT GAME, COUNT(*) AS TotalPlayers
FROM SPORTS
GROUP BY GAME;
</pre>
</div>""",
        'explanation': 'Degree is the number of attributes (columns), and Cardinality is the number of records (rows). When checking for missing values in SQL, always use "IS NULL" instead of "= NULL".',
        'stepMarking': '[1 Mark] Correct PK (ADMNO) and FK (ADMNO) | [1 Mark] Correct Degree (7) and Cardinality (5) | [1 Mark] Equi-Join query joining on ADMNO and filtering CRICKET | [1 Mark] WHERE ADDRESS IS NULL with COUNT(*) | [1 Mark] SELECT GAME, COUNT(*) GROUP BY GAME',
        'cautionTrap': 'Writing WHERE ADDRESS = NULL returns 0 rows! SQL comparison with NULL requires IS NULL or IS NOT NULL.',
        'topperTip': 'Remember: Degree = Columns; Cardinality = Rows. Equi-joins MUST link Parent.PK = Child.FK in the WHERE clause.'
    }
]

# =========================================================================
# 3. COMPUTER NETWORKS
# =========================================================================
BATCH_2['Computer Networks'] = [
    {
        'id': 'cs-net-qb-q6',
        'marks': 5,
        'type': 'Campus Case Study (ABC Enterprises)',
        'paper': 'CBSE Competency Bank (Official)',
        'prob': '🔥 Direct Question from Official CBSE Competency Bank',
        'stem': """A company ABC Enterprises has four blocks of buildings:<br>
<strong>Center-to-center distance between blocks:</strong><br>
• B3 to B1: 50 m<br>
• B1 to B2: 60 m<br>
• B2 to B4: 25 m<br>
• B4 to B3: 170 m<br>
• B3 to B2: 125 m<br>
• B1 to B4: 90 m<br>
<br><strong>Number of computers in each block:</strong><br>
• Block B1: 40<br>
• Block B2: 45<br>
• Block B3: 110<br>
• Block B4: 60<br><br>
Answer the following:<br>
(i) Suggest the most suitable place (i.e. Block) to host the server with justification.<br>
(ii) Suggest the most economical cable layout to connect all four blocks.<br>
(iii) The company wants to link its head office in Delhi with this branch office in Mumbai. Suggest the best transmission medium for this long-distance WAN connection.<br>
(iv) Where should a Switch and Repeater be placed? Give reasons.<br>
(v) Which protocol will be used if an employee in Mumbai transfers a confidential project file to the Delhi server?""",
        'diagram': """
        <rect x="20" y="20" width="520" height="190" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="45" font-size="12" font-weight="bold" fill="#0f172a">ABC Enterprises: Minimum Spanning Tree / Star Layout</text>
        
        <rect x="40" y="65" width="105" height="50" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
        <text x="50" y="85" font-size="10" font-weight="bold" fill="#065f46">B3 (110 PCs)</text>
        <text x="50" y="100" font-size="9" font-weight="bold" fill="#dc2626">★ SERVER</text>
        
        <rect x="200" y="65" width="100" height="50" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="210" y="85" font-size="10" font-weight="bold" fill="#312e81">B1 (40 PCs)</text>
        
        <rect x="360" y="65" width="100" height="50" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="370" y="85" font-size="10" font-weight="bold" fill="#92400e">B2 (45 PCs)</text>
        
        <rect x="360" y="135" width="100" height="50" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
        <text x="370" y="155" font-size="10" font-weight="bold" fill="#1e293b">B4 (60 PCs)</text>
        
        <line x1="145" y1="90" x2="200" y2="90" stroke="#059669" stroke-width="2"/>
        <text x="160" y="85" font-size="8" fill="#059669">50m</text>
        
        <line x1="300" y1="90" x2="360" y2="90" stroke="#059669" stroke-width="2"/>
        <text x="320" y="85" font-size="8" fill="#059669">60m</text>
        
        <line x1="410" y1="115" x2="410" y2="135" stroke="#059669" stroke-width="2"/>
        <text x="415" y="128" font-size="8" fill="#059669">25m</text>
        """,
        'modelAnswer': """<div class="space-y-3">
<ol class="list-decimal pl-5 space-y-2 text-slate-800 text-xs">
  <li><strong>Server Placement: Block B3</strong><br>
  <em>Justification:</em> As per the <strong>80/20 Rule</strong>, Block B3 houses the maximum number of computers (110 computers), drastically reducing overall network transmission load and latency.</li>

  <li><strong>Economical Cable Layout (Bus / MST Topology):</strong><br>
  Connect: <code>B3 to B1 (50 m)</code>, <code>B1 to B2 (60 m)</code>, and <code>B2 to B4 (25 m)</code>.<br>
  <em>Total cable length:</em> 50 + 60 + 25 = <strong>135 m</strong> (Minimum spanning distance).</li>

  <li><strong>Long-Distance Inter-City WAN Media:</strong><br>
  <strong>Satellite Communication</strong> or leased <strong>Optical Fiber WAN</strong> link.</li>

  <li><strong>Device Placement:</strong><br>
  • <strong>Switch/Hub:</strong> Placed in <strong>all 4 blocks (B1, B2, B3, B4)</strong> to network local nodes within each building.<br>
  • <strong>Repeater:</strong> Not strictly required for the 135m MST layout since no individual link exceeds 70-100m. However, if using star topology centered at B3, a repeater is required on links > 100m (e.g. B3 to B2 = 125m, B3 to B4 = 170m).</li>

  <li><strong>File Transfer Protocol:</strong><br>
  <strong>FTP (File Transfer Protocol)</strong> or <strong>SFTP (Secure File Transfer Protocol)</strong>.</li>
</ol>
</div>""",
        'explanation': 'In 5-mark networking case studies, always provide exact distance calculations for your layout. Mention both FTP and SFTP for data transfer over WAN.',
        'stepMarking': '[1 Mark] Block B3 with 80/20 rule | [1 Mark] Cable layout with total 135m calculation | [1 Mark] Satellite / Fiber WAN link | [1 Mark] Switches in all blocks + repeater rationale | [1 Mark] FTP / SFTP protocol',
        'cautionTrap': 'Suggesting Wi-Fi between Delhi and Mumbai will result in zero marks! Wi-Fi is a short-range LAN technology. Inter-city WAN requires Satellite or Leased Optical Fiber lines.',
        'topperTip': 'Always draw both the layout diagram and calculate the total cable meters.'
    }
]

# Load current js/chapter-probable-questions.js
with open('js/chapter-probable-questions.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

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

for ch_name, q_list in BATCH_2.items():
    target = f"Q['{ch_name}'] = ["
    if target not in js_text:
        print(f"ERROR: Target {target} not found")
        continue
    formatted = ",\n".join(format_js_question(q) for q in q_list)
    replacement = target + "\n" + formatted + ",\n"
    js_text = js_text.replace(target, replacement, 1)
    print(f"Batch 2 injected {len(q_list)} questions into {ch_name}")

with open('js/chapter-probable-questions.js', 'w', encoding='utf-8') as f:
    f.write(js_text)

print("Batch 2 injection complete.")
