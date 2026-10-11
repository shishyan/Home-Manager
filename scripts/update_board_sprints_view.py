with open('js/board-sprints-view.js', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Define WEEK_STRATEGY before WEEK_BOOK_MAP
week_strategy_code = '''  // =========================================================================
  // WEEK IN SCOPE STRATEGY & 70-DAY SPRINT ROADMAP
  // =========================================================================
  const WEEK_STRATEGY = {
    'week-1': {
      goal: 'Kickstart Pre-Board II Scoring Baseline & Core Syllabi Foundations',
      whyNow: 'Pre-Board II starts Oct 16. Units 1 & 2 in Physics (Electrostatics), Chemistry (Solutions & Electrochemistry), and Math (Matrices) represent over 40% of the Pre-Board II syllabus. Mastering these foundational derivations first secures an immediate 40+ mark scoring baseline and provides the mathematical prerequisites for Electrodynamics, Kinetics, and Calculus in Week 2.',
      marksCoverage: 'Physics: 16M · Chemistry: 14M · Math: 15M · CS: 12M · English: 18M (~75 Board Marks)',
      rapidCheckpoints: [
        'Physics: Can you derive Gauss Law for an infinite wire from scratch without checking notes?',
        'Chemistry: Can you calculate van \\'t Hoff factor i and solve freezing point depression numericals in 5 minutes?',
        'Math: Can you compute adj(A) for a 3×3 matrix and solve AX = B without arithmetic sign errors?',
        'CS: Can you trace LEGB variable resolution and identify global variable mutation traps?',
        'English: Can you explain Franz\\'s transformation and M. Hamel\\'s linguistic chauvinism essay?'
      ]
    },
    'week-2': {
      goal: 'Master Quantitative Numerical Laws, Reaction Kinetics & File Streams',
      whyNow: 'Building directly upon Week 1 foundations, Week 2 shifts to numerical-heavy chapters where CBSE uses predictable formula questions. Current Electricity (Kirchhoff\\'s loop rules and drift velocity), Chemical Kinetics (first-order half-life proofs), and File Handling (binary pickle & CSV streams) have 100% appearance rates in 3M and 5M board sections.',
      marksCoverage: 'Physics: 14M · Chemistry: 13M · Math: 18M · CS: 15M · English: 14M (~74 Board Marks)',
      rapidCheckpoints: [
        'Physics: Balanced Wheatstone bridge condition P/Q = R/S using Kirchhoff loop equations.',
        'Chemistry: Proof that first-order reaction t_99.9% = 10 × t_1/2 and Arrhenius activation energy calculation.',
        'Math: Differentiability verification and logarithmic differentiation y = x^(sin x).',
        'CS: Python pickle.dump() / pickle.load() with EOFError exception handling for binary search.',
        'English: Formal Notice Writing and Formal Invitation inside 50-word bounded box.'
      ]
    },
    'week-3': {
      goal: 'Pre-Board II Climax: 5-Mark Heavyweights (AC Resonance, CFT, Maxima-Minima)',
      whyNow: 'This is the final week before Pre-Board II climax. We target the guaranteed 5-mark board long-answer questions: Series LCR phasor derivation, Crystal Field Theory octahedral splitting, Maxima-Minima optimization proofs, and Stack LIFO algorithms. Nailing these guarantees high percentage performance in Section D & E.',
      marksCoverage: 'Physics: 15M · Chemistry: 12M · Math: 16M · CS: 10M · English: 12M (~65 Board Marks)',
      rapidCheckpoints: [
        'Physics: Series LCR impedance Z = √(R² + (X_L - X_C)²) phasor diagram and resonance condition.',
        'Chemistry: VBT and CFT explanation of [Co(NH3)6]3+ (diamagnetic) vs [CoF6]3- (paramagnetic).',
        'Math: Prove largest cylinder inscribed in cone of height h has height h/3.',
        'CS: Implement push() and pop() with underflow check for stack on Python list.',
        'English: William Douglas\\'s methodical conquest of fear in Deep Water.'
      ]
    },
    'week-4': {
      goal: 'Post-PB2 Gap Repair, Galvanometer Conversions & Relational SQL Mastery',
      whyNow: 'Diagnostic week immediately following Pre-Board II papers. We analyze exam errors, repair derivations (Galvanometer to Ammeter/Voltmeter), master SQL 4-mark table queries with GROUP BY/HAVING, and solidify Job Application format with tabular bio-data.',
      marksCoverage: 'Physics: 12M · Chemistry: 14M · Math: 15M · CS: 16M · English: 15M (~72 Board Marks)',
      rapidCheckpoints: [
        'Physics: Shunt resistance S = (Ig·G)/(I - Ig) and Voltmeter series resistance R = (V/Ig) - G.',
        'Chemistry: Electrochemical cell EMF Nernst calculation and Kohlrausch limiting conductivity.',
        'Math: Continuous functions finding unknown k and parametric second derivatives d²y/dx².',
        'CS: 2-table Equi-Join SQL queries matching Primary Key and Foreign Key.',
        'English: Job Application covering letter + Curriculum Vitae with reference tables.'
      ]
    },
    'week-5': {
      goal: 'Conquer Ray/Wave Optics (14M) & Organic Reaction Mechanisms (SN1/SN2)',
      whyNow: 'Optics carries the highest single weightage in Physics Part II (14 marks out of 70). Concurrently, Haloalkanes and Phenols initiate Class 12 Organic Chemistry. Covering Optics and Organic mechanisms together at mid-sprint ensures adequate rehearsal time before January Model exams.',
      marksCoverage: 'Physics: 14M · Chemistry: 14M · Math: 18M · CS: 10M · English: 10M (~66 Board Marks)',
      rapidCheckpoints: [
        'Physics: Lens Maker\\'s Formula 1/f = (μ - 1)(1/R1 - 1/R2) and Astronomical Telescope ray diagram.',
        'Chemistry: SN1 vs SN2 mechanism comparison with Walden inversion of configuration.',
        'Math: King\\'s rule definite integral ∫[0 to a] f(x)dx = ∫[0 to a] f(a-x)dx.',
        'CS: Campus network 80/20 server block placement and repeater distance (>100m) rule.',
        'English: Edla Willmansson\\'s compassionate redemption of the peddler in The Rattrap.'
      ]
    },
    'week-6': {
      goal: 'Modern Physics (12M), Carbonyl Name Reactions & Differential Equations',
      whyNow: 'Modern Physics (Photoelectric equation, de Broglie, Bohr atom) offers the fastest marks-per-hour ratio in Physics. In Chemistry, Aldehydes, Ketones, and Amines represent the core of 5-mark conversion problems. Differential equations wrap up Calculus Part II.',
      marksCoverage: 'Physics: 12M · Chemistry: 16M · Math: 14M · CS: 12M · English: 12M (~66 Board Marks)',
      rapidCheckpoints: [
        'Physics: Einstein photoelectric equation hν = Φ₀ + K_max and Bohr radius r_n ∝ n².',
        'Chemistry: Aldol condensation, Cannizzaro reaction, and Hoffmann bromamide degradation.',
        'Math: Homogeneous differential equation y = vx and linear differential equation with I.F.',
        'CS: Python mysql.connector parameterized queries to insert and fetch records.',
        'English: Gandhi\\'s Champaran Satyagraha in Indigo as a lesson in self-reliance.'
      ]
    },
    'week-7': {
      goal: 'Semiconductor Electronics, Biomolecules & 3D Vectors Completion',
      whyNow: 'Final syllabus completion week. Semiconductor rectifiers, Biomolecules (Glucose reactions and DNA/RNA), and 3D Skew lines complete 100% of the CBSE Class 12 curriculum, leaving Weeks 8-10 entirely free for 10-year past papers and full-length timed mocks.',
      marksCoverage: 'Physics: 12M · Chemistry: 12M · Math: 16M · CS: 14M · English: 14M (~68 Board Marks)',
      rapidCheckpoints: [
        'Physics: Full-wave rectifier circuit operation and input/output waveform sketching.',
        'Chemistry: Glucose straight-chain reactions with HI, bromine water, and HNO3.',
        'Math: Shortest distance between skew lines d = |(a2-a1)·(b1×b2)| / |b1×b2|.',
        'CS: Full stack networking and stack algorithms review.',
        'English: Dr. Sadao\\'s conflict between patriotic duty and medical ethics in The Enemy.'
      ]
    },
    'week-8': {
      goal: '10-Year CBSE Past Paper Intensive: High-Probability Repeats Sprint',
      whyNow: 'With 100% syllabus completed in Week 7, Week 8 transitions to past paper pattern recognition. 60-70% of CBSE board questions are recurring variations of 2015-2024 papers. Practicing authentic past questions builds exam speed and eliminates marking traps.',
      marksCoverage: 'All 5 Subjects · 10-Year Board Paper High-Repeat Bank',
      rapidCheckpoints: [
        'Solve 5 past paper 5-mark derivations in Physics under 45 minutes.',
        'Solve 5 past paper organic reaction conversion roadmaps in Chemistry.',
        'Solve 5 past paper matrix inversion and definite integral questions in Math.',
        'Write 2 past paper full 80/20 networking case studies in Computer Science.',
        'Draft 1 Notice, 1 Invitation, and 1 Job Application under 25 minutes.'
      ]
    },
    'week-9': {
      goal: 'January Model Exam: Full 3-Hour Timed Board Simulations',
      whyNow: 'January Model Exams evaluate physical stamina, time budgeting (180 minutes), and handwriting endurance. Completing full 3-hour mocks across Physics, Chemistry, Math, CS, and English establishes real-world exam temperament and eradicates exam anxiety.',
      marksCoverage: 'Full 70M / 80M Board Question Paper Simulation',
      rapidCheckpoints: [
        'Complete 1 full 70-mark Physics mock in exactly 180 minutes.',
        'Complete 1 full 70-mark Chemistry mock in exactly 180 minutes.',
        'Complete 1 full 80-mark Mathematics mock in exactly 180 minutes.',
        'Complete 1 full 70-mark Computer Science mock in exactly 180 minutes.',
        'Complete 1 full 80-mark English Core mock in exactly 180 minutes.'
      ]
    },
    'week-10': {
      goal: 'Formula & Code Ledgers: Rapid Morning Retrieval Acceleration',
      whyNow: 'Final days before board exams require zero-friction active retrieval rather than passive reading. The Formula & Code Ledger provides every boxed derivation, boundary constant, named reaction, and SQL query syntax for instant recall.',
      marksCoverage: 'Complete Class 12 Formulae, Derivations, Reactions & Syntax',
      rapidCheckpoints: [
        'Recite all 24 core Physics derivations and boundary conditions.',
        'Recite all 28 named Organic Chemistry reactions and reagents.',
        'Verify all 16 standard definite integral and 3D line formulas.',
        'Verify Python file modes (r, w, a, rb, wb, ab) and SQL aggregate constraints.',
        'Review standard CBSE format borders and marking scheme allotments.'
      ]
    }
  };

'''

map_marker = '  // 10-WEEK SPRINT ARCHITECTURE'
code = code.replace(map_marker, week_strategy_code + map_marker)

# 2. Update filtering in boardSprintsView to fuzzy match chapters
old_filter = '''      // If chapters are specified for this book in this week, match them
      if (targetChapters.length > 0 && !targetChapters.includes(q.chapter)) return false;'''

new_filter = '''      // If chapters are specified for this book in this week, match them with alias resilience
      if (targetChapters.length > 0) {
        const matches = targetChapters.some(tc => {
          const t = tc.toLowerCase();
          const qc = q.chapter.toLowerCase();
          return t === qc || t.includes(qc) || qc.includes(t);
        });
        if (!matches) return false;
      }'''

code = code.replace(old_filter, new_filter)

# 3. Insert zen-strategy-dashboard into boardSprintsView
header_end = '</header>'
dashboard_snippet = '''</header>

        <!-- STRATEGIC WEEK IN SCOPE DASHBOARD (70-DAY SPRINT STRATEGY) -->
        <section class="zen-strategy-dashboard">
          <div class="strategy-dashboard-top">
            <div class="strategy-badge">
              <i data-lucide="compass"></i>
              <span>70-Day Sprint Strategy · Week in Scope Plan</span>
            </div>
            <span class="strategy-weightage-pill">${escapeHtml((WEEK_STRATEGY[week] || WEEK_STRATEGY['week-1']).marksCoverage)}</span>
          </div>

          <div class="strategy-content-grid">
            <div class="strategy-col">
              <strong><i data-lucide="target"></i> Sprint Goal & Scope:</strong>
              <p>${escapeHtml((WEEK_STRATEGY[week] || WEEK_STRATEGY['week-1']).goal)}</p>
            </div>
            <div class="strategy-col">
              <strong><i data-lucide="help-circle"></i> Why This Set of Topics Now:</strong>
              <p>${escapeHtml((WEEK_STRATEGY[week] || WEEK_STRATEGY['week-1']).whyNow)}</p>
            </div>
          </div>

          <div class="strategy-checkpoints-box">
            <strong class="checkpoints-title"><i data-lucide="check-check"></i> Preparedness Validation Checkpoints (Can you solve without looking?):</strong>
            <ul class="checkpoints-list">
              ${(WEEK_STRATEGY[week] || WEEK_STRATEGY['week-1']).rapidCheckpoints.map(cp => `<li>${escapeHtml(cp)}</li>`).join('')}
            </ul>
          </div>
        </section>'''

code = code.replace(header_end, dashboard_snippet, 1)

with open('js/board-sprints-view.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Updated js/board-sprints-view.js with WEEK_STRATEGY and Dashboard!")
