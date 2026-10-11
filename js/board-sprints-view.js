(function () {
  'use strict';

  const HM = window.HM = window.HM || {};

  // Subject Metadata & Visual Theme
  const SUBJECT_CONFIG = {
    'Physics': { code: '042', icon: 'atom', color: '#4f46e5', badgeBg: '#e0e7ff', textCol: '#3730a3' },
    'Chemistry': { code: '043', icon: 'flask-conical', color: '#059669', badgeBg: '#d1fae5', textCol: '#065f46' },
    'Mathematics': { code: '041', icon: 'calculator', color: '#d97706', badgeBg: '#fef3c7', textCol: '#92400e' },
    'Computer Science': { code: '083', icon: 'binary', color: '#0284c7', badgeBg: '#e0f2fe', textCol: '#075985' },
    'English Core': { code: '301', icon: 'book-open', color: '#e11d48', badgeBg: '#ffe4e6', textCol: '#9f1239' }
  };

  // Chapter-to-Subject Lookup
  const CHAPTER_SUBJECT = {
    'Electric Charges and Fields': 'Physics',
    'Electrostatic Potential and Capacitance': 'Physics',
    'Current Electricity': 'Physics',
    'Moving Charges and Magnetism': 'Physics',
    'Alternating Current': 'Physics',
    'Electromagnetic Induction': 'Physics',
    'Magnetism and Matter': 'Physics',
    'Ray Optics and Optical Instruments': 'Physics',
    'Wave Optics': 'Physics',
    'Dual Nature of Radiation and Matter': 'Physics',
    'Atoms and Nuclei': 'Physics',
    'Semiconductor Electronics': 'Physics',
    'Solutions': 'Chemistry',
    'Electrochemistry': 'Chemistry',
    'Chemical Kinetics': 'Chemistry',
    'd- and f-Block Elements': 'Chemistry',
    'Coordination Compounds': 'Chemistry',
    'Haloalkanes and Haloarenes': 'Chemistry',
    'Alcohols, Phenols and Ethers': 'Chemistry',
    'Aldehydes, Ketones and Carboxylic Acids': 'Chemistry',
    'Amines': 'Chemistry',
    'Biomolecules': 'Chemistry',
    'Matrices and Determinants': 'Mathematics',
    'Integrals': 'Mathematics',
    'Relations and Functions': 'Mathematics',
    'Inverse Trigonometric Functions': 'Mathematics',
    'Continuity and Differentiability': 'Mathematics',
    'Applications of Derivatives': 'Mathematics',
    'Differential Equations': 'Mathematics',
    'Vector Algebra': 'Mathematics',
    'Three Dimensional Geometry': 'Mathematics',
    'Linear Programming': 'Mathematics',
    'Probability': 'Mathematics',
    'File Handling': 'Computer Science',
    'Relational Databases and SQL': 'Computer Science',
    'Python Revision Tour': 'Computer Science',
    'Python Functions': 'Computer Science',
    'Functions in Python': 'Computer Science',
    'Data Structures: Stacks': 'Computer Science',
    'Computer Networks': 'Computer Science',
    'The Last Lesson': 'English Core',
    'Lost Spring': 'English Core',
    'Deep Water': 'English Core',
    'The Rattrap': 'English Core',
    'Indigo': 'English Core',
    'My Mother at Sixty-Six': 'English Core',
    'Keeping Quiet': 'English Core',
    'A Thing of Beauty': 'English Core',
    'The Enemy': 'English Core',
    'Aunt Jennifer\'s Tigers': 'English Core',
    'Writing Skills Box Formats': 'English Core'
  };

  // =========================================================================
  // CHAPTER REFERENCES: YOUTUBE MASTERCLASSES (TAMIL/TANGLISH) & 5-YR CBSE SQP
  // =========================================================================
  const CHAPTER_REFERENCES = {
    // --- 1. PHYSICS (042) ---
    'Electric Charges and Fields': {
      yt: {
        channel: 'Vedantu Master Tamil · Ashwin Sir',
        title: 'Class 12 Physics: Electric Charges & Fields One Shot Tamil | Gauss Law Derivations',
        lang: 'Tamil / Tanglish',
        duration: '1h 45m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+electric+charges+and+fields+ashwin+sir'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 55/1/1 Q28 (5M)', 'CBSE 2020 Delhi Set 1 Q24 (5M)', 'CBSE SQP 2022-23 Q31 (5M)', 'CBSE 2019 All India Q22 (3M)'],
        trendInsight: 'Infinite wire Gauss law derivation is a 10-year recurring 5-mark question. In 2020 Delhi paper, part (b) asked for field at distance r/2 inside cylinder, while 2023 asked for numerical at r = 5 cm.'
      }
    },
    'Electrostatic Potential and Capacitance': {
      yt: {
        channel: 'Vedantu Master Tamil · Ashwin Sir',
        title: 'Electrostatic Potential & Capacitance Full Revision in Tamil | Dielectric Slab Derivation',
        lang: 'Tamil / Tanglish',
        duration: '1h 20m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+electrostatic+potential+capacitance+ashwin+sir'
      },
      crossRef: {
        frequency: '🔥 Appeared 3 times in 2020–2024 CBSE Exams',
        papers: ['CBSE 2024 Set 55/2/1 Q27 (3M)', 'CBSE 2022 Term-2 Q9 (3M)', 'CBSE 2020 All India Q18 (3M)', 'CBSE SQP 2021 Term-1 Q35'],
        trendInsight: 'Dielectric slab insertion (t < d) capacitance formula C = ε₀A/[d - t(1 - 1/K)] appeared in CBSE 2024 and 2020, with emphasis on energy change when battery remains connected vs disconnected.'
      }
    },
    'Current Electricity': {
      yt: {
        channel: 'Vedantu Master Tamil · Ashwin Sir',
        title: 'Current Electricity Full Chapter in Tamil | Drift Velocity, Kirchhoff Rules & Wheatstone',
        lang: 'Tamil / Tanglish',
        duration: '2h 10m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+current+electricity+ashwin+sir'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 55/1/2 Q29 (3M)', 'CBSE 2020 Delhi Set 2 Q23 (3M)', 'CBSE 2022 Term-2 Q10 (3M)', 'CBSE SQP 2023-24 Q26 (3M)', 'CBSE 2019 Compartment Q21 (3M)'],
        trendInsight: 'Microscopic Ohm’s law I = neAv_d derived from first principles is tested every alternate year. Balanced Wheatstone bridge condition P/Q = R/S using loop rules is a core Pre-Board favorite.'
      }
    },
    'Moving Charges and Magnetism': {
      yt: {
        channel: 'Vedantu Master Tamil · Ashwin Sir',
        title: 'Moving Charges & Magnetism One Shot Tamil | Biot-Savart Law & Galvanometer Conversion',
        lang: 'Tamil / Tanglish',
        duration: '1h 50m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+moving+charges+magnetism+ashwin+sir'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 55/3/1 Q31 (5M)', 'CBSE 2020 Delhi Q26 (5M)', 'CBSE SQP 2022-23 Q33 (5M)', 'CBSE 2019 Delhi Q25 (3M)'],
        trendInsight: 'Biot-Savart magnetic field on circular loop axis is a staple 5M derivation. Moving Coil Galvanometer conversion to Ammeter (shunt S in parallel) vs Voltmeter (series R) is tested with standard numericals.'
      }
    },
    'Magnetism and Matter': {
      yt: {
        channel: 'Alex Maths · Physics in Tamil',
        title: 'Magnetism and Matter NCERT Summary in Tamil | Dia, Para, Ferro Comparative Table',
        lang: 'Tamil / Tanglish',
        duration: '45m Tutorial',
        url: 'https://www.youtube.com/results?search_query=alex+maths+magnetism+and+matter+class+12'
      },
      crossRef: {
        frequency: 'Appeared 3 times in 2020–2024 CBSE Exams',
        papers: ['CBSE 2024 Set 55/1/1 Q14 (2M)', 'CBSE 2023 Set 55/2/1 Q19 (2M)', 'CBSE SQP 2023-24 Q18 (2M)', 'CBSE 2020 All India Q15 (1M)'],
        trendInsight: 'Questions focus on distinguishing magnetic materials by magnetic susceptibility (χ), relative permeability (μ_r), and Curie’s temperature law.'
      }
    },
    'Electromagnetic Induction': {
      yt: {
        channel: 'Vedantu Master Tamil · Class 12',
        title: 'Electromagnetic Induction Full Chapter in Tamil | Faraday, Lenz Law & Mutual Inductance',
        lang: 'Tamil / Tanglish',
        duration: '1h 15m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+electromagnetic+induction+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2023 CBSE Exams',
        papers: ['CBSE 2023 Set 55/1/1 Q25 (3M)', 'CBSE 2022 Term-2 Q8 (3M)', 'CBSE 2020 All India Q21 (3M)', 'CBSE SQP 2021-22 Q24 (2M)'],
        trendInsight: 'Mutual inductance between two long coaxial solenoids M = μ₀n₁n₂πr₁²l and Lenz law conservation of energy reasoning questions appear routinely.'
      }
    },
    'Alternating Current': {
      yt: {
        channel: 'Vedantu Master Tamil · Ashwin Sir',
        title: 'Alternating Current Complete Chapter in Tamil | Series LCR Phasor, Resonance & Transformer',
        lang: 'Tamil / Tanglish',
        duration: '2h 00m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+alternating+current+ashwin+sir'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 55/1/1 Q32 (5M)', 'CBSE 2020 Delhi Q27 (5M)', 'CBSE SQP 2022-23 Q32 (5M)', 'CBSE 2022 Term-2 Q13 (5M)', 'CBSE 2019 All India Q27 (5M)'],
        trendInsight: 'Series LCR circuit phasor diagram & impedance Z = √(R² + (X_L - X_C)²) with resonance condition is tested in 5-mark section in nearly every board paper cycle.'
      }
    },
    'Ray Optics and Optical Instruments': {
      yt: {
        channel: 'Vedantu Master Tamil · Ashwin Sir',
        title: 'Ray Optics Full Derivations in Tamil | Lens Maker Formula & Telescope Ray Diagrams',
        lang: 'Tamil / Tanglish',
        duration: '2h 30m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+ray+optics+ashwin+sir'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2024 Set 55/1/1 Q33 (5M)', 'CBSE 2023 Set 55/2/1 Q33 (5M)', 'CBSE 2022 Term-2 Q12 (5M)', 'CBSE 2020 Delhi Q28 (5M)', 'CBSE SQP 2022-23 Q35 (5M)'],
        trendInsight: 'Lens Maker Formula 1/f = (μ - 1)(1/R₁ - 1/R₂) and Astronomical Telescope normal adjustment ray diagram (m = -f_o/f_e, L = f_o + f_e) are guaranteed 5-mark long answers.'
      }
    },
    'Wave Optics': {
      yt: {
        channel: 'Vedantu Master Tamil · Ashwin Sir',
        title: 'Wave Optics One Shot in Tamil | Huygens Principle & Young Double Slit Fringe Width',
        lang: 'Tamil / Tanglish',
        duration: '1h 40m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+wave+optics+ashwin+sir'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 55/1/1 Q30 (3M)', 'CBSE 2020 Delhi Q28 (5M)', 'CBSE SQP 2023-24 Q30 (3M)', 'CBSE 2019 All India Q26 (3M)'],
        trendInsight: 'Huygens wave surface construction proving Snell’s law sin i / sin r = v₁/v₂ = μ and YDSE fringe width β = λD/d derivation are the highest probability questions.'
      }
    },
    'Dual Nature of Radiation and Matter': {
      yt: {
        channel: 'Vedantu Master Tamil · Class 12',
        title: 'Dual Nature Full Chapter Tamil | Einstein Photoelectric Equation & de Broglie',
        lang: 'Tamil / Tanglish',
        duration: '1h 10m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+dual+nature+class+12'
      },
      crossRef: {
        frequency: 'Appeared 4 times in 2019–2023 CBSE Exams',
        papers: ['CBSE 2023 Set 55/1/1 Q22 (3M)', 'CBSE 2022 Term-2 Q6 (3M)', 'CBSE 2020 Delhi Q19 (3M)', 'CBSE SQP 2022-23 Q24 (2M)'],
        trendInsight: 'Einstein Photoelectric equation hν = hν₀ + K_max used to verify the laws of photoelectric emission and de Broglie wavelength calculations.'
      }
    },
    'Atoms and Nuclei': {
      yt: {
        channel: 'Vedantu Master Tamil · Class 12',
        title: 'Atoms and Nuclei in Tamil | Bohr Orbit Radius, Energy & Binding Energy Curve',
        lang: 'Tamil / Tanglish',
        duration: '1h 25m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+atoms+nuclei+class+12'
      },
      crossRef: {
        frequency: 'Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 55/2/1 Q24 (3M)', 'CBSE 2020 Delhi Q20 (3M)', 'CBSE SQP 2023-24 Q28 (3M)', 'CBSE 2019 Delhi Q20 (3M)'],
        trendInsight: 'Bohr’s postulates deriving r_n ∝ n² and E_n = -13.6/n² eV, plus the binding energy per nucleon curve explaining fission and fusion.'
      }
    },
    'Semiconductor Electronics': {
      yt: {
        channel: 'Vedantu Master Tamil · Ashwin Sir',
        title: 'Semiconductor Electronics One Shot Tamil | Full Wave Rectifier Circuit & Waveforms',
        lang: 'Tamil / Tanglish',
        duration: '1h 35m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+semiconductor+electronics+ashwin+sir'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2020–2024 CBSE Exams',
        papers: ['CBSE 2024 Set 55/1/1 Q29 (3M)', 'CBSE 2023 Set 55/1/1 Q26 (3M)', 'CBSE 2020 Delhi Q22 (3M)', 'CBSE SQP 2022-23 Q29 (3M)'],
        trendInsight: 'Full-wave rectifier using 2 diodes with center-tapped transformer, drawing input & output waveforms, and explaining working during positive/negative half cycles.'
      }
    },

    // --- 2. CHEMISTRY (043) ---
    'Solutions': {
      yt: {
        channel: 'Vedantu Master Tamil · Dheena Sir',
        title: 'Solutions Class 12 Full Chapter Tamil | Raoult Law, Depression in Freezing Point & van\'t Hoff',
        lang: 'Tamil / Tanglish',
        duration: '2h 00m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+solutions+class+12+chemistry'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 56/1/1 Q26 (3M)', 'CBSE 2020 Delhi Q16 (3M)', 'CBSE SQP 2022-23 Q27 (3M)', 'CBSE 2022 Term-1 Q38', 'CBSE 2019 All India Q18 (3M)'],
        trendInsight: 'Numericals on depression in freezing point ΔT_f = i × K_f × m with abnormal molar mass and van\'t Hoff factor i are recurring in Section C.'
      }
    },
    'Electrochemistry': {
      yt: {
        channel: 'Vedantu Master Tamil · Dheena Sir',
        title: 'Electrochemistry Full Chapter Tamil | Nernst Equation, Kohlrausch Law & Cell EMF',
        lang: 'Tamil / Tanglish',
        duration: '2h 15m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+electrochemistry+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2024 Set 56/1/1 Q31 (5M)', 'CBSE 2023 Set 56/2/1 Q31 (5M)', 'CBSE 2020 Delhi Q29 (5M)', 'CBSE SQP 2023-24 Q32 (5M)', 'CBSE 2019 Delhi Q28 (5M)'],
        trendInsight: 'Calculation of cell EMF using Nernst equation E_cell = E°_cell - (0.0591/n)log Q and Kohlrausch limiting molar conductivity Λ°_m.'
      }
    },
    'Chemical Kinetics': {
      yt: {
        channel: 'Vedantu Master Tamil · Dheena Sir',
        title: 'Chemical Kinetics Full Chapter Tamil | Integrated Rate Equations & Half-Life Numericals',
        lang: 'Tamil / Tanglish',
        duration: '1h 55m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+chemical+kinetics+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 56/1/1 Q27 (3M)', 'CBSE 2020 Delhi Q18 (3M)', 'CBSE SQP 2022-23 Q29 (3M)', 'CBSE 2022 Term-2 Q7 (3M)', 'CBSE 2019 All India Q20 (3M)'],
        trendInsight: 'First-order integrated rate law k = (2.303/t)log([R]₀/[R]) and proof that time required for 99.9% completion is 10 times half-life.'
      }
    },
    'd- and f-Block Elements': {
      yt: {
        channel: 'Vedantu Master Tamil',
        title: 'd and f Block Elements Full Chapter Tamil | Lanthanoid Contraction & Transition Metal Trends',
        lang: 'Tamil / Tanglish',
        duration: '1h 30m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+d+and+f+block+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 56/1/1 Q29 (3M)', 'CBSE 2020 Delhi Q21 (3M)', 'CBSE SQP 2023-24 Q28 (3M)', 'CBSE 2019 All India Q21 (3M)'],
        trendInsight: 'Reasoning questions: Lanthanoid contraction causes & similarity in Zr/Hf radii, high atomization enthalpy of transition metals, and catalytic properties.'
      }
    },
    'Coordination Compounds': {
      yt: {
        channel: 'Vedantu Master Tamil · Dheena Sir',
        title: 'Coordination Compounds Full Chapter Tamil | IUPAC, VBT & CFT Crystal Field Splitting',
        lang: 'Tamil / Tanglish',
        duration: '2h 00m Masterclass',
        url: 'https://www.youtube.com/results?search_query=vedantu+master+tamil+coordination+compounds+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2020–2024 CBSE Exams',
        papers: ['CBSE 2024 Set 56/1/1 Q28 (3M)', 'CBSE 2023 Set 56/2/1 Q28 (3M)', 'CBSE 2020 Delhi Q19 (3M)', 'CBSE SQP 2022-23 Q28 (3M)'],
        trendInsight: 'IUPAC naming of coordination complexes and CFT octahedral splitting Δ_o diagram showing high spin vs low spin configurations (t_2g vs e_g).'
      }
    },
    'Haloalkanes and Haloarenes': {
      yt: {
        channel: 'Aadhira Chemistry Tamil',
        title: 'Haloalkanes and Haloarenes in Tamil | SN1 vs SN2 Mechanisms & Inversion',
        lang: 'Tamil / Tanglish',
        duration: '1h 40m Masterclass',
        url: 'https://www.youtube.com/results?search_query=haloalkanes+and+haloarenes+class+12+tamil'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2023 CBSE Exams',
        papers: ['CBSE 2023 Set 56/1/1 Q32 (5M)', 'CBSE 2020 Delhi Q30 (5M)', 'CBSE SQP 2022-23 Q33 (5M)', 'CBSE 2019 All India Q28 (5M)'],
        trendInsight: 'SN1 vs SN2 comparative mechanism table: stereochemistry (inversion vs racemization), order of reactivity 3° > 2° > 1° vs 1° > 2° > 3°, and carbocation stability.'
      }
    },
    'Alcohols, Phenols and Ethers': {
      yt: {
        channel: 'Vedantu Master Tamil · Organic Chemistry',
        title: 'Alcohols, Phenols & Ethers Named Reactions in Tamil | Reimer-Tiemann & Kolbe',
        lang: 'Tamil / Tanglish',
        duration: '1h 35m Masterclass',
        url: 'https://www.youtube.com/results?search_query=alcohols+phenols+and+ethers+class+12+tamil'
      },
      crossRef: {
        frequency: 'Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 56/2/1 Q30 (3M)', 'CBSE 2020 All India Q24 (3M)', 'CBSE SQP 2023-24 Q30 (3M)', 'CBSE 2019 Delhi Q22 (3M)'],
        trendInsight: 'Reimer-Tiemann conversion of phenol to salicylaldehyde and Kolbe reaction conversion of phenol to salicylic acid.'
      }
    },
    'Aldehydes, Ketones and Carboxylic Acids': {
      yt: {
        channel: 'Vedantu Master Tamil',
        title: 'Aldehydes Ketones & Carboxylic Acids One Shot Tamil | Aldol, Cannizzaro & Tollens Test',
        lang: 'Tamil / Tanglish',
        duration: '2h 20m Masterclass',
        url: 'https://www.youtube.com/results?search_query=aldehydes+ketones+and+carboxylic+acids+class+12+tamil'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2024 Set 56/1/1 Q33 (5M)', 'CBSE 2023 Set 56/1/1 Q33 (5M)', 'CBSE 2020 Delhi Q32 (5M)', 'CBSE SQP 2022-23 Q32 (5M)', 'CBSE 2019 Delhi Q30 (5M)'],
        trendInsight: 'Aldol condensation (with α-hydrogen) vs Cannizzaro reaction (no α-hydrogen) mechanisms and chemical tests distinguishing ethanal vs propanal.'
      }
    },
    'Amines': {
      yt: {
        channel: 'Aadhira Chemistry Tamil',
        title: 'Amines Chapter Complete Revision in Tamil | Hoffmann Bromamide & Gabriel Phthalimide',
        lang: 'Tamil / Tanglish',
        duration: '1h 15m Masterclass',
        url: 'https://www.youtube.com/results?search_query=amines+class+12+chemistry+tamil'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2023 CBSE Exams',
        papers: ['CBSE 2023 Set 56/1/1 Q28 (3M)', 'CBSE 2020 Delhi Q25 (3M)', 'CBSE SQP 2022-23 Q30 (3M)', 'CBSE 2019 All India Q23 (3M)'],
        trendInsight: 'Hoffmann bromamide degradation (step-down reaction) and Hinsberg’s reagent test distinguishing primary, secondary and tertiary amines.'
      }
    },
    'Biomolecules': {
      yt: {
        channel: 'Vedantu Master Tamil',
        title: 'Biomolecules Class 12 Chemistry in Tamil | Glucose Structure, Peptide Bond & DNA vs RNA',
        lang: 'Tamil / Tanglish',
        duration: '1h 10m Masterclass',
        url: 'https://www.youtube.com/results?search_query=biomolecules+class+12+chemistry+tamil'
      },
      crossRef: {
        frequency: 'Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 56/1/1 Q24 (3M)', 'CBSE 2020 Delhi Q17 (3M)', 'CBSE SQP 2023-24 Q24 (2M)', 'CBSE 2019 Delhi Q16 (3M)'],
        trendInsight: 'Reactions of D-glucose proving chain of 6 carbons (HI), carbonyl group (HCN/NH2OH), and aldehyde group (Br2 water).'
      }
    },

    // --- 3. MATHEMATICS (041) ---
    'Relations and Functions': {
      yt: {
        channel: 'Alex Maths Class 12 CBSE',
        title: 'Relations and Functions in Tamil | Equivalence Relation Proof',
        lang: 'Tamil / Tanglish',
        duration: '1h 10m Tutorial',
        url: 'https://www.youtube.com/results?search_query=alex+maths+relations+and+functions+class+12'
      },
      crossRef: {
        frequency: 'Appeared 4 times in 2019–2023 CBSE Exams',
        papers: ['CBSE 2023 Set 65/1/1 Q21 (2M)', 'CBSE 2020 Delhi Q21 (2M)', 'CBSE SQP 2023-24 Q21 (2M)', 'CBSE 2019 All India Q21 (2M)'],
        trendInsight: 'Proof of equivalence relations: demonstrating reflexivity, symmetry, and transitivity with integer sets.'
      }
    },
    'Inverse Trigonometric Functions': {
      yt: {
        channel: 'Alex Maths Class 12 CBSE',
        title: 'Inverse Trigonometric Functions in Tamil | Principal Value Branches',
        lang: 'Tamil / Tanglish',
        duration: '50m Tutorial',
        url: 'https://www.youtube.com/results?search_query=alex+maths+inverse+trigonometry+class+12'
      },
      crossRef: {
        frequency: 'Appeared 3 times in 2020–2024 CBSE Exams',
        papers: ['CBSE 2024 Set 65/1/1 Q21 (2M)', 'CBSE 2022 Term-1 Q12', 'CBSE SQP 2023-24 Q22 (2M)'],
        trendInsight: 'Evaluation of principal values in restricted range: cos⁻¹(-1/2) = 2π/3 and sin⁻¹(sin(2π/3)) traps.'
      }
    },
    'Matrices and Determinants': {
      yt: {
        channel: 'Alex Maths Class 12 CBSE',
        title: 'Matrices & Determinants 5-Mark System of Linear Equations in Tamil',
        lang: 'Tamil / Tanglish',
        duration: '1h 40m Masterclass',
        url: 'https://www.youtube.com/results?search_query=alex+maths+matrices+and+determinants+class+12+cbse'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 65/1/1 Q35 (5M)', 'CBSE 2020 Delhi Set 1 Q33 (6M)', 'CBSE SQP 2022-23 Q35 (5M)', 'CBSE 2022 Term-1 Q45', 'CBSE 2019 All India Q32 (6M)'],
        trendInsight: 'Solving system of 3 linear equations using matrix inverse X = A⁻¹B where A⁻¹ = (1/|A|)adj(A) is a mandatory 5M/6M question.'
      }
    },
    'Continuity and Differentiability': {
      yt: {
        channel: 'Alex Maths Class 12 CBSE',
        title: 'Continuity and Differentiability in Tamil | Logarithmic Differentiation',
        lang: 'Tamil / Tanglish',
        duration: '1h 30m Masterclass',
        url: 'https://www.youtube.com/results?search_query=alex+maths+continuity+and+differentiability+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 65/2/1 Q29 (3M)', 'CBSE 2020 Delhi Q28 (4M)', 'CBSE SQP 2023-24 Q27 (3M)', 'CBSE 2019 Delhi Q26 (4M)'],
        trendInsight: 'Logarithmic differentiation y = u + v where u = x^(sin x) and finding value of k for continuity at x = c.'
      }
    },
    'Applications of Derivatives': {
      yt: {
        channel: 'Alex Maths Class 12 CBSE',
        title: 'Maxima and Minima 5-Mark Word Problems in Tamil | Optimization',
        lang: 'Tamil / Tanglish',
        duration: '2h 00m Masterclass',
        url: 'https://www.youtube.com/results?search_query=alex+maths+maxima+minima+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 65/1/1 Q34 (5M)', 'CBSE 2020 Delhi Q34 (6M)', 'CBSE SQP 2022-23 Q34 (5M)', 'CBSE 2022 Term-2 Q14 (5M)', 'CBSE 2019 All India Q33 (6M)'],
        trendInsight: 'Geometric optimization: largest cylinder in sphere, rectangle in semicircle, or open box with minimum surface area.'
      }
    },
    'Integrals': {
      yt: {
        channel: 'Alex Maths Class 12 CBSE',
        title: 'Definite Integrals King\'s Rule Properties in Tamil',
        lang: 'Tamil / Tanglish',
        duration: '2h 15m Masterclass',
        url: 'https://www.youtube.com/results?search_query=alex+maths+integrals+class+12+kings+rule'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 65/1/1 Q33 (5M)', 'CBSE 2020 Delhi Q35 (6M)', 'CBSE SQP 2023-24 Q33 (5M)', 'CBSE 2022 Term-2 Q13 (5M)', 'CBSE 2019 Delhi Q34 (6M)'],
        trendInsight: 'King’s rule property ∫[0 to a] f(x) dx = ∫[0 to a] f(a-x) dx used to evaluate ∫[0 to π] (x sin x)/(1+cos²x) dx = π²/4.'
      }
    },
    'Differential Equations': {
      yt: {
        channel: 'Alex Maths Class 12 CBSE',
        title: 'Differential Equations in Tamil | Homogeneous & Linear dy/dx + Py = Q',
        lang: 'Tamil / Tanglish',
        duration: '1h 45m Masterclass',
        url: 'https://www.youtube.com/results?search_query=alex+maths+differential+equations+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2023 CBSE Exams',
        papers: ['CBSE 2023 Set 65/1/1 Q31 (3M)', 'CBSE 2020 Delhi Q30 (4M)', 'CBSE SQP 2022-23 Q31 (3M)', 'CBSE 2019 All India Q29 (4M)'],
        trendInsight: 'Linear differential equations with integrating factor I.F. = e^(∫P dx) and particular solutions with boundary conditions.'
      }
    },
    'Three Dimensional Geometry': {
      yt: {
        channel: 'Alex Maths Class 12 CBSE',
        title: 'Shortest Distance Between Skew Lines in Tamil',
        lang: 'Tamil / Tanglish',
        duration: '1h 30m Masterclass',
        url: 'https://www.youtube.com/results?search_query=alex+maths+shortest+distance+skew+lines+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2024 Set 65/1/1 Q34 (5M)', 'CBSE 2023 Set 65/2/1 Q34 (5M)', 'CBSE 2020 Delhi Q32 (4M)', 'CBSE SQP 2022-23 Q34 (5M)', 'CBSE 2019 Delhi Q32 (4M)'],
        trendInsight: 'Shortest distance between two skew lines d = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂| with vector and cartesian form.'
      }
    },
    'Linear Programming': {
      yt: {
        channel: 'Alex Maths Class 12 CBSE',
        title: 'Linear Programming Corner Point Method in Tamil',
        lang: 'Tamil / Tanglish',
        duration: '1h 00m Masterclass',
        url: 'https://www.youtube.com/results?search_query=alex+maths+linear+programming+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 65/1/1 Q32 (5M)', 'CBSE 2020 Delhi Q31 (4M)', 'CBSE SQP 2023-24 Q32 (5M)', 'CBSE 2019 All India Q31 (4M)'],
        trendInsight: 'Bounded feasible region optimization evaluating objective function Z = ax + by at all vertex corner points.'
      }
    },
    'Probability': {
      yt: {
        channel: 'Alex Maths Class 12 CBSE',
        title: 'Bayes Theorem Word Problems in Tamil',
        lang: 'Tamil / Tanglish',
        duration: '1h 25m Masterclass',
        url: 'https://www.youtube.com/results?search_query=alex+maths+bayes+theorem+class+12'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 65/1/1 Q36 (4M Case)', 'CBSE 2020 Delhi Q36 (6M)', 'CBSE SQP 2022-23 Q36 (4M Case)', 'CBSE 2019 Delhi Q36 (6M)'],
        trendInsight: 'Bayes’ theorem conditional probability tree P(E_i|A) = [P(E_i)P(A|E_i)] / ∑[P(E_j)P(A|E_j)] case study problems.'
      }
    },

    // --- 4. COMPUTER SCIENCE (083) ---
    'Python Functions': {
      yt: {
        channel: 'Tutor Joe\'s Stanley (Tamil)',
        title: 'Python Functions Tutorial in Tamil | Scope LEGB & Default Arguments',
        lang: 'Tamil / Tanglish',
        duration: '1h 15m Masterclass',
        url: 'https://www.youtube.com/results?search_query=tutor+joes+python+functions+tamil'
      },
      crossRef: {
        frequency: 'Appeared 4 times in 2020–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 083 Q19 (2M)', 'CBSE 2020 Delhi Q21 (2M)', 'CBSE SQP 2023-24 Q21 (2M)', 'CBSE 2022 Term-1 Q25'],
        trendInsight: 'LEGB scope resolution (Local, Enclosing, Global, Built-in) and mutable parameter side effects.'
      }
    },
    'File Handling': {
      yt: {
        channel: 'Tutor Joe\'s Stanley (Tamil)',
        title: 'Python File Handling in Tamil | Text, Binary (pickle) & CSV Modules',
        lang: 'Tamil / Tanglish',
        duration: '1h 45m Masterclass',
        url: 'https://www.youtube.com/results?search_query=tutor+joes+python+file+handling+tamil'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 083 Q26 (3M)', 'CBSE 2020 Delhi Q27 (3M)', 'CBSE SQP 2022-23 Q27 (3M)', 'CBSE 2022 Term-2 Q9 (3M)', 'CBSE 2019 Set 083 Q26 (3M)'],
        trendInsight: 'Binary file search and record update using pickle.dump() & pickle.load() with EOFError exception handling.'
      }
    },
    'Data Structures: Stacks': {
      yt: {
        channel: 'Code Tamil',
        title: 'Data Structures: Stack Implementation Push and Pop in Tamil',
        lang: 'Tamil / Tanglish',
        duration: '55m Tutorial',
        url: 'https://www.youtube.com/results?search_query=python+stack+push+pop+tamil'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2020–2024 CBSE Exams',
        papers: ['CBSE 2024 Set 083 Q28 (3M)', 'CBSE 2023 Set 083 Q28 (3M)', 'CBSE SQP 2023-24 Q28 (3M)', 'CBSE 2022 Term-2 Q11 (3M)'],
        trendInsight: 'Push() and Pop() implementation on list simulating LIFO stack with underflow empty check.'
      }
    },
    'Relational Databases and SQL': {
      yt: {
        channel: 'Tutor Joe\'s Stanley (Tamil)',
        title: 'MySQL Full Course in Tamil | GROUP BY, HAVING & 2-Table Joins',
        lang: 'Tamil / Tanglish',
        duration: '2h 30m Masterclass',
        url: 'https://www.youtube.com/results?search_query=tutor+joes+mysql+tutorial+tamil'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 083 Q31 (4M)', 'CBSE 2020 Delhi Q32 (4M)', 'CBSE SQP 2022-23 Q31 (4M)', 'CBSE 2022 Term-2 Q12 (4M)', 'CBSE 2019 Set 083 Q31 (4M)'],
        trendInsight: '4-mark query section testing GROUP BY with HAVING, aggregate functions, and Equi-Join across 2 tables on Primary/Foreign key.'
      }
    },
    'Computer Networks': {
      yt: {
        channel: 'Cyber Tech Tamil',
        title: 'CBSE Class 12 Computer Networks Case Study in Tamil | 80/20 Rule & Server Block',
        lang: 'Tamil / Tanglish',
        duration: '1h 10m Masterclass',
        url: 'https://www.youtube.com/results?search_query=cbse+class+12+computer+networks+case+study+tamil'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 083 Q35 (5M Case)', 'CBSE 2020 Delhi Q35 (5M Case)', 'CBSE SQP 2023-24 Q35 (5M Case)', 'CBSE 2022 Term-2 Q13 (5M)', 'CBSE 2019 Set 083 Q35 (5M)'],
        trendInsight: 'Campus network 5-mark case study: 80/20 rule server placement, repeater needed when cable distance > 100m, switch/hub in each block.'
      }
    },

    // --- 5. ENGLISH CORE (301) ---
    'Writing Skills Box Formats': {
      yt: {
        channel: 'English Academy Tamil',
        title: 'CBSE Class 12 Writing Skills Formats in Tamil | Notice, Invitation & Job Bio-Data',
        lang: 'Tamil / Tanglish',
        duration: '1h 15m Masterclass',
        url: 'https://www.youtube.com/results?search_query=cbse+class+12+notice+writing+invitation+tamil'
      },
      crossRef: {
        frequency: '🔥 Appeared 5 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 301 Q3 (4M)', 'CBSE 2020 Delhi Q3 (4M)', 'CBSE SQP 2022-23 Q4 (5M)', 'CBSE 2022 Term-2 Q3 (5M)', 'CBSE 2019 Delhi Q3 (4M)'],
        trendInsight: 'Notice writing format inside box, formal invitation & reply, and Job Application with tabular Curriculum Vitae.'
      }
    },
    'The Last Lesson': {
      yt: {
        channel: 'Kaizen English Tamil',
        title: 'The Last Lesson Class 12 English Full Summary in Tamil | Linguistic Chauvinism',
        lang: 'Tamil / Tanglish',
        duration: '35m Story Guide',
        url: 'https://www.youtube.com/results?search_query=the+last+lesson+class+12+tamil+summary'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2023 CBSE Exams',
        papers: ['CBSE 2023 Set 301 Q8 (5M)', 'CBSE 2020 Delhi Q9 (6M)', 'CBSE SQP 2023-24 Q8 (5M)', 'CBSE 2019 All India Q9 (6M)'],
        trendInsight: 'M. Hamel’s speech on the French language as the key to freedom and Franz’s emotional realization.'
      }
    },
    'The Rattrap': {
      yt: {
        channel: 'Kaizen English Tamil',
        title: 'The Rattrap Class 12 English in Tamil | Peddler\'s Transformation & Kindness',
        lang: 'Tamil / Tanglish',
        duration: '40m Story Guide',
        url: 'https://www.youtube.com/results?search_query=the+rattrap+class+12+in+tamil'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 301 Q9 (5M)', 'CBSE 2020 Delhi Q10 (6M)', 'CBSE SQP 2022-23 Q9 (5M)', 'CBSE 2019 Delhi Q10 (6M)'],
        trendInsight: 'Metaphor of world as rattrap and Edla Willmansson’s compassionate hospitality redeeming the peddler.'
      }
    },
    'Indigo': {
      yt: {
        channel: 'Kaizen English Tamil',
        title: 'Indigo Class 12 Summary in Tamil | Champaran Satyagraha & Gandhi',
        lang: 'Tamil / Tanglish',
        duration: '35m Story Guide',
        url: 'https://www.youtube.com/results?search_query=indigo+class+12+in+tamil+summary'
      },
      crossRef: {
        frequency: 'Appeared 3 times in 2020–2023 CBSE Exams',
        papers: ['CBSE 2023 Set 301 Q9 (5M)', 'CBSE 2020 Delhi Q10 (6M)', 'CBSE SQP 2023-24 Q9 (5M)'],
        trendInsight: 'Champaran episode as the turning point in Gandhi’s life demonstrating self-reliance and non-violence.'
      }
    },
    'The Enemy': {
      yt: {
        channel: 'Kaizen English Tamil',
        title: 'The Enemy Class 12 Vistas in Tamil | Dr. Sadao\'s Moral Dilemma',
        lang: 'Tamil / Tanglish',
        duration: '45m Story Guide',
        url: 'https://www.youtube.com/results?search_query=the+enemy+class+12+in+tamil+summary'
      },
      crossRef: {
        frequency: '🔥 Appeared 4 times in 2019–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 301 Q10 (5M)', 'CBSE 2020 Delhi Q11 (6M)', 'CBSE SQP 2022-23 Q10 (5M)', 'CBSE 2019 All India Q11 (6M)'],
        trendInsight: 'Dr. Sadao’s ethical conflict between national duty as a Japanese subject and moral duty as a doctor.'
      }
    },
    'A Thing of Beauty': {
      yt: {
        channel: 'Study Lovers Tamil',
        title: 'A Thing of Beauty John Keats Poem in Tamil | Line by Line Explanation',
        lang: 'Tamil / Tanglish',
        duration: '25m Poem Analysis',
        url: 'https://www.youtube.com/results?search_query=a+thing+of+beauty+class+12+in+tamil'
      },
      crossRef: {
        frequency: 'Appeared 3 times in 2020–2023 CBSE Exams',
        papers: ['CBSE 2023 Set 301 Q7 (4M)', 'CBSE 2020 Delhi Q8 (4M)', 'CBSE SQP 2022-23 Q7 (4M)'],
        trendInsight: 'Keatsian philosophy: how beautiful things remove the pall of despondence and act as an endless fountain of immortal drink.'
      }
    },
    'Aunt Jennifer\'s Tigers': {
      yt: {
        channel: 'Study Lovers Tamil',
        title: 'Aunt Jennifer\'s Tigers Adrienne Rich Poem in Tamil | Feminist Symbolism',
        lang: 'Tamil / Tanglish',
        duration: '25m Poem Analysis',
        url: 'https://www.youtube.com/results?search_query=aunt+jennifers+tigers+class+12+in+tamil'
      },
      crossRef: {
        frequency: 'Appeared 3 times in 2020–2024 CBSE Exams',
        papers: ['CBSE 2023 Set 301 Q7 (4M)', 'CBSE 2020 Delhi Q8 (4M)', 'CBSE SQP 2023-24 Q7 (4M)'],
        trendInsight: 'Symbolism of tigers prancing across screen in fearless chivalric certainty vs fluttering ivory needles under wedding band.'
      }
    }
  };

  // Default fallback reference for unlisted or alias topics
  const DEFAULT_CHAPTER_REF = {
    yt: {
      channel: 'Vedantu Master Tamil · CBSE 12',
      title: 'CBSE Class 12 Comprehensive Chapter Revision & Derivations in Tamil',
      lang: 'Tamil / Tanglish',
      duration: '1h 15m Masterclass',
      url: 'https://www.youtube.com/results?search_query=cbse+class+12+tamil+revision'
    },
    crossRef: {
      frequency: '🔥 Recurring 5-Year High-Probability Core',
      papers: ['CBSE 2023 Board Exam', 'CBSE 2022 Term-2', 'CBSE 2020 Delhi Exam', 'CBSE SQP 2023-24'],
      trendInsight: 'Frequently repeated concept with direct numerical application in CBSE 3M and 5M sections.'
    }
  };

  function getChapterRef(chName) {
    if (!chName) return DEFAULT_CHAPTER_REF;
    if (CHAPTER_REFERENCES[chName]) return CHAPTER_REFERENCES[chName];
    const lower = chName.toLowerCase();
    for (const [key, val] of Object.entries(CHAPTER_REFERENCES)) {
      if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
        return val;
      }
    }
    return DEFAULT_CHAPTER_REF;
  }

  // =========================================================================
  // WEEK IN SCOPE STRATEGY & 70-DAY SPRINT ROADMAP
  // =========================================================================
  const WEEK_STRATEGY = {
    'week-1': {
      goal: 'Kickstart Pre-Board II Scoring Baseline & Core Syllabi Foundations',
      whyNow: 'Pre-Board II starts Oct 16. Units 1 & 2 in Physics (Electrostatics), Chemistry (Solutions & Electrochemistry), and Math (Matrices) represent over 40% of the Pre-Board II syllabus. Mastering these foundational derivations first secures an immediate 40+ mark scoring baseline and provides the mathematical prerequisites for Electrodynamics, Kinetics, and Calculus in Week 2.',
      marksCoverage: 'Physics: 16M · Chemistry: 14M · Math: 15M · CS: 12M · English: 18M (~75 Board Marks)',
      rapidCheckpoints: [
        'Physics: Can you derive Gauss Law for an infinite wire from scratch without checking notes?',
        'Chemistry: Can you calculate van \'t Hoff factor i and solve freezing point depression numericals in 5 minutes?',
        'Math: Can you compute adj(A) for a 3×3 matrix and solve AX = B without arithmetic sign errors?',
        'CS: Can you trace LEGB variable resolution and identify global variable mutation traps?',
        'English: Can you explain Franz\'s transformation and M. Hamel\'s linguistic chauvinism essay?'
      ]
    },
    'week-2': {
      goal: 'Master Quantitative Numerical Laws, Reaction Kinetics & File Streams',
      whyNow: 'Building directly upon Week 1 foundations, Week 2 shifts to numerical-heavy chapters where CBSE uses predictable formula questions. Current Electricity (Kirchhoff\'s loop rules and drift velocity), Chemical Kinetics (first-order half-life proofs), and File Handling (binary pickle & CSV streams) have 100% appearance rates in 3M and 5M board sections.',
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
        'English: William Douglas\'s methodical conquest of fear in Deep Water.'
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
        'Physics: Lens Maker\'s Formula 1/f = (μ - 1)(1/R1 - 1/R2) and Astronomical Telescope ray diagram.',
        'Chemistry: SN1 vs SN2 mechanism comparison with Walden inversion of configuration.',
        'Math: King\'s rule definite integral ∫[0 to a] f(x)dx = ∫[0 to a] f(a-x)dx.',
        'CS: Campus network 80/20 server block placement and repeater distance (>100m) rule.',
        'English: Edla Willmansson\'s compassionate redemption of the peddler in The Rattrap.'
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
        'English: Gandhi\'s Champaran Satyagraha in Indigo as a lesson in self-reliance.'
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
        'English: Dr. Sadao\'s conflict between patriotic duty and medical ethics in The Enemy.'
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

  // 10-WEEK SPRINT ARCHITECTURE (Weeks -> Books -> Chapters)
  const WEEK_BOOK_MAP = {
    'week-1': {
      title: 'Week 1 · High-Yield Foundation (Oct 16 – Oct 22)',
      subtitle: 'Target: Pre-Board II Kickoff · 1st Half Syllabi Core',
      books: {
        'physics-1': { label: 'Physics Part I · Electrostatics', subject: 'Physics', icon: 'atom', chapters: ['Electric Charges and Fields', 'Electrostatic Potential and Capacitance'] },
        'chemistry-1': { label: 'Chemistry Part I · Solutions', subject: 'Chemistry', icon: 'flask-conical', chapters: ['Solutions', 'Electrochemistry'] },
        'math-1': { label: 'Mathematics Part I · Matrices', subject: 'Mathematics', icon: 'calculator', chapters: ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices and Determinants'] },
        'cs': { label: 'Computer Science · Python Scope', subject: 'Computer Science', icon: 'binary', chapters: ['Python Functions', 'Functions in Python', 'Python Revision Tour'] },
        'english-1': { label: 'English Flamingo · The Last Lesson', subject: 'English Core', icon: 'book-open', chapters: ['The Last Lesson', 'Lost Spring'] }
      },
      defaultBook: 'physics-1'
    },
    'week-2': {
      title: 'Week 2 · Laws & Numericals (Oct 23 – Oct 29)',
      subtitle: 'Target: Microscopic Ohm\'s Law, Chemical Kinetics, Calculus & File Streams',
      books: {
        'physics-1': { label: 'Physics Part I · Current & Biot-Savart', subject: 'Physics', icon: 'atom', chapters: ['Current Electricity', 'Moving Charges and Magnetism'] },
        'chemistry-1': { label: 'Chemistry Part I · Kinetics & d/f-Block', subject: 'Chemistry', icon: 'flask-conical', chapters: ['Chemical Kinetics', 'd- and f-Block Elements'] },
        'math-1': { label: 'Mathematics Part I · Calculus & Continuity', subject: 'Mathematics', icon: 'calculator', chapters: ['Continuity and Differentiability', 'Matrices and Determinants'] },
        'cs': { label: 'Computer Science · Text, Binary & CSV Files', subject: 'Computer Science', icon: 'binary', chapters: ['File Handling'] },
        'english-1': { label: 'English Writing · Formal Notice & Invite', subject: 'English Core', icon: 'book-open', chapters: ['Writing Skills Box Formats'] }
      },
      defaultBook: 'physics-1'
    },
    'week-3': {
      title: 'Week 3 · Pre-Board II Climax (Oct 30 – Nov 06)',
      subtitle: 'Target: AC Resonance Phasors, Coordination CFT, Maxima-Minima & LIFO Stacks',
      books: {
        'physics-1': { label: 'Physics Part I · AC Resonance & Solenoids', subject: 'Physics', icon: 'atom', chapters: ['Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current'] },
        'chemistry-1': { label: 'Chemistry Part I · Coordination & CFT', subject: 'Chemistry', icon: 'flask-conical', chapters: ['Coordination Compounds'] },
        'math-1': { label: 'Mathematics Part I · Maxima-Minima 5M', subject: 'Mathematics', icon: 'calculator', chapters: ['Applications of Derivatives'] },
        'cs': { label: 'Computer Science · LIFO Stack Structures', subject: 'Computer Science', icon: 'binary', chapters: ['Data Structures: Stacks'] },
        'english-1': { label: 'English Flamingo · Deep Water & Quiet', subject: 'English Core', icon: 'book-open', chapters: ['Deep Water', 'Keeping Quiet'] }
      },
      defaultBook: 'physics-1'
    },
    'week-4': {
      title: 'Week 4 · Diagnostic & SQL (Nov 07 – Nov 15)',
      subtitle: 'Target: Post-PB2 Gap Repair, Galvanometers, Cell EMF Traps, SQL Joins & Bio-Data',
      books: {
        'physics-1': { label: 'Physics Part I & II · Galvanometer & Field', subject: 'Physics', icon: 'atom', chapters: ['Moving Charges and Magnetism', 'Electric Charges and Fields'] },
        'chemistry-1': { label: 'Chemistry Part I & II · Cell EMF & Kohlrausch', subject: 'Chemistry', icon: 'flask-conical', chapters: ['Electrochemistry', 'Solutions'] },
        'math-1': { label: 'Mathematics Part I & II · Log Differentiation', subject: 'Mathematics', icon: 'calculator', chapters: ['Continuity and Differentiability', 'Matrices and Determinants'] },
        'cs': { label: 'Computer Science · SQL Queries & Joins', subject: 'Computer Science', icon: 'binary', chapters: ['Relational Databases and SQL'] },
        'english-1': { label: 'English Writing · Job Application & Bio-Data', subject: 'English Core', icon: 'book-open', chapters: ['Writing Skills Box Formats'] }
      },
      defaultBook: 'physics-1'
    },
    'week-5': {
      title: 'Week 5 · Optics & Organic Mechanisms (Nov 16 – Nov 25)',
      subtitle: 'Target: Lens Maker Formula, SN1/SN2 Inversion, Definite Integrals & Campus Networks',
      books: {
        'physics-2': { label: 'Physics Part II · Ray & Wave Optics', subject: 'Physics', icon: 'atom', chapters: ['Ray Optics and Optical Instruments', 'Wave Optics'] },
        'chemistry-2': { label: 'Chemistry Part II · Haloalkanes & Phenols', subject: 'Chemistry', icon: 'flask-conical', chapters: ['Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers'] },
        'math-2': { label: 'Mathematics Part II · Definite Integrals 5M', subject: 'Mathematics', icon: 'calculator', chapters: ['Integrals'] },
        'cs': { label: 'Computer Science · Campus Networks Case Study', subject: 'Computer Science', icon: 'binary', chapters: ['Computer Networks'] },
        'english-1': { label: 'English Flamingo · The Rattrap', subject: 'English Core', icon: 'book-open', chapters: ['The Rattrap'] }
      },
      defaultBook: 'physics-2'
    },
    'week-6': {
      title: 'Week 6 · Modern Physics & Amines (Nov 26 – Dec 05)',
      subtitle: 'Target: Photoelectric Equation, Bohr Orbit, Carbonyls, Differential Eqns & MySQL',
      books: {
        'physics-2': { label: 'Physics Part II · Photoelectric & Bohr Atom', subject: 'Physics', icon: 'atom', chapters: ['Dual Nature of Radiation and Matter', 'Atoms and Nuclei'] },
        'chemistry-2': { label: 'Chemistry Part II · Aldehydes & Amines', subject: 'Chemistry', icon: 'flask-conical', chapters: ['Aldehydes, Ketones and Carboxylic Acids', 'Amines'] },
        'math-2': { label: 'Mathematics Part II · Differential Equations', subject: 'Mathematics', icon: 'calculator', chapters: ['Differential Equations'] },
        'cs': { label: 'Computer Science · Python MySQL Interface', subject: 'Computer Science', icon: 'binary', chapters: ['Python Revision Tour', 'Relational Databases and SQL'] },
        'english-1': { label: 'English Flamingo · Indigo & Keats', subject: 'English Core', icon: 'book-open', chapters: ['Indigo', 'A Thing of Beauty'] }
      },
      defaultBook: 'physics-2'
    },
    'week-7': {
      title: 'Week 7 · 3D Lines & Semiconductors (Dec 06 – Dec 18)',
      subtitle: 'Target: Full-Wave Rectifiers, Biomolecules Glucose, 3D Skew Lines & Dr. Sadao\'s Dilemma',
      books: {
        'physics-2': { label: 'Physics Part II · Rectifiers & Binding Energy', subject: 'Physics', icon: 'atom', chapters: ['Semiconductor Electronics', 'Atoms and Nuclei'] },
        'chemistry-2': { label: 'Chemistry Part II · Biomolecules Glucose & DNA', subject: 'Chemistry', icon: 'flask-conical', chapters: ['Biomolecules', 'd- and f-Block Elements'] },
        'math-2': { label: 'Mathematics Part II · 3D Skew Lines & LPP', subject: 'Mathematics', icon: 'calculator', chapters: ['Three Dimensional Geometry', 'Linear Programming'] },
        'cs': { label: 'Computer Science · Full Stack CS Blueprint', subject: 'Computer Science', icon: 'binary', chapters: ['Computer Networks', 'Data Structures: Stacks'] },
        'english-2': { label: 'English Vistas · The Enemy & Tigers', subject: 'English Core', icon: 'book-open', chapters: ['The Enemy', 'Aunt Jennifer\'s Tigers'] }
      },
      defaultBook: 'physics-2'
    },
    'week-8': {
      title: 'Week 8 · 10-Year Board Paper Sprint (Dec 19 – Dec 31)',
      subtitle: 'Target: Recurring 10-Year High-Probability Questions Across All 5 Subjects',
      books: {
        'physics': { label: 'Physics · 10-Year High-Probability Repeats', subject: 'Physics', icon: 'atom', chapters: ['Electric Charges and Fields', 'Current Electricity', 'Alternating Current', 'Ray Optics and Optical Instruments'] },
        'chemistry': { label: 'Chemistry · 10-Year High-Probability Repeats', subject: 'Chemistry', icon: 'flask-conical', chapters: ['Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Haloalkanes and Haloarenes'] },
        'math': { label: 'Mathematics · 10-Year 5M Repeats', subject: 'Mathematics', icon: 'calculator', chapters: ['Matrices and Determinants', 'Applications of Derivatives', 'Integrals', 'Three Dimensional Geometry'] },
        'cs': { label: 'Computer Science · 10-Year 4M/8M Case Repeats', subject: 'Computer Science', icon: 'binary', chapters: ['File Handling', 'Data Structures: Stacks', 'Relational Databases and SQL', 'Computer Networks'] },
        'english': { label: 'English Core · 10-Year Format & Essay Repeats', subject: 'English Core', icon: 'book-open', chapters: ['Writing Skills Box Formats', 'The Last Lesson', 'The Rattrap', 'The Enemy'] }
      },
      defaultBook: 'physics'
    },
    'week-9': {
      title: 'Week 9 · January Model Exam (Full 3h Mocks)',
      subtitle: 'Target: Full Syllabus 3-Hour Timed Board Simulations (Jan 2027 Model Exams)',
      books: {
        'physics': { label: 'Physics · Full Syllabus Model Mock', subject: 'Physics', icon: 'atom', chapters: ['Electric Charges and Fields', 'Current Electricity', 'Moving Charges and Magnetism', 'Alternating Current', 'Ray Optics and Optical Instruments', 'Semiconductor Electronics'] },
        'chemistry': { label: 'Chemistry · Full Syllabus Model Mock', subject: 'Chemistry', icon: 'flask-conical', chapters: ['Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Coordination Compounds', 'Haloalkanes and Haloarenes', 'Aldehydes, Ketones and Carboxylic Acids', 'Biomolecules'] },
        'math': { label: 'Mathematics · Full Syllabus Model Mock', subject: 'Mathematics', icon: 'calculator', chapters: ['Relations and Functions', 'Matrices and Determinants', 'Continuity and Differentiability', 'Applications of Derivatives', 'Integrals', 'Differential Equations', 'Three Dimensional Geometry', 'Probability'] },
        'cs': { label: 'Computer Science · Full Syllabus Model Mock', subject: 'Computer Science', icon: 'binary', chapters: ['Functions in Python', 'File Handling', 'Data Structures: Stacks', 'Relational Databases and SQL', 'Computer Networks'] },
        'english': { label: 'English Core · Full Syllabus Model Mock', subject: 'English Core', icon: 'book-open', chapters: ['Writing Skills Box Formats', 'The Last Lesson', 'The Rattrap', 'Indigo', 'The Enemy', 'A Thing of Beauty', 'Aunt Jennifer\'s Tigers'] }
      },
      defaultBook: 'physics'
    },
    'week-10': {
      title: 'Week 10 · Formula & Code Ledgers (Jan 16 – Board Kickoff)',
      subtitle: 'Target: High-Yield Formulae, Derivations, Named Reactions, Code Blueprints & Formats',
      books: {
        'physics': { label: 'Physics Formula & Derivations Ledger', subject: 'Physics', icon: 'atom', chapters: [] },
        'chemistry': { label: 'Chemistry Named Reactions & Laws', subject: 'Chemistry', icon: 'flask-conical', chapters: [] },
        'math': { label: 'Mathematics Integral & Matrix Ledger', subject: 'Mathematics', icon: 'calculator', chapters: [] },
        'cs': { label: 'Computer Science Algorithms & Syntax', subject: 'Computer Science', icon: 'binary', chapters: [] },
        'english': { label: 'English Box Formats & Mark Breakdown', subject: 'English Core', icon: 'book-open', chapters: [] }
      },
      defaultBook: 'physics'
    }
  };

  // High-Yield Formula & Derivation Ledgers
  const FORMULA_LEDGER = [
    {
      subject: 'Physics',
      category: 'Electrostatics & Current Electricity',
      items: [
        {
          name: 'Gauss\'s Law & Field of Infinite Wire',
          formula: '∮ E · dA = q_enclosed / ε₀  ⟹  E = λ / (2πε₀r)',
          notes: 'λ is linear charge density. Cylindrical Gaussian surface; flat end caps contribute zero flux.'
        },
        {
          name: 'Capacitor with Dielectric Slab',
          formula: 'C = ε₀ A / [d - t(1 - 1/K)]',
          notes: 't < d. If slab fills entire space (t = d), C = K · C₀. Potential decreases while charge remains constant on isolated plate.'
        },
        {
          name: 'Drift Velocity & Ohm\'s Law in Microscopic Form',
          formula: 'v_d = (e E τ) / m ,   J = n e v_d = σ E ,   ρ = m / (n e² τ)',
          notes: 'τ = mean relaxation time. As temperature rises in metals, τ decreases, hence resistivity ρ increases.'
        },
        {
          name: 'Biot-Savart Law on Axis of Circular Current Loop',
          formula: 'B_axis = [μ₀ I R²] / [2(R² + x²)^(3/2)]',
          notes: 'At center (x = 0): B = μ₀ I / (2R). Components perpendicular to axis cancel by symmetry.'
        }
      ]
    },
    {
      subject: 'Physics',
      category: 'Magnetism, AC & Optics',
      items: [
        {
          name: 'Ampere\'s Circuital Law & Long Solenoid',
          formula: '∮ B · dl = μ₀ I_enclosed  ⟹  B = μ₀ n I',
          notes: 'n = N / L is number of turns per unit length. Inside ideal long solenoid, field is uniform and axial.'
        },
        {
          name: 'Series LCR Resonance & Q-Factor',
          formula: 'Z = √[R² + (X_L - X_C)²],   ω_r = 1 / √(LC),   Q = (ω_r L) / R = (1 / R) √(L / C)',
          notes: 'At resonance: current is maximum (I₀ = V₀ / R), power factor cos φ = 1, voltage across L and C cancel out.'
        },
        {
          name: 'Lens Maker\'s Formula & Thin Lens',
          formula: '1 / f = (μ - 1) [ (1 / R₁) - (1 / R₂) ]',
          notes: 'Derived by applying single spherical surface refraction n₂/v - n₁/u = (n₂ - n₁)/R twice.'
        },
        {
          name: 'Astronomical Telescope Normal Adjustment',
          formula: 'm = - f_o / f_e ,   L = f_o + f_e',
          notes: 'Objective has large focal length and large aperture; eye-piece has small focal length.'
        }
      ]
    },
    {
      subject: 'Chemistry',
      category: 'Physical & Coordination Chemistry',
      items: [
        {
          name: 'Nernst Equation for Single Electrode & Cell',
          formula: 'E_cell = E°_cell - (0.0591 / n) log Q   [at 298 K]',
          notes: 'ΔG° = - n F E°_cell ,   log K_c = (n E°_cell) / 0.0591. Solvents and pure solids have unit activity.'
        },
        {
          name: 'Freezing Point Depression & van \'t Hoff factor',
          formula: 'ΔT_f = i · K_f · m = i · K_f · (1000 · w₂) / (M₂ · w₁)',
          notes: 'i = 1 - α + nα for dissociation; i = 1 - (1 - 1/n)α for association.'
        },
        {
          name: 'First-Order Integrated Rate Equation',
          formula: 'k = (2.303 / t) log [R]₀ / [R] ,   t_1/2 = 0.693 / k',
          notes: 'Half-life of first-order reaction is completely independent of initial reactant concentration.'
        },
        {
          name: 'Octahedral Crystal Field Splitting (CFT)',
          formula: 'Δ_o splitting:  t_2g (-0.4 Δ_o)  and  e_g (+0.6 Δ_o)',
          notes: 'If Δ_o > P (strong field): low spin, pairing occurs. If Δ_o < P (weak field): high spin.'
        }
      ]
    },
    {
      subject: 'Mathematics',
      category: 'Matrices, Calculus & Vectors',
      items: [
        {
          name: 'Matrix Inversion & Solution of Linear Systems',
          formula: 'A X = B  ⟹  X = A⁻¹ B = (1 / |A|) · adj(A) · B',
          notes: 'adj(A) = [C_ij]^T (transpose of cofactor matrix). System has unique solution if |A| ≠ 0.'
        },
        {
          name: 'King\'s Rule of Definite Integrals',
          formula: '∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx',
          notes: 'Add original integral I and transformed integral I to eliminate tough denominators.'
        },
        {
          name: 'Shortest Distance Between Two Skew Lines',
          formula: 'd = | (a₂ - a₁) · (b₁ × b₂) | / | b₁ × b₂ |',
          notes: 'If lines are parallel: d = | (a₂ - a₁) × b | / | b |. Lines intersect if d = 0.'
        },
        {
          name: 'Bayes\' Theorem of Conditional Probability',
          formula: 'P(E_i | A) = [ P(E_i) · P(A | E_i) ] / ∑ [ P(E_j) · P(A | E_j) ]',
          notes: 'E_i are mutually exclusive and exhaustive partition events.'
        }
      ]
    },
    {
      subject: 'Computer Science',
      category: 'Python, SQL & Networking',
      items: [
        {
          name: 'Python Binary & Text File Operations',
          formula: 'pickle.dump(object, file_binary),   pickle.load(file_binary)',
          notes: 'Open binary in "ab" or "rb" mode. Use try...except EOFError for reading.'
        },
        {
          name: 'SQL Aggregate & Clause Execution Order',
          formula: 'FROM ⟶ WHERE ⟶ GROUP BY ⟶ HAVING ⟶ SELECT ⟶ ORDER BY',
          notes: 'WHERE filters tuples before grouping; HAVING filters aggregated groups.'
        },
        {
          name: '80/20 Network Server & Repeater Placement Rule',
          formula: 'Place server in block with max computers; Place repeater when distance > 100m',
          notes: 'Switches/Hubs needed in every block with multiple computers.'
        }
      ]
    }
  ];

  // Helper for localStorage mastery state
  const STORAGE_KEY = 'hm_board_sprints_mastered';
  function getMasteredSet() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return new Set(raw ? JSON.parse(raw) : []);
    } catch {
      return new Set();
    }
  }
  function saveMasteredSet(set) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
    } catch (e) {
      console.error(e);
    }
  }

  // Active in-memory state
  const state = {
    week: 'week-1',
    book: 'physics-1',
    marks: 'all',
    search: '',
    formulaCategory: 'all'
  };

  // Build unified questions list from HM.allProbableQuestions
  function getAllQuestions() {
    const raw = HM.allProbableQuestions || {};
    const list = [];
    const seen = new Set();

    Object.entries(raw).forEach(([chName, qList]) => {
      const subject = CHAPTER_SUBJECT[chName] || 'General';
      const ref = getChapterRef(chName);
      qList.forEach(q => {
        if (!seen.has(q.id)) {
          seen.add(q.id);
          list.push({
            ...q,
            chapter: chName,
            subject,
            youtube: q.youtube || ref.yt,
            crossRef: q.crossRef || ref.crossRef,
            sprint: (q.marks >= 4 || chName.includes('Charges') || chName.includes('Solutions') || chName.includes('Matrices') || chName.includes('File Handling')) ? 'pb2' : 'model'
          });
        }
      });
    });

    return list;
  }

  // Parse Route to Extract Week and Book
  function parseSprintRoute(route) {
    // Expected patterns:
    // study/board-sprints (Master Overview)
    // study/board-sprints/week-X
    // study/board-sprints/week-X/book-Y
    // study/board-sprints/formulae
    if (!route || typeof route !== 'string') {
      return { isOverview: true, week: 'week-1', book: 'physics-1', isFormulae: false };
    }

    if (route.includes('formulae') || route.endsWith('/formulae')) {
      return { isOverview: false, week: 'week-10', book: 'physics', isFormulae: true };
    }

    const parts = route.split('/').filter(Boolean);
    // parts[0] = 'study', parts[1] = 'board-sprints'
    if (parts.length <= 2 || parts[2] === 'overview') {
      return { isOverview: true, week: 'week-1', book: 'physics-1', isFormulae: false };
    }

    let week = 'week-1';
    let book = null;

    if (parts[2]) {
      if (parts[2].startsWith('week-')) {
        week = parts[2];
        if (parts[3]) {
          book = parts[3];
        }
      } else if (parts[2] === 'pb2') {
        week = 'week-1';
      } else if (parts[2] === 'model') {
        week = 'week-9';
      } else if (parts[2] === 'questions') {
        week = 'week-8';
      }
    }

    const weekConfig = WEEK_BOOK_MAP[week] || WEEK_BOOK_MAP['week-1'];
    if (!book || !weekConfig.books[book]) {
      book = weekConfig.defaultBook;
    }

    return { isOverview: false, week, book, isFormulae: week === 'week-10' };
  }

  // Countdown Helper
  function getCountdownStats() {
    const now = new Date('2026-10-11T14:40:00+05:30');
    const pb2Date = new Date('2026-10-16T09:00:00+05:30');
    const modelDate = new Date('2027-01-04T09:00:00+05:30');

    const pb2Diff = Math.max(0, pb2Date - now);
    const modelDiff = Math.max(0, modelDate - now);

    return {
      pb2Days: Math.max(0, Math.floor(pb2Diff / (1000 * 60 * 60 * 24))),
      modelDays: Math.max(0, Math.floor(modelDiff / (1000 * 60 * 60 * 24)))
    };
  }

  // HTML escaping utility
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Master 75-Day Board Sprint Concept Dashboard (Only rendered on #/study/board-sprints overview)
  function renderMasterBoardSprintDashboard() {
    const allQuestions = getAllQuestions();
    const mastered = getMasteredSet();
    const countdown = getCountdownStats();
    const masteredTotal = allQuestions.filter(q => mastered.has(q.id)).length;
    const masteredPercent = allQuestions.length > 0 ? Math.round((masteredTotal / allQuestions.length) * 100) : 0;

    return `
      <div class="board-sprints-container master-sprint-container zen-focus-container" id="boardSprintsContainer">
        <!-- MASTER HERO SECTION -->
        <header class="master-sprint-hero">
          <div class="master-hero-content">
            <div class="master-badge-row">
              <span class="hero-badge"><i data-lucide="compass"></i> CBSE Class 12 · 75-Day Master Strategy</span>
              <span class="hero-subbadge"><i data-lucide="shield-check"></i> 2015–2024 Past 10-Year Question Bank</span>
              <span class="hero-tag">Bestseller Methodology</span>
            </div>
            <h1 class="master-title">75-Day Exam Sprint Master Plan</h1>
            <p class="master-subtitle">A direct, question-driven exam validation system engineered to secure 95%+ across Physics (042), Chemistry (043), Mathematics (041), Computer Science (083), and English Core (301).</p>
          </div>
          <div class="master-hero-actions">
            <button type="button" class="btn-zen-action" onclick="location.hash='#/global/overview'" title="Exit sprint and return to Home">
              <i data-lucide="house"></i>
              <span>Home</span>
            </button>
            <button type="button" class="btn-zen-action" onclick="window.print()" title="Print Full 75-Day Roadmap">
              <i data-lucide="printer"></i>
              <span>Print Plan</span>
            </button>
          </div>
        </header>

        <!-- COUNTDOWN & VELOCITY SHELF -->
        <section class="master-countdown-shelf">
          <div class="master-stat-card highlight-pb2">
            <div class="stat-icon"><i data-lucide="target"></i></div>
            <div class="stat-body">
              <span class="stat-label">Pre-Board II Kickoff</span>
              <div class="stat-val-row">
                <span class="stat-number">${countdown.pb2Days}</span>
                <span class="stat-unit">Days Left</span>
              </div>
              <span class="stat-desc">Target: 45+ Foundation Baseline</span>
            </div>
          </div>
          <div class="master-stat-card highlight-model">
            <div class="stat-icon"><i data-lucide="calendar-check"></i></div>
            <div class="stat-body">
              <span class="stat-label">January Model Exam</span>
              <div class="stat-val-row">
                <span class="stat-number">${countdown.modelDays}</span>
                <span class="stat-unit">Days Left</span>
              </div>
              <span class="stat-desc">Target: 3-Hour Timed Simulation</span>
            </div>
          </div>
          <div class="master-stat-card highlight-velocity">
            <div class="stat-icon"><i data-lucide="gauge"></i></div>
            <div class="stat-body">
              <span class="stat-label">10-Year Question Bank</span>
              <div class="stat-val-row">
                <span class="stat-number">${allQuestions.length}</span>
                <span class="stat-unit">Authentic Qs</span>
              </div>
              <span class="stat-desc">64 Chapters · Step-Marking & Traps</span>
            </div>
          </div>
          <div class="master-stat-card highlight-mastery">
            <div class="stat-icon"><i data-lucide="award"></i></div>
            <div class="stat-body">
              <span class="stat-label">Preparedness Mastery</span>
              <div class="stat-val-row">
                <span class="stat-number">${masteredTotal}/${allQuestions.length}</span>
                <span class="stat-unit">Mastered</span>
              </div>
              <span class="stat-desc">${masteredPercent}% Verified Ready</span>
            </div>
          </div>
        </section>

        <!-- SPRINT CONCEPT & PEDAGOGICAL BREAKDOWN -->
        <section class="sprint-concept-section">
          <div class="concept-header">
            <div class="concept-title-wrap">
              <i data-lucide="sparkles"></i>
              <h2>The 75-Day Sprint Architecture: How & Why It Works</h2>
            </div>
            <span class="concept-badge">Zero Cognitive Overload · 100% Preparedness Validation</span>
          </div>

          <div class="concept-cards-grid">
            <div class="concept-card">
              <div class="concept-card-head">
                <span class="phase-number">PHASE 1</span>
                <h3>Weeks 1–3 · High-Yield Foundation & Pre-Board II</h3>
              </div>
              <p>Targets the heaviest, foundational units: Electrostatics, Solutions, Chemical Kinetics, Matrices, Python Scope, and Writing Formats. Completing these secures an immediate 45+ mark baseline and provides the mathematical and chemical foundations for the rest of the syllabus.</p>
              <div class="phase-meta">
                <span><i data-lucide="check-circle-2"></i> 40% of Total Board Marks</span>
                <span><i data-lucide="clock"></i> Oct 16 – Nov 06</span>
              </div>
            </div>

            <div class="concept-card">
              <div class="concept-card-head">
                <span class="phase-number">PHASE 2</span>
                <h3>Weeks 4–7 · Advanced Core & Syllabi Completion</h3>
              </div>
              <p>Covers optics, organic reaction mechanisms, King's rule definite integrals, campus networks, and Dr. Sadao's moral dilemma. Completes 100% of the Class 12 curriculum before mid-December, leaving Weeks 8–10 entirely clear for intense paper rehearsal.</p>
              <div class="phase-meta">
                <span><i data-lucide="check-circle-2"></i> 100% Curriculum Done</span>
                <span><i data-lucide="clock"></i> Nov 07 – Dec 18</span>
              </div>
            </div>

            <div class="concept-card">
              <div class="concept-card-head">
                <span class="phase-number">PHASE 3</span>
                <h3>Weeks 8–10 · 10-Yr Past Papers, 3h Mocks & Ledgers</h3>
              </div>
              <p>Shifts entirely from learning to testing endurance and retrieval speed. Focuses on recurring 2015–2024 board questions, 3-hour timed board simulations, and rapid formula and code retrieval ledgers for the final exam morning.</p>
              <div class="phase-meta">
                <span><i data-lucide="check-circle-2"></i> Peak Exam Temperament</span>
                <span><i data-lucide="clock"></i> Dec 19 – Board Exams</span>
              </div>
            </div>
          </div>
        </section>

        <!-- REVERSE-ENGINEERED BESTSELLER EXAM-CRACKING SYSTEM -->
        <section class="bestseller-system-section">
          <div class="system-header">
            <div class="system-title-wrap">
              <i data-lucide="book-open-check"></i>
              <h2>The Amazon #1 Bestseller Prep System (Educart / Oswaal Method)</h2>
            </div>
            <span class="system-badge">Direct Question Validation Beats Passive Reading</span>
          </div>

          <div class="system-pillars-grid">
            <div class="system-pillar">
              <div class="pillar-icon caution-icon"><i data-lucide="alert-triangle"></i></div>
              <div class="pillar-content">
                <h4>80% Examiner Caution Traps</h4>
                <p>Showing only the model answer creates a false sense of mastery. Each question explicitly flags the pitfall where 80% of students lose marks (e.g., forgetting underflow check, missing units, or inverting integration limits).</p>
              </div>
            </div>

            <div class="system-pillar">
              <div class="pillar-icon topper-icon"><i data-lucide="crown"></i></div>
              <div class="pillar-content">
                <h4>Topper's Step-Marking Edge</h4>
                <p>Learn how CBSE examiners evaluate answer sheets step-by-step. Discover exact keywords, boxing final answers, drawing clear pencil diagrams, and structuring derivations to guarantee 100/100 step marks.</p>
              </div>
            </div>

            <div class="system-pillar">
              <div class="pillar-icon pacing-icon"><i data-lucide="timer"></i></div>
              <div class="pillar-content">
                <h4>1.5 Min/Mark Exam Pacing</h4>
                <p>Budget your 180-minute paper with precision: 1M MCQs in 1.5 min, 2M in 3.5 min, 3M in 5 min, and 5M in 10-12 min. This guarantees completing the paper with 20 minutes left for thorough error checking.</p>
              </div>
            </div>

            <div class="system-pillar">
              <div class="pillar-icon mnemonic-icon"><i data-lucide="lightbulb"></i></div>
              <div class="pillar-content">
                <h4>Memory Hooks & Mnemonics</h4>
                <p>Rapid recall formulas and reaction acronyms (e.g. <em>LEGB for Python Scope</em>, <em>King's Rule for Definite Integrals</em>, <em>SN2 Walden Inversion</em>) to instantly trigger retrieval under high exam pressure.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- SUBJECT WEIGHTAGE & STRATEGY MATRIX -->
        <section class="subjects-matrix-section">
          <div class="matrix-header">
            <i data-lucide="layers"></i>
            <h2>Subject Syllabus Weightage & High-Yield Blueprint</h2>
          </div>
          <div class="subjects-matrix-grid">
            <div class="subject-card phys-border">
              <div class="sub-head">
                <span class="sub-code">PHYSICS 042</span>
                <span class="sub-marks">70 Marks Theory</span>
              </div>
              <ul class="sub-topics-list">
                <li><strong>Electrodynamics (Ch 1-4):</strong> 16 Marks · Gauss Law & Drift Velocity</li>
                <li><strong>Optics (Ch 9-10):</strong> 18 Marks · Lens Maker & Huygens Proof</li>
                <li><strong>AC & Solenoids (Ch 5-7):</strong> 14 Marks · LCR Resonance Phasor</li>
                <li><strong>Modern Physics & Semi (Ch 11-14):</strong> 22 Marks · Rectifiers & Bohr Orbit</li>
              </ul>
            </div>

            <div class="subject-card chem-border">
              <div class="sub-head">
                <span class="sub-code">CHEMISTRY 043</span>
                <span class="sub-marks">70 Marks Theory</span>
              </div>
              <ul class="sub-topics-list">
                <li><strong>Physical Chemistry (Ch 1-3):</strong> 23 Marks · Raoult, Nernst, Kinetics</li>
                <li><strong>Inorganic (d/f-Block, Coord):</strong> 14 Marks · Lanthanoids & CFT Δ₀</li>
                <li><strong>Organic Chemistry (Ch 6-9):</strong> 28 Marks · SN1/SN2, Aldol, Amines</li>
                <li><strong>Biomolecules (Ch 10):</strong> 5 Marks · Glucose Reactions & DNA/RNA</li>
              </ul>
            </div>

            <div class="subject-card math-border">
              <div class="sub-head">
                <span class="sub-code">MATHEMATICS 041</span>
                <span class="sub-marks">80 Marks Theory</span>
              </div>
              <ul class="sub-topics-list">
                <li><strong>Calculus (Ch 5-9):</strong> 35 Marks · Maxima-Minima, King's Rule & DE</li>
                <li><strong>Vectors & 3D Geometry (Ch 10-11):</strong> 14 Marks · Skew Lines Distance</li>
                <li><strong>Algebra (Matrices & Det):</strong> 10 Marks · AX = B Inversion</li>
                <li><strong>Relations, LPP & Probability:</strong> 21 Marks · Bayes' Theorem & LPP</li>
              </ul>
            </div>

            <div class="subject-card cs-border">
              <div class="sub-head">
                <span class="sub-code">COMPUTER SCIENCE 083</span>
                <span class="sub-marks">70 Marks Theory</span>
              </div>
              <ul class="sub-topics-list">
                <li><strong>Computational Thinking & Python:</strong> 40 Marks · Files, Scope, Stacks</li>
                <li><strong>Relational DB & SQL:</strong> 20 Marks · GROUP BY, HAVING, 2-Table Joins</li>
                <li><strong>Computer Networks:</strong> 10 Marks · 80/20 Campus Case Study</li>
              </ul>
            </div>

            <div class="subject-card eng-border">
              <div class="sub-head">
                <span class="sub-code">ENGLISH CORE 301</span>
                <span class="sub-marks">80 Marks Theory</span>
              </div>
              <ul class="sub-topics-list">
                <li><strong>Literature (Flamingo & Vistas):</strong> 40 Marks · Deep Value Points</li>
                <li><strong>Creative Writing Formats:</strong> 18 Marks · Notice, Invite, Bio-Data</li>
                <li><strong>Reading Comprehension:</strong> 22 Marks · Unseen Inference Skills</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 10-WEEK EXECUTION ROADMAP CARDS -->
        <section class="roadmap-section">
          <div class="roadmap-header">
            <div class="roadmap-title-wrap">
              <i data-lucide="calendar"></i>
              <h2>10-Week Execution Roadmap · Direct Training Decks</h2>
            </div>
            <p class="roadmap-note">Select any week to enter its focused, quiet question-and-answer training deck. Zero clutter, pure active recall.</p>
          </div>

          <div class="roadmap-grid">
            ${Object.entries(WEEK_BOOK_MAP).map(([wKey, wConf]) => {
              const strat = WEEK_STRATEGY[wKey] || WEEK_STRATEGY['week-1'];
              const isLead = wKey === 'week-1' || wKey === 'week-2' || wKey === 'week-3';
              return `
                <article class="roadmap-card ${isLead ? 'lead-card' : ''}">
                  <div class="roadmap-card-top">
                    <div class="w-badge-row">
                      <span class="w-num-pill">${escapeHtml(wKey.toUpperCase())}</span>
                      <span class="w-weight-pill">${escapeHtml(strat.marksCoverage.split('·')[0].trim())}</span>
                    </div>
                    <h3 class="w-card-title">${escapeHtml(wConf.title)}</h3>
                    <p class="w-card-sub">${escapeHtml(wConf.subtitle)}</p>
                  </div>

                  <div class="w-card-body">
                    <div class="w-strategy-block">
                      <strong><i data-lucide="target"></i> Strategic Scope:</strong>
                      <p>${escapeHtml(strat.goal)}</p>
                    </div>

                    <div class="w-books-row">
                      ${Object.values(wConf.books).map(b => `
                        <span class="w-mini-book-badge">
                          <i data-lucide="${b.icon}"></i>
                          <span>${escapeHtml(b.label.split('·')[0].trim())}</span>
                        </span>
                      `).join('')}
                    </div>

                    <div class="w-checkpoints-mini">
                      <strong>Rapid Validation Checkpoints:</strong>
                      <ul>
                        ${strat.rapidCheckpoints.slice(0, 2).map(cp => `<li>${escapeHtml(cp)}</li>`).join('')}
                      </ul>
                    </div>
                  </div>

                  <div class="w-card-footer">
                    <button type="button" class="btn-enter-week" onclick="location.hash='#/study/board-sprints/${wKey}'">
                      <span>Enter ${escapeHtml(wKey.toUpperCase())} Training Deck</span>
                      <i data-lucide="arrow-right"></i>
                    </button>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </section>

        <!-- OFFICIAL CBSE COMPUTER SCIENCE SOURCES -->
        <section class="official-cs-question-bank">
          <div class="roadmap-header">
            <div class="roadmap-title-wrap"><i data-lucide="file-question"></i><h2>CBSE Class 12 Computer Science · official question bank</h2></div>
            <p class="roadmap-note">Questions and marking schemes downloaded from CBSE Academic. Use the question bank for practice, then open the matching marking scheme to review the expected answer points.</p>
          </div>
          <div class="official-cs-resource-grid">
            <a href="assets/exam-papers/cbse-class12-computer-science/question-bank.pdf" target="_blank" rel="noopener noreferrer"><i data-lucide="book-open"></i><span><b>CBSE Question Bank</b><small>Python, files, data structures, SQL and networks · answers included in the official PDF</small></span></a>
            <a href="assets/exam-papers/cbse-class12-computer-science/2025-26-sqp.pdf" target="_blank" rel="noopener noreferrer"><i data-lucide="clipboard-list"></i><span><b>2025–26 Sample Question Paper</b><small>37 questions · 70 marks · current paper structure</small></span></a>
            <a href="assets/exam-papers/cbse-class12-computer-science/2025-26-ms.pdf" target="_blank" rel="noopener noreferrer"><i data-lucide="badge-check"></i><span><b>2025–26 Marking Scheme</b><small>Answer points and mark allocation for the sample paper</small></span></a>
            <a href="assets/exam-papers/cbse-class12-computer-science/2024-25-ms.pdf" target="_blank" rel="noopener noreferrer"><i data-lucide="file-check-2"></i><span><b>2024–25 Marking Scheme</b><small>Additional worked answer reference for revision</small></span></a>
            <a href="assets/exam-papers/cbse-class12-computer-science/practice-questions.pdf" target="_blank" rel="noopener noreferrer"><i data-lucide="layers-3"></i><span><b>Practice Questions</b><small>Additional downloaded question set for chapter practice</small></span></a>
            <a href="assets/exam-papers/cbse-class12-computer-science/practice-questions-marking-scheme.pdf" target="_blank" rel="noopener noreferrer"><i data-lucide="list-checks"></i><span><b>Practice Marking Scheme</b><small>Use after completing the interactive deck</small></span></a>
            <a href="assets/exam-papers/cbse-class12-computer-science/2015-16-sqp-set2.pdf" target="_blank" rel="noopener noreferrer"><i data-lucide="history"></i><span><b>Archive Paper · 2015–16</b><small>Extra historical question patterns</small></span></a>
            <a href="assets/exam-papers/cbse-class12-computer-science/2016-17-sqp.pdf" target="_blank" rel="noopener noreferrer"><i data-lucide="history"></i><span><b>Archive Paper · 2016–17</b><small>Extra historical question patterns</small></span></a>
            <a href="assets/exam-papers/cbse-class12-computer-science/2018-19-sqp.pdf" target="_blank" rel="noopener noreferrer"><i data-lucide="history"></i><span><b>Archive Paper · 2018–19</b><small>Extra historical question patterns</small></span></a>
          </div>
          <div class="official-cs-interactive-note"><i data-lucide="mouse-pointer-click"></i><span><b>Interactive practice is above this source shelf.</b> Enter any weekly training deck to answer one question at a time, reveal the model answer and explanation, mark it mastered and track the error pattern. PDFs remain available only as official reference copies.</span></div>
        </section>
      </div>
    `;
  }

  // Main View Renderer
  function boardSprintsView(routeParam) {
    const routeInfo = parseSprintRoute(routeParam);
    if (routeInfo.isOverview) {
      return renderMasterBoardSprintDashboard();
    }

    const { week, book, isFormulae } = routeInfo;
    state.week = week;
    state.book = book;

    const currentWeekConf = WEEK_BOOK_MAP[week] || WEEK_BOOK_MAP['week-1'];
    const currentBookConf = currentWeekConf.books[book] || currentWeekConf.books[currentWeekConf.defaultBook];

    const mastered = getMasteredSet();
    const allQuestions = getAllQuestions();
    const countdown = getCountdownStats();

    // Filter questions by selected week and book
    const targetChapters = currentBookConf ? currentBookConf.chapters : [];
    const targetSubject = currentBookConf ? currentBookConf.subject : null;

    const filteredQuestions = allQuestions.filter(q => {
      // Must match subject
      if (targetSubject && q.subject !== targetSubject) return false;
      // If chapters are specified for this book in this week, match them with alias resilience
      if (targetChapters.length > 0) {
        const matches = targetChapters.some(tc => {
          const t = tc.toLowerCase();
          const qc = q.chapter.toLowerCase();
          return t === qc || t.includes(qc) || qc.includes(t);
        });
        if (!matches) return false;
      }
      // Marks filter
      if (state.marks !== 'all' && String(q.marks) !== String(state.marks)) return false;
      // Search query
      if (state.search.trim()) {
        const query = state.search.toLowerCase().trim();
        const text = `${q.chapter} ${q.stem} ${q.subject} ${q.type || ''} ${q.year || ''} ${q.modelAnswer || ''} ${q.youtube?.title || ''} ${q.youtube?.channel || ''} ${(q.crossRef?.papers || []).join(' ')}`.toLowerCase();
        if (!text.includes(query)) return false;
      }
      return true;
    });

    const masteredInBook = filteredQuestions.filter(q => mastered.has(q.id)).length;
    const totalInBook = filteredQuestions.length;
    const progressPercent = totalInBook > 0 ? Math.round((masteredInBook / totalInBook) * 100) : 0;

    const activeFirstCh = (targetChapters && targetChapters.length > 0) ? targetChapters[0] : (currentBookConf ? currentBookConf.label : 'General');
    const activeBookRef = getChapterRef(activeFirstCh);

    return `
      <div class="board-sprints-container zen-focus-container" id="boardSprintsContainer">
        <!-- ZEN SPRINT HEADER (CALM, MINIMAL, ZERO CLUTTER) -->
        <header class="zen-sprint-header">
          <div class="zen-header-main">
            <div class="zen-header-titles">
              <h1 class="zen-title">${escapeHtml(currentWeekConf.title)}</h1>
              <p class="zen-subtitle">${escapeHtml(currentBookConf ? currentBookConf.label : '')} · <span>${totalInBook} Curated Questions</span></p>
            </div>
            <div class="zen-header-actions">
              <button type="button" class="btn-zen-action" onclick="location.hash='#/global/overview'" title="Exit sprint and return to Home">
                <i data-lucide="house"></i>
                <span>Home</span>
              </button>
              <button type="button" class="btn-zen-action" onclick="window.print()" title="Print Study Sheet">
                <i data-lucide="printer"></i>
                <span>Print</span>
              </button>
            </div>
          </div>

          <!-- BOOK TABS (CLEAN, MINIMAL TEXT PILLS) -->
          <nav class="zen-books-navbar" aria-label="Select book for this week">
            ${Object.entries(currentWeekConf.books).map(([bKey, bConf]) => {
              const isActive = bKey === book;
              return `
                <button type="button" class="zen-book-pill ${isActive ? 'active' : ''}" data-route="study/board-sprints/${week}/${bKey}">
                  <i data-lucide="${bConf.icon}"></i>
                  <span>${escapeHtml(bConf.label.split('·')[0].trim())}</span>
                </button>
              `;
            }).join('')}
          </nav>
        </header>

        <!-- MAIN BODY CONTENT -->
        ${isFormulae ? renderFormulaLedger() : `
          <!-- ZEN FILTER BAR (SUBTLE MARKS & SEARCH) -->
          <section class="zen-filter-bar">
            <div class="zen-marks-pills" role="group" aria-label="Filter by marks">
              <button type="button" class="zen-mark-btn ${state.marks === 'all' ? 'active' : ''}" data-marks-filter="all">All</button>
              <button type="button" class="zen-mark-btn ${state.marks === '1' ? 'active' : ''}" data-marks-filter="1">1M</button>
              <button type="button" class="zen-mark-btn ${state.marks === '2' ? 'active' : ''}" data-marks-filter="2">2M</button>
              <button type="button" class="zen-mark-btn ${state.marks === '3' ? 'active' : ''}" data-marks-filter="3">3M</button>
              <button type="button" class="zen-mark-btn ${state.marks === '4' ? 'active' : ''}" data-marks-filter="4">4M</button>
              <button type="button" class="zen-mark-btn ${state.marks === '5' ? 'active' : ''}" data-marks-filter="5">5M</button>
            </div>

            <div class="zen-search-wrap">
              <i data-lucide="search" class="zen-search-icon"></i>
              <input type="text" id="sprintSearchInput" class="zen-search-input" placeholder="Search derivations, theorems, diagrams..." value="${escapeHtml(state.search)}">
              ${state.search ? `<button type="button" class="search-clear-btn" id="sprintSearchClear"><i data-lucide="x"></i></button>` : ''}
            </div>
          </section>

          <!-- QUESTION CARDS (CLEAN, INTEGRATED STUDY DECK) -->
          <main class="zen-questions-deck" aria-label="Curated questions">
            ${filteredQuestions.length === 0 ? `
              <div class="sprint-empty-state zen-empty">
                <i data-lucide="book-check"></i>
                <h3>All questions in this unit reviewed</h3>
                <p>No questions matched your filter. Click 'All' to review all questions in this book.</p>
              </div>
            ` : filteredQuestions.map((q, idx) => renderQuestionCard(q, idx, mastered.has(q.id))).join('')}
          </main>
        `}
      </div>
    `;
  }

  // Render Individual Question Card
  function renderQuestionCard(q, idx, isMastered) {
    const hasValidDiagram = q.diagram && q.diagram.trim().length > 30 && !q.diagram.includes('<svg></svg>');

    return `
      <article class="board-question-card zen-card ${isMastered ? 'is-mastered' : ''}" id="card-${escapeHtml(q.id)}">
        <!-- Minimal Zen Header -->
        <header class="q-card-header zen-card-header">
          <div class="q-card-meta-line">
            <span class="q-meta-subject">${escapeHtml(q.subject)}</span>
            <span class="q-meta-dot">·</span>
            <span class="q-meta-marks">${q.marks} Marks</span>
            <span class="q-meta-dot">·</span>
            <span class="q-meta-year"><i data-lucide="calendar"></i> ${escapeHtml(q.year || (q.crossRef && q.crossRef.papers ? q.crossRef.papers[0] : 'CBSE Board Exam'))}</span>
            <span class="q-meta-dot">·</span>
            <span class="q-meta-pacing" title="Suggested CBSE Examination Pacing"><i data-lucide="clock" class="meta-icon"></i> ${escapeHtml(q.pacing || (q.marks === 1 ? '1.5 min' : (q.marks === 2 ? '3.5 min' : (q.marks === 3 ? '5 min' : (q.marks === 4 ? '8 min' : '11 min')))))}</span>
            ${q.competency ? `
              <span class="q-meta-dot">·</span>
              <span class="q-meta-competency" title="NEP 2020 Competency Focus"><i data-lucide="brain-circuit" class="meta-icon"></i> ${escapeHtml(q.competency)}</span>
            ` : ''}
            <span class="q-meta-dot">·</span>
            <span class="q-meta-chapter">${escapeHtml(q.chapter)}</span>
          </div>

          <button type="button" class="btn-master-toggle ${isMastered ? 'mastered' : ''}" data-master-toggle="${escapeHtml(q.id)}" title="${isMastered ? 'Mastered' : 'Mark as mastered'}">
            <i data-lucide="${isMastered ? 'badge-check' : 'circle'}"></i>
            <span>${isMastered ? 'Mastered' : 'Mark Mastered'}</span>
          </button>
        </header>

        <!-- Question Body -->
        <div class="zen-card-body">
          <div class="q-card-stem">
            <span class="q-num">Q${idx + 1}.</span>
            <div class="q-stem-text">${q.stem}</div>
          </div>

          <!-- SVG Visual Diagram (ONLY IF VALID NON-EMPTY CONTENT) -->
          ${hasValidDiagram ? `
            <div class="q-card-diagram">
              ${q.diagram}
            </div>
          ` : ''}

          <!-- UNIFIED STUDY STRIP: Exam Paper & Masterclass -->
          ${(q.crossRef || q.youtube || q.year) ? `
            <div class="zen-study-strip">
              <div class="study-strip-item strip-paper">
                <i data-lucide="file-check-2"></i>
                <span class="strip-label">Appeared in:</span>
                <span class="strip-value">${escapeHtml(q.year || (q.crossRef && q.crossRef.papers ? q.crossRef.papers[0] : 'CBSE Board Exam'))}</span>
              </div>
              ${q.youtube ? `
                <a href="${escapeHtml(q.youtube.url)}" target="_blank" rel="noopener noreferrer" class="study-strip-item strip-video" title="${escapeHtml(q.youtube.title)}">
                  <i data-lucide="play-circle"></i>
                  <span class="strip-label">Masterclass:</span>
                  <span class="strip-channel">${escapeHtml(q.youtube.channel.split('·')[0].trim())} (Tamil)</span>
                  <i data-lucide="external-link" class="strip-ext"></i>
                </a>
              ` : ''}
            </div>
          ` : ''}

          <!-- Model Answer & Marking Scheme -->
          <details class="q-card-accordion zen-accordion" open>
            <summary class="q-accordion-summary">
              <div class="summary-left">
                <i data-lucide="check-check"></i>
                <strong>Model Answer & Marking Scheme</strong>
              </div>
            </summary>

            <div class="q-accordion-content">
              <div class="model-answer-prose">
                ${q.modelAnswer}
              </div>

              ${q.stepMarking ? `
                <div class="zen-marking-note">
                  <span class="note-label"><i data-lucide="award"></i> Step Marking:</span>
                  <span class="note-text">${escapeHtml(q.stepMarking)}</span>
                </div>
              ` : ''}

              ${q.cautionTrap ? `
                <div class="zen-caution-box">
                  <div class="caution-badge"><i data-lucide="alert-triangle"></i> <strong>CBSE Examiner Caution (80% Trap)</strong></div>
                  <p class="caution-text">${escapeHtml(q.cautionTrap)}</p>
                </div>
              ` : ''}

              ${q.topperTip ? `
                <div class="zen-topper-box">
                  <div class="topper-badge"><i data-lucide="sparkles"></i> <strong>Topper's Scoring Secret</strong></div>
                  <p class="topper-text">${escapeHtml(q.topperTip)}</p>
                </div>
              ` : ''}

              ${q.mnemonic ? `
                <div class="zen-mnemonic-box">
                  <div class="mnemonic-badge"><i data-lucide="brain"></i> <strong>Memory Hook / Mnemonic</strong></div>
                  <p class="mnemonic-text">${escapeHtml(q.mnemonic)}</p>
                </div>
              ` : ''}

              ${q.explanation ? `
                <div class="zen-examiner-note">
                  <span class="note-label"><i data-lucide="lightbulb"></i> Examiner Tip:</span>
                  <span class="note-text">${escapeHtml(q.explanation)}</span>
                </div>
              ` : ''}
            </div>
          </details>
        </div>
      </article>
    `;
  }

  // Render Formula Ledger
  function renderFormulaLedger() {
    return `
      <section class="formula-ledger-container zen-formula-wrap" aria-label="Formula and derivation ledger">
        <div class="formula-ledger-header">
          <div>
            <span class="section-kicker">EXAM RETRIEVAL ACCELERATOR</span>
            <h2>Formula & Derivation Ledgers</h2>
            <p>Every boxed formula, boundary condition, and derivation step required for CBSE Class 12 Boards.</p>
          </div>
          <button type="button" class="btn-close-formulae" onclick="location.hash='#/study/board-sprints/week-1'">
            <i data-lucide="arrow-left"></i>
            <span>Return to Week 1</span>
          </button>
        </div>

        <div class="formula-subject-grid">
          ${FORMULA_LEDGER.map(section => `
            <article class="formula-section-card">
              <header class="formula-section-head">
                <i data-lucide="${section.subject === 'Physics' ? 'atom' : (section.subject === 'Chemistry' ? 'flask-conical' : (section.subject === 'Mathematics' ? 'calculator' : 'binary'))}"></i>
                <div>
                  <h3>${escapeHtml(section.subject)}: ${escapeHtml(section.category)}</h3>
                </div>
              </header>

              <div class="formula-items-list">
                ${section.items.map(item => `
                  <div class="formula-item">
                    <div class="formula-item-name">
                      <strong>${escapeHtml(item.name)}</strong>
                    </div>
                    <div class="formula-box">
                      <code>${escapeHtml(item.formula)}</code>
                    </div>
                    <p class="formula-notes">${escapeHtml(item.notes)}</p>
                  </div>
                `).join('')}
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  // Global click delegator for Board Sprints
  document.addEventListener('click', event => {
    // Book pill navigation
    const bookPill = event.target.closest('.zen-book-pill');
    if (bookPill && bookPill.dataset.route) {
      location.hash = '#/' + bookPill.dataset.route;
      return;
    }

    // Marks filter button
    const marksBtn = event.target.closest('.zen-mark-btn');
    if (marksBtn && marksBtn.dataset.marksFilter) {
      state.marks = marksBtn.dataset.marksFilter;
      rerender();
      return;
    }

    // Search clear
    if (event.target.closest('#sprintSearchClear')) {
      state.search = '';
      rerender();
      return;
    }

    // Mastered toggle button
    const masterToggle = event.target.closest('[data-master-toggle]');
    if (masterToggle) {
      event.preventDefault();
      const id = masterToggle.dataset.masterToggle;
      const set = getMasteredSet();
      if (set.has(id)) {
        set.delete(id);
      } else {
        set.add(id);
      }
      saveMasteredSet(set);
      rerender();
      return;
    }
  });

  // Search input live filtering with debounce
  let searchTimeout = null;
  document.addEventListener('input', event => {
    if (event.target.id === 'sprintSearchInput') {
      const val = event.target.value;
      state.search = val;
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        rerender();
        const input = document.getElementById('sprintSearchInput');
        if (input) {
          input.focus();
          input.selectionStart = input.selectionEnd = input.value.length;
        }
      }, 150);
    }
  });

  // Helper to re-render in place
  function rerender() {
    const container = document.getElementById('boardSprintsContainer');
    if (container) {
      const currentRoute = location.hash.slice(2) || 'study/board-sprints/week-1';
      container.outerHTML = boardSprintsView(currentRoute);
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }
  }

  // Export to window.HM
  HM.boardSprintsView = boardSprintsView;
  HM.boardSprintsState = state;

})();
