(function () {
  'use strict';
  const HM = window.HM = window.HM || {};

  // Database of Most Probable CBSE Board & Pre-Board Examination Questions
  // With Step-by-Step Model Answers, Examiner Explanations, and Detailed Visual Diagrams (SVG)
  const Q = {};

  // Helper to create inline SVG diagram
  const svg = (w, h, content) => `
    <div class="practice-diagram-wrap my-3 flex justify-center">
      <svg viewBox="0 0 ${w} ${h}" class="max-w-full h-auto rounded-lg bg-slate-50 border border-slate-200 shadow-sm" style="max-height: 250px;" xmlns="http://www.w3.org/2000/svg">
        ${content}
      </svg>
    </div>
  `;

  // =========================================================================
  // 1. PHYSICS (042) & 2. CHEMISTRY (043)
  // =========================================================================

  Q['Electric Charges and Fields'] = [
    {
      id: 'phy-ch1-q1',
      marks: 5,
      type: 'Derivation & Problem',
      prob: '🔥 Extremely High (CBSE 2023, 2020, 2019)',
      stem: 'State Gauss\'s Theorem in electrostatics. Using this theorem, derive an expression for the electric field due to an infinitely long straight uniformly charged wire of linear charge density λ at a distance r from it.',
      diagram: svg(400, 200, `
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f46e5"/>
          </marker>
        </defs>
        <line x1="200" y1="10" x2="200" y2="190" stroke="#ef4444" stroke-width="4"/>
        <text x="208" y="25" fill="#ef4444" font-size="12" font-weight="bold">+ + + + + (Linear Charge Density λ) + + + + +</text>
        <rect x="130" y="45" width="140" height="110" rx="20" fill="none" stroke="#4f46e5" stroke-dasharray="4" stroke-width="2"/>
        <ellipse cx="200" cy="45" rx="70" ry="15" fill="#e0e7ff" fill-opacity="0.4" stroke="#4f46e5" stroke-width="1.5"/>
        <ellipse cx="200" cy="155" rx="70" ry="15" fill="#e0e7ff" fill-opacity="0.4" stroke="#4f46e5" stroke-width="1.5"/>
        <line x1="200" y1="100" x2="270" y2="100" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>
        <text x="230" y="93" font-size="12" font-weight="bold" fill="#1e293b">r</text>
        <line x1="270" y1="100" x2="340" y2="100" stroke="#4f46e5" stroke-width="2.5" marker-end="url(#arrow)"/>
        <text x="345" y="104" font-size="13" font-weight="bold" fill="#4f46e5">E (radially outward)</text>
        <text x="275" y="125" font-size="11" fill="#4338ca">d\u0391 \u2192 (parallel to E)</text>
        <text x="140" y="35" font-size="10" fill="#64748b">Top Cap: E \u22A5 dA \u21D2 \u03A6\u2081 = 0</text>
        <text x="140" y="180" font-size="10" fill="#64748b">Bottom Cap: E \u22A5 dA \u21D2 \u03A6\u2082 = 0</text>
      `),
      modelAnswer: `
        <div class="space-y-3">
          <p><strong>1. Statement of Gauss's Law:</strong><br>
          The total electric flux passing through any closed hypothetical surface (Gaussian surface) is equal to <code>1/\u03B5\u2080</code> times the net electric charge enclosed by that surface:<br>
          <code class="bg-slate-100 px-2 py-0.5 rounded text-indigo-700 font-bold">\u222E E \u00B7 dA = q_enclosed / \u03B5\u2080</code></p>
          <p><strong>2. Derivation:</strong><br>
          Consider an infinitely long thin wire with uniform linear charge density \u03BB. Construct a coaxial Gaussian cylinder of radius <em>r</em> and length <em>l</em>.</p>
          <ul class="list-disc pl-5 space-y-1 text-slate-700">
            <li><strong>Flux through top and bottom flat faces:</strong> \u2192E is perpendicular to area vector \u2192dA (\u03B8 = 90\u00B0). Therefore, \u03A6\u2081 = \u03A6\u2082 = \u222B E dA cos(90\u00B0) = 0.</li>
            <li><strong>Flux through curved cylindrical surface:</strong> \u2192E is parallel to area vector \u2192dA (\u03B8 = 0\u00B0) and magnitude E is uniform on the cylinder.</li>
          </ul>
          <div class="bg-indigo-50 border-l-4 border-indigo-600 p-2.5 rounded font-mono text-sm">
            \u03A6_curved = \u222B E \u00B7 dA = E \u222B dA = E \u00D7 (2\u03C0 r l)<br>
            Total Flux \u03A6 = \u03A6_curved + \u03A6_caps = E(2\u03C0 r l)
          </div>
          <p>According to Gauss's Theorem: <code>\u03A6 = q_enclosed / \u03B5\u2080</code>. Since charge inside cylinder <code>q = \u03BB \u00D7 l</code>:</p>
          <div class="bg-emerald-50 border-l-4 border-emerald-600 p-2.5 rounded font-mono text-sm font-bold text-emerald-900">
            E (2\u03C0 r l) = (\u03BB l) / \u03B5\u2080  \u27F9  E = \u03BB / (2\u03C0 \u03B5\u2080 r)
          </div>
          <p>In vector form: <strong>\u2192E = (\u03BB / 2\u03C0\u03B5\u2080r) r\u0302</strong> (radially outward if \u03BB > 0).</p>
        </div>
      `,
      explanation: 'Gauss Law derivations require 3 explicit parts: (1) Correct definition of Gauss\'s law, (2) Labeled diagram showing the 3 distinct Gaussian surfaces (2 flat caps + 1 curved body), (3) Showing why flat caps contribute zero flux (E \u22A5 dA) while curved surface yields E(2\u03C0rl).',
      stepMarking: '[1 Mark] Statement of Gauss\'s Law | [1 Mark] Gaussian cylinder diagram with field & area vectors | [2 Marks] Step-by-step flux calculation | [1 Mark] Final boxed formula with vector direction',
      pacing: '10-12 min',
      competency: 'High-Order Derivation',
      cautionTrap: 'Over 80% of students omit showing that flux through the flat circular caps is zero. Writing only the curved surface equation without explicitly proving Φ_caps = ∫ E·dA = ∫ E dA cos(90°) = 0 costs 1 full mark. Also, omitting the unit vector r̂ in E (vector) = (λ / 2πε₀r)r̂ forfeits the direction mark.',
      topperTip: 'Draw the Gaussian cylinder with 3 distinct numbered surfaces (S1, S2, S3) showing E (vector) and dA (vector) vectors on each. Write the total flux as the sum of all 3 integrals. Always conclude with: "Direction of E (vector) is radially outward if λ > 0 and radially inward if λ < 0."',
      mnemonic: 'Gauss Cylinder Rule: "Top is flat (0), Bottom is flat (0), Curved is fat (2πrl)!"'
    }
  ];

  Q['Electrostatic Potential and Capacitance'] = [
    {
      id: 'phy-ch2-q1',
      marks: 3,
      type: 'Core Derivation',
      prob: '🔥 High Probability (CBSE 2024, 2022)',
      stem: 'Derive an expression for the capacitance of a parallel plate capacitor with a dielectric slab of thickness t (t < d) introduced between the plates, where d is plate separation.',
      diagram: svg(380, 160, `
        <!-- Capacitor Plates -->
        <rect x="50" y="20" width="12" height="120" fill="#3b82f6"/>
        <text x="45" y="15" font-size="11" font-weight="bold" fill="#1d4ed8">+Q</text>
        <rect x="320" y="20" width="12" height="120" fill="#ef4444"/>
        <text x="315" y="15" font-size="11" font-weight="bold" fill="#b91c1c">-Q</text>

        <!-- Dielectric Slab -->
        <rect x="130" y="25" width="120" height="110" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="160" y="70" font-size="12" font-weight="bold" fill="#854d0e">Dielectric K</text>
        <text x="175" y="90" font-size="11" fill="#854d0e">thickness t</text>

        <!-- Plate separation d -->
        <line x1="50" y1="145" x2="320" y2="145" stroke="#0f172a" stroke-width="1.5"/>
        <text x="175" y="158" font-size="11" font-weight="bold" fill="#0f172a">d</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <p>Let A = area of each plate, d = separation, \u03C3 = Q/A surface charge density.<br>
          Electric field in air region: <code>E\u2080 = \u03C3 / \u03B5\u2080</code>.<br>
          Electric field inside dielectric slab: <code>E = E\u2080 / K</code>.</p>
          <div class="bg-slate-100 p-2.5 rounded font-mono text-xs space-y-1">
            Potential difference V = E\u2080(d - t) + E(t) = E\u2080(d - t) + (E\u2080/K)t<br>
            V = E\u2080 [ (d - t) + t/K ] = (\u03C3 / \u03B5\u2080) [ d - t(1 - 1/K) ] = [ Q / (A \u03B5\u2080) ] [ d - t(1 - 1/K) ]<br><br>
            Capacitance C = Q / V = <strong>\u03B5\u2080 A / [ d - t(1 - 1/K) ]</strong>
          </div>
          <p class="text-xs text-slate-700">Special case: When slab fills entire space (t = d), <code>C = K(\u03B5\u2080 A / d) = K C\u2080</code>.</p>
        </div>
      `,
      explanation: 'Electric field is reduced inside dielectric by factor K due to induced bound polarization charges, but remains E\u2080 in the remaining air space of thickness (d - t).',
      stepMarking: '[1 Mark] Potential difference relation V = E\u2080(d-t) + (E\u2080/K)t | [1 Mark] Substitution of E\u2080 = Q/(A\u03B5\u2080) | [1 Mark] Final boxed capacitance formula'
    }
  ];

  Q['Current Electricity'] = [
    {
      id: 'phy-ch3-q1',
      marks: 3,
      type: 'Core Derivation',
      prob: '🔥 High Probability Derivation (CBSE 2023, 2020)',
      stem: 'Define the term drift velocity of electrons. Establish the relation between electric current I flowing through a conductor and the drift velocity v_d of electrons.',
      diagram: svg(380, 150, `
        <defs>
          <marker id="arGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/>
          </marker>
        </defs>
        <rect x="60" y="30" width="260" height="70" rx="10" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
        <ellipse cx="60" cy="65" rx="18" ry="35" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
        <ellipse cx="320" cy="65" rx="18" ry="35" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
        <line x1="280" y1="20" x2="100" y2="20" stroke="#6366f1" stroke-width="2" marker-end="url(#arGreen)"/>
        <text x="180" y="16" font-size="11" font-weight="bold" fill="#6366f1">Electric Field E \u2190</text>
        <circle cx="120" cy="55" r="7" fill="#059669"/>
        <line x1="120" y1="55" x2="160" y2="55" stroke="#059669" stroke-width="2" marker-end="url(#arGreen)"/>
        <circle cx="200" cy="75" r="7" fill="#059669"/>
        <line x1="200" y1="75" x2="240" y2="75" stroke="#059669" stroke-width="2" marker-end="url(#arGreen)"/>
        <text x="245" y="60" font-size="11" font-weight="bold" fill="#059669">v_d \u2192</text>
        <line x1="60" y1="120" x2="320" y2="120" stroke="#0f172a" stroke-width="1.5"/>
        <text x="180" y="135" font-size="12" font-weight="bold" fill="#0f172a">Length L</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <p><strong>Definition:</strong> Drift velocity is the average velocity acquired by the free electrons in a conductor opposite to the direction of the applied electric field.</p>
          <div class="bg-indigo-50 p-2.5 rounded font-mono text-sm">
            Total volume of conductor = A \u00D7 L<br>
            Total number of electrons = n \u00D7 A \u00D7 L<br>
            Total charge Q = (n A L) \u00D7 e<br>
            Time taken t = L / v_d<br>
            Current I = Q / t = (n A L e) / (L / v_d)<br>
            <strong>I = n e A v_d</strong>
          </div>
        </div>
      `,
      explanation: 'Always state that drift velocity is extremely small (~1 mm/s) despite electrical signals travelling at near the speed of light.',
      stepMarking: '[1 Mark] Correct definition | [1.5 Marks] Step-by-step charge & time substitution | [0.5 Mark] Final boxed formula I = neAv_d'
    }
  ];

  Q['Moving Charges and Magnetism'] = [
    {
      id: 'phy-ch4-q1',
      marks: 5,
      type: 'Core Derivation',
      prob: '🔥 Top 5-Mark Derivation in CBSE Section D',
      stem: 'State Biot-Savart Law. Using this law, derive the expression for the magnetic field on the axis of a circular current-carrying loop of radius R at a distance x from its center.',
      diagram: svg(420, 180, `
        <!-- Circular Loop seen in perspective -->
        <ellipse cx="100" cy="90" rx="20" ry="60" fill="none" stroke="#2563eb" stroke-width="3"/>
        <text x="45" y="45" font-size="11" font-weight="bold" fill="#2563eb">Radius R</text>
        <line x1="100" y1="90" x2="100" y2="30" stroke="#2563eb" stroke-width="2"/>

        <!-- Axis line -->
        <line x1="100" y1="90" x2="380" y2="90" stroke="#0f172a" stroke-dasharray="4" stroke-width="1.5"/>
        <text x="220" y="80" font-size="11" font-weight="bold" fill="#0f172a">Axis distance x</text>

        <!-- Point P -->
        <circle cx="320" cy="90" r="5" fill="#ef4444"/>
        <text x="325" y="85" font-size="12" font-weight="bold" fill="#ef4444">Point P</text>

        <!-- Distance r = sqrt(R^2 + x^2) -->
        <line x1="100" y1="30" x2="320" y2="90" stroke="#64748b" stroke-width="1.5"/>
        <text x="190" y="45" font-size="11" fill="#475569">r = \u221A(R\u00B2 + x\u00B2)</text>

        <!-- Resultant dB and components -->
        <line x1="320" y1="90" x2="370" y2="60" stroke="#059669" stroke-width="2"/>
        <line x1="320" y1="90" x2="380" y2="90" stroke="#ef4444" stroke-width="2.5"/>
        <text x="385" y="94" font-size="11" font-weight="bold" fill="#ef4444">B_net = \u222B dB sin\u03B8</text>
        <text x="325" y="140" font-size="10" fill="#64748b">Perpendicular dB cos\u03B8 components cancel by symmetry</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <p><strong>1. Biot-Savart Law:</strong> <code>dB = (\u03BC\u2080 / 4\u03C0) * (I dl sin\u03B8) / r\u00B2</code>. For a current element on the loop, \u03B8 = 90\u00B0 between dl and r, so <code>dB = (\u03BC\u2080 / 4\u03C0) (I dl) / r\u00B2</code>.</p>
          <div class="bg-indigo-50 p-2.5 rounded font-mono text-xs space-y-1">
            Resolve dB into components:<br>
            \u2022 Perpendicular to axis: dB cos\u03B1 (cancel out due to diametrically opposite pairs)<br>
            \u2022 Along the axis: dB sin\u03B1 (add up for all elements)<br><br>
            B_net = \u222E dB sin\u03B1 = \u222E [ (\u03BC\u2080 / 4\u03C0) (I dl) / r\u00B2 ] * (R / r) = (\u03BC\u2080 I R / 4\u03C0 r\u00B3) \u222E dl<br>
            Since \u222E dl = 2\u03C0 R and r = (R\u00B2 + x\u00B2)^(1/2):<br><br>
            <strong>B = (\u03BC\u2080 I R\u00B2) / [ 2 (R\u00B2 + x\u00B2)^(3/2) ]</strong><br>
            For a coil of N turns: <strong>B = (\u03BC\u2080 N I R\u00B2) / [ 2 (R\u00B2 + x\u00B2)^(3/2) ]</strong>
          </div>
          <p class="text-xs text-slate-700">At the center of loop (x = 0): <code>B_center = \u03BC\u2080 N I / (2 R)</code>.</p>
        </div>
      `,
      explanation: 'Symmetry is the key to this derivation: state explicitly that components perpendicular to the axis cancel in diametrically opposite pairs, while components along the axis reinforce.',
      stepMarking: '[1 Mark] Biot-Savart Law definition | [1.5 Marks] Labeled diagram with components | [1.5 Marks] Integration with \u222Edl = 2\u03C0R | [1 Mark] Final boxed formula and special case at center'
    }
  ];

  Q['Alternating Current'] = [
    {
      id: 'phy-ch7-q1',
      marks: 5,
      type: 'Core Derivation & Resonance',
      prob: '🔥 High Probability 5-Mark Question',
      stem: 'A series LCR circuit is connected to an ac source v = v_m sin(ωt). Using phasor diagram, derive the expression for impedance Z of the circuit and phase difference φ. Hence deduce the condition for electrical resonance.',
      diagram: svg(380, 160, `
        <!-- Phasor Diagram -->
        <line x1="80" y1="80" x2="320" y2="80" stroke="#0f172a" stroke-width="1.5"/>
        <line x1="80" y1="140" x2="80" y2="20" stroke="#0f172a" stroke-width="1.5"/>
        <text x="325" y="85" font-size="11" font-weight="bold" fill="#0f172a">I, V_R</text>
        <line x1="80" y1="80" x2="80" y2="25" stroke="#ef4444" stroke-width="2.5"/>
        <text x="85" y="35" font-size="11" font-weight="bold" fill="#ef4444">V_L</text>
        <line x1="80" y1="80" x2="80" y2="135" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="85" y="135" font-size="11" font-weight="bold" fill="#3b82f6">V_C</text>
        <line x1="80" y1="80" x2="80" y2="45" stroke="#9333ea" stroke-width="3"/>
        <text x="88" y="55" font-size="10" font-weight="bold" fill="#9333ea">(V_L - V_C)</text>
        <line x1="80" y1="80" x2="220" y2="45" stroke="#059669" stroke-width="3"/>
        <text x="225" y="45" font-size="12" font-weight="bold" fill="#059669">V_m (Resultant)</text>
        <text x="120" y="73" font-size="11" font-weight="bold" fill="#0f172a">\u03C6</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <p>Let current phasor be along horizontal reference axis: <code>V_R = I R</code> (in phase with I).<br>
          Voltage across inductor leads current by 90\u00B0: <code>V_L = I X_L</code>.<br>
          Voltage across capacitor lags current by 90\u00B0: <code>V_C = I X_C</code>.</p>
          <div class="bg-slate-100 p-2.5 rounded font-mono text-xs space-y-1">
            Net reactive voltage = (V_L - V_C) = I(X_L - X_C)<br>
            From right triangle: V_m\u00B2 = V_R\u00B2 + (V_L - V_C)\u00B2 = (IR)\u00B2 + [I(X_L - X_C)]\u00B2<br>
            V_m = I \u221A[ R\u00B2 + (X_L - X_C)\u00B2 ]<br><br>
            <strong>Impedance Z = V_m / I = \u221A[ R\u00B2 + (X_L - X_C)\u00B2 ] = \u221A[ R\u00B2 + (\u03C9L - 1/\u03C9C)\u00B2 ]</strong><br>
            Phase difference: <strong>tan \u03C6 = (X_L - X_C) / R = (\u03C9L - 1/\u03C9C) / R</strong>
          </div>
          <div class="bg-emerald-50 border-l-4 border-emerald-600 p-2 rounded text-xs">
            <strong>Resonance Condition:</strong> Occurs when X_L = X_C \u27F9 \u03C9L = 1/(\u03C9C) \u27F9 <strong>\u03C9\u2080 = 1 / \u221A(LC)</strong>.<br>
            At resonance, impedance is minimum (Z = R) and current amplitude is maximum (I_max = V_m / R).
          </div>
        </div>
      `,
      explanation: 'Always state that at resonance, the circuit is purely resistive (phase angle \u03C6 = 0, power factor cos \u03C6 = 1), so current and voltage are in phase.',
      stepMarking: '[1.5 Marks] Clear phasor diagram | [1.5 Marks] Pythagoras derivation of Z | [1 Mark] Phase angle formula | [1 Mark] Resonance condition \u03C9\u2080 = 1/\u221A(LC)'
    }
  ];

  // =========================================================================
  // 2. CHEMISTRY (043)
  // =========================================================================

  Q['Solutions'] = [
    {
      id: 'chem-ch1-q1',
      marks: 3,
      type: 'Numerical Problem',
      prob: '🔥 High Probability (CBSE 2023, 2021, 2019)',
      stem: '45 g of ethylene glycol (C₂H₆O₂) is mixed with 600 g of water. Calculate: (a) the freezing point depression, and (b) the freezing point of the solution. (K_f for water = 1.86 K kg mol⁻¹).',
      diagram: svg(520, 180, `
        <!-- Freezing Point Depression Diagram -->
        <rect x="20" y="20" width="480" height="150" rx="8" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Colligative Property: Depression in Freezing Point (ΔT_f = K_f · m)</text>
        <line x1="60" y1="140" x2="320" y2="140" stroke="#0f172a" stroke-width="1.5"/>
        <text x="325" y="145" font-size="10" font-weight="bold" fill="#0f172a">Temp T</text>
        <line x1="60" y1="140" x2="60" y2="45" stroke="#0f172a" stroke-width="1.5"/>
        <text x="50" y="40" font-size="10" font-weight="bold" fill="#0f172a">Vapor Press P</text>

        <!-- Pure solvent vs Solution curves -->
        <path d="M 60 120 Q 150 115 260 60" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="265" y="65" font-size="9" font-weight="bold" fill="#2563eb">Pure Liquid Solvent</text>

        <path d="M 60 135 Q 160 130 260 85" fill="none" stroke="#dc2626" stroke-width="2"/>
        <text x="265" y="90" font-size="9" font-weight="bold" fill="#dc2626">Solution (with Solute)</text>

        <line x1="160" y1="140" x2="160" y2="115" stroke="#dc2626" stroke-dasharray="3"/>
        <text x="145" y="155" font-size="9" font-weight="bold" fill="#dc2626">T_f</text>
        <line x1="195" y1="140" x2="195" y2="95" stroke="#2563eb" stroke-dasharray="3"/>
        <text x="190" y="155" font-size="9" font-weight="bold" fill="#2563eb">T°_f</text>

        <!-- ΔTf bracket -->
        <line x1="160" y1="125" x2="195" y2="125" stroke="#16a34a" stroke-width="2"/>
        <text x="165" y="120" font-size="10" font-weight="bold" fill="#16a34a">ΔT_f</text>

        <rect x="360" y="55" width="130" height="95" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1"/>
        <text x="368" y="75" font-size="10" font-weight="bold" fill="#312e81">Key Equations:</text>
        <text x="368" y="92" font-size="9" fill="#3730a3">m = (w₂/M₂)/(w₁/1000)</text>
        <text x="368" y="110" font-size="9" fill="#3730a3">ΔT_f = K_f · m = 2.25 K</text>
        <text x="368" y="130" font-size="9" font-weight="bold" fill="#1e1b4b">T_f = 273.15 - 2.25</text>
        <text x="368" y="142" font-size="9" font-weight="bold" fill="#16a34a">= 270.90 K</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-2.5 rounded font-mono text-xs space-y-1">
            <strong>Step 1: Calculate molar mass of ethylene glycol (C₂H₆O₂):</strong><br>
            M₂ = (2 \u00D7 12) + (6 \u00D7 1) + (2 \u00D7 16) = 24 + 6 + 32 = <strong>62 g mol⁻¹</strong><br><br>
            <strong>Step 2: Calculate moles of solute (n₂):</strong><br>
            n₂ = w₂ / M₂ = 45 g / 62 g mol⁻¹ = <strong>0.7258 mol</strong><br><br>
            <strong>Step 3: Calculate molality of the solution (m):</strong><br>
            Mass of water (w₁) = 600 g = 0.600 kg<br>
            m = moles of solute / mass of solvent in kg = 0.7258 / 0.600 = <strong>1.21 mol kg⁻¹</strong><br><br>
            <strong>Step 4: Calculate Depression in Freezing Point (ΔT_f):</strong><br>
            ΔT_f = K_f \u00D7 m = 1.86 K kg mol⁻¹ \u00D7 1.21 mol kg⁻¹ = <strong>2.25 K</strong><br><br>
            <strong>Step 5: Freezing point of the solution (T_f):</strong><br>
            T_f = T\u00B0_f - ΔT_f = 273.15 K - 2.25 K = <strong>270.90 K (or -2.25 °C)</strong>
          </div>
        </div>
      `,
      explanation: 'Do not divide by total solution mass; molality uses solvent mass in kg (water only).',
      stepMarking: '[1 Mark] Molar mass & molality calculation | [1 Mark] ΔT_f formula and substitution | [1 Mark] Freezing point in K or °C'
    }
  ];

  Q['Electrochemistry'] = [
    {
      id: 'chem-ch2-q1',
      marks: 3,
      type: 'Nernst Equation Numerical',
      prob: '🔥 Recurring Every Year (CBSE 2024, 2023, 2020)',
      stem: 'Calculate the emf of the cell at 298 K: Mg(s) | Mg²⁺(0.001 M) || Cu²⁺(0.0001 M) | Cu(s). Given: E°(Mg²⁺/Mg) = -2.37 V, E°(Cu²⁺/Cu) = +0.34 V.',
      diagram: svg(520, 190, `
        <!-- Galvanic Cell Setup -->
        <rect x="20" y="20" width="480" height="160" rx="8" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Galvanic Cell & Nernst Potential: Mg(s) | Mg²⁺ || Cu²⁺ | Cu(s)</text>

        <!-- Beaker 1: Anode Mg -->
        <rect x="60" y="80" width="90" height="80" rx="4" fill="#e0e7ff" stroke="#4338ca"/>
        <rect x="90" y="60" width="16" height="85" fill="#94a3b8" stroke="#334155"/>
        <text x="70" y="172" font-size="9" font-weight="bold" fill="#312e81">Anode: Mg (-)</text>
        <text x="65" y="115" font-size="8" fill="#4338ca">Mg²⁺ (0.001M)</text>

        <!-- Salt Bridge U-tube -->
        <path d="M 120 70 L 120 55 Q 120 50 125 50 L 255 50 Q 260 50 260 55 L 260 70" fill="none" stroke="#ca8a04" stroke-width="8"/>
        <text x="165" y="45" font-size="9" font-weight="bold" fill="#854d0e">Salt Bridge (KCl/Agar)</text>

        <!-- Beaker 2: Cathode Cu -->
        <rect x="230" y="80" width="90" height="80" rx="4" fill="#dbeafe" stroke="#2563eb"/>
        <rect x="260" y="60" width="16" height="85" fill="#f97316" stroke="#c2410c"/>
        <text x="240" y="172" font-size="9" font-weight="bold" fill="#c2410c">Cathode: Cu (+)</text>
        <text x="235" y="115" font-size="8" fill="#1d4ed8">Cu²⁺ (0.0001M)</text>

        <!-- External Wire & Voltmeter -->
        <path d="M 98 60 L 98 40 L 165 40" fill="none" stroke="#0f172a" stroke-width="2"/>
        <circle cx="190" cy="40" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
        <text x="183" y="44" font-size="10" font-weight="bold" fill="#0f172a">V</text>
        <path d="M 215 40 L 268 40 L 268 60" fill="none" stroke="#0f172a" stroke-width="2"/>
        <text x="140" y="32" font-size="8" font-weight="bold" fill="#059669">e⁻ flow →</text>

        <!-- Formula Box -->
        <rect x="340" y="60" width="150" height="105" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1"/>
        <text x="348" y="80" font-size="10" font-weight="bold" fill="#78350f">Nernst at 298 K:</text>
        <text x="348" y="96" font-size="9" fill="#92400e">E°_cell = 0.34 - (-2.37)</text>
        <text x="348" y="110" font-size="9" font-weight="bold" fill="#78350f">= +2.71 V</text>
        <text x="348" y="128" font-size="8" fill="#92400e">E = 2.71 - (0.0591/2)log(10)</text>
        <text x="348" y="148" font-size="10" font-weight="bold" fill="#15803d">E_cell = 2.68 V</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-2.5 rounded font-mono text-xs space-y-1">
            <strong>1. Cell Reaction:</strong> Mg(s) + Cu²⁺(aq) \u2192 Mg²⁺(aq) + Cu(s)  [n = 2]<br>
            <strong>2. Standard Cell Potential (E°_cell):</strong><br>
            E°_cell = E°_cathode - E°_anode = +0.34 V - (-2.37 V) = <strong>+2.71 V</strong><br><br>
            <strong>3. Nernst Equation at 298 K:</strong><br>
            E_cell = E°_cell - (0.0591 / n) \u00D7 log([Mg²⁺] / [Cu²⁺])<br>
            E_cell = 2.71 - (0.0591 / 2) \u00D7 log(0.001 / 0.0001)<br>
            E_cell = 2.71 - (0.02955) \u00D7 log(10) = 2.71 - 0.02955 = <strong>2.68 V</strong>
          </div>
        </div>
      `,
      explanation: 'n represents the number of electrons transferred in the balanced redox equation (here n = 2).',
      stepMarking: '[1 Mark] E°_cell calculation (+2.71 V) | [1 Mark] Correct Nernst equation setup with n=2 | [1 Mark] Final calculated value with unit (2.68 V)',
      pacing: '5 min',
      competency: 'Analytical Application',
      cautionTrap: 'In cells with unequal stoichiometric coefficients (like Mg + 2Ag⁺), students write n=1 or forget to square the concentration term in the reaction quotient Q = [Mg²⁺]/[Ag⁺]². This mathematical slip alters the logarithm value completely and destroys 1.5 marks.',
      topperTip: 'Always write separate anode and cathode half-reactions first to visually verify n = 2. Explicitly write Q in ion brackets before substituting numbers. State: "At T = 298 K, (2.303 RT/F) = 0.0591 V". Always append the unit "V" to the final answer.',
      mnemonic: 'Galvanic Polarity: "LOAN" — Left, Oxidation, Anode, Negative!'
    }
  ];

  Q['Chemical Kinetics'] = [
    {
      id: 'chem-ch3-q1',
      marks: 3,
      type: 'First Order Kinetics',
      prob: '🔥 100% Guaranteed Problem Type',
      stem: 'A first-order reaction takes 40 min for 30% decomposition. Calculate its half-life period t_1/2. (Given: log 10 = 1, log 7 = 0.8451).',
      diagram: svg(520, 180, `
        <!-- 1st Order Reaction Kinetics Curve -->
        <rect x="20" y="20" width="480" height="150" rx="8" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">First Order Reaction: Exponential Concentration Decay & Half-Life</text>
        <line x1="60" y1="140" x2="310" y2="140" stroke="#0f172a" stroke-width="1.5"/>
        <text x="315" y="145" font-size="10" font-weight="bold" fill="#0f172a">Time t</text>
        <line x1="60" y1="140" x2="60" y2="45" stroke="#0f172a" stroke-width="1.5"/>
        <text x="50" y="40" font-size="10" font-weight="bold" fill="#0f172a">[R]</text>

        <!-- Exponential decay curve -->
        <path d="M 60 55 Q 120 120 280 135" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <text x="35" y="60" font-size="9" font-weight="bold" fill="#2563eb">[R]₀</text>

        <!-- t_1/2 points -->
        <line x1="60" y1="95" x2="130" y2="95" stroke="#94a3b8" stroke-dasharray="3"/>
        <text x="25" y="100" font-size="9" fill="#64748b">[R]₀/2</text>
        <line x1="130" y1="95" x2="130" y2="140" stroke="#dc2626" stroke-dasharray="3"/>
        <text x="120" y="155" font-size="9" font-weight="bold" fill="#dc2626">t_1/2</text>

        <rect x="330" y="55" width="160" height="95" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="1"/>
        <text x="340" y="75" font-size="10" font-weight="bold" fill="#14532d">1st Order Invariants:</text>
        <text x="340" y="93" font-size="9" fill="#166534">k = (2.303/t) log([R]₀/[R])</text>
        <text x="340" y="110" font-size="9" fill="#166534">k = 8.918 × 10⁻³ min⁻¹</text>
        <text x="340" y="128" font-size="9" font-weight="bold" fill="#14532d">t_1/2 = 0.693 / k</text>
        <text x="340" y="142" font-size="10" font-weight="bold" fill="#15803d">= 77.7 min</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-2.5 rounded font-mono text-xs space-y-1">
            Let initial concentration [R]₀ = 100.<br>
            Since 30% decomposed, remaining [R] = 100 - 30 = 70.<br>
            Time t = 40 min.<br><br>
            <strong>For 1st order reaction:</strong><br>
            k = (2.303 / t) \u00D7 log([R]₀ / [R])<br>
            k = (2.303 / 40) \u00D7 log(100 / 70) = (2.303 / 40) \u00D7 [log 10 - log 7]<br>
            k = (2.303 / 40) \u00D7 (1 - 0.8451) = (2.303 / 40) \u00D7 0.1549 = <strong>8.918 \u00D7 10⁻³ min⁻¹</strong><br><br>
            <strong>Half-life period (t_1/2):</strong><br>
            t_1/2 = 0.693 / k = 0.693 / (8.918 \u00D7 10⁻³) = <strong>77.7 min</strong>
          </div>
        </div>
      `,
      explanation: 'In 1st order reactions, half-life is independent of initial concentration: t_1/2 = 0.693 / k.',
      stepMarking: '[1.5 Marks] Rate constant k calculation | [1.5 Marks] t_1/2 calculation with unit (min)'
    }
  ];

  // =========================================================================
  // 3. COMPUTER SCIENCE (083)
  // =========================================================================

  // 1. Python Functions
  Q['Python Functions'] = [
    {
      id: 'cs-fn-sqp24-q22',
      marks: 2,
      type: 'Core Python Concept',
      paper: 'CBSE 2024-25 SQP (Official)',
      prob: '🔥 Official Question from 2024-25 Sample Question Paper',
      stem: `How is a mutable object different from an immutable object in Python? Categorize the following data types into mutable and immutable:<br>
<code>(i) List &nbsp;&nbsp; (ii) Tuple &nbsp;&nbsp; (iii) Dictionary &nbsp;&nbsp; (iv) String</code>`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'In Python, everything is an object. Lists and Dictionaries have methods like .append(), .pop(), and item assignment that mutate memory in place. Tuples and Strings have no in-place mutating methods.',
      stepMarking: '[1 Mark] Clear conceptual definition of mutable vs immutable | [1 Mark] Correct classification (0.25 mark per item: List=Mutable, Tuple=Immutable, Dictionary=Mutable, String=Immutable)',
      cautionTrap: 'Do NOT say "immutable variables cannot be reassigned". A variable can point to a new value (x = x + 1), but the underlying object in memory was never changed in-place!',
      topperTip: 'Remember: Tuples, Strings, and Numbers are IMMUTABLE. Lists, Dicts, and Sets are MUTABLE.'
    },
    {
      id: 'cs-fn-sqp24-q25',
      marks: 2,
      type: 'Random Module Output Simulation',
      paper: 'CBSE 2024-25 SQP (Official)',
      prob: '🔥 Official Question from 2024-25 Sample Question Paper',
      stem: `Identify the correct output(s) of the following code. Also write the minimum and maximum possible values that can be assigned to the variable <code>Number</code>:
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
(iv) BLUE#YELLOW`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'random.randint(a, b) generates a <= N <= b (both inclusive). In range(Number, 4), the stop value 4 is exclusive, iterating through index 3. Each print appends "#" at the end, so every valid output must terminate with "#".',
      stepMarking: '[0.5 Mark] Minimum value = 1 | [0.5 Mark] Maximum value = 2 | [1 Mark] Identifying both correct options (i) and (iii)',
      cautionTrap: 'Option (iv) lacks the trailing "#"! Option (ii) includes "RED" which requires Number = 0, but minimum is 1.',
      topperTip: 'Remember: randint(a, b) includes b; randrange(a, b) excludes b!'
    },

    {
      id: 'cs-fn-q1',
      marks: 3,
      type: 'Functions & Scope (LEGB & Parameter Passing)',
      prob: '🔥 Extremely High Probability (CBSE 2024, 2023, 2020)',
      stem: 'Explain the rules governing (i) Positional vs Default arguments in Python with an invalid syntax example, (ii) The LEGB scope resolution rule with variable binding, and (iii) How mutable (e.g., list) vs immutable (e.g., integer) parameters behave when passed to a function.',
      diagram: svg(560, 240, `
        <!-- LEGB Scope Concentric Rings -->
        <rect x="20" y="20" width="250" height="200" rx="10" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
        <text x="30" y="42" font-size="12" font-weight="bold" fill="#334155">Python Scope: LEGB Rule</text>

        <rect x="35" y="55" width="220" height="150" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
        <text x="45" y="73" font-size="11" font-weight="bold" fill="#3730a3">B: Built-in (print, len, range, int...)</text>

        <rect x="50" y="83" width="190" height="110" rx="8" fill="#c7d2fe" stroke="#4338ca" stroke-width="1.5"/>
        <text x="60" y="100" font-size="11" font-weight="bold" fill="#312e81">G: Global (Module-level names)</text>

        <rect x="65" y="110" width="160" height="73" rx="6" fill="#a5b4fc" stroke="#3730a3" stroke-width="1.5"/>
        <text x="75" y="127" font-size="10" font-weight="bold" fill="#1e1b4b">E: Enclosing (Outer def)</text>

        <rect x="80" y="137" width="130" height="38" rx="4" fill="#818cf8" stroke="#312e81" stroke-width="1.5"/>
        <text x="90" y="160" font-size="11" font-weight="bold" fill="#ffffff">L: Local (Inside def)</text>

        <!-- Parameter Mutability Memory Model -->
        <rect x="290" y="20" width="250" height="200" rx="10" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
        <text x="300" y="42" font-size="12" font-weight="bold" fill="#334155">Parameter Passing: Call by Object Ref</text>

        <!-- Immutable Box -->
        <rect x="305" y="58" width="105" height="60" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="312" y="76" font-size="11" font-weight="bold" fill="#991b1b">Immutable (int/str)</text>
        <text x="312" y="94" font-size="10" fill="#7f1d1d">num += 1 creates</text>
        <text x="312" y="108" font-size="10" fill="#7f1d1d">NEW object in memory</text>

        <!-- Mutable Box -->
        <rect x="425" y="58" width="105" height="60" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="432" y="76" font-size="11" font-weight="bold" fill="#166534">Mutable (list/dict)</text>
        <text x="432" y="94" font-size="10" fill="#14532d">lst.append(x) alters</text>
        <text x="432" y="108" font-size="10" fill="#14532d">ORIGINAL object</text>

        <path d="M 357 125 L 357 150 L 415 150" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3"/>
        <text x="310" y="170" font-size="10" font-weight="bold" fill="#dc2626">Caller sees NO change</text>

        <path d="M 477 125 L 477 150 L 425 150" fill="none" stroke="#16a34a" stroke-width="1.5"/>
        <text x="430" y="170" font-size="10" font-weight="bold" fill="#16a34a">Caller sees CHANGE!</text>

        <rect x="305" y="188" width="225" height="24" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="312" y="204" font-size="10" font-weight="bold" fill="#92400e">Rule: Non-default args CANNOT follow default</text>
      `),
      modelAnswer: `
        <div class="space-y-3">
          <p><strong>1. Positional vs Default Arguments:</strong></p>
          <ul class="list-disc pl-5 space-y-1 text-slate-800 text-xs">
            <li><strong>Positional Arguments:</strong> Arguments passed to a function in correct positional order. The number and order of arguments in the call must match the function header.</li>
            <li><strong>Default Arguments:</strong> Arguments that assume a default value if not provided during function call.</li>
            <li><strong>Golden CBSE Rule:</strong> A non-default argument <em>cannot</em> follow a default argument in the function header.<br>
            <code class="bg-red-50 text-red-700 px-1 py-0.5 rounded font-mono font-bold">def calc(x=10, y): # SyntaxError: non-default argument follows default argument</code><br>
            <code class="bg-emerald-50 text-emerald-700 px-1 py-0.5 rounded font-mono font-bold">def calc(y, x=10): # Correct syntax: default argument placed at the end</code></li>
          </ul>

          <p><strong>2. Scope Resolution (LEGB Rule):</strong></p>
          <p class="text-xs text-slate-700">Python resolves variable names following the order <strong>LEGB</strong>:
          <br>1. <strong>L (Local):</strong> Names assigned within a function body without the <code>global</code> keyword.
          <br>2. <strong>E (Enclosing):</strong> Names in local scope of any enclosing/nested functions.
          <br>3. <strong>G (Global):</strong> Names assigned at top-level of module or declared using <code>global x</code>.
          <br>4. <strong>B (Built-in):</strong> Pre-assigned names in Python (e.g. <code>range</code>, <code>len</code>, <code>print</code>).</p>

          <p><strong>3. Mutable vs Immutable Parameter Passing:</strong></p>
          <div class="bg-slate-900 text-emerald-400 p-2.5 rounded-lg font-mono text-xs overflow-x-auto">
def modify_demo(val, my_list):
    val += 10          # Immutable: rebinds local 'val' to a new integer object
    my_list.append(99) # Mutable: modifies existing list object in-place

x = 5
nums = [1, 2]
modify_demo(x, nums)
print("x:", x)         # Output: x: 5  (caller value unchanged)
print("nums:", nums)   # Output: nums: [1, 2, 99] (caller list modified in-place)
          </div>
        </div>
      `,
      explanation: 'In Python, arguments are passed by "assignment" (call by object reference). Immutable objects (int, float, str, tuple) cannot be mutated in place; any reassignment creates a local binding. Mutable objects (list, dict, set) can be mutated via methods like .append() or in-place key updates, which directly reflects in the caller environment.',
      stepMarking: '[1 Mark] Positional vs default definition & invalid syntax rule | [1 Mark] LEGB scope order hierarchy with global keyword usage | [1 Mark] Mutable vs immutable parameter code trace with outputs'
    }
  ];

  // 2. File Handling
  Q['File Handling'] = [
    {
      id: 'cs-fh-qb-q8',
      marks: 3,
      type: 'Binary File Search & Exception Handling',
      paper: 'CBSE Competency Bank (Official)',
      prob: '🔥 Direct Question from Official CBSE Competency Bank',
      stem: `Arun has been assigned an incomplete <code>search()</code> function to search for a student by roll number in a pickled binary file <code>student.dat</code>.<br>
• The file contains student records formatted as <code>[roll_no, name, marks]</code>.<br>
• Each student record was written to the file using <code>pickle.dump()</code>.<br>
Help Arun complete the code to accept a roll number from the user, search for the record, display their details, and handle the end of file gracefully with a custom message if not found.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'In binary files, pickle.load() consumes one pickled object at a time. When end of file is reached, it raises EOFError. Using a boolean flag "found" ensures we notify the user if the searched roll number does not exist.',
      stepMarking: '[1 Mark] Correct import and file open in "rb" mode | [1 Mark] while True loop with pickle.load() and matching condition student[0] == target_rno | [1 Mark] Handling EOFError and testing found flag',
      cautionTrap: 'Do NOT put print("Not found") inside the while loop else branch! That would print "Not found" for every single non-matching record before reaching the target.',
      topperTip: 'Always use a boolean flag (found = False) outside the loop to cleanly handle "Not found" cases.'
    },
    {
      id: 'cs-fh-qb-q9',
      marks: 5,
      type: 'CSV File Operations',
      paper: 'CBSE Competency Bank (Official)',
      prob: '🔥 Direct Question from Official CBSE Competency Bank',
      stem: `Radha Shah is a programmer who needs to perform the following CSV file operations with two user-defined functions:<br>
(a) <code>CSVOpen()</code>: to create a CSV file called <code>BOOKS.CSV</code> in append mode containing book records: <code>[Title, Author, Price]</code>.<br>
(b) <code>CSVRead()</code>: to read <code>BOOKS.CSV</code> and display all records where the field <code>Title</code> starts with the letter <code>'R'</code> (case-insensitive). Also display the total count of such books.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'row[0].strip().upper().startswith("R") safely handles leading spaces and ensures case-insensitivity. Always check if row is non-empty before indexing to prevent IndexError on blank trailing lines.',
      stepMarking: '[2.5 Marks] CSVOpen() with append mode, newline="", loop and writerow() | [2.5 Marks] CSVRead() with csv.reader, row validation, starts with R condition, and counter',
      cautionTrap: 'Writing row[0][0] == "R" without checking if row and row[0] are non-empty will raise IndexError if a blank line exists in the CSV file!',
      topperTip: 'Use row[0].startswith(("R", "r")) for a clean, tuple-based multi-case check.'
    },
    {
      id: 'cs-fh-pq2-q28',
      marks: 3,
      type: 'Text File Word Counter',
      paper: 'CBSE 2023-24 Practice Paper (Official)',
      prob: '🔥 Official Question from 2023-24 Practice Paper',
      stem: `Write a function <code>COUNT()</code> in Python to read content from a text file named <code>"REPORT.TXT"</code>, and count and display the occurrences of the words <code>"IS"</code> or <code>"ARE"</code> (case-insensitive).<br><br>
<strong>Example Content of 'REPORT.TXT':</strong><br>
<code>"This is an annual report. Solar cells are efficient. Is it ready? Yes, they are."</code><br>
<strong>Expected Output:</strong><br>
<code>Count of IS/ARE: 4</code>`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
<pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
def COUNT():
    count = 0
    try:
        with open("REPORT.TXT", "r") as f:
            text = f.read()
            words = text.split()
            for w in words:
                clean_word = w.strip(".,?!;:-()"'").upper()
                if clean_word in ["IS", "ARE"]:
                    count += 1
        print("Count of IS/ARE:", count)
    except FileNotFoundError:
        print("Error: REPORT.TXT not found.")
</pre>
</div>`,
      explanation: 'Using w.strip(".,?!;:-()") removes trailing punctuation so words like "are." or "Is?" match accurately. .upper() normalizes case differences so both lowercase and uppercase variations match seamlessly.',
      stepMarking: '[1 Mark] Correct file open and read() with split() into words | [1 Mark] Punctuation-safe case-insensitive match for "IS" and "ARE" | [1 Mark] Incrementing count and displaying final result',
      cautionTrap: 'If you use text.count("is"), it will also count substrings inside other words like "Th[is]" and "d[is]cuss"! You MUST tokenize into words with split().',
      topperTip: 'Always tokenize with split() and strip punctuation before exact word matching.'
    },

    {
      id: 'cs-fh-qb-q1',
      marks: 5,
      type: 'CSV File Case Study',
      paper: 'CBSE Competency Bank (Official)',
      prob: '🔥 Direct Question from Official CBSE Competency Bank',
      stem: `Rohit, a student of class 12th, is learning CSV File Module in Python. During examination, he has been assigned an incomplete python code to create a CSV File 'Student.csv' (content shown below). Help him in completing the code which creates the desired CSV File.<br><br>
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
(v) Identify suitable code for Statement-5.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
<p><strong>Official CBSE Solution:</strong></p>
<ul class="list-disc pl-5 space-y-1 text-slate-800 text-xs">
  <li><strong>Statement-1:</strong> <code>csv</code> (Module name in lowercase: <code>import csv</code>)</li>
  <li><strong>Statement-2:</strong> <code>"Student.csv", "w"</code> (Opens file in write mode with <code>newline=''</code> to suppress extra blank lines)</li>
  <li><strong>Statement-3:</strong> <code>writer(fh)</code> (Creates a CSV writer object associated with file handle)</li>
  <li><strong>Statement-4:</strong> <code>[roll_no, name, Class, section]</code> (Packages the input variables into a single record list)</li>
  <li><strong>Statement-5:</strong> <code>writerows</code> (Writes all records in the 2D list <code>data</code> at once: <code>stuwriter.writerows(data)</code>)</li>
</ul>
</div>`,
      explanation: 'In Python, the CSV module requires newline="" when opening files for writing on Windows to prevent extra carriage-return newline translation. For a 2D list (nested list), always use writerows(), whereas for writing a single row, use writerow().',
      stepMarking: '[1 Mark] Correct import csv | [1 Mark] Correct file name and write mode string | [1 Mark] csv.writer(fh) method | [1 Mark] Correct record list structure [roll_no, name, Class, section] | [1 Mark] stuwriter.writerows(data)',
      cautionTrap: 'Writing stuwriter.writerow(data) instead of writerows(data) for a 2D list will write string representations rather than individual rows. Omitting newline="" in open() will insert blank lines between every record on Windows!',
      topperTip: 'Always remember: writerow() is for a 1D list (single row), while writerows() is for a 2D list of rows.'
    },
    {
      id: 'cs-fh-qb-q2',
      marks: 5,
      type: 'Binary File Program',
      paper: 'CBSE Competency Bank (Official)',
      prob: '🔥 Direct Question from Official CBSE Competency Bank',
      stem: `Amritya Seth is a programmer, who has recently been given a task to write a python code to perform binary file operations with two user-defined functions:<br>
(a) <code>AddStudents()</code>: to create a binary file called <code>STUDENT.DAT</code> containing student information - roll number, name and marks (out of 100) of each student until user wants to stop.<br>
(b) <code>GetStudents()</code>: to read <code>STUDENT.DAT</code> and display the roll number, name and marks of only those students whose percentage/marks is greater than or equal to 75%. Also display the total count of such qualifying students.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'Binary files store serialized Python byte streams. Reading binary files in Python requires an infinite while True loop with pickle.load(f), enclosed in a try-except block catching EOFError, which is naturally raised when the file pointer hits end-of-file.',
      stepMarking: '[1 Mark] Correct import pickle & opening in "ab" mode | [1.5 Marks] AddStudents() loop with input & pickle.dump() | [1 Mark] Opening in "rb" mode with try...except EOFError | [1 Mark] Filtering student[2] >= 75 and displaying formatted record | [0.5 Mark] Accurate count calculation and display',
      cautionTrap: 'Do NOT check for empty string or read() on a binary file handle when unpickling. You MUST catch EOFError! Using "w" instead of "ab" will wipe previous records.',
      topperTip: 'Use context managers (with open(...) as f:) so the file is automatically closed even if an EOFError or exception occurs.'
    },
    {
      id: 'cs-fh-sqp24-q29',
      marks: 3,
      type: 'Text File Search',
      paper: 'CBSE 2024-25 SQP (Official)',
      prob: '🔥 Official Question from 2024-25 Sample Question Paper',
      stem: `Write a Python function <code>display_cmail()</code> that reads content from a text file named <code>"emails.txt"</code> and displays all words that contain the substring <code>"@cmail"</code>.<br><br>
<strong>Example Content of 'emails.txt':</strong><br>
<pre class="bg-slate-100 p-2 rounded text-xs font-mono">
Contact admin@cmail.com or support@gmail.com for help.
Sales team is reached at info@cmail.org or direct queries.
</pre>
<strong>Expected Output:</strong><br>
<pre class="bg-slate-900 text-emerald-400 p-2 rounded text-xs font-mono">
admin@cmail.com
info@cmail.org
</pre>`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'f.read() reads the entire text file as a single string. Applying .split() tokenizes the string by any whitespace (spaces, tabs, newlines) into individual words. We then check membership using the "in" operator: if "@cmail" in word.',
      stepMarking: '[1 Mark] Opening file in read mode with context manager / close | [1 Mark] Reading and splitting text into words using split() | [1 Mark] Checking substring condition and displaying matching words',
      cautionTrap: 'Do NOT use readline() without a loop or readlines() without splitting each line, because readlines() returns lines containing multiple words, and checking "@cmail" in line would print the entire sentence rather than just the email word!',
      topperTip: 'f.read().split() is the most robust, 1-line Python idiom for extracting all words from a file.'
    },
    {
      id: 'cs-fh-sqp24-q33',
      marks: 4,
      type: 'CSV File Case Study',
      paper: 'CBSE 2024-25 SQP (Official)',
      prob: '🔥 Official Question from 2024-25 Sample Question Paper',
      stem: `A CSV file named <code>"Happiness.csv"</code> contains survey data with columns: <code>[Country, HappinessRank, HappinessScore, GDP]</code>.<br>
Write a Python program with two functions:<br>
(a) <code>AddRecord()</code>: To accept country details from the user and append them as a new row to <code>"Happiness.csv"</code>.<br>
(b) <code>TopCountries()</code>: To read <code>"Happiness.csv"</code> and display the Country name and HappinessScore of all countries having HappinessScore &gt;= 7.5. Also display the total count of such countries.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'When opening CSV in append mode ("a"), always use newline="" to avoid platform-specific extra blank lines. In TopCountries(), next(reader, None) safely skips the header row so float(row[2]) does not fail with ValueError on the header string "HappinessScore".',
      stepMarking: '[1 Mark] Correct AddRecord() implementation with mode="a" and writerow() | [1 Mark] Opening file in read mode with csv.reader | [1 Mark] Skipping header and converting score to float | [1 Mark] Correct condition, display, and total count',
      cautionTrap: 'Forgetting float(row[2]) and doing row[2] >= 7.5 will perform lexicographical string comparison! In string comparison, "6.9" > "10.0". Always convert numeric fields from CSV strings to int/float.',
      topperTip: 'Always use next(reader, None) to skip headers before entering numeric validation loops.'
    },
    {
      id: 'cs-fh-pq2-q34',
      marks: 5,
      type: 'Core Theory & Code',
      paper: 'CBSE 2023-24 Practice Paper (Official)',
      prob: '🔥 Official Question from 2023-24 Practice Paper',
      stem: `(i) Mention any two differences between <code>seek()</code> and <code>tell()</code> methods in Python file handling.<br>
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
</pre>`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'seek(offset, whence) moves the cursor: whence=0 is absolute from start; whence=1 is relative to current position (in binary mode); whence=2 is relative to end of file (in binary mode). tell() never changes position; it only inspects the cursor.',
      stepMarking: '[2 Marks] Two clear, accurate differences between seek() and tell() | [3 Marks] Exact 5-line output for the code snippet (0.5 mark for each print and accurate pointer values)',
      cautionTrap: 'In Python 3 text mode ("r"), seek() with non-zero offset is only allowed with whence=0 (from beginning of file). Using seek(5, 1) or seek(-5, 2) in text mode raises UnsupportedOperation!',
      topperTip: 'Remember: tell() reports where you ARE; seek() changes where you GO.'
    },

    {
      id: 'cs-fh-q1',
      marks: 3,
      type: 'Text File Handling',
      prob: '🔥 100% Guaranteed 3-Mark Question in CBSE Paper',
      stem: 'Write a Python function <code>vowel_and_line_stats()</code> to read from a text file named <code>"STORY.TXT"</code> and:<br>(i) Count and display the total number of vowels (A, E, I, O, U, case-insensitive) present in the entire file.<br>(ii) Display all lines that begin with the letter \'P\' or \'T\' (case-insensitive).',
      diagram: svg(560, 220, `
        <!-- File Streams & Modes Workflow -->
        <rect x="20" y="20" width="520" height="180" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">CBSE File Handling Architecture: Text, Binary & CSV</text>

        <!-- Text File Card -->
        <rect x="35" y="55" width="155" height="130" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="75" font-size="11" font-weight="bold" fill="#312e81">1. Text File (.TXT)</text>
        <text x="45" y="93" font-size="10" fill="#3730a3">• Modes: 'r', 'w', 'a'</text>
        <text x="45" y="108" font-size="10" fill="#3730a3">• read(): all chars</text>
        <text x="45" y="123" font-size="10" fill="#3730a3">• readline(): one line</text>
        <text x="45" y="138" font-size="10" fill="#3730a3">• readlines(): list of lines</text>
        <text x="45" y="153" font-size="10" fill="#3730a3">• EOL translation: '\\n'</text>
        <text x="45" y="168" font-size="10" font-weight="bold" fill="#1e1b4b">seek(pos) & tell()</text>

        <!-- Binary File Card -->
        <rect x="200" y="55" width="160" height="130" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="210" y="75" font-size="11" font-weight="bold" fill="#78350f">2. Binary File (.DAT)</text>
        <text x="210" y="93" font-size="10" fill="#92400e">• Modes: 'rb', 'wb', 'ab'</text>
        <text x="210" y="108" font-size="10" fill="#92400e">• import pickle</text>
        <text x="210" y="123" font-size="10" fill="#92400e">• pickle.dump(obj, f)</text>
        <text x="210" y="138" font-size="10" fill="#92400e">• pickle.load(f)</text>
        <text x="210" y="153" font-size="10" fill="#92400e">• try...except EOFError</text>
        <text x="210" y="168" font-size="10" font-weight="bold" fill="#78350f">Preserves Python dict/list</text>

        <!-- CSV File Card -->
        <rect x="370" y="55" width="155" height="130" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
        <text x="380" y="75" font-size="11" font-weight="bold" fill="#14532d">3. CSV File (.CSV)</text>
        <text x="380" y="93" font-size="10" fill="#166534">• import csv</text>
        <text x="380" y="108" font-size="10" fill="#166534">• open(..., newline='')</text>
        <text x="380" y="123" font-size="10" fill="#166534">• reader = csv.reader(f)</text>
        <text x="380" y="138" font-size="10" fill="#166534">• writer = csv.writer(f)</text>
        <text x="380" y="153" font-size="10" fill="#166534">• writer.writerow(row)</text>
        <text x="380" y="168" font-size="10" font-weight="bold" fill="#14532d">delimiter default is ','</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
def vowel_and_line_stats():
    vowels = "aeiouAEIOU"
    vowel_count = 0

    try:
        with open("STORY.TXT", "r") as file:
            lines = file.readlines()

            print("--- Lines starting with 'P' or 'T' ---")
            for line in lines:
                # Check line starting character (ignore leading whitespace)
                stripped = line.strip()
                if stripped and stripped[0].upper() in ['P', 'T']:
                    print(stripped)

                # Count vowels in line
                for ch in line:
                    if ch in vowels:
                        vowel_count += 1

            print("---------------------------------------")
            print("Total vowels in STORY.TXT:", vowel_count)

    except FileNotFoundError:
        print("Error: 'STORY.TXT' does not exist in the working directory.")
          </pre>
        </div>
      `,
      explanation: 'Use <code>stripped[0].upper() in [\'P\', \'T\']</code> to avoid IndexError on empty lines and handle both upper and lowercase letters. Always open files with <code>with open(...)</code> to ensure automatic closure.',
      stepMarking: '[1 Mark] Correct file open in read mode with context manager | [1 Mark] Correct vowel counting iteration | [1 Mark] Condition for lines starting with \'P\' or \'T\' and proper output',
      pacing: '5-6 min',
      competency: 'Algorithmic Coding',
      cautionTrap: 'Doing line[0] without checking "if line.strip():" raises IndexError on empty blank lines in text files. For CSV, forgetting newline=\'\' in open() inserts blank lines on Windows. For Binary pickle.load(), looping with "while f:" causes an infinite crash loop; you must handle EOFError.',
      topperTip: 'Always use "with open(...) as f:" for automatic resource reclamation. For line-start filters, use line.lstrip().startswith((\'P\', \'p\', \'T\', \'t\')).',
      mnemonic: 'File Modes: "r" reads, "w" wipes, "a" appends; "b" binary avoids newline bends!'
    },
    {
      id: 'cs-fh-q2',
      marks: 4,
      type: 'Binary File Handling (pickle)',
      prob: '🔥 Recurring 4-Mark Question in CBSE Section C/D',
      stem: 'A binary file <code>"STUDENT.DAT"</code> stores dictionaries of students in the format: <code>{"rno": int, "name": str, "marks": float}</code>.<br>Write functions in Python:<br>(i) <code>add_student()</code> to accept student details from user and append them to <code>"STUDENT.DAT"</code> using <code>pickle.dump()</code>.<br>(ii) <code>update_marks(rno_search, new_marks)</code> to search for a student by roll number and update their marks. If found, display "Record Updated"; otherwise display "Roll Number Not Found".',
      diagram: svg(540, 200, `
        <!-- Pickle Binary File Workflow -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Python Pickle Serialization: Memory Object ⇄ Binary Byte Stream</text>

        <!-- Python Object in Memory -->
        <rect x="35" y="60" width="135" height="100" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="80" font-size="11" font-weight="bold" fill="#312e81">Python Dict/List</text>
        <text x="45" y="98" font-size="9" fill="#3730a3">{"rno": 101,</text>
        <text x="45" y="112" font-size="9" fill="#3730a3"> "name": "Kavya",</text>
        <text x="45" y="126" font-size="9" fill="#3730a3"> "marks": 95.5}</text>
        <text x="45" y="145" font-size="9" font-weight="bold" fill="#1e1b4b">RAM Object</text>

        <!-- Forward Dump Pipe -->
        <path d="M 170 85 L 240 85" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#ar)"/>
        <text x="175" y="80" font-size="8" font-weight="bold" fill="#2563eb">pickle.dump()</text>

        <!-- Binary File on Disk -->
        <rect x="245" y="60" width="125" height="100" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="255" y="80" font-size="11" font-weight="bold" fill="#78350f">STUDENT.DAT</text>
        <text x="255" y="98" font-size="9" fill="#92400e">Byte Stream (0101)</text>
        <text x="255" y="112" font-size="9" fill="#92400e">b'\\x80\\x04\\x95\\x23...'</text>
        <text x="255" y="130" font-size="9" fill="#92400e">Modes: 'ab', 'rb'</text>
        <text x="255" y="145" font-size="9" font-weight="bold" fill="#78350f">Persistent Storage</text>

        <!-- Backward Load Pipe -->
        <path d="M 245 130 L 175 130" fill="none" stroke="#059669" stroke-width="2.5" marker-end="url(#ar)"/>
        <text x="175" y="142" font-size="8" font-weight="bold" fill="#059669">pickle.load()</text>

        <!-- EOF Catch Block -->
        <rect x="385" y="60" width="125" height="100" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="392" y="80" font-size="10" font-weight="bold" fill="#991b1b">EOF Handling:</text>
        <text x="392" y="98" font-size="8" font-mono fill="#7f1d1d">while True:</text>
        <text x="392" y="112" font-size="8" font-mono fill="#7f1d1d">  rec=pickle.load</text>
        <text x="392" y="126" font-size="8" font-mono fill="#dc2626">except EOFError:</text>
        <text x="392" y="142" font-size="8" font-mono font-weight="bold" fill="#991b1b">  break / pass</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
import pickle
import os

def add_student():
    rno = int(input("Enter Roll Number: "))
    name = input("Enter Name: ")
    marks = float(input("Enter Marks: "))
    record = {"rno": rno, "name": name, "marks": marks}

    with open("STUDENT.DAT", "ab") as f:
        pickle.dump(record, f)
        print("Student record appended successfully.")

def update_marks(rno_search, new_marks):
    found = False
    records = []

    if not os.path.exists("STUDENT.DAT"):
        print("STUDENT.DAT not found.")
        return

    # Read all records handling EOFError
    with open("STUDENT.DAT", "rb") as f:
        try:
            while True:
                rec = pickle.load(f)
                if rec["rno"] == rno_search:
                    rec["marks"] = new_marks
                    found = True
                records.append(rec)
        except EOFError:
            pass # End of file reached safely

    # Write updated records back
    if found:
        with open("STUDENT.DAT", "wb") as f:
            for rec in records:
                pickle.dump(rec, f)
        print(f"Record Updated: Roll {rno_search} marks set to {new_marks}.")
    else:
        print(f"Roll Number {rno_search} Not Found.")
          </pre>
        </div>
      `,
      explanation: 'Binary files with multiple pickled objects cannot be updated in-place safely without reading and rewriting. Use a while loop with <code>try...except EOFError: pass</code> to sequentially deserialize objects.',
      stepMarking: '[1.5 Marks] add_student() in "ab" mode with pickle.dump() | [1.5 Marks] update_marks() loop with pickle.load() and EOFError handling | [1 Mark] Rewrite logic in "wb" mode and found/not found flag'
    },
    {
      id: 'cs-fh-q3',
      marks: 3,
      type: 'CSV File Handling (csv module)',
      prob: '🔥 High Probability 3-Mark Question',
      stem: 'Write Python functions for a CSV file <code>"INVENTORY.CSV"</code> containing columns <code>[ItemCode, ItemName, Quantity, Price]</code>:<br>(i) <code>add_item(row)</code> to append a new item record.<br>(ii) <code>display_low_stock(threshold=10)</code> to read and display all items having Quantity less than threshold.',
      diagram: svg(540, 200, `
        <!-- CSV File Processing Architecture -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Python CSV Module: Comma Separated Delimited Rows</text>

        <!-- Tabular CSV File on Disk -->
        <rect x="35" y="60" width="165" height="100" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="45" y="80" font-size="11" font-weight="bold" fill="#78350f">INVENTORY.CSV</text>
        <line x1="35" y1="88" x2="200" y2="88" stroke="#fde68a" stroke-width="1"/>
        <text x="45" y="103" font-size="9" font-mono fill="#92400e">ItemCode,ItemName,Qty,Price</text>
        <text x="45" y="118" font-size="9" font-mono fill="#92400e">101,Monitor,8,12500</text>
        <text x="45" y="133" font-size="9" font-mono fill="#92400e">102,Keyboard,25,850</text>
        <text x="45" y="148" font-size="9" font-mono fill="#92400e">103,Mouse,5,450</text>

        <!-- CSV Reader Pipe -->
        <path d="M 200 95 L 265 95" fill="none" stroke="#059669" stroke-width="2.5" marker-end="url(#ar)"/>
        <text x="205" y="90" font-size="8" font-weight="bold" fill="#059669">csv.reader()</text>

        <!-- Python List of Strings -->
        <rect x="270" y="60" width="235" height="100" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
        <text x="280" y="80" font-size="11" font-weight="bold" fill="#14532d">Python Rows (List of Strings)</text>
        <text x="280" y="98" font-size="9" font-mono fill="#166534">['101', 'Monitor', '8', '12500']</text>
        <text x="280" y="115" font-size="9" fill="#14532d">Condition: int(row[2]) &lt; 10</text>
        <text x="280" y="130" font-size="9" font-weight="bold" fill="#dc2626">Trigger Alert: '101' & '103'</text>
        <text x="280" y="148" font-size="8" font-mono fill="#14532d">csv.writer() needs newline=''</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
import csv

def add_item(row):
    # row is a list: [item_code, name, qty, price]
    with open("INVENTORY.CSV", "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(row)
        print("Item record written to CSV.")

def display_low_stock(threshold=10):
    try:
        with open("INVENTORY.CSV", "r", newline="") as f:
            reader = csv.reader(f)
            header = next(reader, None) # Skip header if present
            print("--- LOW STOCK ALERTS ---")
            found = False
            for row in reader:
                if row and int(row[2]) < threshold:
                    print(f"Code: {row[0]}, Item: {row[1]}, Qty: {row[2]}, Price: ₹{row[3]}")
                    found = True
            if not found:
                print("All items have sufficient stock.")
    except FileNotFoundError:
        print("INVENTORY.CSV does not exist.")
          </pre>
        </div>
      `,
      explanation: 'In Python 3 CSV handling, always pass <code>newline=""</code> in <code>open()</code> to prevent extra blank rows between lines on Windows operating systems.',
      stepMarking: '[1 Mark] add_item() using csv.writer and writerow with newline="" | [1 Mark] display_low_stock() reading and type-casting row[2] to int | [1 Mark] Header skip and formatted console output'
    }
  ];

  // 3. Data Structures (Stack)
  Q['Stack'] = [
    {
      id: 'cs-ds-sqp24-q30',
      marks: 3,
      type: 'Stack Implementation',
      paper: 'CBSE 2024-25 SQP (Official)',
      prob: '🔥 Official Question from 2024-25 Sample Question Paper',
      stem: `A list named <code>BooksStack</code> is used to implement a Stack in Python to store records of books where each record is a dictionary with structure: <code>{"BookId": ..., "BookName": ..., "Price": ...}</code>.<br><br>
Write user-defined functions in Python to perform the following operations:<br>
(i) <code>PushBook(BooksStack, book)</code>: To push a book dictionary onto <code>BooksStack</code> only if its <code>Price</code> is greater than 300.<br>
(ii) <code>PopBook(BooksStack)</code>: To pop and display the <code>BookName</code> and <code>Price</code> of the book from <code>BooksStack</code>. If the stack is empty, display <code>"Stack Underflow"</code>.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'In Python, a List natively models a Stack where append() represents Push (O(1) at the end/top) and pop() without arguments represents Pop (O(1) from the top). An Underflow test must strictly check if the stack is empty (len == 0) before invoking pop().',
      stepMarking: '[1.5 Marks] PushBook() with conditional check book["Price"] > 300 and append() | [1.5 Marks] PopBook() with underflow check (len == 0 / if not BooksStack) and pop() displaying BookName and Price',
      cautionTrap: 'Calling pop(0) instead of pop() turns your LIFO Stack into a FIFO Queue! Always call pop() with no index to pop from the top of the stack.',
      topperTip: 'Always test underflow FIRST before attempting pop(), otherwise Python raises IndexError: pop from empty list.'
    },
    {
      id: 'cs-ds-pq2-q30',
      marks: 3,
      type: 'Dictionary to Stack Transfer',
      paper: 'CBSE 2023-24 Practice Paper (Official)',
      prob: '🔥 Official Question from 2023-24 Practice Paper',
      stem: `Given a dictionary <code>Stu_dict</code> containing marks of students for three subjects formatted as:<br>
<code>Stu_dict = {"Amit": [85, 90, 78], "Sneha": [65, 70, 60], "Rohan": [88, 92, 95], "Pooja": [72, 74, 68]}</code><br><br>
Write a Python program with two user-defined functions:<br>
(i) <code>Push_avg(Stu_dict, Stack)</code>: To calculate average marks of each student and push the student's name into <code>Stack</code> only if their average marks &gt;= 80.<br>
(ii) <code>Pop_all(Stack)</code>: To pop and display all student names from <code>Stack</code> until it becomes empty. If initially empty, print <code>"Empty Stack"</code>.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'sum(marks)/len(marks) computes the average score. In Pop_all(), the while Stack: loop repeatedly pops from the top until the stack becomes empty, accurately following the Last-In-First-Out rule.',
      stepMarking: '[1.5 Marks] Push_avg() looping over items(), calculating average, and appending | [1.5 Marks] Pop_all() checking empty condition, while loop with pop() until empty',
      cautionTrap: 'Do NOT forget to return after printing "Empty Stack" in Pop_all(), otherwise the subsequent loop might fail or execute unpredictably.',
      topperTip: 'Using while Stack: print(Stack.pop()) is the cleanest, most Pythonic way to drain a stack in CBSE exams.'
    },

    {
      id: 'cs-ds-q1',
      marks: 4,
      type: 'Data Structure Implementation (Stack LIFO)',
      prob: '🔥 Guaranteed 4-Mark Board Question (CBSE 2024, 2023, 2022)',
      stem: 'Write a Python program to implement a Stack for Library Book Records <code>[BookNo, BookTitle]</code> using a list. Implement:<br>(i) <code>Push_Book(stk, book)</code> to push a book record onto the stack.<br>(ii) <code>Pop_Book(stk)</code> to pop and return the top book record, checking for Stack Underflow.<br>(iii) <code>Peek_Book(stk)</code> to display the top element without removing it.',
      diagram: svg(520, 220, `
        <!-- Stack Diagram -->
        <rect x="20" y="20" width="480" height="180" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">LIFO (Last In, First Out) Stack Architecture</text>

        <!-- Stack Container U-shape -->
        <line x1="80" y1="55" x2="80" y2="185" stroke="#1e293b" stroke-width="3"/>
        <line x1="80" y1="185" x2="220" y2="185" stroke="#1e293b" stroke-width="3"/>
        <line x1="220" y1="55" x2="220" y2="185" stroke="#1e293b" stroke-width="3"/>
        <text x="110" y="198" font-size="10" fill="#64748b">Stack Base (Closed)</text>

        <!-- Stack Elements -->
        <rect x="85" y="150" width="130" height="28" rx="4" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
        <text x="100" y="168" font-size="11" font-weight="bold" fill="#0f172a">[101, "Python Core"]</text>

        <rect x="85" y="115" width="130" height="28" rx="4" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
        <text x="100" y="133" font-size="11" font-weight="bold" fill="#1e3a8a">[102, "Data Networks"]</text>

        <rect x="85" y="80" width="130" height="28" rx="4" fill="#86efac" stroke="#16a34a" stroke-width="2"/>
        <text x="95" y="98" font-size="11" font-weight="bold" fill="#14532d">[103, "SQL Queries"] (TOP)</text>

        <!-- Pointers and Operations -->
        <path d="M 230 94 L 280 94" fill="none" stroke="#16a34a" stroke-width="2.5" marker-end="url(#ar)"/>
        <text x="290" y="98" font-size="12" font-weight="bold" fill="#16a34a">TOP = len(stk) - 1</text>

        <!-- Push and Pop Visuals -->
        <path d="M 280 130 L 330 130 L 330 155" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="280" y="125" font-size="11" font-weight="bold" fill="#2563eb">Push: stk.append(book)</text>

        <path d="M 280 170 L 330 170" fill="none" stroke="#dc2626" stroke-width="2"/>
        <text x="280" y="165" font-size="11" font-weight="bold" fill="#dc2626">Pop: stk.pop() (Underflow if empty)</text>

        <!-- Underflow Callout -->
        <rect x="350" y="45" width="140" height="50" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="360" y="65" font-size="11" font-weight="bold" fill="#991b1b">Underflow Check:</text>
        <text x="360" y="82" font-size="10" font-mono fill="#b91c1c">if len(stk) == 0: ...</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
def Push_Book(stk, book):
    # book is [BookNo, BookTitle]
    stk.append(book)
    print(f"Book {book[1]} (No: {book[0]}) pushed onto Stack.")

def Pop_Book(stk):
    # Check for Stack Underflow
    if len(stk) == 0:
        print("Stack Underflow! Cannot pop from an empty stack.")
        return None
    else:
        popped_book = stk.pop()
        print(f"Book {popped_book[1]} popped from Stack.")
        return popped_book

def Peek_Book(stk):
    if len(stk) == 0:
        print("Stack is empty. Nothing to peek.")
        return None
    else:
        top_book = stk[-1]
        print(f"Top Book on Stack: {top_book[1]} (No: {top_book[0]})")
        return top_book

# Driver code demonstration
BookStack = []
Push_Book(BookStack, [101, "Learning Python"])
Push_Book(BookStack, [102, "Database Systems"])
Peek_Book(BookStack)
Pop_Book(BookStack)
Pop_Book(BookStack)
Pop_Book(BookStack) # Underflow trigger
          </pre>
        </div>
      `,
      explanation: 'In Python lists, <code>append()</code> adds to index -1 in O(1) time and <code>pop()</code> removes from index -1 in O(1) time. Do NOT use <code>pop(0)</code> or <code>insert(0)</code> as that implements a Queue (FIFO) and has O(n) overhead.',
      stepMarking: '[1.5 Marks] Push function with list.append() | [1.5 Marks] Pop function with empty underflow check and return | [1 Mark] Peek function using stk[-1] with underflow check'
    }
  ];

  // 4. Relational Databases & SQL
  Q['Relational Databases and SQL'] = [
    {
      id: 'cs-sql-qb-q5',
      marks: 5,
      type: 'Multi-Table Relational Queries & Joins',
      paper: 'CBSE Competency Bank (Official)',
      prob: '🔥 Direct Question from Official CBSE Competency Bank',
      stem: `In a Database, there are two tables with the instances given below:<br>
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
(v) Write an SQL query to display the number of students enrolled in each GAME from table SPORTS.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'Degree is the number of attributes (columns), and Cardinality is the number of records (rows). When checking for missing values in SQL, always use "IS NULL" instead of "= NULL".',
      stepMarking: '[1 Mark] Correct PK (ADMNO) and FK (ADMNO) | [1 Mark] Correct Degree (7) and Cardinality (5) | [1 Mark] Equi-Join query joining on ADMNO and filtering CRICKET | [1 Mark] WHERE ADDRESS IS NULL with COUNT(*) | [1 Mark] SELECT GAME, COUNT(*) GROUP BY GAME',
      cautionTrap: 'Writing WHERE ADDRESS = NULL returns 0 rows! SQL comparison with NULL requires IS NULL or IS NOT NULL.',
      topperTip: 'Remember: Degree = Columns; Cardinality = Rows. Equi-joins MUST link Parent.PK = Child.FK in the WHERE clause.'
    },

    {
      id: 'cs-sql-sqp24-q32',
      marks: 4,
      type: 'Advanced SQL Queries',
      paper: 'CBSE 2024-25 SQP (Official)',
      prob: '🔥 Official 4-Mark Question from 2024-25 Sample Question Paper',
      stem: `Consider the table <code>ORDERS</code> as given below:<br>
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
(iv) Display the average price of items ordered from Delhi.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'GROUP BY groups identical city names into single summary rows for aggregate calculation with SUM(Qty). In WHERE clauses, column aliases (like TotalAmount) cannot typically be used in standard SQL; repeat the arithmetic expression (Qty * Price). For sorting by multiple keys, list them separated by comma: City ASC, Price DESC.',
      stepMarking: '[1 Mark] Correct SELECT City, SUM(Qty) FROM ORDERS GROUP BY City | [1 Mark] Correct SELECT CustName, Item, Qty*Price WHERE (Qty*Price) > 2000 | [1 Mark] Correct ORDER BY City ASC, Price DESC | [1 Mark] Correct SELECT AVG(Price) WHERE City = "Delhi"',
      cautionTrap: 'Do NOT use HAVING instead of WHERE when filtering without aggregate functions. HAVING is exclusively for filtering groups created by GROUP BY!',
      topperTip: 'Always remember: WHERE filters individual tuples BEFORE grouping; HAVING filters aggregated groups AFTER grouping.'
    },
    {
      id: 'cs-sql-sqp24-q27',
      marks: 2,
      type: 'Database Concepts (DDL vs DML)',
      paper: 'CBSE 2024-25 SQP (Official)',
      prob: '🔥 Official Question from 2024-25 Sample Question Paper',
      stem: `Differentiate between Data Definition Language (DDL) and Data Manipulation Language (DML) commands in SQL. Give two examples of commands for each category.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'DDL commands define or restructure the relations itself; changes are permanent (auto-commit). DML commands manipulate the instance data stored within the schema.',
      stepMarking: '[1 Mark] Clear conceptual distinction between schema structure vs table contents | [1 Mark] 2 valid examples for each category (DDL: CREATE/ALTER, DML: INSERT/UPDATE)',
      cautionTrap: 'Do NOT confuse ALTER with UPDATE! ALTER is DDL (changes table columns/data types); UPDATE is DML (changes data values within rows).',
      topperTip: 'Remember: ALTER changes structure; UPDATE changes content.'
    },

    {
      id: 'cs-sql-q1',
      marks: 4,
      type: 'SQL Aggregate, GROUP BY, UPDATE & Equi-Join',
      prob: '🔥 100% Guaranteed 4-Mark Board Section',
      stem: 'Given tables <code>EMPLOYEE (EmpId, Name, Department, Salary, Commission, DeptId)</code> and <code>DEPARTMENT (DeptId, DeptName, Location)</code>, write SQL queries for:<br>(i) Display DeptId and average Salary for each Department where average salary is greater than 45000.<br>(ii) Display names of all employees whose Commission <code>IS NULL</code>.<br>(iii) Increase the Salary of all employees in the \'SALES\' department by 15%.<br>(iv) Display Employee Name, Salary, and DeptName of all employees whose Location is \'DELHI\' (2-table Equi-Join).',
      diagram: svg(540, 220, `
        <!-- Database Equi-Join Schema -->
        <rect x="20" y="20" width="500" height="180" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">2-Table Equi-Join & Foreign Key Schema</text>

        <!-- Table EMPLOYEE -->
        <rect x="35" y="55" width="200" height="130" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="75" font-size="11" font-weight="bold" fill="#312e81">Table: EMPLOYEE</text>
        <line x1="35" y1="82" x2="235" y2="82" stroke="#c7d2fe" stroke-width="1"/>
        <text x="45" y="98" font-size="10" fill="#1e1b4b">• EmpId (Primary Key)</text>
        <text x="45" y="113" font-size="10" fill="#1e1b4b">• Name</text>
        <text x="45" y="128" font-size="10" fill="#1e1b4b">• Department</text>
        <text x="45" y="143" font-size="10" fill="#1e1b4b">• Salary, Commission</text>
        <text x="45" y="165" font-size="10" font-weight="bold" fill="#4338ca">• DeptId (Foreign Key)</text>

        <!-- Table DEPARTMENT -->
        <rect x="300" y="55" width="200" height="130" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="310" y="75" font-size="11" font-weight="bold" fill="#78350f">Table: DEPARTMENT</text>
        <line x1="300" y1="82" x2="500" y2="82" stroke="#fde68a" stroke-width="1"/>
        <text x="310" y="98" font-size="10" font-weight="bold" fill="#b45309">• DeptId (Primary Key)</text>
        <text x="310" y="118" font-size="10" fill="#92400e">• DeptName</text>
        <text x="310" y="138" font-size="10" fill="#92400e">• Location</text>
        <text x="310" y="165" font-size="10" fill="#78350f">Referenced by EMPLOYEE</text>

        <!-- Join Link Arrow -->
        <path d="M 235 162 C 265 162, 270 95, 298 95" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4"/>
        <circle cx="235" cy="162" r="4" fill="#4338ca"/>
        <circle cx="298" cy="95" r="4" fill="#dc2626"/>
        <text x="245" y="130" font-size="10" font-weight="bold" fill="#dc2626">Equi-Join</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-900 text-amber-300 p-3 rounded-lg text-xs font-mono space-y-2.5">
            <div>
              <span class="text-slate-400">-- (i) DeptId & AVG(Salary) with HAVING condition</span><br>
              <strong>SELECT DeptId, AVG(Salary) FROM EMPLOYEE GROUP BY DeptId HAVING AVG(Salary) > 45000;</strong>
            </div>
            <div>
              <span class="text-slate-400">-- (ii) Commission IS NULL (Must use IS NULL, NEVER = NULL)</span><br>
              <strong>SELECT Name FROM EMPLOYEE WHERE Commission IS NULL;</strong>
            </div>
            <div>
              <span class="text-slate-400">-- (iii) Increase Salary by 15% for SALES department</span><br>
              <strong>UPDATE EMPLOYEE SET Salary = Salary * 1.15 WHERE Department = 'SALES';</strong>
            </div>
            <div>
              <span class="text-slate-400">-- (iv) 2-Table Equi-Join query filtering by Location</span><br>
              <strong>SELECT E.Name, E.Salary, D.DeptName<br>FROM EMPLOYEE E, DEPARTMENT D<br>WHERE E.DeptId = D.DeptId AND D.Location = 'DELHI';</strong>
            </div>
          </div>
        </div>
      `,
      explanation: 'Examiner Reminders: (1) WHERE filters individual rows before grouping; HAVING filters aggregate groups. (2) NULL comparison must always use IS NULL or IS NOT NULL; = NULL evaluates to UNKNOWN. (3) 2-table queries must explicitly include the join condition E.DeptId = D.DeptId to avoid an accidental Cartesian product.',
      stepMarking: '[1 Mark] GROUP BY DeptId HAVING AVG(Salary) > 45000 | [1 Mark] WHERE Commission IS NULL | [1 Mark] UPDATE EMPLOYEE SET Salary = Salary * 1.15 WHERE Department = \'SALES\' | [1 Mark] Correct 2-table Equi-Join with matching DeptId condition'
    }
  ];

  // 5. Computer Networks (CBSE 8-Mark Mega Case Study)
  Q['Computer Networks'] = [
    {
      id: 'cs-net-qb-q6',
      marks: 5,
      type: 'Campus Case Study (ABC Enterprises)',
      paper: 'CBSE Competency Bank (Official)',
      prob: '🔥 Direct Question from Official CBSE Competency Bank',
      stem: `A company ABC Enterprises has four blocks of buildings:<br>
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
(v) Which protocol will be used if an employee in Mumbai transfers a confidential project file to the Delhi server?`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'In 5-mark networking case studies, always provide exact distance calculations for your layout. Mention both FTP and SFTP for data transfer over WAN.',
      stepMarking: '[1 Mark] Block B3 with 80/20 rule | [1 Mark] Cable layout with total 135m calculation | [1 Mark] Satellite / Fiber WAN link | [1 Mark] Switches in all blocks + repeater rationale | [1 Mark] FTP / SFTP protocol',
      cautionTrap: 'Suggesting Wi-Fi between Delhi and Mumbai will result in zero marks! Wi-Fi is a short-range LAN technology. Inter-city WAN requires Satellite or Leased Optical Fiber lines.',
      topperTip: 'Always draw both the layout diagram and calculate the total cable meters.'
    },

    {
      id: 'cs-net-sqp24-q37',
      marks: 5,
      type: 'Campus Case Study (Full 5 Marks)',
      paper: 'CBSE 2024-25 SQP (Official)',
      prob: '🔥 Guaranteed 5-Mark Question from 2024-25 Sample Question Paper',
      stem: `Event Horizon Enterprises is an event planning organization. It is planning to set up a new network infrastructure for its campus consisting of 4 blocks: <strong>Design Block (D)</strong>, <strong>Planning Block (P)</strong>, <strong>Finance Block (F)</strong>, and <strong>Admin Block (A)</strong>.<br><br>
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
(v) The organization plans to conduct online multi-party interactive live video conferences with overseas clients. Suggest an appropriate protocol and communication software/technology for this.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'The 5-mark networking case study is an absolute fixture in CBSE Computer Science. Memorize: (1) 80-20 rule for server placement; (2) Hub/switch in EVERY block; (3) Repeater when distance > 70-100m; (4) Fiber optic for campus backbone.',
      stepMarking: '[1 Mark] Block P with 80/20 rule justification | [1 Mark] Star layout with total cable calculation | [1 Mark] Repeater between P & A (>70-100m) + Switch in every block | [1 Mark] Optical Fiber cable recommendation with speed/security reason | [1 Mark] VoIP/SIP protocol recommendation',
      cautionTrap: 'Saying "Install repeater in Block A" is incorrect! Repeaters are installed along the cable link between two blocks (P and A). And never say switch is only in the server block; EVERY block requires a switch!',
      topperTip: 'Always calculate total cable length for your topology to prove it is the minimum-cost layout.'
    },
    {
      id: 'cs-net-sqp24-q23',
      marks: 2,
      type: 'Networking Media Comparison',
      paper: 'CBSE 2024-25 SQP (Official)',
      prob: '🔥 Official Question from 2024-25 Sample Question Paper',
      stem: `Give two examples of each of the following transmission media:<br>
(a) Guided Media<br>
(b) Unguided Media`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'Guided media (bound transmission) physical conductors confine the electromagnetic energy along a narrow path. Unguided media (unbound transmission) uses free space (air or vacuum) to transmit electromagnetic signals without physical conductors.',
      stepMarking: '[1 Mark] Any two correct examples of Guided Media | [1 Mark] Any two correct examples of Unguided Media',
      cautionTrap: 'Do NOT write "Wi-Fi" as guided media or "Copper wire" as unguided media! Keep cables in guided and waves in unguided.',
      topperTip: 'Optical Fiber is Guided (uses glass core with total internal reflection); Satellite is Unguided (uses microwaves).'
    },

    {
      id: 'cs-net-q1',
      marks: 8,
      type: 'Mega Case Study (Campus Networking Layout)',
      prob: '🔥 100% Guaranteed 8-Mark Board Case Study',
      stem: `<strong>Knowledge Heights Global University</strong> is setting up its network across 4 blocks within its campus. You are hired as the network consultant to solve their design challenges.<br><br>
      <strong>Block Distances:</strong><br>
      • Admin to Academic: 40 m | Admin to Research: 120 m | Admin to Hostel: 450 m<br>
      • Academic to Research: 80 m | Academic to Hostel: 380 m | Research to Hostel: 300 m<br><br>
      <strong>Computer Count:</strong><br>
      • Admin Block: 120 computers | Academic Block: 85 computers | Research Block: 60 computers | Hostel Block: 25 computers<br><br>
      Answer the following questions:<br>
      (i) Suggest the most suitable block to house the Server. Justify using networking rules.<br>
      (ii) Draw/suggest the best cable layout topology to connect all 4 blocks economically.<br>
      (iii) Suggest the placement of Repeater(s) and Hub/Switch with valid technical justification.<br>
      (iv) Which wired transmission medium should be used for backbone inter-block links vs within-block connections?<br>
      (v) Which wireless technology should be used to connect this campus with its head office 1500 km away?<br>
      (vi) Recommend suitable protocols for: (a) Secure student admission web portal, (b) Real-time faculty video conferencing.`,
      diagram: svg(600, 260, `
        <!-- Campus Network Map -->
        <rect x="20" y="20" width="560" height="220" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Campus Network Topology & Device Layout</text>

        <!-- Admin Block (SERVER) -->
        <rect x="40" y="65" width="130" height="75" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="50" y="85" font-size="11" font-weight="bold" fill="#1e3a8a">ADMIN BLOCK</text>
        <text x="50" y="100" font-size="10" fill="#1e40af">120 Computers</text>
        <rect x="48" y="108" width="60" height="20" rx="3" fill="#2563eb"/>
        <text x="55" y="122" font-size="9" font-weight="bold" fill="#ffffff">SERVER</text>
        <circle cx="150" cy="118" r="6" fill="#059669"/>
        <text x="135" y="135" font-size="8" fill="#059669">Switch</text>

        <!-- Academic Block -->
        <rect x="230" y="65" width="130" height="75" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
        <text x="240" y="85" font-size="11" font-weight="bold" fill="#0f172a">ACADEMIC</text>
        <text x="240" y="100" font-size="10" fill="#334155">85 Computers</text>
        <circle cx="340" cy="118" r="6" fill="#059669"/>
        <text x="325" y="135" font-size="8" fill="#059669">Switch</text>

        <!-- Research Block -->
        <rect x="420" y="65" width="130" height="75" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
        <text x="430" y="85" font-size="11" font-weight="bold" fill="#0f172a">RESEARCH</text>
        <text x="430" y="100" font-size="10" fill="#334155">60 Computers</text>
        <circle cx="530" cy="118" r="6" fill="#059669"/>
        <text x="515" y="135" font-size="8" fill="#059669">Switch</text>

        <!-- Hostel Block -->
        <rect x="420" y="165" width="130" height="60" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
        <text x="430" y="185" font-size="11" font-weight="bold" fill="#0f172a">HOSTEL</text>
        <text x="430" y="200" font-size="10" fill="#334155">25 Computers</text>
        <circle cx="530" cy="205" r="6" fill="#059669"/>
        <text x="515" y="220" font-size="8" fill="#059669">Switch</text>

        <!-- Cable Links with Distance Tags -->
        <line x1="170" y1="100" x2="230" y2="100" stroke="#dc2626" stroke-width="3"/>
        <text x="180" y="93" font-size="10" font-weight="bold" fill="#dc2626">40m</text>

        <line x1="360" y1="100" x2="420" y2="100" stroke="#dc2626" stroke-width="3"/>
        <text x="375" y="93" font-size="10" font-weight="bold" fill="#dc2626">80m</text>

        <line x1="485" y1="140" x2="485" y2="165" stroke="#dc2626" stroke-width="3"/>
        <rect x="465" y="145" width="40" height="15" rx="3" fill="#ea580c"/>
        <text x="468" y="156" font-size="8" font-weight="bold" fill="#ffffff">REPEATER</text>
        <text x="508" y="155" font-size="10" font-weight="bold" fill="#ea580c">300m</text>

        <text x="40" y="170" font-size="10" font-weight="bold" fill="#2563eb">Total Minimal Cable: 40 + 80 + 300 = 420 meters</text>
        <text x="40" y="190" font-size="10" fill="#64748b">Star / Bus Backbone using Optical Fiber</text>
      `),
      modelAnswer: `
        <div class="space-y-3 text-xs text-slate-800">
          <div>
            <strong>(i) Server Block Placement:</strong><br>
            The Server must be installed in the <strong>Admin Block</strong>.
            <br><em>Justification:</em> The <strong>80/20 Rule</strong> dictates placing the server where maximum network traffic originates/terminates. Admin Block has the highest number of computers (120 machines), minimizing overall latency and inter-block traffic.
          </div>
          <div>
            <strong>(ii) Cable Layout / Topology:</strong><br>
            <strong>Bus/Tree Topology:</strong> Connecting blocks via the shortest path:
            <code>Admin —(40m)— Academic —(80m)— Research —(300m)— Hostel</code>.
            <br><em>Total Cable Required:</em> <code>40 + 80 + 300 = 420 meters</code>. (Alternatively, Star Topology centered at Admin requires <code>40 + 120 + 450 = 610 meters</code>).
          </div>
          <div>
            <strong>(iii) Placement of Repeaters and Hubs/Switches:</strong><br>
            • <strong>Repeater:</strong> Required between <em>Research Block and Hostel Block</em> because the distance is <strong>300 meters</strong>, which significantly exceeds the standard 100m threshold of Ethernet signals, causing signal attenuation.
            <br>• <strong>Hub/Switch:</strong> A Switch must be installed in <strong>EVERY block</strong> (Admin, Academic, Research, and Hostel) to connect individual computers locally within that block LAN.
          </div>
          <div>
            <strong>(iv) Transmission Media:</strong><br>
            • <strong>Inter-block backbone:</strong> <em>Optical Fiber Cable</em> (provides high bandwidth, immunity to electromagnetic interference over distances, and gigabit throughput).
            <br>• <strong>Within each block:</strong> <em>CAT-6 UTP (Twisted Pair Cable) with RJ-45 connectors</em> (cost-effective and ideal for runs &lt; 100m).
          </div>
          <div>
            <strong>(v) Remote Link (1500 km away):</strong><br>
            <strong>Satellite Link / VSAT</strong> (Very Small Aperture Terminal) is the ideal wireless medium for inter-city long-distance connectivity across 1500 km.
          </div>
          <div>
            <strong>(vi) Protocol Recommendations:</strong><br>
            (a) Secure Admission Portal: <strong>HTTPS</strong> (HyperText Transfer Protocol Secure over SSL/TLS port 443).<br>
            (b) Video Conferencing: <strong>VoIP</strong> (Voice over Internet Protocol) and <strong>SIP</strong> (Session Initiation Protocol).
          </div>
        </div>
      `,
      explanation: 'CBSE 8-Mark networking case study questions follow a predictable pattern: (1) Server location = 80/20 rule (max computers), (2) Topology = minimum total cable length, (3) Repeaters = required when distance > 100m, (4) Switch = needed in every block, (5) Wired = Optical fiber (backbone) & UTP (internal), (6) WAN = Satellite link.',
      stepMarking: '[1.5 Marks] Server placement with 80/20 rule justification | [1.5 Marks] Cable layout with minimal distance calculation | [1.5 Marks] Repeater placement (>100m) and Switch in every block | [1.5 Marks] Optical Fiber vs CAT-6 UTP | [1 Mark] Satellite link for 1500 km | [1 Mark] HTTPS and VoIP protocol recommendations'
    }
  ];

  // 6. Interface Python with MySQL
  Q['Interface Python with MySQL'] = [
    {
      id: 'cs-db-sqp24-q35',
      marks: 4,
      type: 'Python-MySQL Connectivity Code',
      paper: 'CBSE 2024-25 SQP (Official)',
      prob: '🔥 Official 4-Mark Question from 2024-25 Sample Question Paper',
      stem: `A table named <code>STATIONERY</code> in database <code>ITEMDB</code> contains columns: <code>[ItemId, ItemName, Company, Price]</code>.<br>
Write a Python program to connect to MySQL database <code>ITEMDB</code> and perform the following tasks using <code>mysql.connector</code>:<br>
(i) Display all items manufactured by company <code>"Camlin"</code>.<br>
(ii) Increase the price of all items by 10% whose current price is less than 50.<br>
Ensure proper database cursor management and commit statements.`,
      diagram: svg(560, 220, `

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
        
      `),
      modelAnswer: `<div class="space-y-3">
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
</div>`,
      explanation: 'SELECT statements require cursor.fetchall() or cursor.fetchone() to transfer retrieved tuples into Python memory. UPDATE, INSERT, and DELETE statements require con.commit() to make transactions permanent in the relational database.',
      stepMarking: '[1 Mark] Correct import and connection parameters (host, user, password, database) | [1 Mark] Query 1 execution and fetchall() traversal loop | [1 Mark] Query 2 UPDATE syntax with 10% increase (Price * 1.10) | [1 Mark] Mandatory con.commit() and closing connection/cursor',
      cautionTrap: 'If you forget con.commit() after UPDATE, the query executes without error in Python, but NO changes will be saved to the database on disk! 70% of students lose this mark.',
      topperTip: 'Golden Rule: SELECT needs fetchall(); UPDATE/INSERT/DELETE needs con.commit()!'
    },

    {
      id: 'cs-db-q1',
      marks: 4,
      type: 'Python-MySQL Connectivity Code Template',
      prob: '🔥 Recurring 4-Mark Board Question (CBSE 2024, 2023)',
      stem: 'Write a modular Python program using <code>mysql.connector</code> to connect to a MySQL database <code>SchoolDB</code> on <code>localhost</code> (user: <code>root</code>, password: <code>admin</code>) and perform:<br>(i) Insert a new student record into table <code>STUDENT (RollNo, Name, Grade, Marks)</code> using parameterized queries.<br>(ii) Commit the transaction to save changes permanently.<br>(iii) Fetch and display all student records who scored Marks > 90 using <code>fetchall()</code>.<br>(iv) Include safe exception handling and clean closing of cursor and connection.',
      diagram: svg(560, 200, `
        <!-- Python-MySQL Architecture -->
        <rect x="20" y="20" width="520" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Python - MySQL Database Connectivity Architecture</text>

        <!-- Python Application Box -->
        <rect x="35" y="60" width="130" height="100" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="45" y="80" font-size="11" font-weight="bold" fill="#1e3a8a">Python App</text>
        <text x="45" y="98" font-size="10" fill="#1e40af">mysql.connector</text>
        <text x="45" y="115" font-size="9" fill="#1e40af">• connect()</text>
        <text x="45" y="130" font-size="9" fill="#1e40af">• cursor()</text>
        <text x="45" y="145" font-size="9" fill="#1e40af">• commit()</text>

        <!-- Cursor Pipe -->
        <path d="M 165 95 L 245 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#ar)"/>
        <text x="175" y="90" font-size="9" font-weight="bold" fill="#2563eb">execute(SQL)</text>

        <rect x="250" y="60" width="100" height="100" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
        <text x="260" y="80" font-size="11" font-weight="bold" fill="#312e81">Cursor</text>
        <text x="260" y="98" font-size="10" fill="#3730a3">Buffer</text>
        <text x="260" y="118" font-size="9" fill="#3730a3">• fetchone()</text>
        <text x="260" y="135" font-size="9" fill="#3730a3">• fetchall()</text>
        <text x="260" y="150" font-size="9" fill="#3730a3">• rowcount</text>

        <!-- Result Set Pipe -->
        <path d="M 350 95 L 415 95" fill="none" stroke="#059669" stroke-width="2.5" marker-end="url(#ar)"/>
        <text x="355" y="90" font-size="9" font-weight="bold" fill="#059669">TCP :3306</text>

        <!-- MySQL Server Box -->
        <rect x="420" y="60" width="110" height="100" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="430" y="80" font-size="11" font-weight="bold" fill="#78350f">MySQL Server</text>
        <text x="430" y="98" font-size="10" fill="#92400e">SchoolDB</text>
        <text x="430" y="118" font-size="9" fill="#92400e">• Parser</text>
        <text x="430" y="133" font-size="9" fill="#92400e">• Storage Engine</text>
        <text x="430" y="148" font-size="9" fill="#92400e">• Table Data</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <pre class="bg-slate-900 text-emerald-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
import mysql.connector

def db_operations():
    con = None
    cur = None
    try:
        # Step 1: Establish Database Connection
        con = mysql.connector.connect(
            host="localhost",
            user="root",
            password="admin",
            database="SchoolDB"
        )

        if con.is_connected():
            print("Successfully connected to MySQL database SchoolDB.")
            cur = con.cursor()

            # Step 2: Parameterized INSERT query
            insert_query = "INSERT INTO STUDENT (RollNo, Name, Grade, Marks) VALUES (%s, %s, %s, %s)"
            student_data = (105, "Aarav Gupta", "XII-A", 94.5)
            cur.execute(insert_query, student_data)

            # Step 3: Crucial - Commit changes permanently
            con.commit()
            print(f"Record inserted. Rows affected: {cur.rowcount}")

            # Step 4: SELECT query and fetchall()
            select_query = "SELECT RollNo, Name, Grade, Marks FROM STUDENT WHERE Marks > %s"
            cur.execute(select_query, (90.0,))
            records = cur.fetchall()

            print("\\n--- Top Performers (Marks > 90) ---")
            for row in records:
                print(f"Roll: {row[0]}, Name: {row[1]}, Grade: {row[2]}, Marks: {row[3]}")

    except mysql.connector.Error as err:
        print("Database Error:", err)
        if con:
            con.rollback() # Rollback on error
    finally:
        # Step 5: Clean resource teardown
        if cur:
            cur.close()
        if con and con.is_connected():
            con.close()
            print("Connection closed cleanly.")

if __name__ == "__main__":
    db_operations()
          </pre>
        </div>
      `,
      explanation: 'Two major CBSE traps: (1) Forgetting <code>con.commit()</code> after DML queries (INSERT/UPDATE/DELETE) means data is never saved to the database. (2) Always pass query parameters as a tuple in <code>cur.execute(query, tuple_data)</code> to prevent SQL injection vulnerabilities.',
      stepMarking: '[1 Mark] Correct mysql.connector.connect() with host, user, pwd, db | [1 Mark] Parameterized execute() with VALUES (%s, %s, ...) | [1 Mark] con.commit() for transaction persistence | [1 Mark] cursor.fetchall() iteration and safe cursor/connection close'
    }
  ];

  // Computer Science Aliases
  Q['Functions'] = Q['Python Functions'];
  Q['File Handling in Python'] = Q['File Handling'];
  Q['Data Structures'] = Q['Stack'];
  Q['Structured Query Language'] = Q['Relational Databases and SQL'];
  Q['Database Concepts'] = Q['Relational Databases and SQL'];
  Q['Database Interface'] = Q['Interface Python with MySQL'];

  // =========================================================================
  // 4. MATHEMATICS (041)
  // =========================================================================

  // 1. Relations and Functions
  Q['Relations and Functions'] = [
    {
      id: 'math-rel-q1',
      marks: 4,
      type: 'Equivalence Relation Proof & Equivalence Classes',
      prob: '🔥 Top 4-Mark Recurring Board Question (CBSE 2024, 2023, 2020)',
      stem: 'Let ℤ be the set of all integers. Prove that the relation <code>R = {(a, b) ∈ ℤ × ℤ : (a - b) is divisible by 5}</code> is an equivalence relation on ℤ.<br>Also, determine all the distinct equivalence classes of ℤ under R.',
      diagram: svg(540, 220, `
        <!-- Equivalence Relation Diagram -->
        <rect x="20" y="20" width="500" height="180" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Equivalence Relation: 3 Fundamental Axioms</text>

        <!-- Reflexive Pillar -->
        <rect x="35" y="58" width="145" height="85" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="78" font-size="11" font-weight="bold" fill="#312e81">1. Reflexive</text>
        <text x="45" y="96" font-size="10" fill="#3730a3">∀ a ∈ ℤ: (a, a) ∈ R</text>
        <text x="45" y="112" font-size="10" fill="#4338ca">a - a = 0 = 5(0)</text>
        <text x="45" y="128" font-size="9" fill="#1e1b4b">Self-loop on every element</text>

        <!-- Symmetric Pillar -->
        <rect x="195" y="58" width="150" height="85" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="205" y="78" font-size="11" font-weight="bold" fill="#78350f">2. Symmetric</text>
        <text x="205" y="96" font-size="10" fill="#92400e">(a, b) ∈ R ⇒ (b, a) ∈ R</text>
        <text x="205" y="112" font-size="10" fill="#b45309">b - a = -(a - b) = 5(-k)</text>
        <text x="205" y="128" font-size="9" fill="#78350f">Bidirectional relation</text>

        <!-- Transitive Pillar -->
        <rect x="360" y="58" width="150" height="85" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
        <text x="370" y="78" font-size="11" font-weight="bold" fill="#14532d">3. Transitive</text>
        <text x="370" y="96" font-size="10" fill="#166534">aRb ∧ bRc ⇒ aRc</text>
        <text x="370" y="112" font-size="10" fill="#15803d">a - c = (a-b)+(b-c)</text>
        <text x="370" y="128" font-size="9" fill="#14532d">= 5(k₁ + k₂)</text>

        <!-- Equivalence Partition Bottom -->
        <rect x="35" y="152" width="475" height="36" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
        <text x="45" y="174" font-size="10" font-weight="bold" fill="#334155">Partitions ℤ into 5 disjoint equivalence classes: [0], [1], [2], [3], [4]</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-1.5 text-slate-800">
            <strong>1. Reflexivity:</strong><br>
            For any <code>a ∈ ℤ</code>:<br>
            <code>a - a = 0 = 5 \u00D7 0</code>, which is divisible by 5.<br>
            Hence, <code>(a, a) ∈ R</code> for all <code>a ∈ ℤ</code>. Therefore, <strong>R is reflexive</strong>.<br><br>

            <strong>2. Symmetry:</strong><br>
            Let <code>(a, b) ∈ R</code>. Then <code>(a - b)</code> is divisible by 5.<br>
            ⇒ <code>a - b = 5k</code> for some integer <code>k ∈ ℤ</code>.<br>
            Now, <code>b - a = -(a - b) = -(5k) = 5(-k)</code>.<br>
            Since <code>-k ∈ ℤ</code>, <code>(b - a)</code> is also divisible by 5.<br>
            ⇒ <code>(b, a) ∈ R</code>. Therefore, <strong>R is symmetric</strong>.<br><br>

            <strong>3. Transitivity:</strong><br>
            Let <code>(a, b) ∈ R</code> and <code>(b, c) ∈ R</code>.<br>
            Then <code>a - b = 5k₁</code> and <code>b - c = 5k₂</code> for some integers <code>k₁, k₂ ∈ ℤ</code>.<br>
            Adding the two equations:<br>
            <code>(a - b) + (b - c) = 5k₁ + 5k₂</code><br>
            ⇒ <code>a - c = 5(k₁ + k₂)</code>.<br>
            Since <code>(k₁ + k₂) ∈ ℤ</code>, <code>(a - c)</code> is divisible by 5.<br>
            ⇒ <code>(a, c) ∈ R</code>. Therefore, <strong>R is transitive</strong>.<br><br>

            <em>Conclusion:</em> Since R is reflexive, symmetric, and transitive, <strong>R is an equivalence relation on ℤ</strong>.<br><br>

            <strong>4. Equivalence Classes:</strong><br>
            Under modulo 5, the distinct equivalence classes are the remainders <code>{0, 1, 2, 3, 4}</code>:<br>
            • <code>[0] = {..., -10, -5, 0, 5, 10, ...} = {5k : k ∈ ℤ}</code><br>
            • <code>[1] = {..., -9, -4, 1, 6, 11, ...} = {5k + 1 : k ∈ ℤ}</code><br>
            • <code>[2] = {..., -8, -3, 2, 7, 12, ...} = {5k + 2 : k ∈ ℤ}</code><br>
            • <code>[3] = {..., -7, -2, 3, 8, 13, ...} = {5k + 3 : k ∈ ℤ}</code><br>
            • <code>[4] = {..., -6, -1, 4, 9, 14, ...} = {5k + 4 : k ∈ ℤ}</code>
          </div>
        </div>
      `,
      explanation: 'Every equivalence relation partitions its underlying set into mutually disjoint equivalence classes whose union is the entire set. To get full marks, explicitly show integer multipliers (e.g. k ∈ ℤ, -k ∈ ℤ, k₁ + k₂ ∈ ℤ).',
      stepMarking: '[1 Mark] Proof of Reflexivity | [1 Mark] Proof of Symmetry | [1 Mark] Proof of Transitivity | [1 Mark] Listing all 5 disjoint equivalence classes'
    }
  ];

  // 2. Inverse Trigonometric Functions
  Q['Inverse Trigonometric Functions'] = [
    {
      id: 'math-itf-q1',
      marks: 4,
      type: 'Principal Value Evaluation & Simplification',
      prob: '🔥 Recurring Every Year in Section B/C (CBSE 2024, 2023)',
      stem: '(a) Evaluate the principal value of: <code>cos⁻¹(-1/2) + 2 sin⁻¹(1/2) - tan⁻¹(-√3)</code>.<br>(b) Express in simplest form: <code>tan⁻¹[ (cos x - sin x) / (cos x + sin x) ]</code>, where <code>-π/4 < x < 3π/4</code>.',
      diagram: svg(560, 220, `
        <!-- Principal Value Branches Circle -->
        <rect x="20" y="20" width="520" height="180" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">CBSE Principal Value Branches & Quadrant Mapping</text>

        <!-- sin⁻¹ and tan⁻¹ quadrant -->
        <rect x="35" y="55" width="235" height="135" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="75" font-size="11" font-weight="bold" fill="#312e81">sin⁻¹x, tan⁻¹x, cosec⁻¹x</text>
        <text x="45" y="93" font-size="10" fill="#3730a3">Range: [-π/2, π/2] (Quadrant I & IV)</text>
        <text x="45" y="110" font-size="10" fill="#4338ca">• If x > 0: θ ∈ (0, π/2] (Quad I)</text>
        <text x="45" y="125" font-size="10" font-weight="bold" fill="#dc2626">• If x < 0: sin⁻¹(-x) = -sin⁻¹(x) (Quad IV)</text>
        <text x="45" y="140" font-size="10" fill="#3730a3">• tan⁻¹(-x) = -tan⁻¹(x)</text>
        <text x="45" y="155" font-size="10" fill="#1e1b4b">Angles are in [-π/2, 0) for negative inputs</text>

        <!-- cos⁻¹, sec⁻¹, cot⁻¹ quadrant -->
        <rect x="285" y="55" width="240" height="135" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="295" y="75" font-size="11" font-weight="bold" fill="#78350f">cos⁻¹x, cot⁻¹x, sec⁻¹x</text>
        <text x="295" y="93" font-size="10" fill="#92400e">Range: [0, π] (Quadrant I & II)</text>
        <text x="295" y="110" font-size="10" fill="#b45309">• If x > 0: θ ∈ [0, π/2) (Quad I)</text>
        <text x="295" y="125" font-size="10" font-weight="bold" fill="#dc2626">• If x < 0: cos⁻¹(-x) = π - cos⁻¹(x) (Quad II!)</text>
        <text x="295" y="140" font-size="10" fill="#92400e">• cot⁻¹(-x) = π - cot⁻¹(x)</text>
        <text x="295" y="155" font-size="10" fill="#78350f">Never output negative angle for cos⁻¹x!</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-2 text-slate-800">
            <div>
              <strong>(a) Principal Value Evaluation:</strong><br>
              • <code>cos⁻¹(-1/2) = π - cos⁻¹(1/2) = π - π/3 = <strong>2π/3</strong></code> (since range of cos⁻¹ is [0, π]).<br>
              • <code>2 sin⁻¹(1/2) = 2 \u00D7 (π/6) = <strong>π/3</strong></code>.<br>
              • <code>tan⁻¹(-√3) = -tan⁻¹(√3) = <strong>-π/3</strong></code>.<br><br>
              Substitute all three values:<br>
              Expression = <code>(2π/3) + (π/3) - (-π/3) = π + π/3 = <strong>4π/3</strong></code>.
            </div>

            <div class="pt-1 border-t border-slate-200">
              <strong>(b) Simplification:</strong><br>
              Given: <code>tan⁻¹[ (cos x - sin x) / (cos x + sin x) ]</code><br>
              Divide numerator and denominator by <code>cos x</code>:<br>
              = <code>tan⁻¹[ (1 - tan x) / (1 + tan x) ]</code><br>
              Since <code>tan(π/4) = 1</code>, rewrite using identity <code>tan(A - B) = (tan A - tan B)/(1 + tan A tan B)</code>:<br>
              = <code>tan⁻¹[ (tan(π/4) - tan x) / (1 + tan(π/4) tan x) ]</code><br>
              = <code>tan⁻¹[ tan(π/4 - x) ]</code><br><br>
              <em>Domain Check:</em><br>
              Given <code>-π/4 < x < 3π/4</code><br>
              ⇒ <code>-3π/4 < -x < π/4</code><br>
              ⇒ <code>π/4 - 3π/4 < π/4 - x < π/4 + π/4</code><br>
              ⇒ <code>-π/2 < (π/4 - x) < π/2</code> (lies strictly within principal range of tan⁻¹!).<br>
              Therefore, <strong>tan⁻¹[ tan(π/4 - x) ] = π/4 - x</strong>.
            </div>
          </div>
        </div>
      `,
      explanation: 'Common student blunder: Writing cos⁻¹(-1/2) = -π/3 instead of π - π/3 = 2π/3. The range of cos⁻¹ is [0, π], which NEVER takes negative values!',
      stepMarking: '[2 Marks] Part (a): Individual principal values + final sum 4π/3 | [2 Marks] Part (b): Division by cos x, tan(A-B) formula & principal domain check'
    }
  ];

  // 3. Matrices and Determinants
  Q['Matrices and Determinants'] = [
    {
      id: 'math-mat-q1',
      marks: 5,
      type: 'System of Linear Equations (Matrix Method)',
      prob: '🔥 100% Guaranteed 5-Mark Question in Section D',
      stem: 'Solve the following system of linear equations using the matrix method:<br><code>2x + 3y + 3z = 5</code><br><code>x - 2y + z = -4</code><br><code>3x - y - 2z = 3</code>',
      diagram: svg(560, 200, `
        <!-- Matrix Pipeline Diagram -->
        <rect x="20" y="20" width="520" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">CBSE 5-Mark Matrix Inversion Pipeline: AX = B ⇒ X = A⁻¹B</text>

        <!-- Step 1: System AX = B -->
        <rect x="35" y="60" width="105" height="100" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="80" font-size="11" font-weight="bold" fill="#312e81">Step 1: AX = B</text>
        <text x="45" y="98" font-size="9" fill="#3730a3">• Coefficient A</text>
        <text x="45" y="113" font-size="9" fill="#3730a3">• Variable X</text>
        <text x="45" y="128" font-size="9" fill="#3730a3">• Constant B</text>
        <text x="45" y="145" font-size="9" font-weight="bold" fill="#1e1b4b">det |A| ≠ 0</text>

        <!-- Arrow 1 -->
        <path d="M 140 110 L 165 110" fill="none" stroke="#4338ca" stroke-width="2"/>

        <!-- Step 2: Cofactors -->
        <rect x="170" y="60" width="105" height="100" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="180" y="80" font-size="11" font-weight="bold" fill="#78350f">Step 2: Cofactors</text>
        <text x="180" y="98" font-size="9" fill="#92400e">A_ij = (-1)^(i+j) M_ij</text>
        <text x="180" y="113" font-size="9" fill="#92400e">Compute all 9</text>
        <text x="180" y="128" font-size="9" fill="#92400e">minors with sign</text>
        <text x="180" y="145" font-size="9" font-weight="bold" fill="#78350f">Matrix C = [A_ij]</text>

        <!-- Arrow 2 -->
        <path d="M 275 110 L 300 110" fill="none" stroke="#b45309" stroke-width="2"/>

        <!-- Step 3: Adjoint -->
        <rect x="305" y="60" width="105" height="100" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
        <text x="315" y="80" font-size="11" font-weight="bold" fill="#14532d">Step 3: Adjoint</text>
        <text x="315" y="98" font-size="9" fill="#166534">adj(A) = Cᵀ</text>
        <text x="315" y="113" font-size="9" fill="#166534">Transpose rows</text>
        <text x="315" y="128" font-size="9" fill="#166534">to columns</text>
        <text x="315" y="145" font-size="9" font-weight="bold" fill="#14532d">A⁻¹ = adj(A)/|A|</text>

        <!-- Arrow 3 -->
        <path d="M 410 110 L 430 110" fill="none" stroke="#15803d" stroke-width="2"/>

        <!-- Step 4: Solution -->
        <rect x="435" y="60" width="95" height="100" rx="8" fill="#fae8ff" stroke="#86198f" stroke-width="1.5"/>
        <text x="442" y="80" font-size="11" font-weight="bold" fill="#701a75">Step 4: Solve</text>
        <text x="442" y="98" font-size="9" fill="#86198f">X = A⁻¹ B</text>
        <text x="442" y="113" font-size="9" fill="#86198f">Matrix mult.</text>
        <text x="442" y="130" font-size="10" font-weight="bold" fill="#86198f">x = 1</text>
        <text x="442" y="142" font-size="10" font-weight="bold" fill="#86198f">y = 2, z = -1</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-1.5">
            <strong>1. Form AX = B:</strong><br>
            A = [[2, 3, 3], [1, -2, 1], [3, -1, -2]], X = [[x], [y], [z]], B = [[5], [-4], [3]]<br><br>
            <strong>2. Compute Determinant |A|:</strong><br>
            |A| = 2((-2)(-2) - (1)(-1)) - 3((1)(-2) - (1)(3)) + 3((1)(-1) - (-2)(3))<br>
            |A| = 2(4 + 1) - 3(-2 - 3) + 3(-1 + 6) = 2(5) - 3(-5) + 3(5) = 10 + 15 + 15 = <strong>40 ≠ 0</strong>.<br>
            Since |A| ≠ 0, A⁻¹ exists and system has a unique solution.<br><br>
            <strong>3. Calculate Cofactors A_ij = (-1)^(i+j) M_ij:</strong><br>
            A₁₁ = +(4 - (-1)) = 5; &nbsp; A₁₂ = -(-2 - 3) = 5; &nbsp; A₁₃ = +(-1 - (-6)) = 5<br>
            A₂₁ = -(-6 - (-3)) = 3; &nbsp; A₂₂ = +(-4 - 9) = -13; &nbsp; A₂₃ = -(-2 - 9) = 11<br>
            A₃₁ = +(3 - (-6)) = 9; &nbsp; A₃₂ = -(2 - 3) = 1; &nbsp; A₃₃ = +(-4 - 3) = -7<br><br>
            <strong>4. Adjoint of A:</strong><br>
            adj(A) = [[5, 3, 9], [5, -13, 1], [5, 11, -7]]<br><br>
            <strong>5. Solve X = A⁻¹ B = (1 / |A|) adj(A) B:</strong><br>
            x = (1/40)[5(5) + 3(-4) + 9(3)] = (1/40)[25 - 12 + 27] = 40/40 = <strong>1</strong><br>
            y = (1/40)[5(5) - 13(-4) + 1(3)] = (1/40)[25 + 52 + 3] = 80/40 = <strong>2</strong><br>
            z = (1/40)[5(5) + 11(-4) - 7(3)] = (1/40)[25 - 44 - 21] = -40/40 = <strong>-1</strong><br><br>
            <strong class="text-indigo-700">Final Answer: x = 1, y = 2, z = -1</strong>
          </div>
        </div>
      `,
      explanation: 'Always verify by substituting (x=1, y=2, z=-1) back into equation 1: 2(1) + 3(2) + 3(-1) = 2 + 6 - 3 = 5 (Verified!).',
      stepMarking: '[1 Mark] Matrix setup AX=B and |A|=40 ≠ 0 | [2 Marks] Finding all 9 cofactors & adj(A) | [1 Mark] Matrix multiplication A⁻¹B | [1 Mark] Final values of x, y, z',
      pacing: '10-12 min',
      competency: 'High-Order Procedural',
      cautionTrap: 'Over 70% of students calculate cofactors correctly but forget that adj(A) is the TRANSPOSE of the cofactor matrix. Multiplying [C_ij] · B instead of [C_ij]^T · B yields completely wrong values for x, y, z. Also, omitting the statement "|A| ≠ 0 so A⁻¹ exists" forfeits 1 full mark.',
      topperTip: 'Calculate |A| first and state: "Since |A| ≠ 0, A⁻¹ exists and the system has a unique solution given by X = A⁻¹B". Write out all 9 cofactors with explicit signs (-1)^(i+j) displayed. Check your final values of x, y, z by plugging them back into equation 1 on your rough sheet!',
      mnemonic: 'Adjoint Pipeline: "Calculate Co-factors, Transpose to Adjoint, Multiply by B, Divide by Det!"'
    }
  ];

  // 4. Continuity & Differentiability
  Q['Continuity and Differentiability'] = [
    {
      id: 'math-cont-q1',
      marks: 4,
      type: 'Continuity & Logarithmic Differentiation',
      prob: '🔥 Top Recurring 4-Mark Problem (CBSE 2024, 2022, 2019)',
      stem: '(a) Find the value of <code>k</code> so that the function <code>f(x)</code> is continuous at <code>x = π/2</code>:<br><code>f(x) = (k cos x) / (π - 2x) for x ≠ π/2; and f(π/2) = 3</code>.<br><br>(b) Differentiate <code>y = x^(sin x)</code> with respect to <code>x</code> using logarithmic differentiation.',
      diagram: svg(540, 200, `
        <!-- Continuity Graph and Log Diff Schema -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Continuity Condition: LHL = RHL = f(c)</text>

        <!-- Continuous Curve -->
        <line x1="40" y1="130" x2="240" y2="130" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="140" y1="160" x2="140" y2="50" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M 50 140 Q 110 120 140 80 T 230 60" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="140" cy="80" r="5" fill="#16a34a"/>
        <text x="145" y="75" font-size="10" font-weight="bold" fill="#16a34a">f(π/2) = 3</text>
        <text x="135" y="145" font-size="10" font-weight="bold" fill="#1e293b">x = π/2</text>
        <text x="50" y="95" font-size="9" fill="#2563eb">lim x→π/2 f(x) = k/2</text>
        <text x="50" y="110" font-size="9" font-weight="bold" fill="#16a34a">k/2 = 3 ⇒ k = 6</text>

        <!-- Logarithmic Diff Box -->
        <rect x="270" y="55" width="235" height="110" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="280" y="75" font-size="11" font-weight="bold" fill="#78350f">Logarithmic Differentiation</text>
        <text x="280" y="95" font-size="10" fill="#92400e">y = u(x)^v(x) ⇒ Take ln both sides</text>
        <text x="280" y="112" font-size="10" fill="#b45309">ln y = v(x) · ln u(x)</text>
        <text x="280" y="130" font-size="10" fill="#92400e">(1/y) dy/dx = v'(x) ln u + v(x) (u'/u)</text>
        <text x="280" y="150" font-size="10" font-weight="bold" fill="#78350f">dy/dx = y [ cos x ln x + (sin x)/x ]</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-2 text-slate-800">
            <div>
              <strong>Part (a) Finding k for Continuity:</strong><br>
              A function is continuous at <code>x = π/2</code> if: <code>lim_{x → π/2} f(x) = f(π/2) = 3</code>.<br>
              Let <code>x = π/2 + h</code>. As <code>x → π/2</code>, <code>h → 0</code>.<br>
              <code>lim_{h → 0} [ k cos(π/2 + h) ] / [ π - 2(π/2 + h) ]</code><br>
              = <code>lim_{h → 0} [ k (-sin h) ] / [ π - π - 2h ]</code><br>
              = <code>lim_{h → 0} [ -k sin h ] / [ -2h ] = (k / 2) \u00D7 lim_{h → 0} (sin h / h) = <strong>k / 2</strong></code>.<br><br>
              For continuity: <code>k / 2 = 3  ⇒  <strong>k = 6</strong></code>.
            </div>

            <div class="pt-1 border-t border-slate-200">
              <strong>Part (b) Logarithmic Differentiation of y = x^(sin x):</strong><br>
              Take natural logarithm on both sides:<br>
              <code>ln y = ln(x^(sin x)) = sin x \u00D7 ln x</code><br><br>
              Differentiate both sides with respect to x using product rule:<br>
              <code>(1 / y) (dy/dx) = d/dx(sin x) \u00D7 ln x + sin x \u00D7 d/dx(ln x)</code><br>
              <code>(1 / y) (dy/dx) = cos x \u00D7 ln x + sin x \u00D7 (1 / x)</code><br><br>
              Multiply through by y:<br>
              <strong>dy/dx = x^(sin x) [ cos x ln x + (sin x / x) ]</strong>
            </div>
          </div>
        </div>
      `,
      explanation: 'When computing limits of trigonometric indeterminate forms (0/0) at x = π/2, substitution x = π/2 + h reliably transforms cos(π/2 + h) into -sin h, eliminating the denominator seamlessly.',
      stepMarking: '[1 Mark] Limit substitution x = π/2 + h | [1 Mark] Solving limit to get k/2 = 3 ⇒ k = 6 | [1 Mark] Applying ln and product rule | [1 Mark] Final boxed derivative formula'
    }
  ];

  // 5. Application of Derivatives
  Q['Applications of Derivatives'] = [
    {
      id: 'math-aod-q1',
      marks: 5,
      type: 'Maxima-Minima Word Problem',
      prob: '🔥 Top 5-Mark Word Problem (CBSE 2024, 2023, 2020)',
      stem: 'Show that the height of the cylinder of maximum volume that can be inscribed in a sphere of radius R is <code>h = 2R / √3</code>.<br>Also find the maximum volume of the cylinder.',
      diagram: svg(520, 220, `
        <!-- Sphere with inscribed cylinder -->
        <rect x="20" y="20" width="480" height="180" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Inscribed Cylinder of Maximum Volume in Sphere</text>

        <!-- Sphere circle -->
        <circle cx="150" cy="110" r="60" fill="#e0e7ff" stroke="#2563eb" stroke-width="2"/>
        <ellipse cx="150" cy="110" rx="60" ry="18" fill="none" stroke="#60a5fa" stroke-dasharray="3"/>

        <!-- Inscribed Cylinder -->
        <rect x="110" y="75" width="80" height="70" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <ellipse cx="150" cy="75" rx="40" ry="10" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
        <ellipse cx="150" cy="145" rx="40" ry="10" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>

        <!-- Triangle from Center to Rim -->
        <circle cx="150" cy="110" r="3" fill="#dc2626"/>
        <line x1="150" y1="110" x2="190" y2="75" stroke="#dc2626" stroke-width="2"/>
        <text x="175" y="90" font-size="10" font-weight="bold" fill="#dc2626">R</text>
        <line x1="150" y1="110" x2="150" y2="75" stroke="#16a34a" stroke-width="1.5"/>
        <text x="135" y="95" font-size="9" font-weight="bold" fill="#16a34a">h/2</text>
        <line x1="150" y1="75" x2="190" y2="75" stroke="#2563eb" stroke-width="1.5"/>
        <text x="165" y="70" font-size="9" font-weight="bold" fill="#2563eb">r</text>

        <!-- Formula Callout -->
        <rect x="250" y="60" width="235" height="110" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="260" y="80" font-size="11" font-weight="bold" fill="#0f172a">Constraint: r² + (h/2)² = R²</text>
        <text x="260" y="100" font-size="10" fill="#334155">r² = R² - h²/4</text>
        <text x="260" y="120" font-size="10" fill="#0f172a">Volume V = π r² h = π(R²h - h³/4)</text>
        <text x="260" y="140" font-size="10" font-weight="bold" fill="#16a34a">dV/dh = 0 ⇒ h = 2R/√3</text>
        <text x="260" y="158" font-size="10" font-weight="bold" fill="#dc2626">d²V/dh² = -3πh/2 < 0 (Maximum!)</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-1.5 text-slate-800">
            <strong>1. Geometric Constraint:</strong><br>
            Let radius of cylinder = <code>r</code>, height = <code>h</code>.<br>
            From right triangle with sphere center: <code>r² + (h/2)² = R²  ⇒  r² = R² - (h² / 4)</code>.<br><br>

            <strong>2. Objective Volume Function:</strong><br>
            <code>V = π r² h = π [ R² - (h² / 4) ] h = π [ R²h - (h³ / 4) ]</code>.<br><br>

            <strong>3. First Derivative and Critical Points:</strong><br>
            Differentiate with respect to h:<br>
            <code>dV/dh = π [ R² - (3h² / 4) ]</code>.<br>
            For maximum volume, set <code>dV/dh = 0</code>:<br>
            <code>R² - (3h² / 4) = 0  ⇒  3h² / 4 = R²  ⇒  h² = 4R² / 3</code><br>
            <code><strong>h = 2R / √3</strong></code> (since height h > 0).<br><br>

            <strong>4. Second Derivative Test:</strong><br>
            <code>d²V/dh² = π [ 0 - (6h / 4) ] = - (3π h / 2)</code>.<br>
            At <code>h = 2R / √3</code>: <code>d²V/dh² = - (3π / 2)(2R / √3) = - √3 π R < 0</code>.<br>
            Hence, by the Second Derivative Test, <strong>Volume is maximum at h = 2R / √3</strong>.<br><br>

            <strong>5. Maximum Volume Calculation:</strong><br>
            <code>r² = R² - (1/4)(4R²/3) = R² - R²/3 = 2R² / 3</code>.<br>
            <code>V_max = π r² h = π (2R² / 3) (2R / √3) = <strong>(4π R³) / (3√3)</strong> cubic units</code>.
          </div>
        </div>
      `,
      explanation: 'To secure full 5 marks in CBSE Maxima-Minima word problems, students must: (1) Formulate single-variable objective function, (2) Equate first derivative to zero, (3) Explicitly evaluate the second derivative and state why it is strictly negative (< 0), and (4) Calculate the requested maximum quantity with units.',
      stepMarking: '[1 Mark] Constraint relation r² + (h/2)² = R² | [1.5 Marks] Objective volume function & dV/dh = 0 | [1 Mark] Second derivative test d²V/dh² < 0 proving maximum | [1.5 Marks] Proving h = 2R/√3 and computing V_max'
    }
  ];

  // 6. Integrals
  Q['Integrals'] = [
    {
      id: 'math-int-q1',
      marks: 5,
      type: 'Definite Integral Properties (King\'s Rule)',
      prob: '🔥 Recurring Every Year in CBSE Section D (CBSE 2024, 2023, 2020)',
      stem: 'Evaluate the definite integral using properties of definite integrals:<br><code>I = ∫₀^π (x sin x) / (1 + cos² x) dx</code>',
      diagram: svg(520, 200, `
        <!-- King\'s Rule Reflection Diagram -->
        <rect x="20" y="20" width="480" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Definite Integral Property: King\'s Rule ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx</text>

        <!-- Flipped Curves -->
        <line x1="40" y1="130" x2="260" y2="130" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="40" y="145" font-size="10" fill="#64748b">0</text>
        <text x="145" y="145" font-size="10" fill="#64748b">π/2</text>
        <text x="250" y="145" font-size="10" fill="#64748b">π</text>
        <line x1="150" y1="50" x2="150" y2="130" stroke="#cbd5e1" stroke-dasharray="3"/>

        <path d="M 40 130 Q 150 50 255 130" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <text x="80" y="75" font-size="10" font-weight="bold" fill="#2563eb">f(x)</text>
        <text x="185" y="75" font-size="10" font-weight="bold" fill="#dc2626">f(π - x)</text>

        <!-- Boxed Logic -->
        <rect x="280" y="55" width="205" height="110" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="290" y="75" font-size="11" font-weight="bold" fill="#312e81">Adding Equations:</text>
        <text x="290" y="95" font-size="10" fill="#3730a3">I + I = 2I</text>
        <text x="290" y="112" font-size="10" fill="#4338ca">x + (π - x) = π (x eliminated!)</text>
        <text x="290" y="130" font-size="10" fill="#3730a3">2I = π ∫₀^π (sin x)/(1+cos²x) dx</text>
        <text x="290" y="150" font-size="11" font-weight="bold" fill="#1e1b4b">Answer: I = π² / 4</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-1.5 text-slate-800">
            Let <code>I = ∫₀^π (x sin x) / (1 + cos² x) dx</code>  ---- (Equation 1)<br><br>
            <strong>Apply Property: ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx</strong><br>
            Replace x with (π - x):<br>
            <code>I = ∫₀^π [ (π - x) sin(π - x) ] / [ 1 + cos²(π - x) ] dx</code><br>
            Since <code>sin(π - x) = sin x</code> and <code>cos(π - x) = -cos x ⇒ cos²(π - x) = cos² x</code>:<br>
            <code>I = ∫₀^π [ (π - x) sin x ] / [ 1 + cos² x ] dx</code>  ---- (Equation 2)<br><br>
            <strong>Add (Equation 1) and (Equation 2):</strong><br>
            <code>2I = ∫₀^π [ (x + π - x) sin x ] / [ 1 + cos² x ] dx</code><br>
            <code>2I = π ∫₀^π (sin x) / (1 + cos² x) dx</code>  [Variable x eliminated!]<br><br>
            <strong>Substitute t = cos x:</strong><br>
            <code>dt = -sin x dx ⇒ sin x dx = -dt</code><br>
            When <code>x = 0 ⇒ t = cos 0 = 1</code>; When <code>x = π ⇒ t = cos π = -1</code>.<br><br>
            <code>2I = π ∫₁^(-1) (-dt) / (1 + t²) = π ∫_{-1}^1 dt / (1 + t²)</code><br>
            Since <code>1/(1 + t²)</code> is an even function:<br>
            <code>2I = π [ 2 ∫₀^1 dt / (1 + t²) ] = 2π [ tan⁻¹ t ]₀^1</code><br>
            <code>2I = 2π [ tan⁻¹(1) - tan⁻¹(0) ] = 2π [ π/4 - 0 ] = 2π² / 4</code><br><br>
            Divide by 2:<br>
            <strong class="text-indigo-700">I = π² / 4</strong>
          </div>
        </div>
      `,
      explanation: 'The primary goal of King\'s rule ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx is to eliminate the algebraic variable x in the numerator so that standard trigonometric substitution (t = cos x) can be applied directly.',
      stepMarking: '[1 Mark] Stating property ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx | [1.5 Marks] Adding equations to eliminate x | [1.5 Marks] Substitution t = cos x and limit change | [1 Mark] Final evaluation I = π²/4'
    }
  ];

  // 7. Differential Equations
  Q['Differential Equations'] = [
    {
      id: 'math-de-q1',
      marks: 5,
      type: 'Homogeneous Differential Equation & Particular Solution',
      prob: '🔥 Top 5-Mark Question in Section D (CBSE 2024, 2023)',
      stem: 'Find the particular solution of the differential equation:<br><code>(x² - y²) dx + 2xy dy = 0</code>, given that <code>y = 1</code> when <code>x = 1</code>.',
      diagram: svg(540, 200, `
        <!-- DE Classification Flowchart -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">CBSE Differential Equation Classification Decision Tree</text>

        <!-- Homogeneous Box -->
        <rect x="35" y="58" width="220" height="105" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="78" font-size="11" font-weight="bold" fill="#312e81">1. Homogeneous: dy/dx = f(y/x)</text>
        <text x="45" y="96" font-size="10" fill="#3730a3">• Substitute: y = vx</text>
        <text x="45" y="112" font-size="10" fill="#4338ca">• dy/dx = v + x(dv/dx)</text>
        <text x="45" y="128" font-size="10" fill="#3730a3">• Separate v and x, integrate</text>
        <text x="45" y="145" font-size="10" font-weight="bold" fill="#1e1b4b">• Replace v = y/x</text>

        <!-- Linear DE Box -->
        <rect x="280" y="58" width="225" height="105" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="290" y="78" font-size="11" font-weight="bold" fill="#78350f">2. Linear: dy/dx + Py = Q</text>
        <text x="290" y="96" font-size="10" fill="#92400e">• P, Q are functions of x only</text>
        <text x="290" y="112" font-size="10" fill="#b45309">• Integrating Factor: I.F. = e^(∫Pdx)</text>
        <text x="290" y="128" font-size="10" fill="#92400e">• Solution: y · (I.F.) = ∫(Q · I.F.)dx + C</text>
        <text x="290" y="145" font-size="10" font-weight="bold" fill="#78350f">• Linear in x: dx/dy + P₁x = Q₁</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-1.5 text-slate-800">
            <strong>1. Rewrite in standard derivative form:</strong><br>
            <code>2xy dy = -(x² - y²) dx = (y² - x²) dx</code><br>
            <code>dy/dx = (y² - x²) / (2xy) = [ (y/x)² - 1 ] / [ 2(y/x) ] = F(y/x)</code><br>
            This is a <strong>homogeneous differential equation</strong> of degree 0.<br><br>

            <strong>2. Substitute y = vx:</strong><br>
            <code>dy/dx = v + x (dv/dx)</code><br>
            <code>v + x (dv/dx) = (v²x² - x²) / (2x · vx) = (v² - 1) / (2v)</code><br>
            <code>x (dv/dx) = (v² - 1)/(2v) - v = (v² - 1 - 2v²) / (2v) = - (1 + v²) / (2v)</code><br><br>

            <strong>3. Separate variables and integrate:</strong><br>
            <code>[ 2v / (1 + v²) ] dv = - (1 / x) dx</code><br>
            <code>∫ [ 2v / (1 + v²) ] dv = - ∫ (1 / x) dx</code><br>
            <code>ln(1 + v²) = - ln|x| + ln C = ln(C / |x|)</code><br>
            <code>1 + v² = C / x</code><br><br>

            <strong>4. Re-substitute v = y/x:</strong><br>
            <code>1 + (y² / x²) = C / x  ⇒  (x² + y²) / x² = C / x</code><br>
            <code><strong>x² + y² = Cx</strong></code> (General Solution).<br><br>

            <strong>5. Particular Solution (using y = 1 when x = 1):</strong><br>
            <code>1² + 1² = C(1)  ⇒  C = 2</code>.<br>
            <strong class="text-indigo-700">Particular Solution: x² + y² = 2x  (or (x - 1)² + y² = 1)</strong>
          </div>
        </div>
      `,
      explanation: 'Always prove that the differential equation is homogeneous before substituting y = vx (e.g. by showing F(λx, λy) = λ⁰ F(x, y)). Finally, substitute the given initial values to evaluate the arbitrary constant C.',
      stepMarking: '[1 Mark] Proving DE is homogeneous | [1.5 Marks] Substituting y = vx and separating variables | [1.5 Marks] Integration to obtain general solution x² + y² = Cx | [1 Mark] Evaluating C=2 to state particular solution'
    },
    {
      id: 'math-de-q2',
      marks: 4,
      type: 'Linear Differential Equation (I.F. Method)',
      prob: '🔥 High Probability 4-Mark Problem',
      stem: 'Solve the linear differential equation:<br><code>dy/dx + y cot x = 4x cosec x</code>, given that <code>y = 0</code> when <code>x = π/2</code>.',
      diagram: svg(540, 200, `
        <!-- Linear Differential Equation I.F. Pipeline -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">First Order Linear DE: Integrating Factor (I.F.) Pipeline</text>

        <!-- Standard Form Box -->
        <rect x="35" y="60" width="130" height="100" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="80" font-size="11" font-weight="bold" fill="#312e81">Standard Form</text>
        <text x="45" y="98" font-size="9" font-mono fill="#3730a3">dy/dx + Py = Q</text>
        <text x="45" y="115" font-size="9" fill="#1e1b4b">P = cot x</text>
        <text x="45" y="130" font-size="9" fill="#1e1b4b">Q = 4x cosec x</text>
        <text x="45" y="148" font-size="8" fill="#4338ca">Coeff of dy/dx = 1</text>

        <!-- Arrow 1 -->
        <path d="M 165 110 L 210 110" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#ar)"/>

        <!-- I.F. Computation Box -->
        <rect x="215" y="60" width="135" height="100" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="225" y="80" font-size="11" font-weight="bold" fill="#78350f">Integrating Factor</text>
        <text x="225" y="98" font-size="9" font-mono fill="#92400e">I.F. = e^(∫ P dx)</text>
        <text x="225" y="115" font-size="9" font-mono fill="#92400e">= e^(∫ cot x dx)</text>
        <text x="225" y="130" font-size="9" font-mono fill="#92400e">= e^(ln sin x)</text>
        <text x="225" y="148" font-size="9" font-weight="bold" fill="#78350f">I.F. = sin x</text>

        <!-- Arrow 2 -->
        <path d="M 350 110 L 395 110" fill="none" stroke="#059669" stroke-width="2.5" marker-end="url(#ar)"/>

        <!-- Product Solution Box -->
        <rect x="400" y="60" width="110" height="100" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
        <text x="408" y="80" font-size="10" font-weight="bold" fill="#14532d">Exact Product</text>
        <text x="408" y="98" font-size="8" font-mono fill="#166534">d/dx[y·I.F.]</text>
        <text x="408" y="112" font-size="8" font-mono fill="#166534">= Q · I.F.</text>
        <text x="408" y="128" font-size="8" font-mono fill="#166534">= 4x</text>
        <text x="408" y="148" font-size="9" font-weight="bold" fill="#14532d">y sin x = 2x²+C</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-1.5 text-slate-800">
            <strong>1. Identify P(x) and Q(x):</strong><br>
            Comparing with standard form <code>dy/dx + Py = Q</code>:<br>
            <code>P = cot x</code> and <code>Q = 4x cosec x</code>.<br><br>

            <strong>2. Compute Integrating Factor (I.F.):</strong><br>
            <code>I.F. = e^(∫ P dx) = e^(∫ cot x dx) = e^(ln(sin x)) = <strong>sin x</strong></code>.<br><br>

            <strong>3. General Solution Formula:</strong><br>
            <code>y \u00D7 (I.F.) = ∫ [ Q \u00D7 (I.F.) ] dx + C</code><br>
            <code>y \u00D7 sin x = ∫ [ (4x cosec x) \u00D7 sin x ] dx + C</code><br>
            Since <code>cosec x \u00D7 sin x = 1</code>:<br>
            <code>y sin x = ∫ 4x dx + C = 4(x² / 2) + C = <strong>2x² + C</strong></code>.<br><br>

            <strong>4. Particular Solution (y = 0 at x = π/2):</strong><br>
            <code>0 \u00D7 sin(π/2) = 2(π/2)² + C  ⇒  0 = 2(π² / 4) + C  ⇒  <strong>C = - π² / 2</strong></code>.<br><br>
            <strong class="text-indigo-700">Answer: y sin x = 2x² - (π² / 2)  ⇒  y = (2x² - π²/2) cosec x</strong>
          </div>
        </div>
      `,
      explanation: 'Remember e^(ln f(x)) = f(x). When multiplying Q by I.F., reciprocal identities often simplify the integrand immediately (here cosec x · sin x = 1).',
      stepMarking: '[1 Mark] Correct identification of P and Q | [1 Mark] Correct I.F. = sin x | [1 Mark] Integration yielding y sin x = 2x² + C | [1 Mark] Evaluating C = -π²/2 for particular solution'
    }
  ];

  // 8. Vectors & 3D Geometry
  Q['Three Dimensional Geometry'] = [
    {
      id: 'math-3d-q1',
      marks: 5,
      type: 'Shortest Distance Between Skew Lines',
      prob: '🔥 100% Guaranteed 5-Mark Question in Section D (Every CBSE Paper)',
      stem: 'Find the shortest distance between the two skew lines whose vector equations are:<br><code>→r = (î + 2ĵ + 3k̂) + λ(î - 3ĵ + 2k̂)</code><br><code>→r = (4î + 5ĵ + 6k̂) + μ(2î + 3ĵ + k̂)</code>',
      diagram: svg(540, 240, `
        <!-- 3D Skew Lines Diagram -->
        <rect x="20" y="20" width="500" height="200" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Shortest Distance Between Two Skew Lines</text>

        <!-- Line 1 Plane -->
        <polygon points="40,80 260,60 300,120 80,140" fill="#e0e7ff" fill-opacity="0.5" stroke="#4338ca" stroke-dasharray="3"/>
        <line x1="50" y1="110" x2="280" y2="90" stroke="#4338ca" stroke-width="2.5"/>
        <circle cx="100" cy="105" r="4" fill="#4338ca"/>
        <text x="75" y="100" font-size="10" font-weight="bold" fill="#312e81">A(→a₁)</text>
        <text x="285" y="95" font-size="10" font-weight="bold" fill="#4338ca">Line 1 (→b₁)</text>

        <!-- Line 2 Plane -->
        <polygon points="40,150 260,130 300,190 80,210" fill="#fef3c7" fill-opacity="0.5" stroke="#b45309" stroke-dasharray="3"/>
        <line x1="60" y1="160" x2="270" y2="185" stroke="#b45309" stroke-width="2.5"/>
        <circle cx="200" cy="177" r="4" fill="#b45309"/>
        <text x="210" y="175" font-size="10" font-weight="bold" fill="#78350f">B(→a₂)</text>
        <text x="275" y="190" font-size="10" font-weight="bold" fill="#b45309">Line 2 (→b₂)</text>

        <!-- Connecting Vector and Shortest Perpendicular -->
        <line x1="100" y1="105" x2="200" y2="177" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4"/>
        <text x="135" y="145" font-size="9" fill="#475569">→a₂ - →a₁</text>

        <!-- Mutual Perpendicular PQ -->
        <line x1="160" y1="100" x2="160" y2="173" stroke="#dc2626" stroke-width="3"/>
        <circle cx="160" cy="100" r="3" fill="#dc2626"/>
        <circle cx="160" cy="173" r="3" fill="#dc2626"/>
        <text x="168" y="140" font-size="11" font-weight="bold" fill="#dc2626">d = |(→a₂-→a₁)·(→b₁×→b₂)| / |→b₁×→b₂|</text>

        <!-- Result Box -->
        <rect x="330" y="60" width="170" height="90" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
        <text x="340" y="80" font-size="10" font-weight="bold" fill="#0f172a">• (→a₂ - →a₁) = 3î + 3ĵ + 3k̂</text>
        <text x="340" y="98" font-size="10" font-weight="bold" fill="#0f172a">• →b₁ × →b₂ = -9î + 3ĵ + 9k̂</text>
        <text x="340" y="116" font-size="10" font-weight="bold" fill="#0f172a">• |→b₁ × →b₂| = 3√19</text>
        <text x="340" y="136" font-size="11" font-weight="bold" fill="#16a34a">d = 3 / √19 units</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-1.5 text-slate-800">
            <strong>1. Identify vectors →a₁, →b₁ and →a₂, →b₂:</strong><br>
            Line 1: <code>→a₁ = î + 2ĵ + 3k̂</code>, &nbsp; <code>→b₁ = î - 3ĵ + 2k̂</code><br>
            Line 2: <code>→a₂ = 4î + 5ĵ + 6k̂</code>, &nbsp; <code>→b₂ = 2î + 3ĵ + k̂</code><br><br>

            <strong>2. Compute (→a₂ - →a₁):</strong><br>
            <code>→a₂ - →a₁ = (4 - 1)î + (5 - 2)ĵ + (6 - 3)k̂ = <strong>3î + 3ĵ + 3k̂</strong></code><br><br>

            <strong>3. Compute Cross Product (→b₁ × →b₂):</strong><br>
            <code>→b₁ × →b₂ = | [î, ĵ, k̂], [1, -3, 2], [2, 3, 1] |</code><br>
            = <code>î[(-3)(1) - (2)(3)] - ĵ[(1)(1) - (2)(2)] + k̂[(1)(3) - (-3)(2)]</code><br>
            = <code>î(-3 - 6) - ĵ(1 - 4) + k̂(3 + 6) = <strong>-9î + 3ĵ + 9k̂</strong></code><br><br>

            <strong>4. Compute Magnitude |→b₁ × →b₂|:</strong><br>
            <code>|→b₁ × →b₂| = √[(-9)² + 3² + 9²] = √[81 + 9 + 81] = √171 = √(9 \u00D7 19) = <strong>3√19</strong></code><br><br>

            <strong>5. Compute Dot Product (→a₂ - →a₁) · (→b₁ × →b₂):</strong><br>
            = <code>(3)(-9) + (3)(3) + (3)(9) = -27 + 9 + 27 = <strong>9</strong></code><br><br>

            <strong>6. Shortest Distance Formula:</strong><br>
            <code>d = | [ (→a₂ - →a₁) · (→b₁ × →b₂) ] / |→b₁ × →b₂| |</code><br>
            <code>d = | 9 / (3√19) | = <strong>3 / √19 units</strong> (or (3√19)/19 units)</code>.
          </div>
        </div>
      `,
      explanation: 'Lines in 3D that are neither parallel nor intersecting are called skew lines. The shortest distance between them is the projection of the vector joining two arbitrary points on the mutual perpendicular vector (→b₁ × →b₂).',
      stepMarking: '[1 Mark] Extracting →a₁, →b₁, →a₂, →b₂ and computing →a₂ - →a₁ | [1.5 Marks] Cross product determinant and magnitude | [1 Mark] Dot product calculation | [1.5 Marks] Applying formula with absolute value & final units'
    }
  ];

  // 9. Linear Programming
  Q['Linear Programming'] = [
    {
      id: 'math-lpp-q1',
      marks: 5,
      type: 'Bounded Feasible Region Corner Point Method',
      prob: '🔥 100% Guaranteed 5-Mark Question in Section D',
      stem: 'Solve the following Linear Programming Problem graphically:<br>Maximize <code>Z = 4x + y</code> subject to constraints:<br><code>x + y ≤ 50</code><br><code>3x + y ≤ 90</code><br><code>x ≥ 0, y ≥ 0</code>',
      diagram: svg(520, 240, `
        <!-- LPP Feasible Polygon Graph -->
        <rect x="20" y="20" width="480" height="200" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">LPP: Bounded Feasible Region & Corner Point Method</text>

        <!-- Axes -->
        <line x1="60" y1="190" x2="440" y2="190" stroke="#0f172a" stroke-width="2"/>
        <text x="445" y="195" font-size="11" font-weight="bold" fill="#0f172a">X</text>
        <line x1="60" y1="190" x2="60" y2="40" stroke="#0f172a" stroke-width="2"/>
        <text x="50" y="35" font-size="11" font-weight="bold" fill="#0f172a">Y</text>

        <!-- Boundary Line 1: x + y = 50 -->
        <line x1="60" y1="90" x2="260" y2="190" stroke="#2563eb" stroke-width="2"/>
        <text x="180" y="110" font-size="9" font-weight="bold" fill="#2563eb">x + y = 50</text>

        <!-- Boundary Line 2: 3x + y = 90 -->
        <line x1="60" y1="50" x2="180" y2="190" stroke="#dc2626" stroke-width="2"/>
        <text x="110" y="65" font-size="9" font-weight="bold" fill="#dc2626">3x + y = 90</text>

        <!-- Feasible Region Polygon: O(60,190), A(180,190), B(140,130), C(60,90) -->
        <polygon points="60,190 180,190 140,130 60,90" fill="#86efac" fill-opacity="0.45" stroke="#16a34a" stroke-width="2"/>
        <text x="85" y="150" font-size="11" font-weight="bold" fill="#14532d">Feasible Region</text>

        <!-- Corner Points -->
        <circle cx="60" cy="190" r="4" fill="#0f172a"/>
        <text x="45" y="205" font-size="9" font-weight="bold">O(0,0)</text>

        <circle cx="180" cy="190" r="5" fill="#dc2626"/>
        <text x="175" y="205" font-size="10" font-weight="bold" fill="#dc2626">A(30,0) [MAX]</text>

        <circle cx="140" cy="130" r="4" fill="#0f172a"/>
        <text x="145" y="130" font-size="9" font-weight="bold">B(20,30)</text>

        <circle cx="60" cy="90" r="4" fill="#0f172a"/>
        <text x="25" y="90" font-size="9" font-weight="bold">C(0,50)</text>

        <!-- Corner Point Evaluation Table -->
        <rect x="290" y="60" width="180" height="120" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="300" y="80" font-size="10" font-weight="bold" fill="#334155">Corner Point | Z = 4x + y</text>
        <line x1="290" y1="88" x2="470" y2="88" stroke="#cbd5e1" stroke-width="1"/>
        <text x="300" y="103" font-size="9" fill="#475569">O (0, 0) &nbsp; &nbsp; &nbsp; &nbsp; | Z = 0</text>
        <text x="300" y="120" font-size="9" font-weight="bold" fill="#dc2626">A (30, 0) &nbsp; &nbsp; &nbsp;| Z = 120 (MAX)</text>
        <text x="300" y="137" font-size="9" fill="#475569">B (20, 30) &nbsp; &nbsp; | Z = 110</text>
        <text x="300" y="154" font-size="9" fill="#475569">C (0, 50) &nbsp; &nbsp; &nbsp; | Z = 50</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-1.5 text-slate-800">
            <strong>1. Plotting Constraint Boundary Lines:</strong><br>
            • Line 1: <code>x + y = 50</code> passes through <code>(50, 0)</code> and <code>(0, 50)</code>. Testing (0,0): 0 ≤ 50 (True, shade towards origin).<br>
            • Line 2: <code>3x + y = 90</code> passes through <code>(30, 0)</code> and <code>(0, 90)</code>. Testing (0,0): 0 ≤ 90 (True, shade towards origin).<br>
            • Non-negativity: <code>x ≥ 0, y ≥ 0</code> restricts the region to the First Quadrant.<br><br>

            <strong>2. Intersection Point B of the two lines:</strong><br>
            Subtracting (Line 1) from (Line 2):<br>
            <code>(3x + y) - (x + y) = 90 - 50  ⇒  2x = 40  ⇒  x = 20</code>.<br>
            Substitute <code>x = 20</code> into Line 1: <code>20 + y = 50  ⇒  y = 30</code>.<br>
            So intersection vertex is <code>B(20, 30)</code>.<br><br>

            <strong>3. Corner Points of Bounded Feasible Region OABC:</strong><br>
            The feasible region is bounded with vertices: <code>O(0, 0), A(30, 0), B(20, 30), C(0, 50)</code>.<br><br>

            <strong>4. Evaluating Objective Function Z = 4x + y:</strong><br>
            • At <code>O(0, 0)</code>: &nbsp; <code>Z = 4(0) + 0 = 0</code><br>
            • At <code>A(30, 0)</code>: <code>Z = 4(30) + 0 = <strong>120  [MAXIMUM]</strong></code><br>
            • At <code>B(20, 30)</code>: <code>Z = 4(20) + 30 = 80 + 30 = 110</code><br>
            • At <code>C(0, 50)</code>: &nbsp; <code>Z = 4(0) + 50 = 50</code><br><br>

            <strong class="text-indigo-700">Conclusion: Maximum value of Z is 120, which occurs at the corner point (30, 0).</strong>
          </div>
        </div>
      `,
      explanation: 'Because the feasible region is bounded, the Fundamental Theorem of LPP guarantees that the maximum value of Z occurs at one of the corner points. Tabulating all vertices prevents marking deductions.',
      stepMarking: '[1.5 Marks] Accurate line plotting and shading of bounded feasible region | [1 Mark] Finding intersection point B(20, 30) | [1.5 Marks] Corner point evaluation table | [1 Mark] Final maximum statement with coordinates'
    }
  ];

  // 10. Probability (Bayes' Theorem)
  Q['Probability'] = [
    {
      id: 'math-prob-q1',
      marks: 5,
      type: 'Bayes\' Theorem Word Problem',
      prob: '🔥 Top 5-Mark Question in Section D (CBSE 2024, 2023, 2020)',
      stem: 'An insurance company insured 2000 scooter drivers, 4000 car drivers, and 6000 truck drivers. The probability of an accident involving a scooter driver, a car driver, and a truck driver is 0.01, 0.03, and 0.15 respectively. One of the insured persons meets with an accident. What is the probability that he is a scooter driver?',
      diagram: svg(540, 220, `
        <!-- Bayes Tree Diagram -->
        <rect x="20" y="20" width="500" height="180" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Bayes' Theorem: Probability Tree Diagram</text>

        <!-- Root Node -->
        <circle cx="60" cy="110" r="8" fill="#1e293b"/>
        <text x="40" y="95" font-size="10" font-weight="bold">Insured</text>

        <!-- Branch 1: Scooter -->
        <line x1="68" y1="105" x2="200" y2="65" stroke="#2563eb" stroke-width="2"/>
        <circle cx="200" cy="65" r="5" fill="#2563eb"/>
        <text x="95" y="75" font-size="10" font-weight="bold" fill="#2563eb">P(E₁) = 2k/12k = 1/6</text>
        <text x="210" y="68" font-size="10" font-weight="bold" fill="#1e3a8a">Scooter (E₁)</text>
        <line x1="205" y1="65" x2="340" y2="65" stroke="#dc2626" stroke-width="2"/>
        <text x="235" y="58" font-size="9" fill="#dc2626">P(A|E₁) = 0.01</text>
        <text x="345" y="68" font-size="10" font-weight="bold" fill="#dc2626">Accident (A)</text>

        <!-- Branch 2: Car -->
        <line x1="68" y1="110" x2="200" y2="110" stroke="#059669" stroke-width="2"/>
        <circle cx="200" cy="110" r="5" fill="#059669"/>
        <text x="95" y="125" font-size="10" font-weight="bold" fill="#059669">P(E₂) = 4k/12k = 1/3</text>
        <text x="210" y="113" font-size="10" font-weight="bold" fill="#14532d">Car (E₂)</text>
        <line x1="205" y1="110" x2="340" y2="110" stroke="#dc2626" stroke-width="2"/>
        <text x="235" y="103" font-size="9" fill="#dc2626">P(A|E₂) = 0.03</text>
        <text x="345" y="113" font-size="10" font-weight="bold" fill="#dc2626">Accident (A)</text>

        <!-- Branch 3: Truck -->
        <line x1="68" y1="115" x2="200" y2="155" stroke="#d97706" stroke-width="2"/>
        <circle cx="200" cy="155" r="5" fill="#d97706"/>
        <text x="95" y="150" font-size="10" font-weight="bold" fill="#d97706">P(E₃) = 6k/12k = 1/2</text>
        <text x="210" y="158" font-size="10" font-weight="bold" fill="#78350f">Truck (E₃)</text>
        <line x1="205" y1="155" x2="340" y2="155" stroke="#dc2626" stroke-width="2"/>
        <text x="235" y="148" font-size="9" fill="#dc2626">P(A|E₃) = 0.15</text>
        <text x="345" y="158" font-size="10" font-weight="bold" fill="#dc2626">Accident (A)</text>

        <!-- Formula Tag -->
        <text x="360" y="195" font-size="11" font-weight="bold" fill="#4338ca">P(E₁|A) = 1 / 52 ≈ 0.0192</text>
      `),
      modelAnswer: `
        <div class="space-y-2">
          <div class="bg-slate-100 p-3 rounded text-xs font-mono space-y-1.5 text-slate-800">
            <strong>1. Define Events:</strong><br>
            Let <code>E₁</code>: Insured person is a scooter driver.<br>
            Let <code>E₂</code>: Insured person is a car driver.<br>
            Let <code>E₃</code>: Insured person is a truck driver.<br>
            Let <code>A</code>: Insured person meets with an accident.<br><br>

            <strong>2. Total Persons and Prior Probabilities:</strong><br>
            Total insured persons = <code>2000 + 4000 + 6000 = 12000</code>.<br>
            • <code>P(E₁) = 2000 / 12000 = 1 / 6</code><br>
            • <code>P(E₂) = 4000 / 12000 = 1 / 3</code><br>
            • <code>P(E₃) = 6000 / 12000 = 1 / 2</code><br><br>

            <strong>3. Conditional Probabilities of Accident:</strong><br>
            • <code>P(A | E₁) = 0.01 = 1 / 100</code><br>
            • <code>P(A | E₂) = 0.03 = 3 / 100</code><br>
            • <code>P(A | E₃) = 0.15 = 15 / 100</code><br><br>

            <strong>4. Apply Bayes' Theorem for P(E₁ | A):</strong><br>
            <code>P(E₁ | A) = [ P(E₁) P(A | E₁) ] / [ P(E₁)P(A|E₁) + P(E₂)P(A|E₂) + P(E₃)P(A|E₃) ]</code><br><br>
            Numerator = <code>(1/6) \u00D7 (1/100) = 1 / 600</code><br>
            Denominator = <code>(1/6)(1/100) + (1/3)(3/100) + (1/2)(15/100)</code><br>
            = <code>(1/100) [ 1/6 + 3/3 + 15/2 ] = (1/100) [ 1/6 + 1 + 15/2 ]</code><br>
            = <code>(1/100) [ (1 + 6 + 45) / 6 ] = (1/100) \u00D7 (52 / 6) = 52 / 600</code><br><br>
            <code>P(E₁ | A) = (1 / 600) / (52 / 600) = <strong>1 / 52</strong></code>.<br><br>
            <strong class="text-indigo-700">Answer: The probability that the person is a scooter driver is 1/52 (≈ 0.0192).</strong>
          </div>
        </div>
      `,
      explanation: 'State the hypothesis events E₁, E₂, E₃ clearly as a mutually exclusive and exhaustive partition (P(E₁) + P(E₂) + P(E₃) = 1/6 + 1/3 + 1/2 = 1). State Bayes\' formula explicitly before substituting numbers.',
      stepMarking: '[1 Mark] Correct definitions of events E₁, E₂, E₃, A | [1 Mark] Calculating prior probabilities P(E_i) | [1 Mark] Stating conditional probabilities P(A|E_i) | [1 Mark] Bayes\' Theorem formula | [1 Mark] Final fraction 1/52'
    }
  ];

  // Mathematics Aliases
  Q['Matrices'] = Q['Matrices and Determinants'];
  Q['Determinants'] = Q['Matrices and Determinants'];
  Q['Vector Algebra'] = Q['Three Dimensional Geometry'];
  Q['Vectors & 3D Geometry'] = Q['Three Dimensional Geometry'];
  Q['Applications of Integrals'] = Q['Integrals'];

  // =========================================================================
  // 5. ENGLISH CORE (301)
  // =========================================================================

  // 1. Writing Skills Box Formats
  Q['Writing Skills'] = [
    {
      id: 'eng-ws-notice',
      marks: 4,
      type: 'Notice Writing (Official CBSE Box Format)',
      prob: '🔥 100% Compulsory 4-Mark Question in Section B',
      stem: 'You are Asma/Ashish, Head Girl/Head Boy of St. Mary\'s Senior Secondary School, New Delhi. Draft a notice in not more than 50 words informing students of Classes XI and XII about an upcoming Inter-School Debate Competition on the topic <em>"Artificial Intelligence: A Boon or Bane for Education"</em>. Include all necessary details such as date, venue, time, and last date for registration.',
      diagram: svg(540, 240, `
        <!-- Notice Box Format Blueprint -->
        <rect x="20" y="20" width="500" height="200" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
        <text x="35" y="42" font-size="11" font-weight="bold" fill="#dc2626">CBSE Official Notice Format (Must be enclosed in a single box)</text>

        <!-- Issuing Authority -->
        <rect x="50" y="55" width="440" height="20" rx="3" fill="#f1f5f9"/>
        <text x="130" y="69" font-size="10" font-weight="bold" fill="#0f172a">NAME OF ISSUING AUTHORITY / SCHOOL (CENTRAL CAPS)</text>

        <!-- NOTICE Tag -->
        <text x="235" y="90" font-size="13" font-weight="bold" letter-spacing="3" fill="#2563eb">NOTICE</text>

        <!-- Date and Title -->
        <text x="50" y="108" font-size="10" font-weight="bold" fill="#0f172a">DATE: 15 October 2026</text>
        <text x="175" y="122" font-size="11" font-weight="bold" fill="#0f172a">CATCHY TITLE / SUBJECT HEADING</text>

        <!-- Body Content 5 W's -->
        <rect x="50" y="130" width="440" height="38" rx="3" fill="#f8fafc" stroke="#cbd5e1" stroke-dasharray="2"/>
        <text x="60" y="144" font-size="9" fill="#334155">• What: Event name & objective | • When: Date & Time | • Where: Venue</text>
        <text x="60" y="158" font-size="9" fill="#334155">• Target: Eligible classes | • Whom: Contact person & registration deadline (Word limit: 50)</text>

        <!-- Signature Block -->
        <text x="50" y="180" font-size="9" fill="#0f172a">Signature</text>
        <text x="50" y="193" font-size="9" font-weight="bold" fill="#0f172a">NAME (IN BLOCK LETTERS)</text>
        <text x="50" y="206" font-size="9" fill="#64748b">Designation (e.g. Head Girl / Head Boy)</text>

        <rect x="340" y="172" width="150" height="38" rx="4" fill="#fef3c7" stroke="#b45309" stroke-width="1"/>
        <text x="348" y="186" font-size="8" font-weight="bold" fill="#78350f">Marking Scheme:</text>
        <text x="348" y="196" font-size="8" fill="#92400e">• Format (Box, Heading, Date): 1 Mark</text>
        <text x="348" y="206" font-size="8" fill="#92400e">• Content: 2 Marks | Expression: 1 Mark</text>
      `),
      modelAnswer: `
        <div class="space-y-2 text-xs">
          <div class="border-2 border-slate-800 p-4 rounded bg-white shadow-sm font-sans space-y-2">
            <div class="text-center font-bold text-sm tracking-wide text-slate-900 uppercase">
              St. Mary's Senior Secondary School, New Delhi
            </div>
            <div class="text-center font-extrabold text-base tracking-widest text-indigo-700">
              NOTICE
            </div>
            <div class="flex justify-between items-center text-xs font-semibold text-slate-700">
              <span>15 October 2026</span>
            </div>
            <div class="text-center font-bold text-xs uppercase underline text-slate-900">
              Inter-School Debate Competition
            </div>
            <p class="text-slate-800 leading-relaxed text-justify">
              This is to inform all students of Classes XI and XII that the school's Literary Club is organizing an Inter-School Debate Competition on the topic <em>"Artificial Intelligence: A Boon or Bane for Education"</em> on <strong>28 October 2026</strong> from <strong>9:30 AM to 1:00 PM</strong> in the <strong>School Auditorium</strong>. Renowned educators will adjudicate the event.
            </p>
            <p class="text-slate-800 leading-relaxed text-justify">
              Interested students should submit their names to the undersigned latest by <strong>22 October 2026</strong> for screening rounds.
            </p>
            <div class="pt-2 text-xs space-y-0.5">
              <p class="italic text-slate-600">Ashish / Asma</p>
              <p class="font-bold text-slate-900 uppercase">ASHISH SHARMA / ASMA KHAN</p>
              <p class="text-slate-600">Head Boy / Head Girl</p>
            </div>
          </div>
        </div>
      `,
      explanation: 'Examiner Marking Rule: The notice MUST be inside a closed box. Exceeding 50 words invites deduction under Expression. The date format must be standard (e.g. 15 October 2026, NOT 15/10/26).',
      stepMarking: '[1 Mark] Format: Box, School Name, NOTICE, Date, Heading, Signatory | [2 Marks] Content: 5 Ws (What, When, Where, Target audience, Contact) | [1 Mark] Expression: Grammatical accuracy, fluency & word limit compliance'
    },
    {
      id: 'eng-ws-invitation',
      marks: 4,
      type: 'Formal Invitation & Reply (Card & Letter Box Format)',
      prob: '🔥 Recurring 4-Mark Question in Section B',
      stem: '(a) You are the Principal of Sunrise Public School, Gurugram. Draft a formal printed invitation card for the Annual Sports Day to be held on 10 November 2026.<br>(b) Draft a formal reply accepting the invitation as Chief Guest.',
      diagram: svg(540, 240, `
        <!-- Invitation Card Blueprint -->
        <rect x="20" y="20" width="500" height="200" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
        <text x="35" y="42" font-size="11" font-weight="bold" fill="#dc2626">Formal Invitation Card Layout (3rd Person Voice)</text>

        <rect x="40" y="55" width="460" height="150" rx="4" fill="#fdf4ff" stroke="#c084fc" stroke-width="1"/>
        <text x="140" y="75" font-size="10" font-weight="bold" fill="#581c87">The Management, Staff and Students of</text>
        <text x="160" y="92" font-size="11" font-weight="bold" fill="#6b21a8">SUNRISE PUBLIC SCHOOL, GURUGRAM</text>
        <text x="155" y="110" font-size="10" font-style="italic" fill="#7e22ce">cordially solicit your benign presence on the auspicious occasion of</text>
        <text x="180" y="128" font-size="12" font-weight="bold" letter-spacing="2" fill="#9333ea">ANNUAL SPORTS DAY</text>
        <text x="160" y="145" font-size="10" font-weight="bold" fill="#0f172a">on Tuesday, 10 November 2026 at 10:00 AM</text>
        <text x="195" y="160" font-size="10" fill="#0f172a">in the School Sports Complex</text>

        <text x="50" y="185" font-size="9" font-weight="bold" fill="#0f172a">RSVP: Principal / 9876543210</text>
        <text x="340" y="185" font-size="9" fill="#64748b">Special Instructions: Carry card</text>
        <text x="50" y="198" font-size="8" fill="#64748b">(Répondez s'il vous plaît)</text>
        <text x="340" y="198" font-size="8" fill="#64748b">Please be seated by 9:45 AM</text>
      `),
      modelAnswer: `
        <div class="space-y-3 text-xs">
          <div>
            <strong>Part (a) Formal Printed Invitation Card:</strong>
            <div class="border-2 border-purple-800 p-4 rounded bg-purple-50 text-center font-sans space-y-1.5 mt-1">
              <p class="text-slate-700 italic">The Management, Staff and Students of</p>
              <h3 class="font-bold text-sm tracking-wide text-purple-900 uppercase">SUNRISE PUBLIC SCHOOL, GURUGRAM</h3>
              <p class="text-slate-700 italic">cordially invite you to the auspicious occasion of the</p>
              <h2 class="font-extrabold text-base tracking-wider text-purple-800 uppercase">25th Annual Sports Day</h2>
              <p class="font-semibold text-slate-900">on Tuesday, 10 November 2026 from 10:00 AM onwards</p>
              <p class="text-slate-800">at the School Grounds, Sector 14, Gurugram.</p>
              <p class="text-slate-900 font-semibold pt-1">Shri Rajeev Verma, IPS (DGP Haryana) has kindly consented to be the Chief Guest.</p>
              <div class="flex justify-between items-end pt-3 text-xs text-left">
                <div>
                  <p class="font-bold text-purple-950">RSVP:</p>
                  <p>Principal, Sunrise Public School</p>
                  <p>Phone: 0124-2345678</p>
                </div>
                <div class="text-right text-slate-600 text-xs">
                  <p>• Please be seated by 9:45 AM</p>
                  <p>• Admit two only</p>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-200">
            <strong>Part (b) Formal Acceptance Letter/Card by Chief Guest:</strong>
            <div class="border-2 border-slate-800 p-3 rounded bg-white font-sans mt-1">
              <p class="text-slate-800">18 October 2026</p>
              <p class="text-slate-800 mt-2 leading-relaxed">
                Shri Rajeev Verma thanks the Management, Principal, and Students of Sunrise Public School, Gurugram, for their kind invitation to preside over their 25th Annual Sports Day on 10 November 2026 at 10:00 AM.
              </p>
              <p class="text-slate-800 mt-1 leading-relaxed">
                He has great pleasure in accepting the invitation and confirms his presence for the occasion.
              </p>
              <p class="text-slate-900 font-semibold mt-2">Rajeev Verma, IPS</p>
            </div>
          </div>
        </div>
      `,
      explanation: 'Formal Invitations must ALWAYS be written in the third person (He/She/They - never "I" or "We"). No salutations or complimentary close are used in invitation cards. The acronym RSVP stands for "Répondez s\'il vous plaît" (Please respond).',
      stepMarking: '[1 Mark] Format: 3rd person phrasing, center alignment, RSVP | [2 Marks] Content: Occasion, date, time, venue, Chief Guest | [1 Mark] Expression & grammatical accuracy'
    },
    {
      id: 'eng-ws-job',
      marks: 5,
      type: 'Job Application with Bio-Data / Resume',
      prob: '🔥 Top 5-Mark Writing Option (CBSE 2024, 2023, 2020)',
      stem: 'You are Ravi/Raveena, residing at 45, Rajendra Nagar, New Delhi. You saw an advertisement in <em>The Times of India</em> for the post of <strong>PGT Computer Science</strong> in Modern Public School, Noida. Write an application letter along with a detailed Bio-Data in 120-150 words applying for the post.',
      diagram: svg(540, 260, `
        <!-- Job Application Two-Column Architecture -->
        <rect x="20" y="20" width="500" height="220" rx="4" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
        <text x="35" y="42" font-size="11" font-weight="bold" fill="#dc2626">Job Application Architecture: Covering Letter + Tabulated Bio-Data</text>

        <!-- Part 1: Covering Letter -->
        <rect x="35" y="55" width="225" height="170" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="45" y="72" font-size="10" font-weight="bold" fill="#0f172a">Part 1: Covering Letter</text>
        <text x="45" y="88" font-size="9" fill="#475569">• Sender's Address + Date</text>
        <text x="45" y="102" font-size="9" fill="#475569">• Receiver's Address (Principal)</text>
        <text x="45" y="116" font-size="9" font-weight="bold" fill="#2563eb">• Subject: Application for PGT CS</text>
        <text x="45" y="130" font-size="9" fill="#475569">• Para 1: Reference to newspaper ad</text>
        <text x="45" y="144" font-size="9" fill="#475569">• Para 2: Suitability & experience</text>
        <text x="45" y="158" font-size="9" fill="#475569">• Para 3: Enclosure assurance & close</text>
        <text x="45" y="172" font-size="9" fill="#475569">• Yours faithfully + Signature</text>
        <text x="45" y="186" font-size="9" font-weight="bold" fill="#15803d">Encl: Bio-Data & Certificates</text>

        <!-- Part 2: Bio-Data -->
        <rect x="275" y="55" width="235" height="170" rx="4" fill="#f1f5f9" stroke="#94a3b8"/>
        <text x="285" y="72" font-size="10" font-weight="bold" fill="#0f172a">Part 2: Bio-Data / Resume</text>
        <text x="285" y="88" font-size="9" fill="#334155">1. Name, Father's Name, DOB</text>
        <text x="285" y="102" font-size="9" fill="#334155">2. Contact No., Email ID</text>
        <text x="285" y="116" font-size="9" font-weight="bold" fill="#4338ca">3. Academic Table:</text>
        <text x="295" y="128" font-size="8" fill="#3730a3">[Exam | Board/Univ | Year | %]</text>
        <text x="295" y="140" font-size="8" fill="#3730a3">MCA (DU, 88%), B.Sc CS (84%)</text>
        <text x="285" y="154" font-size="9" fill="#334155">4. Work Experience: 5 yrs in DPS</text>
        <text x="285" y="168" font-size="9" fill="#334155">5. Skills: Python, SQL, Networks</text>
        <text x="285" y="182" font-size="9" fill="#334155">6. Two References with contact</text>
        <text x="285" y="196" font-size="8" font-style="italic" fill="#64748b">Closing: Date, Place & Sign</text>
      `),
      modelAnswer: `
        <div class="space-y-3 text-xs text-slate-800">
          <div class="border border-slate-300 p-3 rounded bg-white space-y-2">
            <div>
              45, Rajendra Nagar,<br>New Delhi.<br><br>
              20 October 2026<br><br>
              The Principal,<br>Modern Public School,<br>Sector 24, Noida (U.P.).<br><br>
              <strong>Subject: Application for the post of PGT Computer Science</strong><br><br>
              Sir/Madam,
            </div>
            <p class="leading-relaxed text-justify">
              In response to your advertisement published in <em>The Times of India</em> dated 18 October 2026 inviting applications for the post of <strong>PGT Computer Science</strong>, I hereby offer my candidature for the same.
            </p>
            <p class="leading-relaxed text-justify">
              I possess an MCA degree with first-class distinction from Delhi University and over four years of teaching experience preparing senior secondary students for CBSE Board examinations. I am well-versed with the latest CBSE Python curriculum, relational databases, and hands-on computer lab instruction.
            </p>
            <p class="leading-relaxed text-justify">
              My comprehensive Bio-Data and attested testimonials are enclosed herewith for your kind perusal. I look forward to attending an interview at your earliest convenience.
            </p>
            <div>
              Yours faithfully,<br>
              <strong>Raveena / Ravi</strong><br>
              <em>Enclosure: Bio-Data and Photocopies of Certificates</em>
            </div>
          </div>

          <div class="border border-slate-300 p-3 rounded bg-slate-50 space-y-2">
            <h4 class="font-bold text-center underline text-slate-900 uppercase">BIO-DATA</h4>
            <div class="grid grid-cols-2 gap-1">
              <div><strong>Name:</strong> Ravi Kumar</div>
              <div><strong>Father's Name:</strong> Shri S. K. Kumar</div>
              <div><strong>Date of Birth:</strong> 14 August 1995</div>
              <div><strong>Marital Status:</strong> Unmarried</div>
              <div><strong>Address:</strong> 45, Rajendra Nagar, New Delhi</div>
              <div><strong>Contact:</strong> 9811223344 / ravi.cs@email.com</div>
            </div>

            <div class="pt-1">
              <strong>Educational Qualifications:</strong>
              <table class="w-full text-left border-collapse border border-slate-300 mt-1 text-xs">
                <tr class="bg-slate-200">
                  <th class="border border-slate-300 p-1">Examination</th>
                  <th class="border border-slate-300 p-1">Board / University</th>
                  <th class="border border-slate-300 p-1">Year</th>
                  <th class="border border-slate-300 p-1">Percentage</th>
                </tr>
                <tr>
                  <td class="border border-slate-300 p-1">MCA (Master of Comp. Apps)</td>
                  <td class="border border-slate-300 p-1">Delhi University</td>
                  <td class="border border-slate-300 p-1">2018</td>
                  <td class="border border-slate-300 p-1">88.5%</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 p-1">B.Sc (Hons) Computer Science</td>
                  <td class="border border-slate-300 p-1">Delhi University</td>
                  <td class="border border-slate-300 p-1">2016</td>
                  <td class="border border-slate-300 p-1">84.2%</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 p-1">Class XII (CBSE)</td>
                  <td class="border border-slate-300 p-1">CBSE Board</td>
                  <td class="border border-slate-300 p-1">2013</td>
                  <td class="border border-slate-300 p-1">92.0%</td>
                </tr>
              </table>
            </div>

            <div class="space-y-0.5 pt-1">
              <div><strong>Work Experience:</strong> 4.5 years as PGT CS at Greenfield Academy, New Delhi (2019-Present).</div>
              <div><strong>Technical Skills:</strong> Python 3.x, MySQL, Network Topologies, Data Structures (Stack).</div>
              <div><strong>References:</strong> (1) Dr. A. P. Mathur, HoD CS, Delhi University (Ph: 9810012345). (2) Mrs. Neena Roy, Principal, Greenfield Academy (Ph: 9820054321).</div>
            </div>
          </div>
        </div>
      `,
      explanation: 'A job application must ALWAYS consist of two distinct sections: (1) Covering letter written in formal business letter format with an explicit enclosure note ("Encl: Bio-Data"), and (2) Detailed, tabulated Bio-Data with personal particulars, academic table, work experience, and references.',
      stepMarking: '[1 Mark] Covering letter format with sender, receiver, subject, enclosure | [2 Marks] Body content connecting qualifications to the advertised post | [1 Mark] Tabulated qualifications and structured Bio-Data | [1 Mark] Expression, coherence, and grammar'
    }
  ];

  // 2. The Last Lesson
  Q['The Last Lesson'] = [
    {
      id: 'eng-ll-q1',
      marks: 5,
      type: 'Thematic Essay (Linguistic Chauvinism & Patriotism)',
      prob: '🔥 High Probability Literature Essay Question',
      stem: '"When a people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison." Explain the significance of M. Hamel\'s statement in the light of the lesson "The Last Lesson". How does Franz\'s perspective towards his teacher and language transform during this final class?',
      diagram: svg(540, 200, `
        <!-- Franz\'s Awakening Arc -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Franz\'s Emotional & Intellectual Transformation Arc</text>

        <!-- Stage 1 -->
        <circle cx="80" cy="110" r="28" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="60" y="108" font-size="9" font-weight="bold" fill="#991b1b">Neglect</text>
        <text x="55" y="122" font-size="8" fill="#7f1d1d">Fears ruler</text>

        <!-- Arrow 1 -->
        <path d="M 115 110 L 175 110" fill="none" stroke="#64748b" stroke-width="2" marker-end="url(#ar)"/>

        <!-- Stage 2 -->
        <circle cx="210" cy="110" r="28" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="188" y="108" font-size="9" font-weight="bold" fill="#92400e">Shock</text>
        <text x="180" y="122" font-size="8" fill="#78350f">Berlin order</text>

        <!-- Arrow 2 -->
        <path d="M 245 110 L 305 110" fill="none" stroke="#64748b" stroke-width="2" marker-end="url(#ar)"/>

        <!-- Stage 3 -->
        <circle cx="340" cy="110" r="28" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="318" y="108" font-size="9" font-weight="bold" fill="#312e81">Awakening</text>
        <text x="312" y="122" font-size="8" fill="#3730a3">Books sacred</text>

        <!-- Arrow 3 -->
        <path d="M 375 110 L 435 110" fill="none" stroke="#64748b" stroke-width="2" marker-end="url(#ar)"/>

        <!-- Stage 4 -->
        <circle cx="470" cy="110" r="28" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
        <text x="448" y="108" font-size="9" font-weight="bold" fill="#14532d">Patriotism</text>
        <text x="442" y="122" font-size="8" font-weight="bold" fill="#166534">Vive La France!</text>
      `),
      modelAnswer: `
        <div class="space-y-2 text-xs text-slate-800 leading-relaxed">
          <p>M. Hamel\'s poignant statement reflects the profound connection between a nation's native language, cultural identity, and political freedom. In Alphonse Daudet\'s <em>"The Last Lesson"</em>, the Prussian invaders not only conquered Alsace and Lorraine militarily but enacted <strong>linguistic chauvinism</strong> by banning French and imposing German in schools to extinguish local identity.</p>
          <ul class="list-disc pl-4 space-y-1.5">
            <li><strong>Language as the Indestructible Key:</strong> M. Hamel declares French to be "the most beautiful, the clearest, the most logical language in the world." He urges his villagers to guard it jealously because when a community is politically enslaved, its language acts as an unbreakable collective bond. Losing one's mother tongue constitutes cultural surrender; preserving it keeps the flame of independence alive.</li>
            <li><strong>Franz\'s Transformation:</strong> At the story's start, Franz is a careless boy who dreads M. Hamel\'s iron ruler and seeks distractions in warm sunshine and chirping birds. However, upon hearing the Prussian decree, shock turns to profound remorse. His grammar and history books, once a heavy burden, suddenly seem like "old friends" he cannot bear to give up.</li>
            <li><strong>M. Hamel\'s Defiant Conclusion:</strong> The presence of village elders in the classroom symbolizes collective penitence for postponing education. M. Hamel, dressed in his ceremonial Sunday clothes, channels his grief into an act of historic defiance. Standing tall and choking with emotion, he writes in massive chalk letters: <strong>"Vive La France!"</strong> (Long Live France!).</li>
          </ul>
        </div>
      `,
      explanation: 'Structure CBSE literature essays into: (1) Core thematic thesis (linguistic chauvinism vs cultural identity), (2) Textual evidence of Franz\'s psychological transformation, (3) Significance of M. Hamel\'s concluding chalk message.',
      stepMarking: '[2 Marks] Explanation of M. Hamel\'s statement & linguistic chauvinism | [2 Marks] Textual analysis of Franz\'s shift from negligence to reverence | [1 Mark] Quality of expression, vocabulary, and coherence'
    }
  ];

  // 3. The Rattrap
  Q['The Rattrap'] = [
    {
      id: 'eng-rt-q1',
      marks: 5,
      type: 'Character Transformation & Theme of Radical Kindness',
      prob: '🔥 Recurring 5-Mark Question in CBSE Literature',
      stem: '"The essential goodness in a human being can be awakened through understanding and love." Discuss this statement with reference to Selma Lagerlöf\'s "The Rattrap". How did Edla Willmansson\'s radical compassion transform the hardened peddler into Captain von Stahle?',
      diagram: svg(540, 200, `
        <!-- Rattrap Moral Transformation Cycle -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">The Peddler's Cycle of Temptation, Entrapment & Salvation</text>

        <!-- Step 1: Cynical Theory -->
        <rect x="35" y="60" width="95" height="100" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="42" y="78" font-size="9" font-weight="bold" fill="#991b1b">1. The Bait</text>
        <text x="42" y="93" font-size="8" fill="#7f1d1d">World is a rattrap</text>
        <text x="42" y="106" font-size="8" fill="#7f1d1d">Baits: food, shelter</text>
        <text x="42" y="125" font-size="8" font-weight="bold" fill="#dc2626">Steals 30 kronor</text>
        <text x="42" y="145" font-size="8" fill="#7f1d1d">from crofter</text>

        <!-- Step 2: Forest Trap -->
        <rect x="155" y="60" width="105" height="100" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="162" y="78" font-size="9" font-weight="bold" fill="#78350f">2. The Forest</text>
        <text x="162" y="93" font-size="8" fill="#92400e">Labyrinth of trees</text>
        <text x="162" y="106" font-size="8" fill="#92400e">Trapped by own deed</text>
        <text x="162" y="125" font-size="8" font-weight="bold" fill="#b45309">Ironmaster's Hall</text>
        <text x="162" y="145" font-size="8" fill="#92400e">Mistaken identity</text>

        <!-- Step 3: Edla\'s Kindness -->
        <rect x="285" y="60" width="105" height="100" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="292" y="78" font-size="9" font-weight="bold" fill="#312e81">3. Radical Grace</text>
        <text x="292" y="93" font-size="8" fill="#3730a3">Edla detects fear</text>
        <text x="292" y="106" font-size="8" fill="#3730a3">Treats him as guest</text>
        <text x="292" y="125" font-size="8" font-weight="bold" fill="#4338ca">Unconditional</text>
        <text x="292" y="145" font-size="8" fill="#3730a3">dignity & respect</text>

        <!-- Step 4: Redemption -->
        <rect x="415" y="60" width="95" height="100" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
        <text x="422" y="78" font-size="9" font-weight="bold" fill="#14532d">4. Redemption</text>
        <text x="422" y="93" font-size="8" fill="#166534">Leaves gift rattrap</text>
        <text x="422" y="106" font-size="8" fill="#166534">Returns 30 kronor</text>
        <text x="422" y="125" font-size="8" font-weight="bold" fill="#15803d">Signed:</text>
        <text x="422" y="145" font-size="8" font-weight="bold" fill="#14532d">Captain von Stahle</text>
      `),
      modelAnswer: `
        <div class="space-y-2 text-xs text-slate-800 leading-relaxed">
          <p>Selma Lagerlöf\'s <em>"The Rattrap"</em> is an allegory demonstrating that beneath bitterness and moral corruption lies an innate goodness that blooms when nurtured with unmerited grace and respect.</p>
          <ul class="list-disc pl-4 space-y-1.5">
            <li><strong>The Peddler's Cynical Entrapment:</strong> The homeless vagabond conceives a philosophical metaphor: the world is a giant rattrap offering riches, food, and joy as baits. Having stolen thirty kronor from the hospitable old crofter, he wanders into a confusing forest, realizing he has succumbed to the bait and is caught in the trap of his own moral degradation.</li>
            <li><strong>Contrast between the Ironmaster and Edla:</strong> The ironmaster invites the peddler solely because he mistakes him for an old regimental comrade (Captain von Stahle), and angrily threatens him with the sheriff upon discovering his real identity. In sharp contrast, his daughter <strong>Edla Willmansson</strong> perceives his vulnerability and pleads to let him stay for Christmas, insisting: <em>"He ought to have a day of peace with us here."</em></li>
            <li><strong>The Transformative Power of Dignity:</strong> Edla treats the ragged tramp with genuine gentleness and courtly dignity. By elevating him to the rank of a captain in spirit, she awakens his latent conscience. This unconditional respect empowers him to transcend his base impulses.</li>
            <li><strong>The Christmas Gift & Redemption:</strong> The peddler departs leaving behind a miniature rattrap, the stolen thirty kronor to be returned to the crofter, and a heartfelt letter signed: <strong>"Captain von Stahle"</strong>—proving that treating someone with dignity enables them to live up to that dignity.</li>
          </ul>
        </div>
      `,
      explanation: 'Examiner Focus: Contrast the transactional welcome of the Ironmaster with Edla\'s unconditional humanitarian compassion. Emphasize why the signature "Captain von Stahle" is the decisive symbol of moral resurrection.',
      stepMarking: '[2 Marks] Analysis of the rattrap metaphor and peddler\'s moral lapse | [2 Marks] Contrast between ironmaster\'s anger and Edla\'s unconditional empathy | [1 Mark] Significance of the returned money and "Captain von Stahle" signature'
    }
  ];

  // 4. Indigo
  Q['Indigo'] = [
    {
      id: 'eng-ind-q1',
      marks: 5,
      type: 'Historical Narrative & Leadership Analysis',
      prob: '🔥 Top Recurring 5-Mark Question in CBSE Literature',
      stem: 'Why did Mahatma Gandhi declare that the Champaran episode was the "turning point" of his life and the Indian freedom struggle? Analyze how Champaran demonstrated the principles of civil disobedience, self-reliance, and freedom from fear.',
      diagram: svg(540, 200, `
        <!-- Champaran Satyagraha Roadmap -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Champaran Satyagraha: Blueprint for Indian Independence</text>

        <!-- Step 1: Injustice -->
        <rect x="35" y="60" width="105" height="100" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="42" y="78" font-size="9" font-weight="bold" fill="#991b1b">1. Tinkathia</text>
        <text x="42" y="93" font-size="8" fill="#7f1d1d">Forced 3/20th indigo</text>
        <text x="42" y="106" font-size="8" fill="#7f1d1d">British landlords</text>
        <text x="42" y="125" font-size="8" font-weight="bold" fill="#dc2626">Rajkumar Shukla</text>
        <text x="42" y="145" font-size="8" fill="#7f1d1d">resolute persistence</text>

        <!-- Step 2: Civil Disobedience -->
        <rect x="155" y="60" width="105" height="100" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="162" y="78" font-size="9" font-weight="bold" fill="#78350f">2. Defiance</text>
        <text x="162" y="93" font-size="8" fill="#92400e">Refuses to leave</text>
        <text x="162" y="106" font-size="8" fill="#92400e">Motihari court mob</text>
        <text x="162" y="125" font-size="8" font-weight="bold" fill="#b45309">Civil Disobedience</text>
        <text x="162" y="145" font-size="8" fill="#92400e">triumphs 1st time</text>

        <!-- Step 3: Refund -->
        <rect x="285" y="60" width="105" height="100" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="292" y="78" font-size="9" font-weight="bold" fill="#312e81">3. 25% Refund</text>
        <text x="292" y="93" font-size="8" fill="#3730a3">Money is secondary</text>
        <text x="292" y="106" font-size="8" fill="#3730a3">Planters lose prestige</text>
        <text x="292" y="125" font-size="8" font-weight="bold" fill="#4338ca">Peasants shed</text>
        <text x="292" y="145" font-size="8" fill="#3730a3">paralyzing fear</text>

        <!-- Step 4: Social Reform -->
        <rect x="415" y="60" width="95" height="100" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
        <text x="422" y="78" font-size="9" font-weight="bold" fill="#14532d">4. Self-Reliance</text>
        <text x="422" y="93" font-size="8" fill="#166534">Health & sanitation</text>
        <text x="422" y="106" font-size="8" fill="#166534">Voluntary schools</text>
        <text x="422" y="125" font-size="8" font-weight="bold" fill="#15803d">Refused C.F.</text>
        <text x="422" y="145" font-size="8" fill="#14532d">Andrews crutch</text>
      `),
      modelAnswer: `
        <div class="space-y-2 text-xs text-slate-800 leading-relaxed">
          <p>In Louis Fischer's biographical account <em>"Indigo"</em>, the Champaran campaign of 1917 marked the watershed moment that transformed the Indian national movement from courtroom litigation into mass civil resistance.</p>
          <ul class="list-disc pl-4 space-y-1.5">
            <li><strong>Liberation from Fear:</strong> Gandhi recognized that Indian peasants were crushed and terror-stricken by British landlords under the exploitative <em>tinkathia</em> system (forcing indigo on 3/20th of land). Gandhi declared that real relief lay not in winning legal arguments, but in <strong>shedding the fear of British authority</strong>. When thousands of peasants gathered fearlessly around the Motihari courthouse, the British officials found themselves helpless without Gandhi\'s cooperation.</li>
            <li><strong>First Triumph of Civil Disobedience:</strong> When ordered to leave Champaran, Gandhi openly disobeyed the magistrate, citing his allegiance to the "higher law of our being, the voice of conscience." The dropping of the case marked the <strong>first victory of modern civil disobedience in India</strong>.</li>
            <li><strong>The Symbolic 25% Refund:</strong> When landlords offered a 25% refund, Gandhi accepted immediately. He explained that the monetary amount was inconsequential; what mattered was that the arrogant British planters were forced to surrender their prestige and money, shattering their aura of invincibility.</li>
            <li><strong>Constructive Self-Reliance:</strong> Gandhi refused to involve Charles Freer Andrews as a British mediator, telling his followers that relying on an Englishman was a confession of weakness. By introducing sanitation, community health, and primary schools, Gandhi laid the bedrock of true Indian self-reliance (<em>Swaraj</em>).</li>
          </ul>
        </div>
      `,
      explanation: 'Key points that fetch maximum marks: (1) Freedom from fear is greater than legal victory, (2) Civil disobedience triumphs for the first time in modern India, (3) Why 25% refund was a crushing moral defeat for planters, (4) Rejection of C.F. Andrews as an English crutch for self-reliance.',
      stepMarking: '[2 Marks] Liberation of peasants from fear & tinkathia system | [1.5 Marks] Civil disobedience in Motihari court & 25% refund significance | [1.5 Marks] Constructive social upliftment & Charles Freer Andrews self-reliance principle'
    }
  ];

  // 5. The Enemy
  Q['The Enemy'] = [
    {
      id: 'eng-en-q1',
      marks: 5,
      type: 'Ethical Dilemma & Humanitarianism vs Nationalism',
      prob: '🔥 Recurring 5-Mark Question in Vistas',
      stem: '"There are moments in life when one has to make hard choices between our roles as private individuals and as citizens with a sense of national loyalty." Discuss how Dr. Sadao Hoki resolves the intense moral conflict between his duty as a physician and his patriotism as a Japanese citizen in Pearl S. Buck\'s "The Enemy".',
      diagram: svg(540, 200, `
        <!-- Ethical Dilemma Crossroads -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Dr. Sadao\'s Moral Crossroads: Duty as Citizen vs Duty as Healer</text>

        <!-- Left Pillar: Patriotism -->
        <rect x="35" y="60" width="200" height="100" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="45" y="80" font-size="11" font-weight="bold" fill="#991b1b">Duty as a Citizen (Japan)</text>
        <text x="45" y="98" font-size="9" fill="#7f1d1d">• Wartime America is the enemy</text>
        <text x="45" y="113" font-size="9" fill="#7f1d1d">• Sheltering POW = High Treason</text>
        <text x="45" y="128" font-size="9" fill="#7f1d1d">• Domestic servants rebel & quit</text>
        <text x="45" y="145" font-size="9" font-weight="bold" fill="#dc2626">Reports POW to General</text>

        <!-- Right Pillar: Medicine -->
        <rect x="290" y="60" width="210" height="100" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
        <text x="300" y="80" font-size="11" font-weight="bold" fill="#14532d">Duty as a Physician (Hippocratic Oath)</text>
        <text x="300" y="98" font-size="9" fill="#166534">• Moral duty to save human life</text>
        <text x="300" y="113" font-size="9" fill="#166534">• Tom is dying of gunshot wound</text>
        <text x="300" y="128" font-size="9" fill="#166534">• Hana cleans & assists operation</text>
        <text x="300" y="145" font-size="9" font-weight="bold" fill="#15803d">Surgically extracts bullet</text>

        <!-- Resolution Bridge -->
        <path d="M 235 110 L 290 110" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="262" cy="110" r="14" fill="#2563eb"/>
        <text x="256" y="114" font-size="10" font-weight="bold" fill="#ffffff">VS</text>
      `),
      modelAnswer: `
        <div class="space-y-2 text-xs text-slate-800 leading-relaxed">
          <p>Pearl S. Buck's <em>"The Enemy"</em> masterfully dramatizes the clash between man-made nationalistic loyalties and the universal sanctity of human life during the harrowing background of World War II.</p>
          <ul class="list-disc pl-4 space-y-1.5">
            <li><strong>The Crisis of Conscience:</strong> When an injured American POW (Tom) washes ashore near Dr. Sadao\'s coastal Japanese home, Sadao faces a terrifying dilemma. Throwing the bleeding soldier back into the ocean means certain death, turning him over to the military police ensures his execution, while sheltering an American enemy constitutes treason punishable by death.</li>
            <li><strong>Triumph of the Hippocratic Oath:</strong> Driven by his medical training in America and the fundamental ethics of his profession, Dr. Sadao brings the soldier inside. Despite Hana's terror and the open mutiny of their servants who abandon the house in patriotic disgust, Sadao operates with consummate surgical skill, extracting the bullet from near the soldier's kidney.</li>
            <li><strong>Reconciling Citizenship with Humanity:</strong> To balance his duty to his country, Sadao reports the presence of the prisoner to the old General, who promises to send private assassins to silently eliminate the boy. However, when the General forgets due to his own health crisis, Sadao seizes the initiative.</li>
            <li><strong>Noble Resolution:</strong> Rather than leaving Tom to be slaughtered, Dr. Sadao provides him with a boat, food, water, and flashlight, helping him escape safely to an unpopulated island to await an American rescue ship. Sadao transcends narrow racial prejudice, marveling at the enduring mystery of human compassion.</li>
          </ul>
        </div>
      `,
      explanation: 'Highlight that Dr. Sadao is neither an unpatriotic traitor nor a reckless rebel; he systematically resolves his dual obligations by first saving the dying patient (medical ethics) and then safely helping him escape when state machinery fails.',
      stepMarking: '[2 Marks] Definition of Sadao\'s conflict: patriotism vs Hippocratic oath | [1.5 Marks] Surgical intervention despite servant mutiny & Hana\'s support | [1.5 Marks] General\'s forgotten promise & Sadao arranging Tom\'s peaceful escape'
    }
  ];

  // 6. A Thing of Beauty
  Q['A Thing of Beauty'] = [
    {
      id: 'eng-tob-q1',
      marks: 5,
      type: 'Poetic Philosophy & Extract Analysis',
      prob: '🔥 Top 5-Mark Poetry Question in CBSE Core',
      stem: 'How does John Keats express that "A thing of beauty is a joy forever"? What "pall" darkens human existence, and how does nature and art offer an "endless fountain of immortal drink" to lift the human spirit?',
      diagram: svg(540, 200, `
        <!-- Keatsian Dual Realm Diagram -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Keats\' Philosophy of Beauty: The Mortal Pall vs Immortal Solace</text>

        <!-- Left: The Gloom of Life -->
        <rect x="35" y="60" width="200" height="100" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
        <text x="45" y="80" font-size="11" font-weight="bold" fill="#334155">The Dark Pall of Life</text>
        <text x="45" y="98" font-size="9" fill="#475569">• Despondence and despair</text>
        <text x="45" y="113" font-size="9" fill="#475569">• Inhuman dearth of noble natures</text>
        <text x="45" y="128" font-size="9" fill="#475569">• Gloomy days & unhealthy ways</text>
        <text x="45" y="145" font-size="9" font-weight="bold" fill="#dc2626">Heavy sadness over spirits</text>

        <!-- Right: Healing Fountain -->
        <rect x="290" y="60" width="210" height="100" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="300" y="80" font-size="11" font-weight="bold" fill="#1e3a8a">Endless Fountain of Immortal Drink</text>
        <text x="300" y="98" font-size="9" fill="#1e40af">• Sun, Moon, Old & Young Trees</text>
        <text x="300" y="113" font-size="9" fill="#1e40af">• Daffodils with green world</text>
        <text x="300" y="128" font-size="9" fill="#1e40af">• Clear rills making cooling cover</text>
        <text x="300" y="145" font-size="9" font-weight="bold" fill="#16a34a">Grandeur of the Mighty Dead</text>

        <!-- Transforming Arrow -->
        <path d="M 235 110 L 290 110" fill="none" stroke="#059669" stroke-width="2.5" marker-end="url(#ar)"/>
        <text x="242" y="103" font-size="9" font-weight="bold" fill="#059669">Dispels</text>
      `),
      modelAnswer: `
        <div class="space-y-2 text-xs text-slate-800 leading-relaxed">
          <p>In his romantic masterpiece <em>"A Thing of Beauty"</em> (an excerpt from <em>Endymion</em>), John Keats propounds his eternal philosophy that authentic beauty possesses transcendent power to alleviate human suffering and bestow everlasting joy.</p>
          <ul class="list-disc pl-4 space-y-1.5">
            <li><strong>Ever-Increasing Joy:</strong> Keats begins with the immortal aphorism: <em>"A thing of beauty is a joy forever / Its loveliness increases; it will never / Pass into nothingness."</em> Unlike transient physical pleasures, true beauty leaves an indelible imprint upon the human soul, acting as a peaceful "bower" providing quiet breathing and sweet dreams.</li>
            <li><strong>The "Pall" of Human Existence:</strong> Keats candidly acknowledges the grim realities of mortal life: the "despondence", the "inhuman dearth of noble natures", gloomy days, and the suffering born of unwholesome human pursuits. This melancholy hangs like a dark "pall" over our sorrowful spirits.</li>
            <li><strong>Nature's Healing Touch:</strong> In spite of all sorrow, some shape of beauty lifts the heavy shroud. Keats catalogues universal manifestations of beauty: the celestial sun and moon; shade-giving trees for simple sheep; golden daffodils in the green woods; clear cooling streams (rills); and mid-forest ferns blooming with wild musk-rose.</li>
            <li><strong>The Grandeur of Art & Literature:</strong> Beauty is not limited to nature; it encompasses human legacy. The inspiring deeds of the "mighty dead" and the glorious epics or tales we have read pour down upon humanity as an <strong>"endless fountain of immortal drink"</strong> directly from the edge of heaven, connecting our mortal existence to divine immortality.</li>
          </ul>
        </div>
      `,
      explanation: 'Examiner Highlights: (1) Contrast the mortal "pall" (loss of faith, scarcity of noble men) with the immortal "fountain". (2) Emphasize Keats\' two domains of beauty: Nature (rills, daffodils, musk-roses) and Literature/Art (grandeur of the mighty dead).',
      stepMarking: '[2 Marks] Explanation of "joy forever" and the increasing nature of beauty | [1.5 Marks] Analysis of the dark pall of despair and dearth of noble souls | [1.5 Marks] Keatsian catalogue of natural beauties & the endless fountain metaphor'
    }
  ];

  // 7. Aunt Jennifer\'s Tigers
  Q['Aunt Jennifer\'s Tigers'] = [
    {
      id: 'eng-ajt-q1',
      marks: 5,
      type: 'Feminist Analysis & Symbolism',
      prob: '🔥 Recurring 5-Mark Question in CBSE Board Exams',
      stem: 'Analyze the striking contrast between Aunt Jennifer and the tigers she embroiders on the panel in Adrienne Rich\'s "Aunt Jennifer\'s Tigers". How does the poem serve as a profound feminist critique of patriarchal oppression and marital subjugation?',
      diagram: svg(540, 200, `
        <!-- Feminist Dualism Diagram -->
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Feminist Dualism: Aunt Jennifer vs Her Embroidered Tigers</text>

        <!-- Left: Aunt Jennifer -->
        <rect x="35" y="60" width="200" height="100" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
        <text x="45" y="80" font-size="11" font-weight="bold" fill="#334155">Aunt Jennifer (The Subjugated)</text>
        <text x="45" y="98" font-size="9" fill="#475569">• "Fingers fluttering through her wool"</text>
        <text x="45" y="113" font-size="9" fill="#475569">• Finds even ivory needle hard to pull</text>
        <text x="45" y="128" font-size="9" fill="#475569">• "Massive weight of Uncle's wedding band"</text>
        <text x="45" y="145" font-size="9" font-weight="bold" fill="#dc2626">Terrified & ringed with ordeals</text>

        <!-- Right: The Tigers -->
        <rect x="290" y="60" width="210" height="100" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="300" y="80" font-size="11" font-weight="bold" fill="#78350f">The Tigers (The Liberated Art)</text>
        <text x="300" y="98" font-size="9" fill="#92400e">• "Bright topaz denizens of a world of green"</text>
        <text x="300" y="113" font-size="9" fill="#92400e">• "They do not fear the men beneath the tree"</text>
        <text x="300" y="128" font-size="9" fill="#92400e">• "Pace in sleek chivalric certainty"</text>
        <text x="300" y="145" font-size="9" font-weight="bold" fill="#16a34a">Proud, fearless & immortal</text>

        <!-- Contrast Link -->
        <path d="M 235 110 L 290 110" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="3"/>
        <text x="242" y="103" font-size="9" font-weight="bold" fill="#dc2626">Irony</text>
      `),
      modelAnswer: `
        <div class="space-y-2 text-xs text-slate-800 leading-relaxed">
          <p>Adrienne Rich\'s <em>"Aunt Jennifer\'s Tigers"</em> is a poignant feminist critique exposing the pervasive psychological subjugation experienced by women within oppressive traditional patriarchal marriages.</p>
          <ul class="list-disc pl-4 space-y-1.5">
            <li><strong>Symbol of Fearless Defiance (The Tigers):</strong> The tigers created on Aunt Jennifer\'s tapestry embody the freedom, dignity, and autonomy she is denied in real life. Described as <em>"bright topaz denizens of a world of green"</em>, they pace with <em>"sleek chivalric certainty"</em> and fearlessly disregard the men standing beneath the tree. Their majestic boldness represents the unconquerable female spirit.</li>
            <li><strong>Aunt Jennifer\'s Physical & Emotional Victimhood:</strong> In sharp contrast, Aunt Jennifer is physically frail, emotionally terrified, and crushed by patriarchal authority. Her <em>"fingers fluttering through her wool"</em> find even the lightweight ivory needle difficult to pull, symbolizing complete nervous exhaustion.</li>
            <li><strong>The "Massive Weight" of Uncle's Wedding Band:</strong> The wedding ring on Aunt Jennifer\'s hand is transformed into a chilling metaphor of domestic captivity. The band sits "heavily" upon her wrist, signifying that marriage has operated not as a union of love, but as an oppressive institution that stripped her of individual agency.</li>
            <li><strong>Poetic Irony & Immortality of Art:</strong> In the final stanza, the poet notes that even in death, Aunt Jennifer\'s terrified hands will remain <em>"ringed with ordeals she was mastered by."</em> Yet, the supreme triumph of her life lies in her artistic creation: the golden tigers on the panel will continue to prance, <em>"proud and unafraid"</em>, outliving both the oppressor and the oppressed.</li>
          </ul>
        </div>
      `,
      explanation: 'Crucial CBSE Exam Nuance: Note the deliberate wordplay on "ringed": (1) Wearing the physical wedding ring, and (2) Trapped/surrounded by oppressive patriarchal ordeals. Her art outlives her mortal bondage.',
      stepMarking: '[2 Marks] Contrast between Aunt Jennifer\'s frail fear and tigers\' chivalric certainty | [1.5 Marks] Symbolism of "fluttering fingers" and "Uncle\'s wedding band" | [1.5 Marks] Double meaning of "ringed with ordeals" & immortality of art'
    }
  ];

  // English Core Aliases
  Q['Notice Writing'] = Q['Writing Skills'];
  Q['Invitations and Replies'] = Q['Writing Skills'];
  Q['Formal Invitation'] = Q['Writing Skills'];
  Q['Job Application'] = Q['Writing Skills'];

  // =========================================================================
  // Universal Lookup Function & Export
  // =========================================================================


  // =========================================================================
  // ADDITIONAL 10-YEAR CBSE BOARD EXAM QUESTIONS (AUTHENTIC 2015-2024 PAPERS)
  // =========================================================================

  // --- 1. PHYSICS (042) EXPANSIONS ---
  Q['Electric Charges and Fields'] = Q['Electric Charges and Fields'] || [];
  Q['Electric Charges and Fields'].push(
    {
      id: 'phy-ch1-q2',
      marks: 3,
      type: 'Derivation & Energy',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2018',
      stem: 'An electric dipole of dipole moment p is placed in a uniform electric field E. (a) Derive an expression for the torque acting on it. (b) Find the work done in rotating the dipole from stable equilibrium (θ = 0°) to unstable equilibrium (θ = 180°).',
      modelAnswer: '<div class="space-y-2"><p><strong>(a) Torque:</strong> Forces on charges +q and -q are +qE and -qE (equal, opposite, forming a couple). Perpendicular arm distance = 2a sin θ. Torque τ = (qE)(2a sin θ) = (q · 2a)E sin θ = <strong>p × E</strong> (magnitude τ = pE sin θ).</p><p><strong>(b) Work Done:</strong> W = ∫[0° to 180°] τ dθ = ∫[0° to 180°] pE sin θ dθ = -pE [cos 180° - cos 0°] = -pE [-1 - 1] = <strong>+2pE</strong>.</p></div>',
      explanation: 'Remember: Stable equilibrium is at θ = 0° (U = -pE), unstable equilibrium is at θ = 180° (U = +pE). Difference ΔU = 2pE.',
      stepMarking: '[1.5 Marks] Couple forces and torque vector cross product | [1.5 Marks] Integration of torque yielding W = 2pE'
    },
    {
      id: 'phy-ch1-q3',
      marks: 3,
      type: 'Derivation',
      prob: '🔥 Repeated in CBSE 2023, 2021, 2017',
      stem: 'Using Gauss\'s law, derive an expression for the electric field due to a uniformly charged infinite plane thin sheet of surface charge density σ. Show that it is independent of distance.',
      modelAnswer: '<div class="space-y-2"><p>Construct a Gaussian pillbox cylinder of cross-sectional area A piercing the sheet perpendicularly. Flux through curved surface is zero (E ⊥ dA). Flux through both flat circular end faces is E·A + E·A = 2EA. Total charge enclosed q = σ·A. By Gauss\'s theorem: Φ = q/ε₀ ⟹ 2EA = (σ A)/ε₀ ⟹ <strong>E = σ / (2ε₀)</strong>. Since distance r is absent from the formula, E is independent of distance.</p></div>',
      explanation: 'For a charged conductor plate of finite thickness, E = σ/ε₀ because charge distributes on two parallel surfaces.',
      stepMarking: '[1 Mark] Gaussian pillbox cylinder symmetry | [1 Mark] Total flux 2EA = q/ε₀ | [1 Mark] Final boxed formula E = σ/(2ε₀)'
    }
  );

  Q['Electrostatic Potential and Capacitance'] = Q['Electrostatic Potential and Capacitance'] || [];
  Q['Electrostatic Potential and Capacitance'].push(
    {
      id: 'phy-ch2-q2',
      marks: 5,
      type: 'Derivation',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2020',
      stem: 'Derive an expression for the capacitance of a parallel plate capacitor with a dielectric slab of thickness t (t < d) and dielectric constant K inserted between its plates.',
      modelAnswer: '<div class="space-y-2"><p>Let plate area be A and separation d. In vacuum space of thickness (d - t), electric field is E₀ = σ/ε₀ = Q/(Aε₀). Inside dielectric slab of thickness t, electric field reduces to E = E₀/K.<br>Potential difference V = E₀ (d - t) + E · t = E₀ (d - t) + (E₀/K) t = E₀ [ (d - t) + t/K ] = [ Q / (Aε₀) ] [ d - t(1 - 1/K) ].<br>Capacitance C = Q / V = <strong>(ε₀ A) / [ d - t(1 - 1/K) ]</strong>.<br>Since [d - t(1 - 1/K)] < d, capacitance increases upon dielectric insertion.</p></div>',
      explanation: 'If slab fills entire space (t = d), the formula reduces to C = K(ε₀A/d) = K · C₀.',
      stepMarking: '[1.5 Marks] Electric field in air gap vs dielectric | [2 Marks] Potential integral V = E₀(d-t) + (E₀/K)t | [1.5 Marks] Final boxed capacitance formula'
    }
  );

  Q['Current Electricity'] = Q['Current Electricity'] || [];
  Q['Current Electricity'].push(
    {
      id: 'phy-ch3-q2',
      marks: 3,
      type: 'Derivation',
      prob: '🔥 Repeated in CBSE 2023, 2020, 2018',
      stem: 'State Kirchhoff\'s junction rule and loop rule. Using these rules, deduce the condition for balance in a Wheatstone bridge circuit.',
      modelAnswer: '<div class="space-y-2"><p><strong>1. Junction Rule:</strong> ∑ I = 0 at any node (conservation of electric charge).<br><strong>2. Loop Rule:</strong> ∑ ΔV = 0 around any closed mesh (conservation of energy).<br><strong>Wheatstone Balance:</strong> At balance, galvanometer current I_g = 0 ⟹ V_B = V_D.<br>Loop ABDA: -I₁P + I₂R = 0 ⟹ I₁P = I₂R ... (1)<br>Loop BCDB: -I₁Q + I₂S = 0 ⟹ I₁Q = I₂S ... (2)<br>Dividing (1) by (2): <strong>P / Q = R / S</strong>.</p></div>',
      explanation: 'Always state the conservation laws: Junction rule = Conservation of Charge; Loop rule = Conservation of Energy.',
      stepMarking: '[1 Mark] Kirchhoff rules and conservation principles | [1 Mark] Applying loop equations | [1 Mark] Balance ratio P/Q = R/S'
    }
  );

  Q['Moving Charges and Magnetism'] = Q['Moving Charges and Magnetism'] || [];
  Q['Moving Charges and Magnetism'].push(
    {
      id: 'phy-ch4-q2',
      marks: 5,
      type: 'Derivation & Circuit',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2019',
      stem: 'Explain the principle and working of a Moving Coil Galvanometer. Derive the expression for the current sensitivity and explain how it can be converted into: (i) an Ammeter, (ii) a Voltmeter.',
      modelAnswer: '<div class="space-y-2"><p><strong>Principle:</strong> Current-carrying coil in uniform radial magnetic field experiences torque τ = NIAB. Restoring spring torque τ = kθ. At equilibrium: NIAB = kθ ⟹ I = (k / NAB) θ ⟹ <strong>Current Sensitivity I_s = θ / I = NAB / k</strong>.<br><strong>Conversions:</strong><br>• <strong>(i) Ammeter:</strong> Connect small shunt resistance S in parallel: <code>S = (I_g · G) / (I - I_g)</code>.<br>• <strong>(ii) Voltmeter:</strong> Connect high resistance R in series: <code>R = (V / I_g) - G</code>.</p></div>',
      explanation: 'Soft iron cylindrical core makes the field radial (plane of coil always parallel to field lines, cos θ = 1).',
      stepMarking: '[1.5 Marks] Principle and torque balance | [1.5 Marks] Current sensitivity formula | [2 Marks] Ammeter shunt and voltmeter series formulae'
    }
  );

  Q['Magnetism and Matter'] = [
    {
      id: 'phy-ch5-q1',
      marks: 3,
      type: 'Comparative Analysis',
      prob: '🔥 Repeated in CBSE 2023, 2020, 2018',
      stem: 'Distinguish between diamagnetic, paramagnetic, and ferromagnetic substances with respect to: (i) Magnetic susceptibility χ, (ii) Relative permeability μ_r, (iii) Effect of temperature.',
      modelAnswer: '<div class="space-y-2"><p>• <strong>Diamagnetic:</strong> χ is small and negative (-1 ≤ χ < 0); μ_r is slightly less than 1 (0 ≤ μ_r < 1); susceptibility is completely independent of temperature (e.g. Copper, Bismuth).<br>• <strong>Paramagnetic:</strong> χ is small and positive (0 < χ < 10⁻³); μ_r is slightly greater than 1; obeys Curie\'s law: χ ∝ 1/T (e.g. Aluminum, Oxygen).<br>• <strong>Ferromagnetic:</strong> χ is very large and positive (χ >> 1000); μ_r >> 1000; above Curie temperature T_c, it transforms into paramagnetic obeying Curie-Weiss law: χ ∝ 1/(T - T_c) (e.g. Iron, Cobalt, Nickel).</p></div>',
      explanation: 'Diamagnetism is a universal property present in all atoms, though overshadowed in para- and ferromagnetic substances.',
      stepMarking: '[1 Mark] Susceptibility comparison | [1 Mark] Relative permeability values | [1 Mark] Temperature laws (Curie and Curie-Weiss)'
    }
  ];

  Q['Electromagnetic Induction'] = [
    {
      id: 'phy-ch6-q1',
      marks: 3,
      type: 'Derivation',
      prob: '🔥 Repeated in CBSE 2023, 2022, 2019',
      stem: 'Define mutual inductance. Derive an expression for the mutual inductance of two long coaxial solenoids S1 and S2 of length l, radii r₁ and r₂ (r₁ < r₂), and turns n₁ and n₂ per unit length.',
      modelAnswer: '<div class="space-y-2"><p><strong>Definition:</strong> Mutual inductance is magnetic flux linked with secondary per unit current in primary: M = Φ₂ / I₁.<br>Let current I₁ pass through inner solenoid S1. B₁ = μ₀ n₁ I₁.<br>Magnetic flux linked with outer solenoid S2 over length l (effective cross-sectional area is the inner coil\'s area πr₁²):<br>Φ₂ = (n₂ · l) × (B₁ · π r₁²) = (n₂ l) (μ₀ n₁ I₁ π r₁²) = μ₀ n₁ n₂ π r₁² l · I₁.<br>Since Φ₂ = M I₁: <strong>M = μ₀ n₁ n₂ π r₁² l</strong>.</p></div>',
      explanation: 'Effective area in mutual inductance is always the area of the smaller cross-section solenoid (πr₁²).',
      stepMarking: '[1 Mark] Mutual inductance definition | [1 Mark] Flux linkage setup with inner area | [1 Mark] Final boxed formula'
    }
  ];

  Q['Ray Optics and Optical Instruments'] = [
    {
      id: 'phy-ch8-q1',
      marks: 5,
      type: 'Derivation',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Derive the Lens Maker\'s Formula 1/f = (μ - 1)(1/R₁ - 1/R₂) for a thin double convex lens placed in air.',
      modelAnswer: '<div class="space-y-2"><p>Refraction at first surface (radius R₁): μ/v\' - 1/u = (μ - 1)/R₁ ... (1)<br>Refraction at second surface (radius R₂, virtual object in medium μ): 1/v - μ/v\' = (1 - μ)/R₂ = - (μ - 1)/R₂ ... (2)<br>Adding (1) and (2): 1/v - 1/u = (μ - 1) [ 1/R₁ - 1/R₂ ] ... (3)<br>When object is at infinity (u = ∞), image forms at principal focus (v = f). Substituting into (3):<br><strong>1/f = (μ - 1) [ 1/R₁ - 1/R₂ ]</strong>.</p></div>',
      explanation: 'For biconvex lens, R₁ is positive and R₂ is negative, making (1/R₁ - 1/R₂) positive and focal length f positive.',
      stepMarking: '[1.5 Marks] Surface 1 refraction equation | [1.5 Marks] Surface 2 refraction equation | [2 Marks] Addition and boxed formula'
    },
    {
      id: 'phy-ch8-q2',
      marks: 5,
      type: 'Ray Diagram & Derivation',
      prob: '🔥 Repeated in CBSE 2023, 2022, 2019',
      stem: 'Draw a labeled ray diagram of an Astronomical Telescope in normal adjustment (image at infinity). Deduce the expression for its magnifying power and tube length.',
      modelAnswer: '<div class="space-y-2"><p><strong>Ray Diagram:</strong> Parallel rays from distant star fall on objective (f_o, large aperture) forming real, inverted image A\'B\' at focus f_o. Eye-piece (f_e, small aperture) is positioned so that A\'B\' lies exactly at its focal point f_e, casting parallel rays into the eye.<br><strong>Magnifying Power:</strong> m = β / α ≈ tan β / tan α. From diagram: tan α = A\'B\' / f_o and tan β = - A\'B\' / f_e ⟹ <strong>m = - f_o / f_e</strong>.<br><strong>Tube Length:</strong> <strong>L = f_o + f_e</strong>.</p></div>',
      explanation: 'Negative sign indicates inverted final image. In normal adjustment, eye is fully relaxed with zero accommodation strain.',
      stepMarking: '[2 Marks] Accurate labeled ray diagram with arrows | [2 Marks] Magnifying power derivation | [1 Mark] Tube length formula'
    }
  ];

  Q['Wave Optics'] = [
    {
      id: 'phy-ch9-q1',
      marks: 5,
      type: 'Derivation',
      prob: '🔥 Repeated in CBSE 2023, 2022, 2020',
      stem: 'Define a wavefront. Using Huygens\' principle, verify Snell\'s Law of Refraction for a plane wave passing from a rarer into a denser medium.',
      modelAnswer: '<div class="space-y-2"><p><strong>Wavefront:</strong> The continuous locus of all points vibrating in the same phase.<br><strong>Snell\'s Law:</strong> Let incident wavefront AB make angle i with interface, and v₁, v₂ be wave velocities (v₁ > v₂). In time τ, point B travels distance BC = v₁ τ to meet interface at C. Meanwhile, secondary wavelet from A grows into hemisphere of radius AD = v₂ τ in denser medium. Refracted wavefront is tangent CD.<br>From triangle ABC: sin i = BC / AC = (v₁ τ) / AC.<br>From triangle ADC: sin r = AD / AC = (v₂ τ) / AC.<br>Dividing: sin i / sin r = v₁ / v₂ = <strong>μ</strong> (Snell\'s Law of Refraction).</p></div>',
      explanation: 'Since v₁ > v₂, angle r < i; light wave bends towards the normal upon entering denser medium.',
      stepMarking: '[1 Mark] Wavefront definition | [2 Marks] Huygens geometric construction | [2 Marks] Ratio sin i / sin r = v₁/v₂ = μ'
    },
    {
      id: 'phy-ch9-q2',
      marks: 5,
      type: 'Derivation',
      prob: '🔥 Repeated in CBSE 2024, 2020, 2018',
      stem: 'In Young\'s double slit experiment, derive the expression for fringe width β = λD/d, and show that bright and dark fringes have equal widths.',
      modelAnswer: '<div class="space-y-2"><p>Path difference between waves from slits S1 and S2 at point P: Δx = S2P - S1P = (x · d) / D.<br>• <strong>Bright Fringe (Constructive):</strong> Δx = nλ ⟹ x_n = (n λ D) / d. Fringe width β_bright = x_n - x_{n-1} = <strong>(λ D) / d</strong>.<br>• <strong>Dark Fringe (Destructive):</strong> Δx = (2n - 1) λ / 2 ⟹ x\'_n = (2n - 1)(λ D) / (2d). Fringe width β_dark = x\'_n - x\'_{n-1} = <strong>(λ D) / d</strong>.<br>Thus, all fringes are of identical width <strong>β = λD / d</strong>.</p></div>',
      explanation: 'If entire apparatus is immersed in medium of refractive index μ, fringe width narrows to β\' = β / μ.',
      stepMarking: '[1.5 Marks] Path difference Δx = xd/D | [1.5 Marks] Bright and dark positions | [2 Marks] Proof of equal fringe widths'
    }
  ];

  Q['Dual Nature of Radiation and Matter'] = [
    {
      id: 'phy-ch10-q1',
      marks: 3,
      type: 'Theory & Equation',
      prob: '🔥 Repeated in CBSE 2023, 2022, 2020',
      stem: 'State Einstein\'s photoelectric equation. Explain how this equation accounts for: (i) existence of threshold frequency, (ii) instantaneous emission of photoelectrons.',
      modelAnswer: '<div class="space-y-2"><p><strong>Equation:</strong> <code>hν = Φ₀ + K_max = hν₀ + (1/2) m v_max²</code> ⟹ <strong>K_max = h(ν - ν₀)</strong>.<br>• <strong>(i) Threshold Frequency:</strong> Since kinetic energy cannot be negative, emission only occurs when hν ≥ Φ₀ ⟹ ν ≥ ν₀. Photons with ν < ν₀ cannot eject electrons regardless of intensity.<br>• <strong>(ii) Instantaneous Emission:</strong> Collision between photon and electron is an elastic 1-to-1 event transferring entire photon energy in ~10⁻⁹ seconds without time lag.</p></div>',
      explanation: 'Classical wave theory failed because it predicted hours of exposure to build energy, whereas photon theory explains instantaneous emission.',
      stepMarking: '[1 Mark] Einstein photoelectric formula | [1 Mark] Threshold frequency justification | [1 Mark] Instantaneous 1-to-1 photon collision'
    }
  ];

  Q['Atoms and Nuclei'] = [
    {
      id: 'phy-ch11-q1',
      marks: 5,
      type: 'Derivation',
      prob: '🔥 Repeated in CBSE 2023, 2020, 2018',
      stem: 'Using Bohr\'s postulates, derive expressions for: (a) Radius of nth orbit r_n, (b) Total energy of electron in nth orbit E_n of hydrogen atom.',
      modelAnswer: '<div class="space-y-2"><p><strong>1. Radius:</strong> Centripetal force balance: m v² / r = e² / (4πε₀ r²). Bohr quantization: m v r = (n h) / (2π) ⟹ v = (n h) / (2π m r).<br>Substituting v: <strong>r_n = (ε₀ h² n²) / (π m e²) ∝ n²</strong>.<br><strong>2. Total Energy:</strong> K = (1/2)mv² = e² / (8πε₀ r). U = - e² / (4πε₀ r). Total E = K + U = - e² / (8πε₀ r).<br>Substituting r_n: <strong>E_n = - (m e⁴) / (8 ε₀² h² n²) = - 13.6 / n² eV</strong>.</p></div>',
      explanation: 'Negative sign signifies bound state. Energy approaches 0 as n → ∞ (ionization threshold).',
      stepMarking: '[1 Mark] Postulates | [2 Marks] Radius derivation r ∝ n² | [2 Marks] Total energy derivation E = -13.6/n² eV'
    }
  ];

  Q['Semiconductor Electronics'] = [
    {
      id: 'phy-ch12-q1',
      marks: 5,
      type: 'Circuit & Waveforms',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Draw a labeled circuit diagram of a full-wave rectifier using two diodes. Explain its working and sketch input and output waveforms across the load resistor.',
      modelAnswer: '<div class="space-y-2"><p><strong>Circuit:</strong> Consists of center-tapped transformer, two p-n junction diodes D₁ and D₂, and load resistor R_L.<br>• <strong>Positive Half Cycle:</strong> Diode D₁ is forward-biased and conducts; D₂ is reverse-biased (no conduction). Current flows through R_L from X to Y.<br>• <strong>Negative Half Cycle:</strong> Polarity reverses. Diode D₁ is reverse-biased; D₂ is forward-biased and conducts. Current still flows through R_L from X to Y.<br>• Result: Unidirectional pulsating DC output. Output frequency is <strong>2 × input frequency (100 Hz for 50 Hz AC)</strong>.</p></div>',
      explanation: 'Full-wave rectifier output ripple frequency is double the input AC line frequency.',
      stepMarking: '[1.5 Marks] Center-tapped circuit schematic | [2 Marks] Operation in both half-cycles | [1.5 Marks] Input & output waveform diagrams'
    }
  ];

  // --- 2. CHEMISTRY (043) EXPANSIONS ---
  Q['Solutions'] = Q['Solutions'] || [];
  Q['Solutions'].push(
    {
      id: 'chem-ch1-q2',
      marks: 3,
      type: 'Numericals & Theory',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: '(a) Define van \'t Hoff factor i. (b) 1.00 g of non-electrolyte solute dissolved in 50 g of benzene lowered the freezing point by 0.40 K. Find the molar mass of the solute (K_f for benzene = 5.12 K kg mol⁻¹).',
      modelAnswer: '<div class="space-y-2"><p><strong>(a) van \'t Hoff factor:</strong> Ratio of experimental colligative property to normal colligative property: <code>i = (Observed ΔT) / (Calculated ΔT) = (Normal Molar Mass) / (Abnormal Molar Mass)</code>.<br><strong>(b) Numerical:</strong><br>Formula: ΔT_f = (1000 · K_f · w₂) / (M₂ · w₁).<br>Given: w₂ = 1.00 g, w₁ = 50 g, ΔT_f = 0.40 K, K_f = 5.12 K kg mol⁻¹.<br>M₂ = (1000 × 5.12 × 1.00) / (0.40 × 50) = 5120 / 20 = <strong>256 g mol⁻¹</strong>.</p></div>',
      explanation: 'For non-electrolyte solutes (glucose, urea, sucrose), i = 1.',
      stepMarking: '[1 Mark] van \'t Hoff factor definition | [1 Mark] Substitution in freezing point depression formula | [1 Mark] Final calculated value 256 g/mol'
    },
    {
      id: 'chem-ch1-q3',
      marks: 3,
      type: 'Concept & Deviations',
      prob: '🔥 Repeated in CBSE 2023, 2022, 2019',
      stem: 'What are non-ideal solutions? Distinguish between solutions showing positive deviation and negative deviation from Raoult\'s law with suitable examples.',
      modelAnswer: '<div class="space-y-2"><p>Solutions that do not obey Raoult\'s law over entire concentration range are non-ideal solutions.<br>• <strong>Positive Deviation:</strong> A-B interactions are weaker than A-A and B-B interactions. ΔH_mix > 0 (endothermic), ΔV_mix > 0. Forms minimum boiling azeotrope. Example: Ethanol + Acetone.<br>• <strong>Negative Deviation:</strong> A-B interactions are stronger than A-A and B-B interactions (e.g. H-bonding formed). ΔH_mix < 0 (exothermic), ΔV_mix < 0. Forms maximum boiling azeotrope. Example: Chloroform + Acetone.</p></div>',
      explanation: 'Acetone + Chloroform exhibits negative deviation because hydrogen bonding forms between the hydrogen of chloroform and carbonyl oxygen of acetone.',
      stepMarking: '[1 Mark] Non-ideal definition | [1 Mark] Positive deviation criteria & example | [1 Mark] Negative deviation criteria & example'
    }
  );

  Q['Electrochemistry'] = Q['Electrochemistry'] || [];
  Q['Electrochemistry'].push(
    {
      id: 'chem-ch2-q2',
      marks: 5,
      type: 'Numericals & Derivations',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Calculate the EMF and ΔG° for the cell at 298 K: Mg(s) | Mg²⁺(0.001 M) || Cu²⁺(0.0001 M) | Cu(s). Given: E°(Mg²⁺/Mg) = -2.37 V, E°(Cu²⁺/Cu) = +0.34 V, F = 96500 C mol⁻¹.',
      modelAnswer: '<div class="space-y-2"><p><strong>1. Standard EMF:</strong> E°_cell = E°_cathode - E°_anode = +0.34 - (-2.37) = <strong>+2.71 V</strong>.<br><strong>2. Cell Reaction:</strong> Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s)  [n = 2 electrons].<br><strong>3. Nernst Equation:</strong> E_cell = E°_cell - (0.0591 / n) log [Mg²⁺] / [Cu²⁺]<br>E_cell = 2.71 - (0.0591 / 2) log (10⁻³ / 10⁻⁴) = 2.71 - (0.02955) log(10) = 2.71 - 0.02955 = <strong>2.68 V</strong>.<br><strong>4. Standard Gibbs Free Energy:</strong> ΔG° = -n F E°_cell = -2 × 96500 × 2.71 = -523030 J mol⁻¹ = <strong>-523.03 kJ mol⁻¹</strong>.</p></div>',
      explanation: 'Nernst reaction quotient Q = [products] / [reactants] includes only dissolved ionic species; pure solids Mg(s) and Cu(s) have unit activity.',
      stepMarking: '[1 Mark] E°_cell calculation | [2 Marks] Nernst equation substitution and EMF = 2.68 V | [2 Marks] ΔG° calculation in kJ/mol'
    },
    {
      id: 'chem-ch2-q3',
      marks: 3,
      type: 'Law & Application',
      prob: '🔥 Repeated in CBSE 2023, 2021, 2017',
      stem: 'State Kohlrausch\'s Law of independent migration of ions. How does it help in calculating the limiting molar conductivity of weak electrolytes like CH₃COOH?',
      modelAnswer: '<div class="space-y-2"><p><strong>Law:</strong> Limiting molar conductivity of an electrolyte can be represented as the sum of individual contributions of the anion and cation: <code>Λ°_m = ν₊ λ°₊ + ν₋ λ°₋</code>.<br><strong>Application to Acetic Acid:</strong> Limiting molar conductivity of weak electrolyte CH₃COOH cannot be obtained by extrapolation. Using Kohlrausch\'s law with strong electrolytes CH₃COONa, HCl, and NaCl:<br><code>Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl)</code>.<br>= [λ°(CH₃COO⁻) + λ°(Na⁺)] + [λ°(H⁺) + λ°(Cl⁻)] - [λ°(Na⁺) + λ°(Cl⁻)] = λ°(CH₃COO⁻) + λ°(H⁺).</p></div>',
      explanation: 'Weak electrolytes never reach complete dissociation at finite dilution, making direct graphical extrapolation impossible.',
      stepMarking: '[1.5 Marks] Kohlrausch law statement | [1.5 Marks] 3-salt algebraic equation deriving Λ°_m(CH₃COOH)'
    }
  );

  Q['Chemical Kinetics'] = Q['Chemical Kinetics'] || [];
  Q['Chemical Kinetics'].push(
    {
      id: 'chem-ch3-q2',
      marks: 3,
      type: 'Proof & Kinetics',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'For a first-order reaction, show that time required for 99.9% completion of the reaction is approximately 10 times the half-life (t_1/2) of the reaction.',
      modelAnswer: '<div class="space-y-2"><p>First-order rate equation: t = (2.303 / k) log [R]₀ / [R].<br>1. <strong>Half-life (50% completion):</strong> [R] = [R]₀ / 2 ⟹ t_1/2 = (2.303 / k) log(2) = <strong>0.693 / k</strong> ... (1)<br>2. <strong>For 99.9% completion:</strong> [R] = [R]₀ - 0.999 [R]₀ = 0.001 [R]₀ = 10⁻³ [R]₀.<br>t_99.9% = (2.303 / k) log [R]₀ / (10⁻³ [R]₀) = (2.303 / k) log(10³) = (2.303 × 3) / k = <strong>6.909 / k</strong> ... (2)<br>Dividing (2) by (1): t_99.9% / t_1/2 = (6.909 / k) / (0.693 / k) = <strong>9.97 ≈ 10</strong>.<br>Hence, <strong>t_99.9% = 10 × t_1/2</strong>.</p></div>',
      explanation: 'CBSE numerical standard: log(10³) = 3 log 10 = 3. Half-life of first-order reaction is completely independent of initial concentration.',
      stepMarking: '[1 Mark] Half-life expression | [1 Mark] 99.9% rate expression calculation | [1 Mark] Ratio proving factor of 10'
    }
  );

  Q['d- and f-Block Elements'] = [
    {
      id: 'chem-ch4-q1',
      marks: 3,
      type: 'Concept & Consequences',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'What is Lanthanoid contraction? Mention its cause and any two important consequences on the properties of elements along the series.',
      modelAnswer: '<div class="space-y-2"><p><strong>Definition:</strong> The steady, gradual decrease in atomic and ionic radii of lanthanoid elements with increase in atomic number from Lanthanum (57) to Lutetium (71).<br><strong>Cause:</strong> Imperfect shielding of one 4f electron by another in the same subshell. As nuclear charge increases by +1 at each step, poor screening by 4f electrons pulls outer electrons closer.<br><strong>Consequences:</strong><br>1. <strong>Similarity of 4d and 5d transition series radii:</strong> Elements like Zr (160 pm) and Hf (159 pm) have nearly identical atomic radii, making separation chemically very difficult.<br>2. <strong>Decrease in basic strength of hydroxides:</strong> As ionic radius decreases from La³⁺ to Lu³⁺, covalent character of M-OH bond increases, so basic strength decreases: La(OH)₃ is most basic, Lu(OH)₃ is least basic.</p></div>',
      explanation: 'Remember the pair: Zirconium (Zr) and Hafnium (Hf) have nearly identical radii due to intervening 14 lanthanoid elements.',
      stepMarking: '[1 Mark] Definition of lanthanoid contraction | [1 Mark] Ineffective 4f shielding cause | [1 Mark] Two consequences (Zr/Hf radii and basicity)'
    }
  ];

  Q['Coordination Compounds'] = [
    {
      id: 'chem-ch5-q1',
      marks: 5,
      type: 'VBT & Magnetism',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Using Valence Bond Theory (VBT), explain the hybridization, geometry, and magnetic behavior of: (a) [Co(NH₃)₆]³⁺, (b) [CoF₆]³⁻. (Atomic number of Co = 27).',
      modelAnswer: '<div class="space-y-2"><p>Co (Z = 27): [Ar] 3d⁷ 4s². Co³⁺: [Ar] 3d⁶ 4s⁰ 4p⁰ 4d⁰.<br><strong>(a) [Co(NH₃)₆]³⁺:</strong> NH₃ is a strong field ligand, forcing pairing of all six 3d electrons into three 3d orbitals (t_2g⁶ eg⁰). Two vacant 3d orbitals are available.<br>• Hybridization: <strong>d²sp³ (inner orbital octahedral complex)</strong>.<br>• Unpaired electrons: 0 ⟹ <strong>Diamagnetic</strong>.<br><br><strong>(b) [CoF₆]³⁻:</strong> F⁻ is a weak field ligand; no electron pairing occurs in 3d subshell (leaves 4 unpaired electrons). Outer 4d orbitals are used.<br>• Hybridization: <strong>sp³d² (outer orbital octahedral complex)</strong>.<br>• Unpaired electrons: 4 ⟹ <strong>Paramagnetic (spin-only magnetic moment μ = √(4(4+2)) = √24 ≈ 4.90 BM)</strong>.</p></div>',
      explanation: 'Strong field ligands (CN⁻, CO, NH₃) cause inner orbital d²sp³ pairing; weak field ligands (F⁻, Cl⁻, H₂O) form outer orbital sp³d² complexes.',
      stepMarking: '[2.5 Marks] [Co(NH₃)₆]³⁺ d²sp³ diamagnetic explanation | [2.5 Marks] [CoF₆]³⁻ sp³d² paramagnetic calculation'
    }
  ];

  Q['Haloalkanes and Haloarenes'] = [
    {
      id: 'chem-ch6-q1',
      marks: 5,
      type: 'Mechanisms',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Compare S_N1 and S_N2 mechanisms of nucleophilic substitution reactions with respect to: (i) Number of steps, (ii) Rate law and order, (iii) Stereochemical outcome, (iv) Reactivity order of alkyl halides.',
      modelAnswer: '<div class="space-y-2"><table class="w-full text-xs border border-slate-300"><thead><tr class="bg-slate-100"><th class="p-1 border">Feature</th><th class="p-1 border">S_N1 Mechanism</th><th class="p-1 border">S_N2 Mechanism</th></tr></thead><tbody><tr><td class="p-1 border font-bold">Steps</td><td class="p-1 border">Two-step (carbocation intermediate)</td><td class="p-1 border">Single concerted step (transition state)</td></tr><tr><td class="p-1 border font-bold">Kinetics</td><td class="p-1 border">Rate = k[R-X] (First order)</td><td class="p-1 border">Rate = k[R-X][Nu⁻] (Second order)</td></tr><tr><td class="p-1 border font-bold">Stereochemistry</td><td class="p-1 border">Racemization (with slight inversion)</td><td class="p-1 border">Complete inversion of configuration (Walden inversion)</td></tr><tr><td class="p-1 border font-bold">Reactivity Order</td><td class="p-1 border">3° > 2° > 1° > CH₃X (stability of carbocation)</td><td class="p-1 border">CH₃X > 1° > 2° > 3° (steric hindrance)</td></tr></tbody></table></div>',
      explanation: 'Optically active halides undergoing S_N2 give 100% inverted product; S_N1 gives racemic mixture because planar carbocation can be attacked from either face.',
      stepMarking: '[1.25 Marks] Steps & intermediate | [1.25 Marks] Rate law & order | [1.25 Marks] Stereochemical Walden inversion | [1.25 Marks] Reactivity order'
    }
  ];

  Q['Alcohols, Phenols and Ethers'] = [
    {
      id: 'chem-ch7-q1',
      marks: 5,
      type: 'Name Reactions',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Write chemical equations and conditions for: (a) Reimer-Tiemann reaction, (b) Kolbe\'s reaction, (c) Williamson ether synthesis with its limitation.',
      modelAnswer: '<div class="space-y-2"><p><strong>(a) Reimer-Tiemann Reaction:</strong> Phenol treated with chloroform (CHCl₃) in presence of aqueous NaOH at 340 K, followed by acid hydrolysis, yields salicylaldehyde (o-hydroxybenzaldehyde):<br><code>C₆H₅OH + CHCl₃ + 3NaOH → C₆H₄(OH)CHO + 3NaCl + 2H₂O</code>.<br><br><strong>(b) Kolbe\'s Reaction:</strong> Phenol treated with NaOH forms sodium phenoxide, which undergoes electrophilic substitution with CO₂ at 400 K and 4-7 atm, followed by acidification to produce salicylic acid (o-hydroxybenzoic acid):<br><code>C₆H₅ONa + CO₂ → C₆H₄(OH)COONa ⟹(H⁺) C₆H₄(OH)COOH</code>.<br><br><strong>(c) Williamson Ether Synthesis:</strong> Alkyl halide reacted with sodium alkoxide: <code>R-X + R\'-ONa → R-O-R\' + NaX</code>.<br><strong>Limitation:</strong> Good yields only with 1° alkyl halides. If 3° alkyl halide is used, elimination dominates to give alkene instead of ether.</p></div>',
      explanation: 'Reimer-Tiemann intermediate is dichlorocarbene (:CCl₂), a neutral electrophile.',
      stepMarking: '[1.75 Marks] Reimer-Tiemann equation & product | [1.75 Marks] Kolbe\'s reaction equation | [1.5 Marks] Williamson synthesis & 3° halide limitation'
    }
  ];

  Q['Aldehydes, Ketones and Carboxylic Acids'] = [
    {
      id: 'chem-ch8-q1',
      marks: 5,
      type: 'Mechanisms & Distinctions',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: '(a) Describe Aldol condensation and Cannizzaro reaction with equations. (b) Give a simple chemical test to distinguish between: (i) Acetaldehyde and Benzaldehyde, (ii) Pentan-2-one and Pentan-3-one.',
      modelAnswer: '<div class="space-y-2"><p><strong>(a) Reactions:</strong><br>• <strong>Aldol Condensation:</strong> Aldehydes having α-hydrogen (e.g. CH₃CHO) treated with dilute NaOH form β-hydroxyaldehydes (aldol), which on heating dehydrate to α,β-unsaturated aldehydes: <code>2 CH₃CHO ⟹(dil NaOH) CH₃-CH(OH)-CH₂-CHO ⟹(Δ) CH₃-CH=CH-CHO + H₂O</code>.<br>• <strong>Cannizzaro Reaction:</strong> Aldehydes with no α-hydrogen (e.g. HCHO, C₆H₅CHO) undergo self oxidation-reduction with concentrated KOH: <code>2 HCHO + conc. KOH → CH₃OH + HCOOK</code>.<br><br><strong>(b) Distinction Tests:</strong><br>• <strong>(i) Acetaldehyde vs Benzaldehyde:</strong> Iodoform test (I₂ + NaOH). Acetaldehyde gives yellow precipitate of CHI₃; Benzaldehyde gives no yellow precipitate.<br>• <strong>(ii) Pentan-2-one vs Pentan-3-one:</strong> Iodoform test. Pentan-2-one (methyl ketone) forms yellow precipitate of iodoform (CHI₃); Pentan-3-one does not.</p></div>',
      explanation: 'Aldol requires at least one α-hydrogen; Cannizzaro requires complete absence of α-hydrogens.',
      stepMarking: '[1.5 Marks] Aldol equation and product | [1.5 Marks] Cannizzaro equation | [2 Marks] Two distinction tests with reagents and observations'
    }
  ];

  Q['Amines'] = [
    {
      id: 'chem-ch9-q1',
      marks: 3,
      type: 'Name Reactions',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Write chemical reactions for: (a) Hoffmann bromamide degradation, (b) Gabriel phthalimide synthesis. Why cannot aromatic primary amines be prepared by Gabriel phthalimide synthesis?',
      modelAnswer: '<div class="space-y-2"><p><strong>(a) Hoffmann Bromamide Degradation:</strong> Primary amide treated with Br₂ and ethanolic NaOH yields primary amine with one carbon less:<br><code>R-CONH₂ + Br₂ + 4 NaOH → R-NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O</code>.<br><br><strong>(b) Gabriel Phthalimide Synthesis:</strong> Phthalimide treated with ethanolic KOH forms potassium phthalimide, which on heating with alkyl halide followed by alkaline hydrolysis yields pure 1° aliphatic amine.<br><strong>Reason:</strong> Aryl halides do not undergo nucleophilic substitution with potassium phthalimide due to partial double bond character of C-X bond and resonance stabilization.</p></div>',
      explanation: 'Hoffmann degradation is an invaluable stepping-down reaction for descending homologous series by removing 1 carbon.',
      stepMarking: '[1 Mark] Hoffmann bromamide equation | [1 Mark] Gabriel phthalimide reactions | [1 Mark] Aryl halide unreactivity reason'
    }
  ];

  Q['Biomolecules'] = [
    {
      id: 'chem-ch10-q1',
      marks: 5,
      type: 'Structural Reactions',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Write chemical reactions of D-glucose with: (i) HI / Δ, (ii) Bromine water, (iii) Conc. HNO₃, (iv) Hydroxylamine (NH₂OH), (v) Acetic anhydride. What structural feature of glucose is proved by each reaction?',
      modelAnswer: '<div class="space-y-2"><p>1. <strong>HI / Δ:</strong> Yields n-hexane. <em>Proves:</em> All 6 carbon atoms are linked in an unbranched straight chain.<br>2. <strong>Bromine water (mild oxidant):</strong> Oxidizes glucose to gluconic acid. <em>Proves:</em> The carbonyl group is an aldehyde group (-CHO).<br>3. <strong>Conc. HNO₃ (strong oxidant):</strong> Oxidizes both terminal groups to saccharic acid (dicarboxylic acid). <em>Proves:</em> Presence of a primary alcohol group (-CH₂OH).<br>4. <strong>NH₂OH:</strong> Forms glucose oxime. <em>Proves:</em> Presence of a carbonyl group (>C=O).<br>5. <strong>Acetic anhydride:</strong> Forms glucose pentaacetate. <em>Proves:</em> Presence of 5 hydroxyl groups (-OH) attached to 5 distinct carbon atoms.</p></div>',
      explanation: 'Glucose pentaacetate does not react with hydroxylamine, proving the open chain exists in equilibrium with cyclic hemiacetal form.',
      stepMarking: '[1 Mark each] 5 distinct reactions with accurate reagents, products, and structural deduction'
    }
  ];

  // --- 3. MATHEMATICS (041) EXPANSIONS ---
  Q['Relations and Functions'] = Q['Relations and Functions'] || [];
  Q['Relations and Functions'].push(
    {
      id: 'math-ch1-q2',
      marks: 4,
      type: 'Proof',
      prob: '🔥 Repeated in CBSE 2023, 2020, 2019',
      stem: 'Show that the relation R on the set Z of integers defined by R = {(a, b) : 2 divides (a - b)} is an equivalence relation.',
      modelAnswer: '<div class="space-y-2"><p>1. <strong>Reflexive:</strong> For all a ∈ Z, a - a = 0 = 2 × 0. Thus, 2 divides (a - a) ⟹ (a, a) ∈ R for all a ∈ Z.<br>2. <strong>Symmetric:</strong> Let (a, b) ∈ R ⟹ (a - b) = 2k for some k ∈ Z. Then (b - a) = -(a - b) = 2(-k). Since -k ∈ Z, 2 divides (b - a) ⟹ (b, a) ∈ R.<br>3. <strong>Transitive:</strong> Let (a, b) ∈ R and (b, c) ∈ R ⟹ a - b = 2k₁ and b - c = 2k₂. Adding both: (a - c) = (a - b) + (b - c) = 2(k₁ + k₂). Since k₁ + k₂ ∈ Z, 2 divides (a - c) ⟹ (a, c) ∈ R.<br>Since R is reflexive, symmetric, and transitive, it is an <strong>equivalence relation</strong>.</p></div>',
      explanation: 'Equivalence class [0] contains all even integers {..., -4, -2, 0, 2, 4, ...} and [1] contains all odd integers.',
      stepMarking: '[1 Mark] Reflexive proof | [1.5 Marks] Symmetric proof | [1.5 Marks] Transitive proof'
    }
  );

  Q['Matrices and Determinants'] = Q['Matrices and Determinants'] || [];
  Q['Matrices and Determinants'].push(
    {
      id: 'math-ch3-q2',
      marks: 5,
      type: 'Matrix Inversion Method',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Solve the system of linear equations using matrix method: 2x + 3y + 3z = 5,  x - 2y + z = -4,  3x - y - 2z = 3.',
      modelAnswer: '<div class="space-y-2"><p>System AX = B, where A = [[2,3,3],[1,-2,1],[3,-1,-2]], X = [[x],[y],[z]], B = [[5],[-4],[3]].<br>|A| = 2(4 - (-1)) - 3(-2 - 3) + 3(-1 - (-6)) = 2(5) - 3(-5) + 3(5) = 10 + 15 + 15 = <strong>40 ≠ 0</strong> (unique solution exists).<br>Cofactors of A:<br>C₁₁ = 5, C₁₂ = 5, C₁₃ = 5<br>C₂₁ = 3, C₂₂ = -13, C₂₃ = 11<br>C₃₁ = 9, C₃₂ = 1, C₃₃ = -7.<br>adj(A) = [[5, 3, 9], [5, -13, 1], [5, 11, -7]].<br>X = A⁻¹ B = (1 / 40) [[5, 3, 9], [5, -13, 1], [5, 11, -7]] [[5], [-4], [3]]<br>= (1 / 40) [[25 - 12 + 27], [25 + 52 + 3], [25 - 44 - 21]] = (1 / 40) [[40], [80], [-40]] = [[1], [2], [-1]].<br>Hence: <strong>x = 1, y = 2, z = -1</strong>.</p></div>',
      explanation: 'Verify by substituting x = 1, y = 2, z = -1 into first equation: 2(1) + 3(2) + 3(-1) = 2 + 6 - 3 = 5 (Verified!).',
      stepMarking: '[1 Mark] |A| = 40 | [2 Marks] Cofactors and adj(A) | [2 Marks] Matrix multiplication giving x=1, y=2, z=-1'
    }
  );

  Q['Applications of Derivatives'] = Q['Applications of Derivatives'] || [];
  Q['Applications of Derivatives'].push(
    {
      id: 'math-ch5-q2',
      marks: 5,
      type: 'Maxima & Minima',
      prob: '🔥 Repeated in CBSE 2023, 2020, 2018',
      stem: 'Show that the height of the right circular cylinder of maximum volume that can be inscribed in a given cone of height h and semi-vertical angle α is h/3.',
      modelAnswer: '<div class="space-y-2"><p>Let cone have height h and radius R = h tan α. Inscribe cylinder of radius r and height x.<br>By similar triangles: (h - x) / h = r / R ⟹ r = (R/h)(h - x) = tan α (h - x).<br>Volume of cylinder V = π r² x = π (tan² α) (h - x)² x = π tan² α (h²x - 2hx² + x³).<br>dV / dx = π tan² α (h² - 4hx + 3x²).<br>For maximum volume, dV/dx = 0 ⟹ 3x² - 4hx + h² = 0 ⟹ (3x - h)(x - h) = 0.<br>Since x < h, we have <strong>x = h / 3</strong>.<br>Second derivative: d²V / dx² = π tan² α (-4h + 6x). At x = h/3: d²V/dx² = π tan² α (-4h + 2h) = -2h π tan² α < 0.<br>Hence, volume is maximum when <strong>height of cylinder = h / 3</strong>.</p></div>',
      explanation: 'Always compute the second derivative d²V/dx² and prove it is strictly negative to establish local maximum.',
      stepMarking: '[1.5 Marks] Similar triangles radius r relation | [1.5 Marks] Volume function V(x) and dV/dx = 0 | [2 Marks] Solving x = h/3 with negative d²V/dx²'
    }
  );

  Q['Integrals'] = Q['Integrals'] || [];
  Q['Integrals'].push(
    {
      id: 'math-ch6-q2',
      marks: 5,
      type: 'Definite Integral Properties',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2019',
      stem: 'Evaluate: I = ∫[0 to π/2] (√sin x) / (√sin x + √cos x) dx using properties of definite integrals.',
      modelAnswer: '<div class="space-y-2"><p>Given: I = ∫[0 to π/2] (√sin x) / (√sin x + √cos x) dx ... (1)<br>Using property ∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx:<br>I = ∫[0 to π/2] √sin(π/2 - x) / [ √sin(π/2 - x) + √cos(π/2 - x) ] dx<br>Since sin(π/2 - x) = cos x and cos(π/2 - x) = sin x:<br>I = ∫[0 to π/2] (√cos x) / (√cos x + √sin x) dx ... (2)<br>Adding (1) and (2):<br>2I = ∫[0 to π/2] [ (√sin x + √cos x) / (√sin x + √cos x) ] dx = ∫[0 to π/2] 1 dx = [ x ][0 to π/2] = π/2.<br>2I = π/2  ⟹  <strong>I = π / 4</strong>.</p></div>',
      explanation: 'King\'s property ∫[0 to a] f(x)dx = ∫[0 to a] f(a-x)dx solves almost all symmetric trigonometric quotients on [0, π/2].',
      stepMarking: '[1.5 Marks] Applying King\'s property | [1.5 Marks] Adding equations (1) and (2) | [2 Marks] Evaluating integral to π/4'
    }
  );

  Q['Three Dimensional Geometry'] = [
    {
      id: 'math-ch9-q1',
      marks: 5,
      type: 'Skew Lines Distance',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Find the shortest distance between the lines whose vector equations are: r = (i + 2j + 3k) + λ(i - 3j + 2k) and r = (4i + 5j + 6k) + μ(2i + 3j + k).',
      modelAnswer: '<div class="space-y-2"><p>Line 1: a₁ = i + 2j + 3k,  b₁ = i - 3j + 2k.<br>Line 2: a₂ = 4i + 5j + 6k,  b₂ = 2i + 3j + k.<br>a₂ - a₁ = (4-1)i + (5-2)j + (6-3)k = 3i + 3j + 3k.<br>b₁ × b₂ = | [i, j, k], [1, -3, 2], [2, 3, 1] | = i(-3 - 6) - j(1 - 4) + k(3 - (-6)) = -9i + 3j + 9k.<br>| b₁ × b₂ | = √((-9)² + 3² + 9²) = √(81 + 9 + 81) = √171 = 3√19.<br>(a₂ - a₁) · (b₁ × b₂) = 3(-9) + 3(3) + 3(9) = -27 + 9 + 27 = 9.<br>Shortest Distance d = | (a₂ - a₁) · (b₁ × b₂) | / | b₁ × b₂ | = 9 / (3√19) = <strong>3 / √19 units</strong>.</p></div>',
      explanation: 'If two lines intersect, their shortest distance d = 0, which means (a₂ - a₁) · (b₁ × b₂) = 0.',
      stepMarking: '[1.5 Marks] (a₂ - a₁) and vector cross product b₁ × b₂ | [1.5 Marks] Modulus |b₁ × b₂| = 3√19 | [2 Marks] Dot product and final answer 3/√19'
    }
  ];

  Q['Linear Programming'] = [
    {
      id: 'math-ch10-q1',
      marks: 5,
      type: 'Corner Point Optimization',
      prob: '🔥 Repeated in CBSE 2023, 2020, 2019',
      stem: 'Solve the following Linear Programming Problem graphically: Maximize Z = 4x + y subject to constraints: x + y ≤ 50,  3x + y ≤ 90,  x ≥ 0,  y ≥ 0.',
      modelAnswer: '<div class="space-y-2"><p>1. <strong>Boundary lines:</strong><br>• L₁: x + y = 50 passes through (50, 0) and (0, 50). Origin (0,0) satisfies 0 ≤ 50.<br>• L₂: 3x + y = 90 passes through (30, 0) and (0, 90). Origin (0,0) satisfies 0 ≤ 90.<br>2. <strong>Intersection point B of L₁ and L₂:</strong> Subtracting gives 2x = 40 ⟹ x = 20, y = 30. Point B = (20, 30).<br>3. <strong>Corner Points of Feasible Region OABC:</strong><br>• O (0, 0): Z = 4(0) + 0 = 0<br>• A (30, 0): Z = 4(30) + 0 = <strong>120 (Maximum)</strong><br>• B (20, 30): Z = 4(20) + 30 = 80 + 30 = 110<br>• C (0, 50): Z = 4(0) + 50 = 50.<br>Maximum value of Z is <strong>120 at point (30, 0)</strong>.</p></div>',
      explanation: 'Always shade the feasible region in the first quadrant (x ≥ 0, y ≥ 0) and explicitly list all vertices in a table.',
      stepMarking: '[2 Marks] Plotting boundary lines and feasible region | [1 Mark] Intersection point (20, 30) | [2 Marks] Corner point evaluation table and maximum 120'
    }
  ];

  Q['Probability'] = [
    {
      id: 'math-ch11-q1',
      marks: 5,
      type: 'Bayes Theorem',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'An urn contains 4 red and 4 black balls, another urn contains 2 red and 6 black balls. One of the two urns is selected at random and a ball is drawn. If the ball is found to be red, find the probability that it was drawn from the first urn.',
      modelAnswer: '<div class="space-y-2"><p>Let events be:<br>E₁: Selecting first urn ⟹ P(E₁) = 1/2.<br>E₂: Selecting second urn ⟹ P(E₂) = 1/2.<br>A: Ball drawn is red.<br>P(A | E₁) = 4 / 8 = 1/2.<br>P(A | E₂) = 2 / 8 = 1/4.<br>By Bayes\' Theorem:<br>P(E₁ | A) = [ P(E₁) · P(A | E₁) ] / [ P(E₁) · P(A | E₁) + P(E₂) · P(A | E₂) ]<br>= [ (1/2) × (1/2) ] / [ (1/2)(1/2) + (1/2)(1/4) ]<br>= (1/4) / [ 1/4 + 1/8 ] = (1/4) / (3/8) = (1/4) × (8/3) = <strong>2 / 3</strong>.</p></div>',
      explanation: 'Total probability of red ball P(A) = 1/4 + 1/8 = 3/8. Conditional probability of Urn 1 given Red = (1/4)/(3/8) = 2/3.',
      stepMarking: '[1.5 Marks] Defining events and prior/conditional probabilities | [1.5 Marks] Bayes\' theorem statement | [2 Marks] Calculation yielding 2/3'
    }
  ];

  // --- 4. COMPUTER SCIENCE (083) EXPANSIONS ---
  Q['Python Functions'] = Q['Python Functions'] || [];
  Q['Python Functions'].push(
    {
      id: 'cs-ch1-q2',
      marks: 2,
      type: 'Code Output & Scope',
      prob: '🔥 Repeated in CBSE 2023, 2022, 2020',
      stem: 'What is LEGB rule in Python variable scope? Find the output of the following code:\na = 50\ndef func(b):\n    global a\n    a = a + b\n    b = 20\n    return a\nprint(func(10))\nprint(a)',
      modelAnswer: '<div class="space-y-2"><p><strong>LEGB Rule:</strong> Python resolves variable names in 4 hierarchical scopes: <strong>L</strong>ocal (inside function) → <strong>E</strong>nclosing (in outer enclosing function) → <strong>G</strong>lobal (module level) → <strong>B</strong>uilt-in (predefined functions like len, print).<br><strong>Output:</strong><br><code>60</code><br><code>60</code><br><em>Reason:</em> <code>global a</code> modifies the module-level variable <code>a</code> from 50 to 50 + 10 = 60. Variable <code>b</code> is reassigned locally to 20, but not returned.</p></div>',
      explanation: 'Without `global a`, attempting `a = a + b` inside a function throws an UnboundLocalError.',
      stepMarking: '[1 Mark] LEGB rule explanation | [1 Mark] Output 60 and 60'
    }
  );

  Q['Computer Networks'] = [
    {
      id: 'cs-ch5-q1',
      marks: 5,
      type: '80/20 Case Study',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Apex Knowledge Institute has 4 blocks: Admin (120 computers), Accounts (35 computers), Research (25 computers), and Training (70 computers). Distances: Admin to Accounts: 60m; Admin to Research: 150m; Admin to Training: 85m; Accounts to Research: 110m; Accounts to Training: 95m; Research to Training: 140m. Answer:<br>(a) Suggest the most suitable block to install the server with reason.<br>(b) Suggest the placement of Repeater and Hub/Switch.<br>(c) Suggest the best wired transmission medium for high-speed connectivity.<br>(d) Suggest the cable topology for minimum cable length.',
      modelAnswer: '<div class="space-y-2"><p><strong>(a) Server Placement:</strong> <strong>Admin Block</strong>. <em>Reason:</em> According to the 80/20 rule, the server should be located in the block with the maximum number of computers (Admin has 120 computers) to minimize network traffic across blocks.<br><strong>(b) Repeater & Hub/Switch:</strong><br>• <strong>Repeater:</strong> Needed between <em>Admin and Research</em> (150m) and <em>Accounts and Research</em> (110m) because cable length exceeds 100 meters, causing signal attenuation.<br>• <strong>Hub/Switch:</strong> Needed in <em>every block</em> (Admin, Accounts, Research, Training) to connect individual computers in a local LAN.<br><strong>(c) Transmission Medium:</strong> <strong>Optical Fiber</strong> for high-speed, noise-free, high-bandwidth inter-block backbone.<br><strong>(d) Cable Topology:</strong> <strong>Star Topology</strong> with Admin Block as the central hub (Admin-Accounts: 60m, Admin-Training: 85m, Admin-Research: 150m; total = 295m).</p></div>',
      explanation: 'Repeater rule: Required whenever cable distance exceeds 100 meters in twisted-pair Ethernet networks.',
      stepMarking: '[1.5 Marks] Admin block with 80/20 rule | [1.5 Marks] Repeater (>100m) and Switch placement | [1 Mark] Optical fiber | [1 Mark] Star topology'
    }
  ];

  Q['Relational Databases and SQL'] = Q['Relational Databases and SQL'] || [];
  Q['Relational Databases and SQL'].push(
    {
      id: 'cs-ch4-q2',
      marks: 4,
      type: 'SQL Queries',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Consider table TEACHER (TId, TName, Dept, Salary, HireDate). Write SQL queries to:<br>(a) Display department-wise total salary where total salary is greater than 1,00,000.<br>(b) Display details of teachers whose names start with \'S\' and have \'a\' as third letter.<br>(c) Increase salary of all teachers in \'Computer\' department by 15%.<br>(d) Display count of teachers who have not been assigned any department.',
      modelAnswer: '<div class="space-y-2"><pre class="bg-slate-900 text-emerald-400 p-2 rounded text-xs">-- (a) Department-wise salary > 100000\nSELECT Dept, SUM(Salary) FROM TEACHER\nGROUP BY Dept\nHAVING SUM(Salary) > 100000;\n\n-- (b) Pattern matching with wildcard\nSELECT * FROM TEACHER\nWHERE TName LIKE \'S_a%\';\n\n-- (c) Update query\nUPDATE TEACHER\nSET Salary = Salary * 1.15\nWHERE Dept = \'Computer\';\n\n-- (d) Null checking\nSELECT COUNT(*) FROM TEACHER\nWHERE Dept IS NULL;</pre></div>',
      explanation: 'Remember: WHERE filters individual rows before grouping; HAVING filters grouped aggregated results. NULL values must use `IS NULL`, not `= NULL`.',
      stepMarking: '[1 Mark each] 4 accurate SQL queries with correct keywords (GROUP BY/HAVING, LIKE, UPDATE, IS NULL)'
    }
  );

  // --- 5. ENGLISH CORE (301) EXPANSIONS ---
  Q['Lost Spring'] = [
    {
      id: 'eng-ch2-q1',
      marks: 5,
      type: 'Thematic Essay',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: '"Promises made to poor children are rarely kept." Analyze this statement in the context of Anees Jung\'s "Lost Spring", contrasting the lives and dreams of Saheb-e-Alam and Mukesh.',
      modelAnswer: '<div class="space-y-2"><p>In <em>"Lost Spring"</em>, Anees Jung exposes the grim reality of impoverished children in India whose childhoods are stolen by socioeconomic exploitation and systemic apathy.<br>• <strong>Saheb-e-Alam (Seemapuri Ragpicker):</strong> His name ironically translates to "Lord of the Universe", yet he wanders barefoot scouring garbage heaps for "gold" (survival). When the author casually asks if he would attend if she opened a school, Saheb eagerly agrees. Months later, he asks if her school is ready, forcing her to realize how easily hollow promises are made to the disenfranchised. Later, working at a tea stall for ₹800, Saheb loses his carefree freedom—the steel canister is heavier than the plastic bag.<br>• <strong>Mukesh (Firozabad Bangle Maker):</strong> Entrapped in a generational web of moneylenders, middlemen, police, and bureaucrats, bangle-making families lose their eyesight in dark, dingy glass furnaces. Yet Mukesh dares to dream: he wants to become a motor mechanic. His dream is realistic and grounded within his world, unlike flying an airplane. Both boys represent resilient spirits surviving amidst unfulfilled societal promises.</p></div>',
      explanation: 'Focus on the contrast: Saheb surrenders his autonomy to the tea stall canister; Mukesh dares to break the ancestral vicious circle (chakravyuha) to become a mechanic.',
      stepMarking: '[2.5 Marks] Saheb\'s life, irony of name, and hollow promises | [2.5 Marks] Mukesh\'s generational furnace entrapment and mechanic dream'
    }
  ];

  Q['Deep Water'] = [
    {
      id: 'eng-ch3-q1',
      marks: 5,
      type: 'Character Analysis',
      prob: '🔥 Repeated in CBSE 2023, 2021, 2019',
      stem: '"All we have to fear is fear itself." How did William Douglas conquer his deep-rooted hydrophobia and discover the profound meaning of Roosevelt\'s words?',
      modelAnswer: '<div class="space-y-2"><p>William Douglas\'s autobiographical account <em>"Deep Water"</em> is a testament to human resilience and psychological triumph over paralyzing terror.<br>• <strong>Traumatic Origin:</strong> At age 3 or 4 on California beach, waves knocked him down. Later at YMCA pool, an eighteen-year-old bully threw him into the 9-foot deep end. Douglas experienced terrifying suffocation and near-death drowning before losing consciousness.<br>• <strong>Systematic Conquest:</strong> Determined to reclaim his life, Douglas hired an instructor. Over months, the instructor built a swimmer piece by piece: attaching a belt to an overhead cable, teaching rhythmic breathing (exhale underwater, inhale above), and kicking legs against tension.<br>• <strong>Final Solitary Validation:</strong> To ensure old terror would not return, Douglas swam alone across Lake Wentworth and Warm Lake. Conquering his dread, he realized President Roosevelt\'s profound truth: <em>"All we have to fear is fear itself."</em> There is peace in death; the true terror lies solely in the fear of death.</p></div>',
      explanation: 'Key structural phases: (1) The trauma, (2) Systematic instruction with cable/pulley, (3) Solitary self-testing at Lake Wentworth.',
      stepMarking: '[1.5 Marks] YMCA drowning trauma | [2 Marks] Methodical instructor training piece-by-piece | [1.5 Marks] Lake Wentworth validation & Roosevelt\'s philosophy'
    }
  ];

  Q['Keeping Quiet'] = [
    {
      id: 'eng-ch8-q1',
      marks: 4,
      type: 'Poetic Analysis',
      prob: '🔥 Repeated in CBSE 2023, 2020, 2019',
      stem: 'What does Pablo Neruda advocate in "Keeping Quiet"? How does he clarify that his call for silence is not to be confused with total inactivity or death?',
      modelAnswer: '<div class="space-y-2"><p>In <em>"Keeping Quiet"</em>, Pablo Neruda appeals for a universal pause of twelve seconds to suspend destructive mechanical rush and nationalist conflicts.<br>• <strong>Exotic Moment:</strong> A sudden stillness without engines, where fishermen stop harming whales and salt gatherers look at their hurt hands.<br>• <strong>Clarification on Total Inactivity:</strong> Neruda unequivocally declares: <em>"Life is what it is about; I want no truck with death."</em> Inactivity leads to stagnation and death; stillness, by contrast, is a restorative intermission allowing humanity to self-introspect.<br>• <strong>The Earth as Teacher:</strong> The Earth illustrates that apparent stillness conceals vigorous subterranean life—what appears dead in winter resurrects into vibrant growth in spring. Stillness is thus the womb of new life.</p></div>',
      explanation: 'Neruda explicitly rejects death and lethargy; silence is an active meditative reset to cure humanity of its destructive "sadness of never understanding ourselves".',
      stepMarking: '[1.5 Marks] 12 seconds silence & suspension of rush | [1.5 Marks] Distinction between stillness and death | [1 Mark] Earth as metaphor of rebirth'
    }
  ];

  Q['My Mother at Sixty-Six'] = [
    {
      id: 'eng-ch7-q1',
      marks: 4,
      type: 'Poetic Device & Theme',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2019',
      stem: 'Analyze the poetic devices and poignant realization in Kamala Das\'s "My Mother at Sixty-Six". Why does the poet compare her mother to a "late winter\'s moon"?',
      modelAnswer: '<div class="space-y-2"><p>Kamala Das captures the painful pangs of aging and filial separation during a drive to Cochin airport.<br>• <strong>Corpse Imagery & Winter Moon Simile:</strong> Looking at her dozing mother, Das notices her face <em>"ashen like that of a corpse."</em> At airport security, she compares her mother to a <em>"late winter\'s moon"</em> because winter obscures the moon with fog and mist, diminishing its glow, just as senility and approaching death have robbed her mother of youth, vitality, and radiance.<br>• <strong>Contrast of Spilling Children:</strong> Outside, <em>"young trees sprinting"</em> and <em>"merry children spilling out of their homes"</em> represent exuberant life, energy, and youth in stark juxtaposition to her decaying mother.<br>• <strong>The Parting Smile:</strong> Masking her childhood fear of maternal loss, Das offers only: <em>"See you soon, Amma"</em> with an elongated smile—a poignant façade of reassurance hiding inner grief.</p></div>',
      explanation: 'The smile is an effort to hide anxiety and impart hope to an aging mother; it is repetitive (smile and smile and smile...).',
      stepMarking: '[1.5 Marks] "Late winter\'s moon" simile analysis | [1.5 Marks] Contrast with sprinting trees and merry children | [1 Mark] Significance of parting smile'
    }
  ];

  // --- ADDITIONAL HIGH-YIELD QUESTIONS FOR SPRINT VALIDATION ---

  // 1. Chemistry: Coordination Compounds
  Q['Coordination Compounds'] = Q['Coordination Compounds'] || [];
  Q['Coordination Compounds'].push(
    {
      id: 'chem-ch5-q2',
      marks: 3,
      type: 'IUPAC & Isomerism',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Write the IUPAC names of the following coordination compounds and deduce the oxidation state of the central metal atom: (i) [Co(NH₃)₅Cl]Cl₂, (ii) K₃[Fe(CN)₆], (iii) [Cr(en)₃]Cl₃.',
      modelAnswer: '<div class="space-y-2"><p><strong>(i) [Co(NH₃)₅Cl]Cl₂:</strong><br>• Cation: pentaamminechloridocobalt(III) chloride.<br>• Oxidation state calculation: x + 5(0) + (-1) + 2(-1) = 0 ⟹ x = +3.<br><br><strong>(ii) K₃[Fe(CN)₆]:</strong><br>• Potassium hexacyanidoferrate(III).<br>• Oxidation state calculation: 3(+1) + x + 6(-1) = 0 ⟹ x = +3.<br><br><strong>(iii) [Cr(en)₃]Cl₃:</strong><br>• Tris(ethane-1,2-diamine)chromium(III) chloride.<br>• Oxidation state calculation: x + 3(0) + 3(-1) = 0 ⟹ x = +3 (en is neutral bidentate ligand).</p></div>',
      explanation: 'Remember: Ligands are named in alphabetical order regardless of their quantity prefix. Anionic complex uses "-ate" suffix (ferrate, cobaltate).',
      stepMarking: '[1 Mark] [Co(NH₃)₅Cl]Cl₂ correct name & +3 | [1 Mark] K₃[Fe(CN)₆] correct name & +3 | [1 Mark] [Cr(en)₃]Cl₃ correct name with "tris" prefix'
    },
    {
      id: 'chem-ch5-q3',
      marks: 3,
      type: 'CFT & Electronic Config',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2019',
      stem: 'Draw a neat energy level diagram illustrating Crystal Field Splitting (Δ_o) of d-orbitals in an octahedral coordination entity. On the basis of Crystal Field Theory (CFT), write the electronic configuration of a d⁴ ion in terms of t_2g and e_g when: (i) Δ_o > P (strong field ligand), (ii) Δ_o < P (weak field ligand).',
      diagram: svg(380, 160, `
        <text x="20" y="30" font-size="11" font-weight="bold" fill="#065f46">Octahedral Splitting (\u0394_o)</text>
        <line x1="40" y1="90" x2="100" y2="90" stroke="#64748b" stroke-width="2"/>
        <text x="50" y="105" font-size="10" fill="#64748b">Free d⁵</text>
        <line x1="160" y1="45" x2="230" y2="45" stroke="#ef4444" stroke-width="2.5"/>
        <text x="240" y="49" font-size="11" font-weight="bold" fill="#ef4444">e_g (d_x²-y², d_z²)</text>
        <line x1="160" y1="125" x2="230" y2="125" stroke="#4f46e5" stroke-width="2.5"/>
        <text x="240" y="129" font-size="11" font-weight="bold" fill="#4f46e5">t_2g (d_xy, d_yz, d_zx)</text>
        <line x1="195" y1="45" x2="195" y2="125" stroke="#059669" stroke-width="1.5" stroke-dasharray="2"/>
        <text x="175" y="88" font-size="12" font-weight="bold" fill="#059669">\u0394_o</text>
      `),
      modelAnswer: '<div class="space-y-2"><p>Under octahedral field symmetry, the degenerate 3d orbitals split into lower energy triply degenerate <strong>t_2g</strong> (-0.4 \u0394_o) and higher energy doubly degenerate <strong>e_g</strong> (+0.6 \u0394_o) orbitals.<br><br><strong>(i) When \u0394_o > P (Strong Field Ligand):</strong><br>Pairing energy P is lower than the splitting energy. Electrons prefer pairing in lower t_2g orbitals rather than jumping to e_g.<br>• Configuration: <strong>t_2g⁴ e_g⁰</strong> (Low spin, diamagnetic/low magnetic moment).<br><br><strong>(ii) When \u0394_o < P (Weak Field Ligand):</strong><br>Pairing energy P is higher than splitting energy. Electrons occupy e_g singly according to Hund\'s rule before pairing begins.<br>• Configuration: <strong>t_2g³ e_g¹</strong> (High spin, paramagnetic, 4 unpaired electrons).</p></div>',
      explanation: 'Spectrochemical series order: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO. Cyanide and carbonyl are strong field ligands with large Δ_o.',
      stepMarking: '[1 Mark] Splitting diagram with t_2g and e_g levels | [1 Mark] t_2g⁴ e_g⁰ configuration when Δ_o > P | [1 Mark] t_2g³ e_g¹ configuration when Δ_o < P'
    }
  );

  // 2. Computer Science: Stacks & Networks
  Q['Stack'] = Q['Stack'] || [];
  Q['Stack'].push(
    {
      id: 'cs-stack-q2',
      marks: 3,
      type: 'Python Function Implementation',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2022',
      stem: 'Write a Python function Push_Customer(Cust_List, Customer) to add a customer [Cust_Id, Name, Bill] into a stack. Also write Pop_Customer(Cust_List) to remove and return the topmost customer. If the stack is empty, display "Underflow".',
      modelAnswer: '<div class="space-y-2"><pre class="bg-slate-900 text-slate-100 p-2.5 rounded font-mono text-xs"><code>def Push_Customer(Cust_List, Customer):\n    # Stacks in Python are implemented using append() at the end\n    Cust_List.append(Customer)\n    print(f"Customer {Customer[1]} pushed successfully.")\n\ndef Pop_Customer(Cust_List):\n    if len(Cust_List) == 0:\n        print("Underflow: Stack is empty.")\n        return None\n    else:\n        return Cust_List.pop()</code></pre><p><strong>Explanation:</strong> Stacks follow LIFO (Last In First Out). The end of the list acts as the TOP of the stack. <code>append()</code> operates in O(1) time complexity, and <code>pop()</code> removes the element at TOP.</p></div>',
      explanation: 'Underflow occurs when attempting to pop from an empty list. Always check len(stack) == 0 before pop().',
      stepMarking: '[1.5 Marks] Correct Push implementation with append() | [1.5 Marks] Pop implementation with underflow condition check'
    },
    {
      id: 'cs-stack-q3',
      marks: 2,
      type: 'Postfix Stack Evaluation',
      prob: '🔥 Repeated in CBSE 2024, 2020, 2019',
      stem: 'Evaluate the following postfix expression using a stack. Show the status of the stack after each operation: 25, 5, /, 12, 4, *, +, 3, -',
      modelAnswer: '<div class="space-y-2"><table class="w-full text-xs border border-slate-300"><thead><tr class="bg-slate-100"><th class="p-1 border">Token</th><th class="p-1 border">Action</th><th class="p-1 border">Stack Status (bottom \u2192 top)</th></tr></thead><tbody><tr><td class="p-1 border">25, 5</td><td class="p-1 border">Push operands</td><td class="p-1 border">[25, 5]</td></tr><tr><td class="p-1 border">/</td><td class="p-1 border">Pop 5, Pop 25 \u21D2 25 / 5 = 5</td><td class="p-1 border">[5]</td></tr><tr><td class="p-1 border">12, 4</td><td class="p-1 border">Push operands</td><td class="p-1 border">[5, 12, 4]</td></tr><tr><td class="p-1 border">*</td><td class="p-1 border">Pop 4, Pop 12 \u21D2 12 * 4 = 48</td><td class="p-1 border">[5, 48]</td></tr><tr><td class="p-1 border">+</td><td class="p-1 border">Pop 48, Pop 5 \u21D2 5 + 48 = 53</td><td class="p-1 border">[53]</td></tr><tr><td class="p-1 border">3</td><td class="p-1 border">Push operand</td><td class="p-1 border">[53, 3]</td></tr><tr><td class="p-1 border">-</td><td class="p-1 border">Pop 3, Pop 53 \u21D2 53 - 3 = 50</td><td class="p-1 border">[50]</td></tr></tbody></table><p><strong>Final Evaluated Result:</strong> 50</p></div>',
      explanation: 'In postfix evaluation, operand 2 is popped first (op2 = pop()), then operand 1 (op1 = pop()), and result = op1 operator op2 is pushed back.',
      stepMarking: '[1 Mark] Correct step-by-step stack tabular transitions | [1 Mark] Final result = 50'
    }
  );

  Q['Computer Networks'] = Q['Computer Networks'] || [];
  Q['Computer Networks'].push(
    {
      id: 'cs-net-q2',
      marks: 3,
      type: 'Transmission Media & Hardware',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Differentiate between Guided and Unguided transmission media. Why is Optical Fiber preferred over Coaxial cable for backbone campus networks despite its higher installation cost?',
      modelAnswer: '<div class="space-y-2"><p><strong>1. Guided vs Unguided Media:</strong><br>• <strong>Guided Media (Wired):</strong> Physical conductors guide electromagnetic signals (e.g., Twisted pair, Coaxial cable, Fiber optic). High security, immune to weather.<br>• <strong>Unguided Media (Wireless):</strong> Electromagnetic waves broadcast through air or vacuum (e.g., Radio waves, Micro waves, Infrared). High mobility, prone to atmospheric attenuation.<br><br><strong>2. Why Optical Fiber for Campus Backbone:</strong><br>• <strong>Immense Bandwidth:</strong> Carries terabits/sec using light modulation via Total Internal Reflection.<br>• <strong>Zero EMI / RFI:</strong> Completely immune to electromagnetic interference and industrial noise.<br>• <strong>Negligible Attenuation:</strong> Signals travel kilometers without requiring repeaters, making it the most future-proof backbone investment.</p></div>',
      explanation: 'In CBSE 8-mark campus network case studies, always recommend Fiber Optic for distances > 100 m connecting server blocks.',
      stepMarking: '[1.5 Marks] Guided vs unguided comparison | [1.5 Marks] Optical fiber bandwidth and EMI immunity advantages'
    },
    {
      id: 'cs-net-q3',
      marks: 3,
      type: 'Networking Devices & Topologies',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2019',
      stem: 'Differentiate between: (a) Switch and Hub, (b) Router and Gateway, (c) Star Topology and Bus Topology.',
      modelAnswer: '<div class="space-y-2"><p><strong>(a) Switch vs Hub:</strong><br>• <strong>Hub:</strong> Layer 1 physical device. Broadcasts packets to ALL ports, causing packet collisions and high bandwidth waste.<br>• <strong>Switch:</strong> Layer 2 data link device. Learns MAC addresses and unicasts frames only to the designated destination port.<br><br><strong>(b) Router vs Gateway:</strong><br>• <strong>Router:</strong> Connects disparate IP networks based on routing tables (IP addresses).<br>• <strong>Gateway:</strong> Protocol converter that connects two networks having completely different protocol architectures.<br><br><strong>(c) Star vs Bus Topology:</strong><br>• <strong>Star:</strong> Central switch connects all nodes. If one cable fails, only that node goes down; easy to troubleshoot.<br>• <strong>Bus:</strong> Single central coaxial backbone terminated at both ends. If the main cable breaks, the entire network fails.</p></div>',
      explanation: 'CBSE questions frequently ask device placement: Hub/Switch goes inside each building; Repeaters go if distance between blocks > 70m-100m.',
      stepMarking: '[1 Mark] Switch unicast vs Hub broadcast | [1 Mark] Router IP routing vs Gateway protocol converter | [1 Mark] Star central node vs Bus backbone'
    }
  );

  // 3. Chemistry: Organic Reactions & Mechanisms
  Q['Haloalkanes and Haloarenes'] = Q['Haloalkanes and Haloarenes'] || [];
  Q['Haloalkanes and Haloarenes'].push(
    {
      id: 'chem-ch6-q2',
      marks: 3,
      type: 'Aryl Halide Reactivity & Sandmeyer',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2021',
      stem: 'Aryl halides are extremely less reactive towards nucleophilic substitution reactions than alkyl halides. State three fundamental reasons for this low reactivity. Also write the chemical equation for the Sandmeyer reaction.',
      modelAnswer: '<div class="space-y-2"><p><strong>Reasons for Low Reactivity of Aryl Halides:</strong><br>1. <strong>Resonance Effect:</strong> Lone pairs on halogen delocalize with the benzene ring π-electrons, imparting partial double bond character to the C-X bond. Cleaving this bond requires higher bond dissociation energy.<br>2. <strong>Difference in Hybridization:</strong> In aryl halides, the halogen is bonded to an sp² hybridized carbon (33% s-character, more electronegative, shorter bond length 169 pm) vs sp³ carbon in alkyl halides (25% s-character, 179 pm). Shorter bond is harder to break.<br>3. <strong>Instability of Phenyl Cation:</strong> If the C-X bond dissociates heterolytically, the resulting phenyl cation is unstable because the sp² empty orbital cannot be stabilized by resonance with the ring.<br><br><strong>Sandmeyer Reaction:</strong><br><code class="bg-slate-100 px-2 py-0.5 rounded text-indigo-700 font-bold">C₆H₅-N₂⁺Cl⁻ + Cu₂Cl₂ / HCl  \u27F9  C₆H₅-Cl + N₂ \u2191</code></p></div>',
      explanation: 'Aryl halides undergo electrophilic substitution (chlorination, nitration, Friedel-Crafts) easily at ortho/para positions, but resist nucleophilic attack.',
      stepMarking: '[2 Marks] Three reasons: resonance double bond, sp² hybridization, phenyl cation instability | [1 Mark] Sandmeyer reaction equation'
    }
  );

  Q['Alcohols, Phenols and Ethers'] = Q['Alcohols, Phenols and Ethers'] || [];
  Q['Alcohols, Phenols and Ethers'].push(
    {
      id: 'chem-ch7-q2',
      marks: 3,
      type: 'Named Reactions',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Give the chemical equations and reaction conditions for the following named reactions: (a) Reimer-Tiemann reaction, (b) Kolbe\'s reaction, (c) Williamson ether synthesis.',
      modelAnswer: '<div class="space-y-2"><p><strong>(a) Reimer-Tiemann Reaction:</strong><br>Phenol reacts with chloroform (CHCl₃) in aqueous NaOH at 340 K, followed by acid hydrolysis, to yield salicylaldehyde (2-hydroxybenzaldehyde):<br><code class="bg-slate-100 px-2 py-0.5 rounded text-indigo-700 font-bold">C₆H₅OH + CHCl₃ + 3NaOH  \u27F9  o-HOC₆H₄CHO + 3NaCl + 2H₂O</code> (Electrophile is dichlorocarbene :CCl₂).<br><br><strong>(b) Kolbe\'s Reaction:</strong><br>Sodium phenoxide treated with carbon dioxide (CO₂) at 400 K and 4-7 atm pressure, followed by acidification, gives salicylic acid (2-hydroxybenzoic acid):<br><code class="bg-slate-100 px-2 py-0.5 rounded text-indigo-700 font-bold">C₆H₅ONa + CO₂ (400 K, 4-7 atm)  \u27F9  o-HOC₆H₄COONa  \u2014(H⁺)\u2192  o-HOC₆H₄COOH</code>.<br><br><strong>(c) Williamson Ether Synthesis:</strong><br>Alkyl halide reacts with sodium alkoxide (S_N2 mechanism):<br><code class="bg-slate-100 px-2 py-0.5 rounded text-indigo-700 font-bold">R-X + R\'-O⁻Na⁺  \u27F9  R-O-R\' + NaX</code> (Alkyl halide R-X must be 1° to prevent E2 elimination).</p></div>',
      explanation: 'In Williamson synthesis, if 3° alkyl halide is used (e.g., tert-butyl bromide + sodium methoxide), elimination dominates yielding 2-methylpropene instead of ether.',
      stepMarking: '[1 Mark] Reimer-Tiemann reaction & salicylaldehyde | [1 Mark] Kolbe\'s reaction & salicylic acid | [1 Mark] Williamson synthesis & 1° halide requirement'
    }
  );

  Q['Aldehydes, Ketones and Carboxylic Acids'] = Q['Aldehydes, Ketones and Carboxylic Acids'] || [];
  Q['Aldehydes, Ketones and Carboxylic Acids'].push(
    {
      id: 'chem-ch8-q2',
      marks: 3,
      type: 'Reaction Mechanisms & Distinctions',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Differentiate between Aldol Condensation and Cannizzaro Reaction with respect to: (i) Nature of reacting carbonyl compounds, (ii) Reagent and medium used, (iii) Nature of the products formed. Write one balanced chemical equation for each.',
      modelAnswer: '<div class="space-y-2"><table class="w-full text-xs border border-slate-300"><thead><tr class="bg-slate-100"><th class="p-1 border">Parameter</th><th class="p-1 border">Aldol Condensation</th><th class="p-1 border">Cannizzaro Reaction</th></tr></thead><tbody><tr><td class="p-1 border font-bold">Substrate</td><td class="p-1 border">Aldehydes/ketones having at least one \u03B1-hydrogen (e.g., CH₃CHO, CH₃COCH₃)</td><td class="p-1 border">Aldehydes lacking \u03B1-hydrogen (e.g., HCHO, C₆H₅CHO)</td></tr><tr><td class="p-1 border font-bold">Reagent</td><td class="p-1 border">Dilute base (10% NaOH, Ba(OH)₂)</td><td class="p-1 border">Concentrated base (50% NaOH or KOH)</td></tr><tr><td class="p-1 border font-bold">Product</td><td class="p-1 border">\u03B2-hydroxyaldehyde (\u03B2-hydroxyketone) followed by \u03B1,\u03B2-unsaturated aldehyde upon heating</td><td class="p-1 border">Self redox (disproportionation): One molecule reduces to primary alcohol, one oxidizes to carboxylic acid salt</td></tr></tbody></table><p><strong>Equations:</strong><br>• <strong>Aldol:</strong> 2CH₃CHO \u2014(dil. NaOH)\u2192 CH₃-CH(OH)-CH₂-CHO \u2014(\u0394)\u2192 CH₃-CH=CH-CHO (But-2-enal) + H₂O.<br>• <strong>Cannizzaro:</strong> 2HCHO + 50% NaOH \u27F9 CH₃OH (Methanol) + HCOONa (Sodium formate).</p></div>',
      explanation: 'Ketones undergoing aldol reaction give ketols. If two different aldehydes with α-H are reacted, cross-aldol yields 4 different products.',
      stepMarking: '[1 Mark] α-hydrogen condition comparison | [1 Mark] Dilute vs conc. reagent contrast | [1 Mark] Balanced chemical equations'
    }
  );

  Q['Biomolecules'] = Q['Biomolecules'] || [];
  Q['Biomolecules'].push(
    {
      id: 'chem-ch10-q2',
      marks: 3,
      type: 'Structural Evidence Reactions',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2019',
      stem: 'State the chemical reactions of D-glucose that establish: (i) The presence of a straight chain of six carbon atoms, (ii) The presence of an aldehyde (-CHO) group, (iii) The presence of five hydroxyl (-OH) groups.',
      modelAnswer: '<div class="space-y-2"><p><strong>(i) Straight 6-Carbon Chain:</strong><br>Prolonged heating of glucose with hydroiodic acid (HI) and red phosphorus yields n-hexane, proving all six carbon atoms are linked in an unbranched linear chain:<br><code class="bg-slate-100 px-2 py-0.5 rounded text-indigo-700 font-bold">CHO-(CHOH)₄-CH₂OH + HI (\u0394)  \u27F9  CH₃-CH₂-CH₂-CH₂-CH₂-CH₃ (n-Hexane)</code><br><br><strong>(ii) Aldehyde Group:</strong><br>Glucose is oxidized by a mild oxidizing agent like bromine water (Br₂ / H₂O) to gluconic acid (a six-carbon monocarboxylic acid):<br><code class="bg-slate-100 px-2 py-0.5 rounded text-indigo-700 font-bold">CHO-(CHOH)₄-CH₂OH + [O] (Br₂ water)  \u27F9  COOH-(CHOH)₄-CH₂OH (Gluconic acid)</code><br><br><strong>(iii) Five Hydroxyl Groups:</strong><br>Acetylation of glucose with acetic anhydride ((CH₃CO)₂O) gives glucose penta-acetate, confirming the presence of five -OH groups on different carbon atoms (stable molecule):<br><code class="bg-slate-100 px-2 py-0.5 rounded text-indigo-700 font-bold">Glucose + 5(CH₃CO)₂O  \u27F9  Glucose penta-acetate + 5CH₃COOH</code></p></div>',
      explanation: 'Reaction with concentrated HNO₃ oxidizes both the -CHO and terminal -CH₂OH groups to give saccharic acid (dicarboxylic acid).',
      stepMarking: '[1 Mark] HI reduction to n-hexane | [1 Mark] Bromine water oxidation to gluconic acid | [1 Mark] Acetic anhydride reaction to penta-acetate'
    }
  );

  // 4. Mathematics: Calculus, Differential Equations & Integrals
  Q['Differential Equations'] = Q['Differential Equations'] || [];
  Q['Differential Equations'].push(
    {
      id: 'math-ch9-q2',
      marks: 5,
      type: 'Linear Differential Equation',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Find the particular solution of the differential equation: (x + 1) (dy/dx) - y = e^{3x} (x + 1)², given that y = 0 when x = 0.',
      modelAnswer: '<div class="space-y-2"><p><strong>1. Standard Linear Form:</strong><br>Dividing by (x + 1): <code>dy/dx - [1 / (x + 1)] y = e^{3x} (x + 1)</code><br>This is in the standard form <code>dy/dx + P(x) y = Q(x)</code> where <code>P(x) = -1 / (x + 1)</code> and <code>Q(x) = e^{3x} (x + 1)</code>.<br><br><strong>2. Integrating Factor (I.F.):</strong><br><code>I.F. = e^{∫ P dx} = e^{∫ -1/(x+1) dx} = e^{-ln(x+1)} = e^{ln(x+1)⁻¹} = 1 / (x + 1)</code>.<br><br><strong>3. General Solution:</strong><br><code>y · (I.F.) = ∫ Q(x) · (I.F.) dx + C</code><br><code>y · [1 / (x + 1)] = ∫ [e^{3x} (x + 1)] · [1 / (x + 1)] dx + C = ∫ e^{3x} dx + C = (1/3) e^{3x} + C</code><br><code>y = (1/3) e^{3x} (x + 1) + C(x + 1)</code>.<br><br><strong>4. Particular Solution:</strong><br>Given y(0) = 0: <code>0 = (1/3) e⁰ (1) + C(1)  ⟹  C = -1/3</code>.<br>Therefore: <code>y = (1/3) (x + 1) [e^{3x} - 1]</code>.</p></div>',
      explanation: 'Remember: In dy/dx + Py = Q, the coefficient of dy/dx must always be reduced to 1 before calculating I.F. = e^{∫ P dx}.',
      stepMarking: '[1 Mark] Conversion to standard linear form | [1.5 Marks] Integrating factor calculation | [1.5 Marks] General solution integration | [1 Mark] Constant C evaluation & particular solution'
    }
  );

  Q['Integrals'] = Q['Integrals'] || [];
  Q['Integrals'].push(
    {
      id: 'math-ch7-q3',
      marks: 5,
      type: 'King\'s Property Definite Integral',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2019',
      stem: 'Evaluate the definite integral: I = ∫[0 to π] (x sin x) / (1 + cos²x) dx.',
      modelAnswer: '<div class="space-y-2"><p><strong>Step 1: Apply King\'s Property ∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx:</strong><br><code>I = ∫[0 to π] [(π - x) sin(π - x)] / [1 + cos²(π - x)] dx</code><br>Since sin(π - x) = sin x and cos(π - x) = -cos x (so cos²(π - x) = cos²x):<br><code>I = ∫[0 to π] [(π - x) sin x] / [1 + cos²x] dx  ... (2)</code><br><br><strong>Step 2: Add (1) and (2):</strong><br><code>2I = ∫[0 to π] [x sin x + (π - x) sin x] / [1 + cos²x] dx = π ∫[0 to π] (sin x dx) / (1 + cos²x)</code><br><br><strong>Step 3: Substitution:</strong><br>Let <code>cos x = t  ⟹  -sin x dx = dt</code>.<br>When x = 0, t = 1; when x = π, t = -1.<br><code>2I = π ∫[1 to -1] (-dt) / (1 + t²) = π ∫[-1 to 1] dt / (1 + t²)</code><br>Since 1/(1+t²) is an even function:<br><code>2I = 2π ∫[0 to 1] dt / (1 + t²) = 2π [tan⁻¹(t)]_0^1 = 2π [π/4 - 0] = π² / 2</code><br><code>I = π² / 4</code>.</p></div>',
      explanation: 'Removing x from numerator using I + I is the standard CBSE template for definite integrals with x in numerator.',
      stepMarking: '[1.5 Marks] Application of King\'s property | [1.5 Marks] Addition yielding 2I and removal of x | [2 Marks] Substitution, limits conversion, and final answer π²/4'
    }
  );

  // 5. English Flamingo & Vistas
  Q['Lost Spring'] = Q['Lost Spring'] || [];
  Q['Lost Spring'].push(
    {
      id: 'eng-ch2-q2',
      marks: 5,
      type: 'Thematic Character Study',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020',
      stem: 'Compare and contrast the lives, attitudes, and aspirations of Saheb-e-Alam in Seemapuri and Mukesh in Firozabad. What gives the author Anees Jung a ray of hope when speaking with Mukesh?',
      modelAnswer: '<div class="space-y-2"><p>Anees Jung exposes the grinding cycle of poverty and social exploitation that destroys childhood in <em>"Lost Spring"</em>.<br>• <strong>Saheb-e-Alam (Seemapuri):</strong> An impoverished ragpicker from Bangladesh whose name ironically means "Lord of the Universe". Ragpicking to him is "wrapped in wonder", but when he takes a job at a tea stall for ₹800, he loses his carefree freedom; the steel canister feels heavier than the plastic bag.<br>• <strong>Mukesh (Firozabad):</strong> Born into a family of glass bangle-makers blinded by soot and toxic furnaces. Unlike his family who accept poverty as their "karam" (destiny), Mukesh exhibits fierce agency and announces: <em>"I want to be a motor mechanic."</em><br>• <strong>Ray of Hope:</strong> While surrounded by the nexus of sahukars, middlemen, policemen, and bureaucrats, Mukesh dares to dream beyond his family caste. His dream is grounded and realistic—he is willing to walk miles to a garage, refusing to surrender to ancestral defeatism.</p></div>',
      explanation: 'The title "Lost Spring" is a metaphor for lost childhood: spring is the blooming season, just as childhood is the season of discovery and joy.',
      stepMarking: '[2 Marks] Saheb\'s loss of freedom at tea stall | [2 Marks] Mukesh\'s agency and mechanical aspiration | [1 Mark] Contrast between passive submission and active dreaming'
    }
  );

  Q['Deep Water'] = Q['Deep Water'] || [];
  Q['Deep Water'].push(
    {
      id: 'eng-ch4-q2',
      marks: 5,
      type: 'Psychological Overcoming of Fear',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2018',
      stem: '"All we have to fear is fear itself." With reference to William Douglas\'s essay "Deep Water", trace how his terror originated, intensified, and was systematically conquered through methodical discipline.',
      modelAnswer: '<div class="space-y-2"><p>William Douglas recounts his journey from paralyzing hydrophobia to triumphant mastery.<br>• <strong>Origin of Terror:</strong> First at age 3–4 at California beach where waves knocked him down. Later at age 10–11, a bully tossed him into the 9-foot deep YMCA pool. Despite three desperate lunges to spring from the bottom, he suffocated and blacked out into a sensation of peaceful oblivion.<br>• <strong>Psychological Aftermath:</strong> The terror haunted him for years, ruining fishing trips, canoeing, and swimming in New Hampshire and Cascades.<br>• <strong>Methodical Recovery:</strong> Douglas hired an instructor who trained him piece by piece: first using a belt and pulley system, then teaching breathing (inhale above, exhale underwater), and finally perfecting leg kicks over seven months.<br>• <strong>Self-Testing & Roosevelt\'s Epiphany:</strong> To ensure no residual fear lingered, Douglas swam two miles across Lake Wentworth. Quoting FDR\'s words, Douglas concludes that in death there is peace, but in the fear of death there is terror; overcoming it granted him an intensely liberated existence.</p></div>',
      explanation: 'Notice how the instructor built a swimmer "piece by piece", and then Douglas integrated the pieces into a whole.',
      stepMarking: '[1.5 Marks] California & YMCA drowning incidents | [2 Marks] Step-by-step instructor training | [1.5 Marks] Solitary tests in Lake Wentworth and FDR philosophy'
    }
  );

  Q['The Rattrap'] = Q['The Rattrap'] || [];
  Q['The Rattrap'].push(
    {
      id: 'eng-ch3-q2',
      marks: 5,
      type: 'Theme of Human Kindness & Redemption',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2021',
      stem: 'How does Selma Lagerlöf establish the essential goodness in human beings through the transformation of the peddler in "The Rattrap"? Discuss the pivotal role of Edla Willmansson.',
      modelAnswer: '<div class="space-y-2"><p>Selma Lagerlöf\'s universal message is that the essential goodness in a human being can be awakened through unconditional love, trust, and compassion.<br>• <strong>The World as a Rattrap:</strong> The cynical peddler viewed the world as a gigantic trap offering riches, food, and warmth as bait (cheeses and pork) to snare greedy humans. Having stolen 30 kronor from the trusting crofter, he found himself lost in the confusing maze of the forest.<br>• <strong>The Ironmaster vs Edla:</strong> The ironmaster welcomed the peddler under the mistaken impression that he was his old comrade Captain von Stahle, but threatened him with the sheriff upon discovering the deception. Edla, however, pleaded for him: <em>"He walks and walks the whole year round... I should like him to enjoy a day of peace with us."</em><br>• <strong>The Redemption:</strong> Treated with the dignity of a captain, the peddler was spiritually elevated to rise above petty crime. On Christmas morning, he departed leaving behind the stolen 30 kronor for the crofter, a tiny rattrap gift, and a heartfelt letter signed: <em>"Captain von Stahle"</em>.</p></div>',
      explanation: 'Key quote: "Because you were so nice to me all day long, as if I was a captain, I want to be nice to you, as if I was a real captain."',
      stepMarking: '[1.5 Marks] Rattrap metaphor and forest maze | [2 Marks] Edla\'s unconditional hospitality vs ironmaster | [1.5 Marks] Letter signed Captain von Stahle and return of 30 kronor'
    }
  );

  // --- KEY ALIASES FOR SPRINT WEEK/BOOK RESOLUTION ---
  Q['Data Structures: Stacks'] = Q['Stack'];
  Q['Stacks'] = Q['Stack'];
  Q['Writing Skills Box Formats'] = Q['Writing Skills'];
  Q['Python Scope'] = Q['Python Functions'];
  Q['Python Revision Tour'] = Q['Python Functions'];
  Q['Functions in Python'] = Q['Python Functions'];
  Q['Full Stack CS Blueprint'] = Q['Relational Databases and SQL'];



  // =========================================================================
  // AUTHENTIC 10-YEAR CBSE BOARD EXAM QUESTIONS (2015-2024 DEEP REPOSITORY)
  // WITH STUDENT TRAINING, STEP MARKING, CAUTION TRAPS & TOPPER SECRETS
  // =========================================================================

  // --- 1. PHYSICS (042) ---
  Q['Electric Charges and Fields'] = Q['Electric Charges and Fields'] || [];
  Q['Electric Charges and Fields'].push(
    {
      id: 'phy-10y-01',
      marks: 5,
      type: 'Derivation & Electric Flux',
      prob: '🔥 Recurring CBSE 2023, 2020 Delhi, 2017, 2015',
      stem: 'Using Gauss\'s law, derive an expression for the electric field due to an infinitely large thin plane sheet of charge with uniform surface charge density σ. Show that the electric field is independent of the distance of the point from the sheet. How does the field change if the sheet has a finite thickness d?',
      diagram: svg(420, 180, `
        <rect x="180" y="20" width="16" height="140" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
        <text x="145" y="15" fill="#ef4444" font-size="11" font-weight="bold">+ + + + Infinite Sheet (σ) + + + +</text>
        <line x1="90" y1="90" x2="300" y2="90" stroke="#4f46e5" stroke-dasharray="3" stroke-width="1.5"/>
        <ellipse cx="90" cy="90" rx="15" ry="30" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
        <ellipse cx="300" cy="90" rx="15" ry="30" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
        <line x1="90" y1="60" x2="300" y2="60" stroke="#4f46e5" stroke-width="1.5"/>
        <line x1="90" y1="120" x2="300" y2="120" stroke="#4f46e5" stroke-width="1.5"/>
        <line x1="90" y1="90" x2="30" y2="90" stroke="#4f46e5" stroke-width="2.5" marker-end="url(#arrow)"/>
        <text x="25" y="80" font-size="12" font-weight="bold" fill="#4f46e5">E ←</text>
        <line x1="300" y1="90" x2="360" y2="90" stroke="#4f46e5" stroke-width="2.5" marker-end="url(#arrow)"/>
        <text x="365" y="80" font-size="12" font-weight="bold" fill="#4f46e5">→ E</text>
        <text x="70" y="145" font-size="10" fill="#475569">End Cap A</text>
        <text x="290" y="145" font-size="10" fill="#475569">End Cap A</text>
      `),
      modelAnswer: `<div class="space-y-3">
        <p><strong>1. Gaussian Pillbox Construction:</strong><br>Consider an infinite thin sheet of uniform surface charge density σ. By symmetry, the electric field →E is perpendicular to the plane of the sheet directed outwards on both sides. Construct a cylindrical Gaussian surface (pillbox) of cross-sectional area <em>A</em> piercing normally through the sheet.</p>
        <ul class="list-disc pl-5 text-xs text-slate-700 space-y-1">
          <li><strong>Curved Surface:</strong> →E is parallel to the curved surface (→E ⊥ →dA), so Φ_curved = ∫ E dA cos(90°) = 0.</li>
          <li><strong>Two Flat End Caps:</strong> →E is parallel to →dA on both caps (θ = 0°). Therefore, Φ_caps = 2 × ∫ E dA = 2EA.</li>
          <li><strong>Total Flux:</strong> Φ_total = Φ_curved + Φ_caps = 0 + 2EA = 2EA.</li>
        </ul>
        <p><strong>2. Enclosed Charge & Field:</strong><br>By Gauss's Law: <code>Φ = q_enclosed / ε₀ = (σ A) / ε₀</code>.<br>Equating: <code>2EA = (σ A) / ε₀  ⟹  E = σ / (2ε₀)</code>.<br>Since distance <em>r</em> does not appear in the formula, the electric field is <strong>uniform and independent of distance</strong> from the infinite plane sheet.</p>
        <p><strong>3. Finite Thickness Sheet:</strong><br>If the sheet has finite thickness, charge resides on both exterior surfaces with density σ on each face. Total field outside becomes <code>E = σ/(2ε₀) + σ/(2ε₀) = σ / ε₀</code>.</p>
      </div>`,
      stepMarking: '[1 Mark] Statement & Gaussian pillbox diagram | [2 Marks] Flux calculation through curved body and 2 flat end caps | [1 Mark] Derivation of E = σ/(2ε₀) | [1 Mark] Finite thickness explanation E = σ/ε₀',
      pacing: '10-12 min',
      competency: 'High-Order Derivation',
      cautionTrap: 'Students often forget the factor of 2 in 2EA for the two end caps, writing EA = σA/ε₀ ⟹ E = σ/ε₀ for a thin sheet, which is the formula for a conducting plate, losing 2 marks.',
      topperTip: 'Explicitly state both flat end caps have flux EA, yielding total flux 2EA. Conclude with vector notation: E (vector) = (σ / 2ε₀) n̂.',
      mnemonic: 'Sheet vs Plate: Thin dielectric sheet has ONE half (σ/2ε₀); Conducting plate has TWO faces (σ/ε₀)!'
    },
    {
      id: 'phy-10y-02',
      marks: 5,
      type: 'Dipole Field Comparison',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2019, 2016',
      stem: 'Derive an expression for the electric field at: (a) An axial point, and (b) An equatorial point of a short electric dipole of dipole moment p. Prove that for a short dipole (r >> a), the electric field at an axial point is twice the electric field at an equatorial point at the same distance r.',
      modelAnswer: `<div class="space-y-3">
        <p><strong>(a) Field at Axial Point:</strong><br>E_axial = E_{+q} - E_{-q} = ` + `[q / (4πε₀)] [1/(r - a)² - 1/(r + a)²] = [q / (4πε₀)] [(4ar) / (r² - a²)²].<br>Since dipole moment p = q × 2a: <code>E_axial = [1 / (4πε₀)] [2pr / (r² - a²)²]</code>.<br>For a short dipole (r >> a): <strong>E_axial = (2p) / (4πε₀ r³)</strong> along the direction of →p.</p>
        <p><strong>(b) Field at Equatorial Point:</strong><br>Resolving fields into components: vertical components E_{+q} sin θ and E_{-q} sin θ cancel out. Horizontal components add up along direction opposite to →p:<br>E_equatorial = 2 E_{+q} cos θ = 2 [q / (4πε₀ (r² + a²))] [a / √(r² + a²)] = <code>p / [4πε₀ (r² + a²)^(3/2)]</code>.<br>For a short dipole (r >> a): <strong>E_equatorial = p / (4πε₀ r³)</strong> opposite to →p.</p>
        <p><strong>(c) Ratio:</strong><br><code>E_axial / E_equatorial = [(2p) / (4πε₀ r³)] / [p / (4πε₀ r³)] = 2 : 1</code>. Hence proved.</p>
      </div>`,
      stepMarking: '[2 Marks] Axial derivation and short dipole approximation | [2 Marks] Equatorial derivation with vector resolution | [1 Mark] Proof of 2:1 ratio and directional contrast',
      pacing: '11 min',
      competency: 'High-Order Derivation',
      cautionTrap: 'Forgetting that equatorial field E (vector)_equatorial is directed OPPOSITE to dipole moment vector p⃗ (vector form has a negative sign: E (vector) = -p⃗ / (4πε₀r³)).',
      topperTip: 'Draw both diagrams side-by-side with vector arrows. Highlight that for point charges E ∝ 1/r², but for dipoles E ∝ 1/r³.',
      mnemonic: 'Dipole Rule: Axial is ALONG (2p), Equatorial is OPPOSED (-p)!'
    }
  );

  // --- 2. CHEMISTRY (043) ---
  Q['Solutions'] = Q['Solutions'] || [];
  Q['Solutions'].push(
    {
      id: 'chem-10y-01',
      marks: 3,
      type: 'Thermodynamics & Deviations',
      prob: '🔥 Repeated in CBSE 2024, 2022, 2019, 2016',
      stem: 'State Raoult\'s law for a solution of volatile liquids. Differentiate between ideal solutions and non-ideal solutions showing positive and negative deviations from Raoult\'s law on the basis of: (i) Intermolecular forces, (ii) ΔH_mixing, (iii) ΔV_mixing. Give one example for each.',
      modelAnswer: `<div class="space-y-2">
        <p><strong>Raoult's Law:</strong> For a solution of volatile liquids, the partial vapor pressure of each component is directly proportional to its mole fraction in the solution: <code>P_A = P°_A × x_A</code>.</p>
        <table class="w-full text-xs border border-slate-300">
          <thead><tr class="bg-slate-100"><th class="p-1 border">Parameter</th><th class="p-1 border">Positive Deviation</th><th class="p-1 border">Negative Deviation</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border font-bold">Intermolecular Forces</td><td class="p-1 border">A-B interactions are WEAKER than A-A and B-B</td><td class="p-1 border">A-B interactions are STRONGER than A-A and B-B (e.g. H-bonding)</td></tr>
            <tr><td class="p-1 border font-bold">ΔH_mixing</td><td class="p-1 border">ΔH_mix > 0 (Endothermic)</td><td class="p-1 border">ΔH_mix < 0 (Exothermic)</td></tr>
            <tr><td class="p-1 border font-bold">ΔV_mixing</td><td class="p-1 border">ΔV_mix > 0 (Volume expands)</td><td class="p-1 border">ΔV_mix < 0 (Volume contracts)</td></tr>
            <tr><td class="p-1 border font-bold">Example</td><td class="p-1 border">Ethanol + Acetone</td><td class="p-1 border">Chloroform + Acetone (or Phenol + Aniline)</td></tr>
            <tr><td class="p-1 border font-bold">Azeotrope</td><td class="p-1 border">Minimum boiling azeotrope</td><td class="p-1 border">Maximum boiling azeotrope</td></tr>
          </tbody>
        </table>
      </div>`,
      stepMarking: '[1 Mark] Statement of Raoult\'s law | [1.5 Marks] Three comparison parameters | [0.5 Mark] Authentic examples',
      pacing: '5 min',
      competency: 'Conceptual Evaluation',
      cautionTrap: 'Students confuse azeotrope boiling points: Positive deviation gives MINIMUM boiling azeotrope (vapor pressure is higher, so it boils earlier); Negative deviation gives MAXIMUM boiling azeotrope.',
      topperTip: 'Explain Chloroform + Acetone negative deviation by drawing the intermolecular hydrogen bond: Cl₃C-H ··· O=C(CH₃)₂.',
      mnemonic: 'Deviations: Positive pushes molecules apart (weaker forces, min boiling); Negative pulls them tight (stronger H-bonds, max boiling)!'
    },
    {
      id: 'chem-10y-02',
      marks: 3,
      type: 'van \'t Hoff Colligative Numerical',
      prob: '🔥 Repeated in CBSE 2023, 2020, 2018, 2015',
      stem: 'Calculate the freezing point of an aqueous solution containing 10.50 g of MgCl₂ in 200 g of water, assuming complete dissociation. (Molar mass of MgCl₂ = 95 g mol⁻¹, K_f for water = 1.86 K kg mol⁻¹).',
      modelAnswer: `<div class="space-y-2 font-mono text-xs bg-slate-100 p-2.5 rounded">
        <p><strong>Step 1: Dissociation of MgCl₂ and van 't Hoff factor i:</strong><br>
        MgCl₂(aq) ⟹ Mg²⁺(aq) + 2Cl⁻(aq)  (Total ions n = 1 + 2 = 3)<br>
        For 100% complete ionization (α = 1): <strong>i = n = 3</strong>.</p>
        <p><strong>Step 2: Molality of solution (m):</strong><br>
        Moles of MgCl₂ = 10.50 g / 95 g mol⁻¹ = 0.1105 mol<br>
        Mass of water = 200 g = 0.200 kg<br>
        m = 0.1105 mol / 0.200 kg = <strong>0.5526 mol kg⁻¹</strong></p>
        <p><strong>Step 3: Depression in Freezing Point (ΔT_f):</strong><br>
        ΔT_f = i × K_f × m = 3 × 1.86 K kg mol⁻¹ × 0.5526 mol kg⁻¹ = <strong>3.08 K</strong></p>
        <p><strong>Step 4: Freezing Point of Solution (T_f):</strong><br>
        T_f = T°_f - ΔT_f = 273.15 K - 3.08 K = <strong>270.07 K (or -3.08 °C)</strong></p>
      </div>`,
      stepMarking: '[1 Mark] Correct i = 3 deduction | [1 Mark] Molality calculation | [1 Mark] ΔT_f formula with i and final freezing point in K or °C',
      pacing: '5 min',
      competency: 'Analytical Application',
      cautionTrap: 'Forgetting van \'t Hoff factor i=3 for electrolytes. Calculating ΔT_f = K_f · m gives 1.03 K instead of 3.08 K, losing 1.5 marks.',
      topperTip: 'Always write the balanced ionization equation first: MgCl₂ → Mg²⁺ + 2Cl⁻ (3 particles). Clearly state i = 1 + (n - 1)α = 1 + 2(1) = 3.',
      mnemonic: 'Electrolyte Colligative: Never leave colligative equations naked without "i" for ionic salts!'
    }
  );

  // --- 3. MATHEMATICS (041) ---
  Q['Relations and Functions'] = Q['Relations and Functions'] || [];
  Q['Relations and Functions'].push(
    {
      id: 'math-10y-01',
      marks: 3,
      type: 'Equivalence Relation Proof',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2019, 2016',
      stem: 'Show that the relation R on the set of integers Z defined by R = {(a, b) : 2 divides (a - b)} is an equivalence relation. Also find the equivalence class [0].',
      modelAnswer: `<div class="space-y-2 text-xs">
        <p><strong>1. Reflexive:</strong> For any a ∈ Z, a - a = 0 = 2 × 0. Since 2 divides 0, (a, a) ∈ R for all a ∈ Z. Thus, R is reflexive.<br><br>
        <strong>2. Symmetric:</strong> Let (a, b) ∈ R. ⟹ 2 divides (a - b) ⟹ a - b = 2k for some k ∈ Z.<br>
        ⟹ b - a = -(a - b) = -2k = 2(-k). Since -k ∈ Z, 2 divides (b - a). ⟹ (b, a) ∈ R. Thus, R is symmetric.<br><br>
        <strong>3. Transitive:</strong> Let (a, b) ∈ R and (b, c) ∈ R. ⟹ a - b = 2k₁ and b - c = 2k₂ for k₁, k₂ ∈ Z.<br>
        Adding: (a - b) + (b - c) = a - c = 2k₁ + 2k₂ = 2(k₁ + k₂).<br>
        Since (k₁ + k₂) ∈ Z, 2 divides (a - c) ⟹ (a, c) ∈ R. Thus, R is transitive.<br><br>
        Since R is reflexive, symmetric, and transitive, <strong>R is an equivalence relation</strong>.<br><br>
        <strong>4. Equivalence Class [0]:</strong><br>
        [0] = {x ∈ Z : (x, 0) ∈ R} = {x ∈ Z : 2 divides (x - 0)} = {x ∈ Z : x is an even integer} = <strong>{..., -4, -2, 0, 2, 4, ...}</strong>.</p>
      </div>`,
      stepMarking: '[0.75 Mark] Reflexivity proof | [0.75 Mark] Symmetry proof | [0.75 Mark] Transitivity proof | [0.75 Mark] Equivalence class [0] evaluation',
      pacing: '5 min',
      competency: 'Mathematical Proof',
      cautionTrap: 'Omitting the universal quantifier "for all a ∈ Z" or omitting specifying k ∈ Z. In transitivity, adding equations must show k₁ + k₂ ∈ Z.',
      topperTip: 'Conclude with a clear summarizing sentence: "Since R is reflexive, symmetric, and transitive, R is an equivalence relation on Z."',
      mnemonic: 'Equivalence Trinity: "R-S-T" — Reflexive (self), Symmetric (swap), Transitive (bridge)!'
    }
  );

  Q['Applications of Derivatives'] = Q['Applications of Derivatives'] || [];
  Q['Applications of Derivatives'].push(
    {
      id: 'math-10y-02',
      marks: 5,
      type: 'Maxima-Minima Inscribed Solid',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2020, 2017',
      stem: 'Show that the height of the cylinder of maximum volume that can be inscribed in a sphere of radius R is 2R / √3. Also, find the maximum volume in terms of R.',
      modelAnswer: `<div class="space-y-2 text-xs">
        <p><strong>1. Geometric Relation:</strong><br>
        Let r be the radius and h be the height of the cylinder inscribed in sphere of radius R.<br>
        From the right triangle at center: <code>r² + (h/2)² = R²  ⟹  r² = R² - h²/4</code>.</p>
        <p><strong>2. Volume Function:</strong><br>
        V = π r² h = π (R² - h²/4) h = π (R² h - h³/4).</p>
        <p><strong>3. First Derivative & Critical Point:</strong><br>
        dV/dh = π (R² - 3h²/4).<br>
        Setting dV/dh = 0: <code>3h² / 4 = R²  ⟹  h² = 4R² / 3  ⟹  h = 2R / √3</code> (since h > 0).</p>
        <p><strong>4. Second Derivative Test for Maximality:</strong><br>
        d²V/dh² = π (0 - 6h/4) = - (3π/2) h.<br>
        At h = 2R/√3: <code>d²V/dh² = - (3π/2)(2R/√3) = -√3 π R < 0</code>.<br>
        By second derivative test, Volume is <strong>maximum at h = 2R / √3</strong>.</p>
        <p><strong>5. Maximum Volume:</strong><br>
        V_max = π [R² (2R/√3) - (1/4)(2R/√3)³] = π [(2R³/√3) - (2R³ / 3√3)] = <strong>(4π R³) / (3√3) cubic units</strong>.</p>
      </div>`,
      stepMarking: '[1 Mark] Relation r² = R² - h²/4 and Volume equation | [1.5 Marks] First derivative dV/dh and solving h = 2R/√3 | [1.5 Marks] Second derivative test d²V/dh² < 0 | [1 Mark] Final maximum volume calculation',
      pacing: '10-12 min',
      competency: 'High-Order Optimization',
      cautionTrap: 'Forgetting the second derivative test d²V/dh² < 0! CBSE marking scheme awards 1.5 marks exclusively for proving d²V/dh² < 0.',
      topperTip: 'Express Volume V strictly in terms of ONE variable (h) before differentiating. Never differentiate with both r and h mixed.',
      mnemonic: 'Optimization Proof: "Form Equation ⟹ dV/dx = 0 ⟹ Test d²V/dx² < 0 ⟹ Substitute Back!"'
    }
  );

  // --- 4. COMPUTER SCIENCE (083) ---
  Q['Relational Databases and SQL'] = Q['Relational Databases and SQL'] || [];
  Q['Relational Databases and SQL'].push(
    {
      id: 'cs-10y-01',
      marks: 4,
      type: 'SQL Aggregates & Joins',
      prob: '🔥 100% Guaranteed CBSE Board Question (2024, 2023, 2020)',
      stem: 'Consider tables <code>DOCTOR (DocId, Name, Dept, Salary)</code> and <code>PATIENT (PatNo, PatName, DocId, Fee)</code>.<br>Write SQL queries for:<br>(i) Display the Department and average salary of doctors in each department.<br>(ii) Display departments having more than 2 doctors.<br>(iii) Increase the salary by 10% for doctors in "Cardiology".<br>(iv) Display Patient Name, Doctor Name, and Fee using an Equi-Join.',
      modelAnswer: `<div class="space-y-2 bg-slate-900 text-slate-100 p-2.5 rounded font-mono text-xs">
        <p><strong>(i) Average Salary by Department:</strong><br>
        <code>SELECT Dept, AVG(Salary) FROM DOCTOR GROUP BY Dept;</code></p>
        <p><strong>(ii) Filter Departments with > 2 Doctors:</strong><br>
        <code>SELECT Dept, COUNT(*) FROM DOCTOR GROUP BY Dept HAVING COUNT(*) > 2;</code></p>
        <p><strong>(iii) Update Salary in Cardiology:</strong><br>
        <code>UPDATE DOCTOR SET Salary = Salary * 1.10 WHERE Dept = 'Cardiology';</code></p>
        <p><strong>(iv) Two-Table Equi-Join Query:</strong><br>
        <code>SELECT P.PatName, D.Name, P.Fee FROM PATIENT P, DOCTOR D WHERE P.DocId = D.DocId;</code></p>
      </div>`,
      stepMarking: '[1 Mark] Correct GROUP BY query | [1 Mark] Correct HAVING COUNT(*) > 2 | [1 Mark] Correct UPDATE statement | [1 Mark] Correct 2-table Equi-Join syntax',
      pacing: '6 min',
      competency: 'Relational Database Queries',
      cautionTrap: 'Using WHERE COUNT(*) > 2 instead of HAVING. WHERE filters individual rows before grouping; HAVING filters groups after grouping.',
      topperTip: 'Table aliases (P, D) make join syntax crisp and prevent column ambiguity errors on DocId.',
      mnemonic: 'SQL Order of Execution: "FROM ⟹ WHERE ⟹ GROUP BY ⟹ HAVING ⟹ SELECT ⟹ ORDER BY"!'
    }
  );

  // --- 5. ENGLISH CORE (301) ---
  Q['The Last Lesson'] = Q['The Last Lesson'] || [];
  Q['The Last Lesson'].push(
    {
      id: 'eng-10y-01',
      marks: 5,
      type: 'Thematic Essay on Language & Freedom',
      prob: '🔥 Repeated in CBSE 2024, 2023, 2019, 2016',
      stem: '"When a people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison." Comment on M. Hamel\'s statement in the light of Alphonse Daudet\'s "The Last Lesson". How does the story highlight the danger of linguistic chauvinism and procrastination in learning?',
      modelAnswer: `<div class="space-y-2 text-xs">
        <p>Alphonse Daudet\'s <em>"The Last Lesson"</em> set during the Franco-Prussian War (1870–71) powerfully explores the profound relationship between mother tongue, national identity, and freedom.<br><br>
        • <strong>Linguistic Chauvinism:</strong> The Prussian order requiring only German to be taught in the schools of Alsace and Lorraine exemplifies cultural aggression—erasing an identity by outlawing its mother tongue.<br><br>
        • <strong>"Key to Their Prison":</strong> M. Hamel refers to French as "the most beautiful, clearest, and most logical language in the world." He asserts that holding fast to one's native language preserves cultural consciousness. As long as enslaved people maintain linguistic solidarity, their collective pride and will to resist remain unbreakable.<br><br>
        • <strong>Procrastination as Human Tragedy:</strong> Both Franz and the villagers realize too late that they habitually postponed learning: <em>"Bah! I've plenty of time. I'll learn it tomorrow."</em> The sudden ban exposes how precious everyday heritage is only when it is irrevocably lost.<br><br>
        • <strong>The Final Act of Defiance:</strong> Overcome with grief, M. Hamel writes in giant letters across the chalkboard: <strong>"Vive La France!"</strong>—a symbolic declaration that language outlives foreign occupation.</p>
      </div>`,
      stepMarking: '[1.5 Marks] Analysis of linguistic chauvinism & Prussian order | [1.5 Marks] Explanation of "key to their prison" metaphor | [1 Mark] Critique of human procrastination | [1 Mark] M. Hamel\'s final gesture Vive La France',
      pacing: '10 min',
      competency: 'Literary Evaluation & Theme',
      cautionTrap: 'Writing general plot summary without addressing the core prompt: "linguistic chauvinism" and "key to their prison" metaphor.',
      topperTip: 'Use strong thematic phrases: "cultural hegemony", "linguistic imperialism", "collective complacency", and quote "Vive La France!" at the conclusion.',
      mnemonic: 'Last Lesson Themes: Language = Identity, Procrastination = Regret, Defiance = Vive La France!'
    }
  );


  // =========================================================================
  // AUTHENTIC 10-YEAR CBSE BOARD EXAM QUESTIONS (2015–2024)
  // Across Physics (042), Chemistry (043), Math (041), CS (083), English (301)
  // =========================================================================

  function addTenYearQuestions() {
    function pushQ(chapter, qObj) {
      if (!Q[chapter]) Q[chapter] = [];
      // avoid duplicates by id
      if (!Q[chapter].some(existing => existing.id === qObj.id)) {
        Q[chapter].push(qObj);
      }
    }

    // --- PHYSICS 042 (2015–2024) ---
    pushQ('Alternating Current', {
      id: 'phy-ac-10y-2024',
      marks: 5,
      year: 'CBSE 2024 (Set 55/1/1)',
      type: 'Derivation & Phasor Analysis',
      pacing: '11 min',
      competency: 'Circuit Analysis & Derivation',
      stem: 'A series LCR circuit with R = 20 Ω, L = 1.5 H, and C = 35 μF is connected to a variable frequency 220 V ac supply.<br>(a) Derive the expression for the impedance Z and phase angle φ using a phasor diagram.<br>(b) Determine the source frequency which drives the circuit to resonance and calculate the current at resonance.',
      diagram: svg(540, 180, `
        <rect x="20" y="20" width="500" height="140" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Series LCR Phasor Diagram at Resonance</text>
        <line x1="120" y1="100" x2="420" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,4"/>
        <line x1="270" y1="35" x2="270" y2="155" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,4"/>
        <path d="M 270 100 L 390 100" fill="none" stroke="#16a34a" stroke-width="3" marker-end="url(#ar)"/>
        <text x="395" y="95" font-size="11" font-weight="bold" fill="#15803d">V_R = I·R (in-phase)</text>
        <path d="M 270 100 L 270 45" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#ar)"/>
        <text x="280" y="55" font-size="10" font-weight="bold" fill="#1d4ed8">V_L = I·X_L (+90°)</text>
        <path d="M 270 100 L 270 150" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ar)"/>
        <text x="280" y="145" font-size="10" font-weight="bold" fill="#b91c1c">V_C = I·X_C (-90°)</text>
        <circle cx="270" cy="100" r="4" fill="#0f172a"/>
        <text x="250" y="95" font-size="10" font-weight="bold" fill="#0f172a">I</text>
      `),
      modelAnswer: `<div class="space-y-2 text-xs">
        <p><strong>(a) Impedance Derivation:</strong><br>
        In series LCR circuit, current I is common. Phasors:<br>
        • V_R = I R is in phase with I.<br>
        • V_L = I X_L leads I by π/2.<br>
        • V_C = I X_C lags I by π/2.<br>
        Resultant voltage V = √[V_R² + (V_L - V_C)²] = I √[R² + (X_L - X_C)²].<br>
        Therefore, <strong>Z = √[R² + (ωL - 1/ωC)²]</strong> and phase angle <strong>tan φ = (X_L - X_C) / R</strong>.<br><br>
        <strong>(b) Resonant Frequency & Current:</strong><br>
        At resonance, X_L = X_C ⟹ ω_0 = 1/√(LC).<br>
        ω_0 = 1 / √[1.5 × 35 × 10⁻⁶] = 1 / √[5.25 × 10⁻⁵] ≈ 138 rad/s (f_0 = ω_0 / 2π ≈ 22 Hz).<br>
        Impedance Z_min = R = 20 Ω.<br>
        Current at resonance: <strong>I_rms = V_rms / R = 220 / 20 = 11 A</strong>.</p>
      </div>`,
      stepMarking: '[1.5 Marks] Phasor diagram with labeled V_R, V_L, V_C | [1.5 Marks] Derivation of Z = √[R² + (X_L - X_C)²] | [1 Mark] Resonance condition ω_0 = 1/√(LC) calculation | [1 Mark] Evaluation of I_rms = 11 A',
      cautionTrap: 'Confusing (V_L - V_C) with (V_C - V_L) when defining inductive vs capacitive dominance. State explicitly that inductive circuit has V_L > V_C.',
      topperTip: 'Draw the right-angled impedance triangle with sides R, (X_L - X_C), and hypotenuse Z to corroborate the phasor diagram. Box final I_rms = 11 A.',
      mnemonic: 'CIVIL: In Capacitor (C), I leads V. In Inductor (L), V leads I.'
    });

    pushQ('Alternating Current', {
      id: 'phy-ac-10y-2020',
      marks: 3,
      year: 'CBSE 2020 (Delhi Set 1)',
      type: 'Device Principle & Energy Losses',
      pacing: '5 min',
      competency: 'Electromagnetic Devices',
      stem: 'State the principle of a step-up transformer. Explain four main causes of energy losses in a real transformer and describe how each is minimized in commercial designs.',
      diagram: svg(540, 160, `
        <rect x="20" y="20" width="500" height="120" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Commercial Transformer Laminated Core Design</text>
        <rect x="50" y="55" width="440" height="70" rx="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
        <line x1="120" y1="55" x2="120" y2="125" stroke="#94a3b8" stroke-width="2"/>
        <line x1="190" y1="55" x2="190" y2="125" stroke="#94a3b8" stroke-width="2"/>
        <line x1="260" y1="55" x2="260" y2="125" stroke="#94a3b8" stroke-width="2"/>
        <line x1="330" y1="55" x2="330" y2="125" stroke="#94a3b8" stroke-width="2"/>
        <line x1="400" y1="55" x2="400" y2="125" stroke="#94a3b8" stroke-width="2"/>
        <text x="140" y="95" font-size="11" font-weight="bold" fill="#0f172a">Insulated Thin Iron Laminations to Break Eddy Current Loops</text>
      `),
      modelAnswer: `<div class="space-y-2 text-xs">
        <p><strong>Principle:</strong> Based on <strong>Mutual Induction</strong>—when an alternating current flows through primary winding, time-varying magnetic flux is induced in the soft iron core, generating an induced EMF in secondary coil: <strong>Es / Ep = Ns / Np</strong>.<br><br>
        <strong>Four Major Energy Losses & Mitigation:</strong><br>
        1. <strong>Eddy Current Loss:</strong> Induced circulating currents in core produce Joule heating. <em>Mitigation:</em> Using thin insulated laminated sheets of soft iron.<br>
        2. <strong>Joule Heating (Copper Loss):</strong> Resistance of windings dissipates I²R heat. <em>Mitigation:</em> Using thick copper wires for high-current windings.<br>
        3. <strong>Hysteresis Loss:</strong> Repeated cyclic magnetization and demagnetization of core. <em>Mitigation:</em> Using core material with narrow hysteresis loop (soft iron / permalloy).<br>
        4. <strong>Flux Leakage:</strong> Not all primary flux links with secondary. <em>Mitigation:</em> Winding secondary directly over primary coil in a shell-type core.</p>
      </div>`,
      stepMarking: '[1 Mark] Statement of Mutual Induction principle with formula | [2 Marks] 0.5M each for identifying 4 losses with their specific engineering mitigations',
      cautionTrap: 'Writing generic terms like "heat loss" without identifying the physical mechanism (Eddy currents vs Copper resistance vs Hysteresis).',
      topperTip: 'Structure into a clean 4-row tabular format: Loss | Physical Cause | Engineering Solution.',
      mnemonic: 'Transformer Losses = E-C-H-F: Eddy, Copper, Hysteresis, Flux.'
    });

    pushQ('Semiconductor Electronics', {
      id: 'phy-semi-10y-2024',
      marks: 3,
      year: 'CBSE 2024 (Set 55/2/1)',
      type: 'V-I Characteristics & Junction Physics',
      pacing: '5 min',
      competency: 'Semiconductor Device Physics',
      stem: 'Draw circuit diagrams for studying the V-I characteristics of a p-n junction diode in (i) forward bias, and (ii) reverse bias. Sketch typical forward and reverse characteristic curves, indicating threshold (knee) voltage and breakdown voltage.',
      diagram: svg(540, 180, `
        <rect x="20" y="20" width="500" height="140" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">p-n Junction Diode V-I Characteristics</text>
        <line x1="80" y1="100" x2="460" y2="100" stroke="#64748b" stroke-width="1.5"/>
        <line x1="270" y1="30" x2="270" y2="150" stroke="#64748b" stroke-width="1.5"/>
        <!-- Forward curve -->
        <path d="M 270 100 Q 330 100 350 40" fill="none" stroke="#16a34a" stroke-width="2.5"/>
        <text x="360" y="45" font-size="10" font-weight="bold" fill="#15803d">Forward Current I_F (mA)</text>
        <text x="325" y="115" font-size="9" fill="#047857">V_knee (0.7V Si)</text>
        <!-- Reverse curve -->
        <path d="M 270 100 L 140 105 L 140 145" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <text x="80" y="145" font-size="10" font-weight="bold" fill="#b91c1c">Reverse Breakdown V_br</text>
        <text x="145" y="118" font-size="9" fill="#b91c1c">I_R (μA)</text>
      `),
      modelAnswer: `<div class="space-y-2 text-xs">
        <p><strong>(i) Forward Bias Circuit:</strong> p-terminal connected to positive battery terminal, n-terminal to negative through milliammeter (mA) and series rheostat.<br>
        <strong>(ii) Reverse Bias Circuit:</strong> p-terminal to negative, n-terminal to positive through microammeter (μA).<br><br>
        <strong>Key Curve Features:</strong><br>
        • <strong>Knee (Threshold) Voltage V_k:</strong> In forward bias, current remains negligible until applied voltage overcomes barrier potential (~0.7V for Silicon, ~0.3V for Germanium), after which current rises exponentially.<br>
        • <strong>Reverse Saturation Current:</strong> In reverse bias, minor current of few μA flows due to minority carrier drift, virtually independent of reverse voltage until breakdown voltage V_br where current increases sharply.</p>
      </div>`,
      stepMarking: '[1 Mark] Correct forward and reverse circuit schematics | [1 Mark] Accurate V-I graph with correct units (mA vs μA) | [1 Mark] Explicit labeling of knee voltage and breakdown voltage',
      cautionTrap: 'Labeling reverse current in milliamperes (mA) instead of microamperes (μA). Reverse current is orders of magnitude smaller!',
      topperTip: 'Explicitly state the barrier potentials for both Silicon (0.7 V) and Germanium (0.3 V). Draw mA on positive y-axis and μA on negative y-axis.',
      mnemonic: 'Forward = Milliamps (mA) exponential; Reverse = Microamps (μA) flatline.'
    });

    pushQ('Ray Optics and Optical Instruments', {
      id: 'phy-ro-10y-2024',
      marks: 5,
      year: 'CBSE 2024 (Set 55/1/1)',
      pacing: '12 min',
      type: 'Optical Instrument Derivation',
      competency: 'Ray Optics Derivation',
      stem: 'Draw a labeled ray diagram of a compound microscope showing image formation at near point D. Derive the expression for its total angular magnification. Why should both the objective and eyepiece lenses have small focal lengths?',
      diagram: svg(540, 200, `
        <rect x="20" y="20" width="500" height="160" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Compound Microscope Ray Diagram (Final Image at D)</text>
        <line x1="40" y1="100" x2="480" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Objective Lens -->
        <ellipse cx="140" cy="100" rx="8" ry="45" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="120" y="45" font-size="9" font-weight="bold" fill="#0369a1">Objective (f_o, small)</text>
        <!-- Eyepiece Lens -->
        <ellipse cx="360" cy="100" rx="12" ry="60" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="340" y="30" font-size="9" font-weight="bold" fill="#0369a1">Eyepiece (f_e)</text>
        <!-- Rays -->
        <path d="M 90 85 L 140 85 L 260 120" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <path d="M 90 85 L 140 100 L 260 120" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="260" y1="100" x2="260" y2="120" stroke="#dc2626" stroke-width="2"/>
        <text x="265" y="115" font-size="9" font-weight="bold" fill="#b91c1c">Intermediate Image A\'B\'</text>
      `),
      modelAnswer: `<div class="space-y-2 text-xs">
        <p><strong>Magnification Derivation:</strong><br>
        Total magnification is product of linear magnification of objective (m_o) and angular magnification of eyepiece (m_e):<br>
        <strong>m = m_o × m_e</strong>.<br>
        • Objective produces real, inverted image: m_o = v_o / u_o ≈ -L / f_o (where L is tube length).<br>
        • Eyepiece acts as simple magnifier with image at near point D: m_e = 1 + D / f_e.<br>
        Therefore, <strong>m = -(L / f_o)(1 + D / f_e)</strong>.<br><br>
        <strong>Why Small Focal Lengths:</strong><br>
        To obtain high magnification m, both f_o and f_e appear in the denominators. Hence, reducing f_o and f_e maximizes total magnification.</p>
      </div>`,
      stepMarking: '[2 Marks] Accurately labeled ray diagram with arrows showing ray paths | [2 Marks] Step-by-step derivation of m = -(L/f_o)(1 + D/f_e) | [1 Mark] Physical justification for small f_o and f_e',
      cautionTrap: 'Omitting arrows on light rays forfeits 1 full mark automatically in CBSE evaluation.',
      topperTip: 'Draw arrowheads on EVERY segment of the ray (before lens, between lenses, and entering eye). Clearly mark object AB, intermediate real image A\'B\', and final virtual magnified image A\'\'B\'\'.',
      mnemonic: 'Microscope = Objective is small, Eyepiece is tall; f_o & f_e both small!'
    });

    // --- CHEMISTRY 043 (2015–2024) ---
    pushQ('Electrochemistry', {
      id: 'chem-el-10y-2024',
      marks: 5,
      year: 'CBSE 2024 (Set 56/1/1)',
      pacing: '11 min',
      type: 'Nernst Equation & Gibbs Free Energy',
      competency: 'Quantitative Electrochemistry',
      stem: 'Calculate the EMF and ΔG° for the electrochemical cell at 298 K:<br><code>Mg(s) | Mg²⁺(0.001 M) || Cu²⁺(0.0001 M) | Cu(s)</code><br>Given: E°(Mg²⁺/Mg) = -2.37 V, E°(Cu²⁺/Cu) = +0.34 V, F = 96,500 C mol⁻¹.',
      diagram: svg(540, 160, `
        <rect x="20" y="20" width="500" height="120" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
        <text x="35" y="42" font-size="12" font-weight="bold" fill="#1e293b">Galvanic Cell Nernst Calculation Pipeline</text>
        <rect x="35" y="60" width="130" height="65" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="45" y="80" font-size="10" font-weight="bold" fill="#312e81">1. Standard E°_cell</text>
        <text x="45" y="98" font-size="9" fill="#1e1b4b">E°_cathode - E°_anode</text>
        <text x="45" y="115" font-size="9" font-weight="bold" fill="#4338ca">= 0.34 - (-2.37) = 2.71 V</text>
        <path d="M 165 92 L 205 92" fill="none" stroke="#0d9488" stroke-width="2" marker-end="url(#ar)"/>
        <rect x="210" y="60" width="140" height="65" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="220" y="80" font-size="10" font-weight="bold" fill="#78350f">2. Nernst Term</text>
        <text x="220" y="98" font-size="9" fill="#92400e">Q = [Mg²⁺]/[Cu²⁺] = 10</text>
        <text x="220" y="115" font-size="9" font-weight="bold" fill="#b45309">- (0.059/2) log(10) = -0.0295 V</text>
        <path d="M 350 92 L 390 92" fill="none" stroke="#0d9488" stroke-width="2" marker-end="url(#ar)"/>
        <rect x="395" y="60" width="115" height="65" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
        <text x="405" y="80" font-size="10" font-weight="bold" fill="#14532d">3. Final E_cell</text>
        <text x="405" y="98" font-size="9" fill="#166534">E = 2.71 - 0.0295</text>
        <text x="405" y="115" font-size="10" font-weight="bold" fill="#15803d">E_cell = 2.68 V</text>
      `),
      modelAnswer: `<div class="space-y-2 text-xs">
        <p><strong>Cell Reaction:</strong> Mg(s) + Cu²⁺(aq) ⟶ Mg²⁺(aq) + Cu(s) (n = 2 electrons transferred).<br><br>
        <strong>1. Standard Cell Potential E°_cell:</strong><br>
        E°_cell = E°_cathode - E°_anode = 0.34 V - (-2.37 V) = <strong>+2.71 V</strong>.<br><br>
        <strong>2. EMF via Nernst Equation:</strong><br>
        E_cell = E°_cell - (0.0591 / n) log([Mg²⁺] / [Cu²⁺])<br>
        = 2.71 - (0.0591 / 2) log(10⁻³ / 10⁻⁴)<br>
        = 2.71 - 0.02955 log(10) = 2.71 - 0.02955 = <strong>2.68 V</strong>.<br><br>
        <strong>3. Standard Gibbs Free Energy ΔG°:</strong><br>
        ΔG° = -n F E°_cell = -2 × 96500 C mol⁻¹ × 2.71 V = <strong>-523,030 J mol⁻¹ = -523.03 kJ mol⁻¹</strong>.</p>
      </div>`,
      stepMarking: '[1 Mark] Net cell redox equation with n = 2 | [1 Mark] E°_cell = 2.71 V | [1.5 Marks] Nernst equation substitution and evaluation of E_cell = 2.68 V | [1.5 Marks] ΔG° = -nFE° calculation = -523.03 kJ/mol',
      cautionTrap: 'Using E_cell instead of E°_cell in ΔG° formula! ΔG° requires E°_cell. Forgetting the negative sign in ΔG° loses 0.5 mark.',
      topperTip: 'Clearly state n = 2 explicitly. Give ΔG° in BOTH Joules (J/mol) and kiloJoules (kJ/mol) to guarantee full marks under any evaluation key.',
      mnemonic: 'Anode Oxidation (-), Cathode Reduction (+): AnOx and RedCat.'
    });

    pushQ('d- and f-Block Elements', {
      id: 'chem-df-10y-2024',
      marks: 3,
      year: 'CBSE 2024 (Set 56/2/1)',
      pacing: '5 min',
      type: 'Reasoning & Lanthanoid Contraction',
      competency: 'Inorganic Trends & Mechanisms',
      stem: 'Account for the following observations:<br>(a) Zr (4d series) and Hf (5d series) exhibit almost identical covalent and ionic radii.<br>(b) Transition elements exhibit high enthalpies of atomization.<br>(c) Mn²⁺ compounds are more stable than Fe²⁺ towards oxidation to their +3 state.',
      modelAnswer: `<div class="space-y-2 text-xs">
        <p>• <strong>(a) Lanthanoid Contraction:</strong> Between La and Hf, 14 electrons enter the inner 4f subshell. Because 4f orbitals have a diffused shape, their shielding effect is very poor. Consequently, the effective nuclear charge (Z_eff) increases significantly, causing atomic shrinkage that exactly cancels the expected increase in size from 4d to 5d. Hence Zr (160 pm) and Hf (159 pm) have virtually identical radii.<br><br>
        • <strong>(b) High Enthalpy of Atomization:</strong> Transition metals have large numbers of unpaired electrons in their (n-1)d orbitals which participate in interatomic metallic bonding alongside ns electrons, creating exceptionally strong metallic lattice bonds.<br><br>
        • <strong>(c) Mn²⁺ Stability:</strong> Mn²⁺ has a 3d⁵ configuration which is exactly half-filled, possessing extra stability due to maximum exchange energy. Fe²⁺ has 3d⁶, which readily loses an electron to attain the stable half-filled 3d⁵ state of Fe³⁺.</p>
      </div>`,
      stepMarking: '[1 Mark] Explanation of Lanthanoid contraction with poor 4f shielding | [1 Mark] Participation of (n-1)d unpaired electrons in metallic bonding | [1 Mark] Half-filled 3d⁵ configuration stability comparison',
      cautionTrap: 'Simply writing "due to lanthanoid contraction" without explaining WHY (poor shielding of 14 inner 4f electrons leading to higher effective nuclear charge).',
      topperTip: 'Write the electronic configurations: Mn²⁺ = [Ar] 3d⁵ (half-filled, stable) and Fe²⁺ = [Ar] 3d⁶ (unstable relative to 3d⁵ Fe³⁺).',
      mnemonic: '4f Shielding is Poor ⟹ Nuclear Pull is Pure ⟹ Radii Contract for Sure!'
    });

    // --- MATHEMATICS 041 (2015–2024) ---
    pushQ('Matrices and Determinants', {
      id: 'math-mat-10y-2024',
      marks: 5,
      year: 'CBSE 2024 (Set 65/1/1)',
      pacing: '12 min',
      type: 'Matrix Inversion Method',
      competency: 'Algebraic Solving',
      stem: 'Solve the following system of linear equations using the matrix method:<br><code>x - y + 2z = 7</code><br><code>3x + 4y - 5z = -5</code><br><code>2x - y + 3z = 12</code>',
      modelAnswer: `<div class="space-y-2 text-xs">
        <p><strong>Matrix Form AX = B:</strong><br>
        A = [[1, -1, 2], [3, 4, -5], [2, -1, 3]], X = [[x], [y], [z]], B = [[7], [-5], [12]].<br><br>
        <strong>1. Determinant |A|:</strong><br>
        |A| = 1(12 - 5) - (-1)(9 - (-10)) + 2(-3 - 8) = 1(7) + 1(19) + 2(-11) = 7 + 19 - 22 = <strong>4 ≠ 0</strong>.<br>
        Since |A| ≠ 0, A⁻¹ exists and system has a unique solution: X = A⁻¹ B.<br><br>
        <strong>2. Cofactors & Adjoint:</strong><br>
        C₁₁ = 7, C₁₂ = -19, C₁₃ = -11<br>
        C₂₁ = -(-3 + 2) = 1, C₂₂ = 3 - 4 = -1, C₂₃ = -(-1 + 2) = -1<br>
        C₃₁ = 5 - 8 = -3, C₃₂ = -(-5 - 6) = 11, C₃₃ = 4 - (-3) = 7<br>
        adj(A) = [[7, 1, -3], [-19, -1, 11], [-11, -1, 7]].<br><br>
        <strong>3. Solution X = (1/|A|) adj(A) B:</strong><br>
        X = (1/4) [[7(7) + 1(-5) + (-3)(12)], [-19(7) + (-1)(-5) + 11(12)], [-11(7) + (-1)(-5) + 7(12)]]<br>
        X = (1/4) [[49 - 5 - 36], [-133 + 5 + 132], [-77 + 5 + 84]] = (1/4) [[8], [4], [12]] = <strong>[[2], [1], [3]]</strong>.<br>
        Therefore: <strong>x = 2, y = 1, z = 3</strong>.</p>
      </div>`,
      stepMarking: '[1 Mark] Correct formulation AX = B and |A| = 4 | [2 Marks] Evaluation of all 9 cofactors and transposing to find adj(A) | [1 Mark] Matrix multiplication adj(A)·B | [1 Mark] Final solution x=2, y=1, z=3 with verification',
      cautionTrap: 'Forgetting to TRANSPOSE the cofactor matrix to obtain adj(A). Cofactors form C_ij, while adj(A) = (C_ij)^T.',
      topperTip: 'Quickly substitute x=2, y=1, z=3 back into equation 1: 2 - 1 + 2(3) = 7 (True!). Write "Verified in Equation 1" to reassure the examiner.',
      mnemonic: 'Adjoint = Transpose of Cofactors: C_ij ⟶ Transpose ⟶ adj(A).'
    });

    pushQ('Integrals', {
      id: 'math-int-10y-2024',
      marks: 5,
      year: 'CBSE 2024 (Set 65/2/1)',
      pacing: '10 min',
      type: 'Definite Integral Properties (King\'s Rule)',
      competency: 'Integral Calculus',
      stem: 'Evaluate the definite integral:<br><code>I = ∫₀^(π/2) (sin² x) / (sin x + cos x) dx</code>.',
      modelAnswer: `<div class="space-y-2 text-xs">
        <p><strong>Applying Property ∫₀^a f(x)dx = ∫₀^a f(a - x)dx:</strong><br>
        I = ∫₀^(π/2) [sin²(π/2 - x)] / [sin(π/2 - x) + cos(π/2 - x)] dx<br>
        I = ∫₀^(π/2) (cos² x) / (cos x + sin x) dx  --- (2)<br><br>
        <strong>Adding (1) and (2):</strong><br>
        2I = ∫₀^(π/2) (sin² x + cos² x) / (sin x + cos x) dx = ∫₀^(π/2) 1 / (sin x + cos x) dx<br><br>
        Divide numerator and denominator by √2:<br>
        2I = (1/√2) ∫₀^(π/2) dx / [sin(x + π/4)] = (1/√2) ∫₀^(π/2) cosec(x + π/4) dx<br>
        = (1/√2) [ln |cosec(x + π/4) - cot(x + π/4)|]₀^(π/2)<br>
        Upper limit (x = π/2): cosec(3π/4) - cot(3π/4) = √2 - (-1) = √2 + 1.<br>
        Lower limit (x = 0): cosec(π/4) - cot(π/4) = √2 - 1.<br>
        2I = (1/√2) ln[(√2 + 1) / (√2 - 1)] = (1/√2) ln(√2 + 1)² = (2/√2) ln(√2 + 1) = √2 ln(√2 + 1).<br>
        Therefore, <strong>I = (1/√2) ln(√2 + 1)</strong>.</p>
      </div>`,
      stepMarking: '[1.5 Marks] Application of King\'s rule and addition to obtain 2I | [1.5 Marks] Converting denominator to √2 sin(x + π/4) | [1 Mark] Integration to ln|cosec - cot| | [1 Mark] Correct limit substitution and simplification',
      cautionTrap: 'Forgetting that King\'s rule gives 2I, not I! Always divide by 2 in the final step.',
      topperTip: 'Rationalize (√2 + 1)/(√2 - 1) = (√2 + 1)² so you can bring the exponent 2 in front of the logarithm to cancel the factor of 2 cleanly.',
      mnemonic: 'King\'s Rule: f(x) ⟶ f(a - x) ⟹ Add them to kill the denominator!'
    });

    // --- COMPUTER SCIENCE 083 (2015–2024) ---
    pushQ('Data Structures: Stacks', {
      id: 'cs-stack-10y-2024',
      marks: 3,
      year: 'CBSE 2024 (Set 083 Q28)',
      pacing: '5 min',
      type: 'List Implementation of Stack',
      competency: 'Algorithm Implementation',
      stem: 'Write functions in Python to perform the following operations on a stack named <code>PackageStack</code> containing records of packages as lists <code>[Package_Id, City, Weight]</code>:<br>(a) <code>Push_Package(PackageStack, Package)</code> to push only packages weighing more than 10 kg.<br>(b) <code>Pop_Package(PackageStack)</code> to pop and return the package from the stack, printing "Underflow" if empty.',
      modelAnswer: `<div class="space-y-2 text-xs">
        <pre class="bg-slate-900 text-emerald-400 p-2 rounded">
def Push_Package(PackageStack, Package):
    # Package format: [Package_Id, City, Weight]
    if Package[2] > 10:
        PackageStack.append(Package)
        print("Pushed successfully:", Package[0])
    else:
        print("Package rejected: Weight <= 10kg")

def Pop_Package(PackageStack):
    if len(PackageStack) == 0:  # or if not PackageStack:
        print("Underflow: Stack is empty!")
        return None
    else:
        popped = PackageStack.pop()
        print("Popped package:", popped)
        return popped
        </pre>
      </div>`,
      stepMarking: '[1.5 Marks] Push function with weight condition check and append() | [1.5 Marks] Pop function with empty Underflow check and pop()',
      cautionTrap: 'Using PackageStack.pop(0) instead of PackageStack.pop(). A stack is LIFO (Last In First Out); pop(0) removes from the beginning (Queue FIFO), which forfeits all marks!',
      topperTip: 'Always check empty condition before calling pop(): "if not PackageStack: print(\"Underflow\")".',
      mnemonic: 'Stack = LIFO = append() & pop() at the END of list.'
    });

    pushQ('Relational Databases and SQL', {
      id: 'cs-sql-10y-2024',
      marks: 4,
      year: 'CBSE 2024 (Set 083 Q31)',
      pacing: '8 min',
      type: 'SQL Aggregate Queries & Joins',
      competency: 'Relational Database Management',
      stem: 'Consider the tables <code>EMPLOYEE (EmpId, Name, DeptId, Salary)</code> and <code>DEPARTMENT (DeptId, DeptName, City)</code>. Write SQL queries for:<br>(a) Display Department Name and total salary paid to each department with total salary > 1,50,000.<br>(b) Display Employee Name, Department Name, and City for all employees earning more than 50,000.<br>(c) Increase salary by 10% for all employees working in \'Accounts\' department.<br>(d) Count the number of distinct cities where departments are located.',
      modelAnswer: `<div class="space-y-2 text-xs">
        <pre class="bg-slate-900 text-cyan-400 p-2 rounded">
-- (a) GROUP BY with HAVING aggregate filter:
SELECT D.DeptName, SUM(E.Salary)
FROM EMPLOYEE E, DEPARTMENT D
WHERE E.DeptId = D.DeptId
GROUP BY D.DeptName
HAVING SUM(E.Salary) > 150000;

-- (b) Two-Table Equi-Join:
SELECT E.Name, D.DeptName, D.City
FROM EMPLOYEE E, DEPARTMENT D
WHERE E.DeptId = D.DeptId AND E.Salary > 50000;

-- (c) UPDATE with Subquery:
UPDATE EMPLOYEE
SET Salary = Salary * 1.10
WHERE DeptId = (SELECT DeptId FROM DEPARTMENT WHERE DeptName = \'Accounts\');

-- (d) COUNT DISTINCT:
SELECT COUNT(DISTINCT City) FROM DEPARTMENT;
        </pre>
      </div>`,
      stepMarking: '[1 Mark] Correct GROUP BY and HAVING query | [1 Mark] Correct 2-table Equi-Join WHERE condition | [1 Mark] Correct UPDATE statement with subquery | [1 Mark] Correct COUNT(DISTINCT City)',
      cautionTrap: 'Using WHERE instead of HAVING to filter on SUM(Salary). WHERE filters individual rows; HAVING filters grouped aggregate rows.',
      topperTip: 'Always specify the join condition E.DeptId = D.DeptId in multi-table queries to avoid Cartesian product (Cross Join).',
      mnemonic: 'WHERE filters rows BEFORE grouping; HAVING filters groups AFTER grouping.'
    });

    // --- ENGLISH CORE 301 (2015–2024) ---
    pushQ('Writing Skills Box Formats', {
      id: 'eng-ws-10y-2024',
      marks: 4,
      year: 'CBSE 2024 (Set 301 Q3)',
      pacing: '7 min',
      type: 'Formal Notice Writing',
      competency: 'Format & Concise Expression',
      stem: 'You are Rohit/Rachna, Cultural Secretary of Springdales School, Delhi. Draft a notice in not more than 50 words inviting students of Classes XI and XII to audition for the Inter-School Western Musical Fest "Harmony 2024". Mention date, venue, time, and eligibility.',
      diagram: svg(540, 180, `
        <rect x="20" y="20" width="500" height="140" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
        <text x="270" y="45" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">SPRINGDALES SCHOOL, DELHI</text>
        <text x="270" y="65" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle" letter-spacing="3">NOTICE</text>
        <text x="35" y="82" font-size="9" font-weight="bold" fill="#475569">14th October 2026</text>
        <text x="270" y="98" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">AUDITIONS: INTER-SCHOOL MUSICAL FEST "HARMONY 2024"</text>
        <text x="35" y="118" font-size="9" fill="#334155">Auditions for vocalists and instrumentalists (Classes XI & XII)...</text>
        <text x="35" y="142" font-size="9" font-weight="bold" fill="#0f172a">Rachna (Cultural Secretary)</text>
      `),
      modelAnswer: `<div class="space-y-2 text-xs border-2 border-slate-800 p-3 bg-white text-slate-900 font-sans">
        <div class="text-center font-bold tracking-wide">SPRINGDALES SCHOOL, DELHI</div>
        <div class="text-center font-extrabold text-red-600 tracking-widest my-1">NOTICE</div>
        <div class="text-xs text-slate-600 font-medium">14th October 2026</div>
        <div class="text-center font-bold underline my-1 text-blue-900">AUDITIONS: INTER-SCHOOL MUSICAL FEST "HARMONY 2024"</div>
        <p class="leading-relaxed">Auditions for vocalists and instrumentalists (Classes XI–XII) for the upcoming Inter-School Fest "Harmony 2024" will be held on <strong>22nd October 2026</strong> from <strong>9:00 AM to 1:00 PM</strong> in the <strong>School Auditorium</strong>. Interested students must register with the undersigned by 18th October with their choice of song/instrument.</p>
        <div class="mt-2 text-xs">
          <strong>Rachna</strong><br>Cultural Secretary
        </div>
      </div>`,
      stepMarking: '[1 Mark] Format: Box, Name of Institution, NOTICE, Date, Heading, Signatory | [2 Marks] Content: Date, Time, Venue, Eligibility, Registration deadline | [1 Mark] Expression: Grammatical accuracy, 50-word limit adherence',
      cautionTrap: 'Forgetting to enclose the entire Notice in a 4-sided rectangular box costs 1 full mark. Exceeding 50 words loses 0.5 mark for expression.',
      topperTip: 'Draw the box with a pencil and ruler AFTER writing the content so you never run out of room or leave awkward blank margins.',
      mnemonic: 'Notice Must Have: Box + Name + NOTICE + Date + Title + Content + Sign.'
    });

    pushQ('The Rattrap', {
      id: 'eng-rt-10y-2024',
      marks: 5,
      year: 'CBSE 2024 (Set 301 Q10)',
      pacing: '10 min',
      type: 'Character Transformation & Theme',
      competency: 'Character Analysis & Theme',
      stem: '"The world had of course never been very kind to him." How did the peddler\'s perception of the world change through his encounter with Edla Willmansson? Elucidate how empathy and respect restored his dignity in Selma Lagerlöf\'s "The Rattrap".',
      modelAnswer: `<div class="space-y-2 text-xs">
        <p>In Selma Lagerlöf\'s <em>"The Rattrap"</em>, the vagabond peddler views the entire world as a hostile, predatory trap whose riches and comforts are baits to ensnare vulnerable humans.<br><br>
        • <strong>Cynical Defense Mechanism:</strong> Hardened by poverty and rejection, the peddler steals thirty kronor from the generous old crofter and despises society.<br><br>
        • <strong>The Ironmaster vs. Edla:</strong> The ironmaster treats him with mistaken camaraderie when thinking him an old comrade, but reacts with immediate rage and threats of sheriff intervention upon discovering his true identity. In contrast, <strong>Edla Willmansson</strong> insists on honoring the promise of Christmas peace regardless of his social status.<br><br>
        • <strong>Transformative Grace:</strong> Edla addresses him with unconditional dignity, serves him Christmas dinner, and gifts him the suit. By treating him as a real captain, she elevates him above his base survival instincts.<br><br>
        • <strong>The Redemption:</strong> Transformed, the peddler leaves behind the stolen thirty kronor, a letter of repentance, and a gift of a small rattrap, signing as <strong>"Captain von Stahle"</strong>—proving that latent human goodness awakens through unconditional love and trust.</p>
      </div>`,
      stepMarking: '[1.5 Marks] Analysis of peddler\'s cynical world-as-rattrap philosophy | [1.5 Marks] Contrast between ironmaster\'s conditional regard vs Edla\'s unconditional compassion | [1 Mark] The redemption gesture of returning the 30 kronor | [1 Mark] Symbolic significance of signing as Captain von Stahle',
      cautionTrap: 'Writing purely descriptive story events without analyzing the psychological catalyst: dignity, unconditional trust, and moral elevation.',
      topperTip: 'Include the key phrase: "The essential goodness in human beings can be awakened through understanding and love." Quote the signature "Captain von Stahle".',
      mnemonic: 'Rattrap Redemption: Crofter (Temptation) ⟶ Ironmaster (Rejection) ⟶ Edla (Salvation).'
    });

    // --- 10-YEAR OFFICIAL CBSE IMPORTED QUESTION SETS ---
    pushQ("Electrostatic Potential and Capacitance", {
        "id": "phy-cap-10y-2024",
        "marks": 3,
        "year": "CBSE 2024 (Set 55/2/1 Q27)",
        "pacing": "5 min",
        "type": "Derivation & Dielectrics",
        "competency": "High-Order Derivation",
        "stem": "A parallel plate capacitor of plate area A and separation d is charged to potential V. A dielectric slab of dielectric constant K and thickness t (t < d) is inserted between the plates. Derive the expression for the capacitance of the capacitor.",
        "diagram": "<div class=\"practice-diagram-wrap my-3 flex justify-center\"><svg viewBox=\"0 0 400 160\" class=\"max-w-full h-auto rounded-lg bg-slate-50 border border-slate-200 shadow-sm\" style=\"max-height: 200px;\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"20\" width=\"10\" height=\"120\" fill=\"#3b82f6\"/><rect x=\"340\" y=\"20\" width=\"10\" height=\"120\" fill=\"#ef4444\"/><text x=\"45\" y=\"15\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e40af\">+Q</text><text x=\"335\" y=\"15\" font-size=\"11\" font-weight=\"bold\" fill=\"#b91c1c\">-Q</text><rect x=\"140\" y=\"30\" width=\"120\" height=\"100\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><text x=\"175\" y=\"85\" font-size=\"12\" font-weight=\"bold\" fill=\"#854d0e\">Dielectric (K, t)</text><line x1=\"60\" y1=\"145\" x2=\"340\" y2=\"145\" stroke=\"#475569\" stroke-width=\"1\" marker-start=\"url(#ar)\" marker-end=\"url(#ar)\"/><text x=\"195\" y=\"155\" font-size=\"11\" fill=\"#475569\">d</text></svg></div>",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Electric Fields:</strong><br>\n      • Electric field in vacuum region (thickness d - t): <code>E₀ = σ / ε₀ = Q / (A ε₀)</code>.<br>\n      • Electric field inside dielectric slab (thickness t): <code>E = E₀ / K = Q / (K A ε₀)</code>.</p>\n      <p><strong>2. Potential Difference:</strong><br>\n      Total potential difference V between plates is the work done per unit charge:<br>\n      <code>V = E₀ (d - t) + E t = E₀ [ (d - t) + t / K ] = [ Q / (A ε₀) ] [ d - t (1 - 1/K) ]</code>.</p>\n      <p><strong>3. Capacitance Expression:</strong><br>\n      <code>C = Q / V = (A ε₀) / [ d - t (1 - 1/K) ]</code>.<br>\n      When t = d (slab fills entire space): <code>C = K ε₀ A / d = K C₀</code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct electric fields in air and dielectric | [1 Mark] Total potential difference relation V = E₀(d - t) + Et | [1 Mark] Final boxed formula C = ε₀A / [d - t(1 - 1/K)]",
        "cautionTrap": "Confusing (1 - 1/K) with (1 + 1/K) or forgetting to state that field inside dielectric reduces by factor K.",
        "topperTip": "Always verify the limiting case: put t = d and check if C becomes K C₀, and put t = 0 to check if C becomes C₀.",
        "mnemonic": "Dielectric Slab Formula: C = ε₀A / (d - t + t/K)."
    });

    pushQ("Electrostatic Potential and Capacitance", {
        "id": "phy-cap-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 55/1/1 Q31)",
        "pacing": "10 min",
        "type": "Capacitor Energy & Redistribution",
        "competency": "Problem Solving & Energy Analysis",
        "stem": "(a) A capacitor of capacitance C₁ is charged to potential V. It is then disconnected from battery and connected across an uncharged capacitor C₂. Derive the expression for the common potential and loss in electrostatic energy on sharing charges.\\n(b) A 900 pF capacitor is charged by a 100 V battery. How much electrostatic energy is stored by it? If it is disconnected and connected to another uncharged 900 pF capacitor, find the total electrostatic energy stored by the system.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Common Potential & Energy Loss:</strong><br>\n      • Initial charge: <code>Q = C₁ V</code>. When connected in parallel, total charge remains conserved: <code>(C₁ + C₂) V_common = C₁ V  ⟹  V_common = (C₁ V) / (C₁ + C₂)</code>.<br>\n      • Initial energy: <code>U_i = ½ C₁ V²</code>.<br>\n      • Final energy: <code>U_f = ½ (C₁ + C₂) V_common² = ½ [ C₁² V² / (C₁ + C₂) ]</code>.<br>\n      • Energy loss: <code>ΔU = U_i - U_f = ½ [ C₁ C₂ / (C₁ + C₂) ] V²</code>. (This energy is dissipated as heat in connecting wires and EM radiation).</p>\n      <p><strong>(b) Numerical Calculation:</strong><br>\n      • Initial energy: <code>U_i = ½ C V² = ½ (900 × 10⁻¹² F) (100 V)² = 4.5 × 10⁻⁶ J = 4.5 μJ</code>.<br>\n      • When connected to identical uncharged capacitor (C₁ = C₂ = 900 pF):<br>\n      <code>V_common = V / 2 = 50 V</code>.<br>\n      • Final total energy: <code>U_f = ½ (C₁ + C₂) V_common² = ½ (1800 × 10⁻¹²) (50)² = 2.25 × 10⁻⁶ J = 2.25 μJ</code>.<br>\n      • Exactly half the initial energy (2.25 μJ) is lost!</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Derivation of common potential V_common | [1.5 Marks] Derivation of energy loss ΔU = ½ C₁C₂/(C₁+C₂) V² | [1 Mark] Initial energy 4.5 μJ calculation | [1 Mark] Final energy 2.25 μJ calculation",
        "cautionTrap": "Assuming charge is lost when capacitors are connected. Charge is strictly conserved; only mechanical/thermal electrostatic energy is lost.",
        "topperTip": "When two identical capacitors share charge, final energy is ALWAYS exactly half of the initial energy: U_final = U_initial / 2.",
        "mnemonic": "Identical Sharing: Voltage halves (V/2), Energy halves (U/2)!"
    });

    pushQ("Current Electricity", {
        "id": "phy-curr-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 55/1/2 Q29)",
        "pacing": "5 min",
        "type": "Derivation & Microscopic Ohm's Law",
        "competency": "Theoretical Derivation",
        "stem": "Define drift velocity of free electrons. Derive the relation between electric current I and drift velocity v_d. Hence deduce Ohm's law in the form I = V / R and write the expression for resistivity in terms of relaxation time τ.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Definition:</strong> Drift velocity (v_d) is the average velocity with which free electrons in a conductor get drifted towards the positive terminal under the influence of an external electric field.<br>\n      <code>v_d = (e E τ) / m = (e V τ) / (m l)</code>.</p>\n      <p><strong>2. Relation I = n e A v_d:</strong><br>\n      In time Δt, electrons travel distance <code>Δx = v_d Δt</code>.<br>\n      Volume containing these electrons = <code>A v_d Δt</code>.<br>\n      Total charge crossing area in time Δt: <code>ΔQ = n e A v_d Δt</code>.<br>\n      Therefore: <strong>I = ΔQ / Δt = n e A v_d</strong>.</p>\n      <p><strong>3. Deduction of Ohm's Law:</strong><br>\n      Substitute v_d: <code>I = n e A [ (e V τ) / (m l) ] = [ (n e² A τ) / (m l) ] V</code>.<br>\n      <code>V / I = (m l) / (n e² A τ) = R</code> (constant at given temperature).<br>\n      <strong>Resistivity: ρ = m / (n e² τ)</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Definition of drift velocity and formula | [1 Mark] Derivation of I = neAv_d | [1 Mark] Deduction of V = IR and resistivity ρ = m/(ne²τ)",
        "cautionTrap": "Omitting the negative sign or omitting relaxation time τ definition in v_d = eEτ/m.",
        "topperTip": "Explicitly identify every term in ρ = m/(ne²τ): m = electron mass, n = free electron density, e = elementary charge, τ = relaxation time.",
        "mnemonic": "Current Drift: I = n-e-A-v_d ('Never Eat Apples Very Dry')."
    });

    pushQ("Current Electricity", {
        "id": "phy-curr-10y-2020",
        "marks": 3,
        "year": "CBSE 2020 (Delhi Set 2 Q23)",
        "pacing": "6 min",
        "type": "Kirchhoff Rules & Wheatstone Bridge",
        "competency": "Circuit Analysis",
        "stem": "State Kirchhoff's rules for an electrical network. Using these rules, deduce the condition for a balanced Wheatstone bridge P/Q = R/S.",
        "diagram": "<div class=\"practice-diagram-wrap my-3 flex justify-center\"><svg viewBox=\"0 0 320 220\" class=\"max-w-full h-auto rounded-lg bg-slate-50 border border-slate-200 shadow-sm\" style=\"max-height: 200px;\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"160,20 260,110 160,200 60,110\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"100\" y=\"60\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e40af\">P</text><text x=\"210\" y=\"60\" font-size=\"12\" font-weight=\"bold\" fill=\"#1e40af\">Q</text><text x=\"100\" y=\"165\" font-size=\"12\" font-weight=\"bold\" fill=\"#047857\">R</text><text x=\"210\" y=\"165\" font-size=\"12\" font-weight=\"bold\" fill=\"#047857\">S</text><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"200\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><circle cx=\"160\" cy=\"110\" r=\"14\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\"/><text x=\"155\" y=\"115\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">G</text><text x=\"155\" y=\"12\" font-size=\"10\" font-weight=\"bold\">B</text><text x=\"155\" y=\"215\" font-size=\"10\" font-weight=\"bold\">D</text><text x=\"45\" y=\"114\" font-size=\"10\" font-weight=\"bold\">A</text><text x=\"265\" y=\"114\" font-size=\"10\" font-weight=\"bold\">C</text></svg></div>",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Kirchhoff's Rules:</strong><br>\n      • <strong>Junction Rule (KCL):</strong> The algebraic sum of currents entering any junction is zero: <code>∑ I = 0</code> (Conservation of charge).<br>\n      • <strong>Loop Rule (KVL):</strong> In any closed loop, the algebraic sum of EMFs equals the algebraic sum of potential drops: <code>∑ ΔV = 0</code> (Conservation of energy).</p>\n      <p><strong>2. Wheatstone Bridge Balanced Condition:</strong><br>\n      Under balanced condition, no current flows through galvanometer (<code>I_g = 0</code>, potential <code>V_B = V_D</code>).<br>\n      • In Loop ABDA: <code>- I₁ P + I₂ R = 0  ⟹  I₁ P = I₂ R</code> ...(1)<br>\n      • In Loop BCDB: <code>- I₁ Q + I₂ S = 0  ⟹  I₁ Q = I₂ S</code> ...(2)<br>\n      Dividing equation (1) by (2):<br>\n      <strong>P / Q = R / S</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct statement and conservation laws for KCL and KVL | [1 Mark] Applying KVL to loops ABDA and BCDB with I_g = 0 | [1 Mark] Derivation of balance condition P/Q = R/S",
        "cautionTrap": "Forgetting to state that KCL is based on conservation of charge and KVL is based on conservation of energy.",
        "topperTip": "Draw the 4-arm diamond bridge clearly. Clearly state 'At balance: I_g = 0 so V_B = V_D'.",
        "mnemonic": "Wheatstone Balance: Top ratio = Bottom ratio (P/Q = R/S)."
    });

    pushQ("Moving Charges and Magnetism", {
        "id": "phy-mag-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 55/1/1 Q28)",
        "pacing": "5 min",
        "type": "Ampere's Law & Solenoid",
        "competency": "Magnetic Field Derivation",
        "stem": "State Ampere's Circuital Law. Use it to derive the magnetic field inside an ideal, infinitely long straight solenoid having n turns per unit length carrying current I.",
        "diagram": "<div class=\"practice-diagram-wrap my-3 flex justify-center\"><svg viewBox=\"0 0 360 140\" class=\"max-w-full h-auto rounded-lg bg-slate-50 border border-slate-200 shadow-sm\" style=\"max-height: 180px;\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"30\" width=\"300\" height=\"80\" rx=\"4\" fill=\"#f1f5f9\" stroke=\"#334155\" stroke-width=\"1.5\"/><line x1=\"50\" y1=\"70\" x2=\"310\" y2=\"70\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#ar)\"/><text x=\"140\" y=\"65\" font-size=\"12\" font-weight=\"bold\" fill=\"#1d4ed8\">B (Axial)</text><rect x=\"90\" y=\"50\" width=\"120\" height=\"40\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3\"/><text x=\"95\" y=\"45\" font-size=\"10\" fill=\"#dc2626\">Amperian Loop (a-b-c-d)</text></svg></div>",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Statement of Ampere's Circuital Law:</strong><br>\n      The line integral of magnetic field <strong>B</strong> around any closed loop is equal to <code>μ₀</code> times the total enclosed current <code>I_enclosed</code>:<br>\n      <code>∮ B · dl = μ₀ I_enclosed</code>.</p>\n      <p><strong>2. Derivation for Solenoid:</strong><br>\n      Consider a rectangular Amperian loop <em>abcd</em> of length <em>L</em>:<br>\n      • Along <em>ab</em> (inside solenoid): B is parallel to dl ⟹ <code>∫ B · dl = B L</code>.<br>\n      • Along <em>bc</em> and <em>da</em>: B is perpendicular to dl ⟹ <code>∫ B · dl = 0</code>.<br>\n      • Along <em>cd</em> (outside solenoid): Field B ≈ 0 ⟹ <code>∫ B · dl = 0</code>.<br>\n      Total line integral: <code>∮ B · dl = B L</code>.</p>\n      <p>Number of turns in length L = <code>n L</code>. Enclosed current: <code>I_enclosed = n L I</code>.<br>\n      According to Ampere's Law: <code>B L = μ₀ (n L I)  ⟹  <strong>B = μ₀ n I</strong></code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Ampere's Circuital Law statement with equation | [1 Mark] Breakdown of line integral into 4 segments ab, bc, cd, da | [1 Mark] Final boxed formula B = μ₀ n I",
        "cautionTrap": "Confusing n (turns per unit length = N/L) with N (total turns). Always define n = N/L.",
        "topperTip": "Explicitly explain why the other 3 sides contribute zero to the integral: 2 are perpendicular (cos 90° = 0) and 1 is outside the solenoid (B = 0).",
        "mnemonic": "Solenoid Field: B = μ₀·n·I ('Muni' rule)."
    });

    pushQ("Moving Charges and Magnetism", {
        "id": "phy-mag-10y-2020",
        "marks": 5,
        "year": "CBSE 2020 (Delhi Set 1 Q32)",
        "pacing": "10 min",
        "type": "Galvanometer Conversion",
        "competency": "Instrument Design & Numerical",
        "stem": "(a) Explain the principle and working of a Moving Coil Galvanometer. Why is a radial magnetic field used in it, and how is it produced?\\n(b) A galvanometer of resistance 15 Ω gives full scale deflection for a current of 4 mA. How will you convert it into: (i) an ammeter of range 0 to 6 A, and (ii) a voltmeter of range 0 to 18 V?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Principle & Radial Field:</strong><br>\n      • <strong>Principle:</strong> A current-carrying coil placed in a magnetic field experiences a deflecting torque: <code>τ = N I A B sin θ</code>. At equilibrium, deflecting torque balances restoring torque: <code>N I A B = k θ  ⟹  θ = (NAB / k) I</code>.<br>\n      • <strong>Radial Magnetic Field:</strong> Cylindrical soft iron core and concave pole pieces ensure that plane of coil is ALWAYS parallel to field lines (θ = 90°). Hence torque is always maximum: <code>τ = N I A B</code> (linear scale θ ∝ I).</p>\n      <p><strong>(b) Calculations:</strong><br>\n      Given: G = 15 Ω, I_g = 4 mA = 0.004 A.<br>\n      • <strong>(i) Conversion to Ammeter (0 - 6 A):</strong> Connected with parallel shunt S:<br>\n      <code>S = (I_g G) / (I - I_g) = (0.004 × 15) / (6 - 0.004) = 0.06 / 5.996 ≈ 0.01 Ω</code>.<br>\n      Connect a shunt resistance of <strong>0.01 Ω in parallel</strong> with galvanometer.<br>\n      • <strong>(ii) Conversion to Voltmeter (0 - 18 V):</strong> Connected with series resistor R:<br>\n      <code>R = (V / I_g) - G = (18 / 0.004) - 15 = 4500 - 15 = 4485 Ω</code>.<br>\n      Connect a resistance of <strong>4485 Ω in series</strong> with galvanometer.</p>\n    </div>",
        "stepMarking": "[2 Marks] Principle, torque equilibrium, and radial field explanation | [1.5 Marks] Ammeter shunt calculation S = 0.01 Ω | [1.5 Marks] Voltmeter series resistance R = 4485 Ω",
        "cautionTrap": "Inverting the conversion modes: Ammeter requires LOW shunt in PARALLEL; Voltmeter requires HIGH resistance in SERIES.",
        "topperTip": "Always state the final physical action: 'Connect 0.01 Ω in parallel' and 'Connect 4485 Ω in series'.",
        "mnemonic": "Ammeter Shunt = Parallel (ASP); Voltmeter Series = High Series (VSH)."
    });

    pushQ("Magnetism and Matter", {
        "id": "phy-mm-10y-2024",
        "marks": 3,
        "year": "CBSE 2024 (Set 55/1/1 Q20)",
        "pacing": "5 min",
        "type": "Comparative Magnetic Properties",
        "competency": "Classification & Reasoning",
        "stem": "Distinguish between diamagnetic, paramagnetic, and ferromagnetic substances on the basis of: (i) Magnetic susceptibility (χ_m), (ii) Behavior in an external non-uniform magnetic field, and (iii) Effect of temperature.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <div class=\"overflow-x-auto\">\n        <table class=\"w-full border-collapse border border-slate-300 text-left text-xs\">\n          <thead>\n            <tr class=\"bg-slate-100\">\n              <th class=\"border border-slate-300 p-1.5 font-bold\">Property</th>\n              <th class=\"border border-slate-300 p-1.5 font-bold text-amber-700\">Diamagnetic</th>\n              <th class=\"border border-slate-300 p-1.5 font-bold text-blue-700\">Paramagnetic</th>\n              <th class=\"border border-slate-300 p-1.5 font-bold text-emerald-700\">Ferromagnetic</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"border border-slate-300 p-1.5 font-medium\">Susceptibility (χ_m)</td>\n              <td class=\"border border-slate-300 p-1.5\">Small & negative (-1 ≤ χ < 0)</td>\n              <td class=\"border border-slate-300 p-1.5\">Small & positive (0 < χ < ε)</td>\n              <td class=\"border border-slate-300 p-1.5\">Very large & positive (χ >> 1000)</td>\n            </tr>\n            <tr>\n              <td class=\"border border-slate-300 p-1.5 font-medium\">Non-Uniform Field</td>\n              <td class=\"border border-slate-300 p-1.5\">Expelled: moves from stronger to weaker field</td>\n              <td class=\"border border-slate-300 p-1.5\">Weakly attracted: moves from weaker to stronger field</td>\n              <td class=\"border border-slate-300 p-1.5\">Strongly attracted into strongest field region</td>\n            </tr>\n            <tr>\n              <td class=\"border border-slate-300 p-1.5 font-medium\">Temperature Effect</td>\n              <td class=\"border border-slate-300 p-1.5\">Independent of temperature</td>\n              <td class=\"border border-slate-300 p-1.5\">Inversely proportional (χ ∝ 1/T, Curie's law)</td>\n              <td class=\"border border-slate-300 p-1.5\">Becomes paramagnetic above Curie temperature T_c</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>",
        "stepMarking": "[1 Mark] Correct susceptibility comparison | [1 Mark] Correct motion in non-uniform magnetic field | [1 Mark] Temperature dependence and Curie temperature",
        "cautionTrap": "Writing that diamagnetic susceptibility depends on temperature. Diamagnetism is strictly temperature-INDEPENDENT.",
        "topperTip": "Draw the comparison table directly. Memorize one classic example for each: Bismuth/Water (Dia), Aluminium/Oxygen (Para), Iron/Cobalt (Ferro).",
        "mnemonic": "Susceptibility signs: Dia = Negative (-), Para = Tiny Positive (+), Ferro = Mega Positive (+++)."
    });

    pushQ("Electromagnetic Induction", {
        "id": "phy-emi-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 55/1/1 Q26)",
        "pacing": "5 min",
        "type": "Motional EMF Derivation",
        "competency": "Derivation & Energy Conservation",
        "stem": "A conducting rod of length l moves with uniform velocity v perpendicular to a uniform magnetic field B on U-shaped rails. Derive the expression for the motional EMF induced across the ends of the rod. Hence find the electric power dissipated as heat in the circuit of resistance R.",
        "diagram": "<div class=\"practice-diagram-wrap my-3 flex justify-center\"><svg viewBox=\"0 0 340 140\" class=\"max-w-full h-auto rounded-lg bg-slate-50 border border-slate-200 shadow-sm\" style=\"max-height: 180px;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"30\" x2=\"300\" y2=\"30\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"110\" x2=\"300\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"180\" y=\"20\" width=\"10\" height=\"100\" fill=\"#dc2626\"/><line x1=\"190\" y1=\"70\" x2=\"250\" y2=\"70\" stroke=\"#2563eb\" stroke-width=\"2\" marker-end=\"url(#ar)\"/><text x=\"210\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#1d4ed8\">v</text><text x=\"182\" y=\"15\" font-size=\"10\" font-weight=\"bold\" fill=\"#dc2626\">Rod (l)</text><text x=\"100\" y=\"75\" font-size=\"12\" fill=\"#94a3b8\">B (inward ⊗)</text></svg></div>",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Flux Linkage & Motional EMF:</strong><br>\n      Let distance of rod from left rail base be <em>x</em>. Enclosed area: <code>A = l x</code>.<br>\n      Magnetic flux linked with the loop: <code>Φ_B = B A = B l x</code>.<br>\n      By Faraday's Law, induced EMF: <code>ε = - dΦ_B / dt = - B l (dx/dt) = - B l v</code>.<br>\n      Magnitude of motional EMF: <strong>ε = B l v</strong>.</p>\n      <p><strong>2. Induced Current & Power Dissipated:</strong><br>\n      • Induced current: <code>I = ε / R = (B l v) / R</code>.<br>\n      • Retarding magnetic force: <code>F = I l B = (B² l² v) / R</code>.<br>\n      • Mechanical power required: <code>P_mech = F v = (B² l² v²) / R</code>.<br>\n      • Electrical power dissipated as Joule heat: <code>P_elec = I² R = (B l v / R)² R = <strong>(B² l² v²) / R</strong></code>.<br>\n      <em>Conclusion:</em> Mechanical power spent in pulling rod converts entirely into electrical thermal power (Conservation of Energy).</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Flux Φ_B = Blx and derivative ε = Blv | [1.5 Marks] Current I = Blv/R and power formula P = B²l²v²/R with energy conservation statement",
        "cautionTrap": "Omitting the mechanical-to-electrical energy equivalence statement. CBSE specifically awards marks for explaining conservation of energy.",
        "topperTip": "Use Fleming's Right Hand Rule to state the direction of induced current.",
        "mnemonic": "Motional EMF: ε = B-l-v ('Beloved' velocity)."
    });

    pushQ("Wave Optics", {
        "id": "phy-wo-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 55/1/1 Q33)",
        "pacing": "10 min",
        "type": "Huygens Wavefront & Laws of Refraction",
        "competency": "Wave Optics Derivation",
        "stem": "(a) Define a wavefront. Using Huygens' principle, verify Snell's law of refraction of a plane wave propagating from a rarer medium (refractive index n₁) into a denser medium (refractive index n₂).\\n(b) In a Young's double slit experiment using monochromatic light of wavelength λ, what is the effect on fringe width if: (i) distance between slits is doubled, (ii) separation between slits and screen is halved, and (iii) the entire apparatus is immersed in water (refractive index 4/3)?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Wavefront & Snell's Law Derivation:</strong><br>\n      • <strong>Wavefront:</strong> The locus of all points vibrating in the same phase.<br>\n      • Let plane wavefront AB be incident at angle <em>i</em> on interface separating medium 1 (speed v₁) and medium 2 (speed v₂ < v₁).<br>\n      • Time taken for ray to travel from B to C: <code>τ = BC / v₁  ⟹  BC = v₁ τ</code>.<br>\n      • Secondary wavelet from point A spreads in medium 2 with speed v₂. In time τ, distance traveled: <code>AD = v₂ τ</code>.<br>\n      • In right ΔABC: <code>sin i = BC / AC = (v₁ τ) / AC</code>.<br>\n      • In right ΔADC: <code>sin r = AD / AC = (v₂ τ) / AC</code>.<br>\n      Dividing both: <code>sin i / sin r = v₁ / v₂ = n₂ / n₁</code> (Snell's Law of Refraction verified!).</p>\n      <p><strong>(b) Young's Double Slit Effects (Fringe Width β = λ D / d):</strong><br>\n      • (i) If slit separation d is doubled (d' = 2d): <strong>β' = β / 2 (Halved)</strong>.<br>\n      • (ii) If screen distance D is halved (D' = D/2): <strong>β' = β / 2 (Halved)</strong>.<br>\n      • (iii) When immersed in water (λ' = λ / μ = 3λ / 4): <strong>β' = β / μ = 3/4 β (Reduces to 75%)</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Definition of wavefront | [2 Marks] Huygens geometric proof: sin i/sin r = v₁/v₂ = n₂/n₁ | [2 Marks] 0.5M, 0.5M, 1M for the three fringe width variations",
        "cautionTrap": "Confusing angle of incidence i with angle of inclination of wavefront. In right triangle ABC, angle BAC = i and angle ACD = r.",
        "topperTip": "Draw the two right-angled triangles ABC and ADC sharing the common hypotenuse AC. Box Snell's law.",
        "mnemonic": "Common Hypotenuse Rule: sin i = BC/AC, sin r = AD/AC."
    });

    pushQ("Dual Nature of Radiation and Matter", {
        "id": "phy-dn-10y-2024",
        "marks": 3,
        "year": "CBSE 2024 (Set 55/1/1 Q24)",
        "pacing": "5 min",
        "type": "Photoelectric Equation & Stopping Potential",
        "competency": "Quantum Physics Analysis",
        "stem": "Write Einstein's photoelectric equation. State how it explains: (i) existence of threshold frequency, (ii) instantaneous emission of photoelectrons without time lag, and (iii) independence of maximum kinetic energy on light intensity.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Einstein's Photoelectric Equation:</strong><br>\n      <code>K_max = h ν - Φ₀ = h (ν - ν₀)</code>, or <code>e V₀ = h ν - Φ₀</code><br>\n      where h = Planck's constant, ν = incident frequency, Φ₀ = h ν₀ = work function, V₀ = stopping potential.</p>\n      <p><strong>2. Three Key Explanations:</strong><br>\n      • <strong>(i) Threshold Frequency (ν₀):</strong> Since K_max must be ≥ 0, emission occurs only if <code>h ν ≥ Φ₀  ⟹  ν ≥ ν₀</code>. Below ν₀, no emission is possible regardless of intensity.<br>\n      • <strong>(ii) Instantaneous Emission (~10⁻⁹ s):</strong> Photoelectric emission is an elastic 1-to-1 collision between a single photon and an electron. Energy transfer is instantaneous without cumulative energy absorption.<br>\n      • <strong>(iii) K_max independent of intensity:</strong> Intensity corresponds to number of photons per second, not energy per photon. Each photon has energy hν. Hence K_max depends solely on incident frequency ν, not on intensity.</p>\n    </div>",
        "stepMarking": "[1 Mark] Einstein equation with all symbols defined | [2 Marks] 0.67M each for explaining threshold frequency, 1-to-1 collision, and photon energy independence",
        "cautionTrap": "Saying that higher intensity gives electrons higher kinetic energy. Higher intensity ONLY increases the number of emitted photoelectrons (saturation current)!",
        "topperTip": "Explicitly write the 1-to-1 photon-electron interaction principle to explain zero time lag.",
        "mnemonic": "Intensity = Quantity (Current); Frequency = Quality (Energy / K_max)."
    });

    pushQ("Atoms and Nuclei", {
        "id": "phy-an-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 55/1/1 Q29)",
        "pacing": "5 min",
        "type": "Bohr Model & Energy Levels",
        "competency": "Atomic Physics Derivation",
        "stem": "State Bohr's postulates for hydrogen atom. Derive the expression for the total energy of an electron in the n-th stationary orbit of hydrogen atom. What is the physical significance of the negative sign in the total energy expression?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Bohr's Postulates:</strong><br>\n      • <strong>Quantization Condition:</strong> Angular momentum <code>L = m v r = (n h) / (2π)</code>.<br>\n      • <strong>Electrostatic Centripetal Force:</strong> <code>(m v²) / r = (1 / 4πε₀) (e² / r²)</code>.<br>\n      • <strong>Frequency Condition:</strong> <code>h ν = E₂ - E₁</code>.</p>\n      <p><strong>2. Total Energy Derivation:</strong><br>\n      • Kinetic Energy: <code>K = ½ m v² = (e²) / (8πε₀ r)</code>.<br>\n      • Potential Energy: <code>U = - (e²) / (4πε₀ r)</code>.<br>\n      • Total Energy: <code>E = K + U = - (e²) / (8πε₀ r)</code>.<br>\n      Substituting radius <code>r_n = (ε₀ n² h²) / (π m e²)</code>:<br>\n      <strong>E_n = - (m e⁴) / (8 ε₀² n² h²) = - 13.6 / n² eV</strong>.</p>\n      <p><strong>3. Significance of Negative Sign:</strong><br>\n      The negative sign indicates that the electron is <strong>bound to the nucleus</strong> by electrostatic attraction. Energy must be supplied from outside to liberate the electron to infinity (where E = 0).</p>\n    </div>",
        "stepMarking": "[1 Mark] Statement of Bohr's angular momentum quantization | [1 Mark] Derivation of E_n = -13.6/n² eV | [1 Mark] Physical explanation of the negative sign (bound state)",
        "cautionTrap": "Confusing kinetic energy (+e²/8πε₀r) with total energy (-e²/8πε₀r). Notice that E = -K.",
        "topperTip": "State the key relation: Total Energy E = - Kinetic Energy K = Potential Energy U / 2.",
        "mnemonic": "Bohr Energy Rule: U = -2K, E = -K, so Total is Negative."
    });

    pushQ("Chemical Kinetics", {
        "id": "chem-kin-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 56/1/1 Q27)",
        "pacing": "5 min",
        "type": "Integrated Rate Equation Proof",
        "competency": "First-Order Rate Proof",
        "stem": "Show that for a first order reaction, the time required for 99% completion is twice the time required for 90% completion of the reaction. (log 10 = 1, log 2 = 0.3010)",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. First-Order Integrated Rate Equation:</strong><br>\n      <code>t = (2.303 / k) log [R₀ / R]</code></p>\n      <p><strong>2. For 99% completion (t₉₉%):</strong><br>\n      Let [R₀] = 100. Amount reacted = 99, so remaining [R] = 100 - 99 = 1.<br>\n      <code>t₉₉% = (2.303 / k) log (100 / 1) = (2.303 / k) log (10²) = 2 × (2.303 / k)</code> ...(1)</p>\n      <p><strong>3. For 90% completion (t₉₀%):</strong><br>\n      Remaining [R] = 100 - 90 = 10.<br>\n      <code>t₉₀% = (2.303 / k) log (100 / 10) = (2.303 / k) log (10) = 1 × (2.303 / k)</code> ...(2)</p>\n      <p><strong>4. Comparing (1) and (2):</strong><br>\n      <code>t₉₉% / t₉₀% = [2 × (2.303 / k)] / [1 × (2.303 / k)] = 2</code>.<br>\n      Therefore: <strong>t₉₉% = 2 × t₉₀%</strong>. (Hence Proved).</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct formula t = (2.303/k)log([R₀]/[R]) | [1 Mark] Setting up expressions for t₉₉% and t₉₀% | [1 Mark] Ratio calculation and final proof t₉₉% = 2 t₉₀%",
        "cautionTrap": "Taking remaining concentration as 99 instead of (100 - 99 = 1). [R] is the REMAINING concentration, not reacted concentration!",
        "topperTip": "Always define [R] = [R₀] - x clearly before substituting into the log expression.",
        "mnemonic": "Kinetics: Remaining [R] = Initial - Reacted."
    });

    pushQ("Chemical Kinetics", {
        "id": "chem-kin-10y-2020",
        "marks": 5,
        "year": "CBSE 2020 (Delhi Set 1 Q31)",
        "pacing": "10 min",
        "type": "Arrhenius Equation Numerical",
        "competency": "Activation Energy Calculation",
        "stem": "The rate constants of a reaction at 500 K and 700 K are 0.02 s⁻¹ and 0.07 s⁻¹ respectively. Calculate the values of activation energy (E_a) and frequency factor (A). (R = 8.314 J K⁻¹ mol⁻¹, log 3.5 = 0.5441)",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Arrhenius Two-Temperature Formula:</strong><br>\n      <code>log (k₂ / k₁) = [ E_a / (2.303 R) ] [ (T₂ - T₁) / (T₁ T₂) ]</code></p>\n      <p><strong>2. Substitution:</strong><br>\n      T₁ = 500 K, k₁ = 0.02 s⁻¹; T₂ = 700 K, k₂ = 0.07 s⁻¹.<br>\n      <code>k₂ / k₁ = 0.07 / 0.02 = 3.5  ⟹  log (3.5) = 0.5441</code>.<br>\n      <code>0.5441 = [ E_a / (2.303 × 8.314) ] [ (700 - 500) / (500 × 700) ]</code><br>\n      <code>0.5441 = [ E_a / 19.147 ] [ 200 / 350000 ] = [ E_a / 19.147 ] [ 1 / 1750 ]</code>.<br>\n      <code>E_a = 0.5441 × 19.147 × 1750 = 18,230 J/mol = <strong>18.23 kJ/mol</strong></code>.</p>\n      <p><strong>3. Calculating Frequency Factor A:</strong><br>\n      From <code>log k₁ = log A - E_a / (2.303 R T₁)</code>:<br>\n      <code>log (0.02) = log A - 18230 / (19.147 × 500) = log A - 1.904</code>.<br>\n      Since log(0.02) = -1.6990 ⟹ <code>-1.6990 = log A - 1.904  ⟹  log A = 0.205</code>.<br>\n      <code>A = 10^0.205 = <strong>1.603 s⁻¹</strong></code>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Correct Arrhenius equation and substitution | [2 Marks] Calculation of E_a = 18.23 kJ/mol | [1.5 Marks] Calculation of log A and frequency factor A = 1.603 s⁻¹",
        "cautionTrap": "Forgetting to convert E_a to kJ/mol or using R in calories instead of 8.314 J K⁻¹ mol⁻¹.",
        "topperTip": "Express E_a with correct SI units (kJ/mol) and box the final result with units.",
        "mnemonic": "Arrhenius Slope: log(k₂/k₁) = (E_a / 2.303R) (ΔT / T₁T₂)."
    });

    pushQ("d- and f-Block Elements", {
        "id": "chem-df-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 56/1/1 Q29)",
        "pacing": "5 min",
        "type": "Reasoning & Lanthanoid Contraction",
        "competency": "Chemical Reasoning",
        "stem": "Account for the following observations:\\n(a) Zr (atomic radius 160 pm) and Hf (atomic radius 159 pm) have almost identical atomic and ionic radii.\\n(b) Transition metals exhibit high enthalpies of atomization.\\n(c) Mn²⁺ compounds are more stable than Fe²⁺ compounds towards oxidation to +3 state.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Similarity in Zr and Hf Radii:</strong><br>\n      Due to <strong>Lanthanoid Contraction</strong>. The intervention of 14 <em>4f</em> electrons before 5d series elements (like Hf) provides poor shielding of the nuclear charge. The increase in effective nuclear charge pulls the electrons inward, compensating for the expected expansion due to an extra shell.</p>\n      <p><strong>(b) High Enthalpies of Atomization:</strong><br>\n      Transition metals have a large number of unpaired electrons in their (n-1)d orbitals which participate alongside ns electrons in strong interatomic metallic bonding (covalent bonding between overlapping d orbitals), requiring very high energy to separate atoms.</p>\n      <p><strong>(c) Stability of Mn²⁺ vs Fe²⁺:</strong><br>\n      • Mn²⁺ has stable <strong>half-filled d⁵</strong> electronic configuration: <code>[Ar] 3d⁵</code>. Removing another electron requires high ionization enthalpy.<br>\n      • Fe²⁺ has configuration <code>[Ar] 3d⁶</code>. Losing one electron gives a highly stable half-filled <code>3d⁵ (Fe³⁺)</code> state. Hence Fe²⁺ is readily oxidized to Fe³⁺, whereas Mn²⁺ resists oxidation.</p>\n    </div>",
        "stepMarking": "[1 Mark] (a) Lanthanoid contraction with poor 4f shielding | [1 Mark] (b) Strong metallic bonding due to unpaired d-electrons | [1 Mark] (c) Half-filled 3d⁵ stability in Mn²⁺ vs easy loss to 3d⁵ in Fe³⁺",
        "cautionTrap": "Saying 4f electrons provide strong shielding. 4f orbitals are diffuse and provide extremely POOR shielding!",
        "topperTip": "Always write out the electronic configurations: Mn²⁺ = [Ar] 3d⁵ and Fe²⁺ = [Ar] 3d⁶.",
        "mnemonic": "Shielding efficiency order: s > p > d > f (f is weakest)."
    });

    pushQ("Coordination Compounds", {
        "id": "chem-coord-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 56/1/1 Q28)",
        "pacing": "6 min",
        "type": "CFT & Hybridization Analysis",
        "competency": "Coordination Theory",
        "stem": "Using Crystal Field Theory (CFT) and Valence Bond Theory (VBT), compare the octahedral complexes [Co(NH₃)₆]³⁺ and [CoF₆]³⁻ with respect to: (i) Oxidation state of central metal, (ii) Hybridization & geometry, (iii) Magnetic behavior (diamagnetic / paramagnetic with spin-only magnetic moment).",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Cobalt has atomic number 27: <code>[Ar] 3d⁷ 4s²</code>. In both complexes, Co is in <strong>+3 oxidation state</strong>: <code>Co³⁺ = [Ar] 3d⁶</code>.<br><br>\n      • <strong>1. [Co(NH₃)₆]³⁺ Complex:</strong><br>\n      - <em>Ligand field:</em> NH₃ is a <strong>strong field ligand</strong> (Δₒ > P). It causes pairing of 3d electrons: <code>t₂g⁶ eg⁰</code>.<br>\n      - <em>Hybridization:</em> Two 3d, one 4s, and three 4p orbitals hybridize to form <strong>d²sp³</strong> (Inner orbital octahedral).<br>\n      - <em>Magnetic property:</em> All 6 electrons are paired (n = 0). <strong>Diamagnetic</strong> (μ = 0 BM, low-spin).<br><br>\n      • <strong>2. [CoF₆]³⁻ Complex:</strong><br>\n      - <em>Ligand field:</em> F⁻ is a <strong>weak field ligand</strong> (Δₒ < P). Cannot force pairing: <code>t₂g⁴ eg²</code>.<br>\n      - <em>Hybridization:</em> Uses outer 4d orbitals to form <strong>sp³d²</strong> (Outer orbital octahedral).<br>\n      - <em>Magnetic property:</em> 4 unpaired electrons (n = 4). <strong>Paramagnetic</strong> (high-spin).<br>\n      <code>μ = √(n(n+2)) = √(4(6)) = √24 ≈ 4.90 BM</code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Oxidation state +3 and configuration Co³⁺ = 3d⁶ | [1 Mark] [Co(NH₃)₆]³⁺ inner orbital d²sp³, paired t₂g⁶, diamagnetic | [1 Mark] [CoF₆]³⁻ outer orbital sp³d², 4 unpaired electrons, μ = 4.9 BM",
        "cautionTrap": "Assuming NH₃ is always a weak ligand. With Co³⁺, NH₃ acts as a STRONG field ligand causing electron pairing!",
        "topperTip": "Draw the 5 d-orbitals splitting into t₂g (lower 3) and eg (upper 2) to get bonus marks from examiners.",
        "mnemonic": "NH₃ with Co³⁺ pairs up (Inner d²sp³); Halides never pair up (Outer sp³d²)."
    });

    pushQ("Haloalkanes and Haloarenes", {
        "id": "chem-halo-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 56/1/1 Q24)",
        "pacing": "5 min",
        "type": "Reaction Mechanisms & Inversion",
        "competency": "Organic Mechanism Comparison",
        "stem": "(a) Why are haloarenes extremely less reactive towards nucleophilic substitution reactions than haloalkanes? (Give two reasons)\\n(b) Which alkyl halide in each of the following pairs will react faster in an S_N2 reaction? Explain why.\\n  (i) 1-Bromobutane or 2-Bromobutane\\n  (ii) 1-Chlorobutane or 1-Iodobutane",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Low Reactivity of Haloarenes:</strong><br>\n      1. <strong>Resonance Effect:</strong> The lone pair of electrons on halogen delocalizes with the benzene ring π-electrons, imparting a <strong>partial double bond character</strong> to the C-X bond which is shorter and harder to break than a pure single bond in haloalkanes.<br>\n      2. <strong>Hybridization Difference:</strong> In haloarenes, carbon is <strong>sp² hybridized</strong> (33% s-character, more electronegative, holds C-X bond tightly), whereas in haloalkanes carbon is <strong>sp³ hybridized</strong> (25% s-character).<br>\n      3. <strong>Instability of Phenyl Cation:</strong> Phenyl cation cannot be stabilized by resonance.</p>\n      <p><strong>(b) S_N2 Reactivity:</strong><br>\n      • (i) <strong>1-Bromobutane</strong> reacts faster than 2-bromobutane. S_N2 proceeds via a single-step backside attack. Primary (1°) halide has much less steric hindrance than secondary (2°) halide.<br>\n      • (ii) <strong>1-Iodobutane</strong> reacts faster than 1-chlorobutane. Iodine is a larger atom with lower bond dissociation enthalpy (C-I bond is weaker and I⁻ is a better leaving group than Cl⁻).</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Two valid reasons for low reactivity of haloarenes (Resonance + sp² hybridization) | [0.75 Mark] 1-Bromobutane faster due to less steric hindrance | [0.75 Mark] 1-Iodobutane faster due to better leaving group ability of I⁻",
        "cautionTrap": "Confusing S_N1 with S_N2 order! S_N2 order is 1° > 2° > 3° (least steric hindrance); S_N1 is 3° > 2° > 1° (carbocation stability).",
        "topperTip": "Always pair 'less steric hindrance' with S_N2, and 'better leaving group' with C-I over C-Cl.",
        "mnemonic": "S_N2 = 1° First (Crowd bad); S_N1 = 3° First (Carbocation good)."
    });

    pushQ("Alcohols, Phenols and Ethers", {
        "id": "chem-alc-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 56/1/1 Q25)",
        "pacing": "5 min",
        "type": "Named Reactions & Mechanisms",
        "competency": "Organic Reactions",
        "stem": "Write the chemical equations and reaction conditions for the following named organic reactions:\\n(a) Reimer-Tiemann Reaction\\n(b) Kolbe's Reaction\\n(c) Williamson Ether Synthesis (including why tert-butyl ethyl ether must be prepared from sodium tert-butoxide and ethyl bromide, not vice versa).",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Reimer-Tiemann Reaction:</strong><br>\n      Phenol treated with chloroform (CHCl₃) in aqueous NaOH at 340 K followed by acid hydrolysis yields <strong>Salicylaldehyde (2-hydroxybenzaldehyde)</strong>:<br>\n      <code>C₆H₅OH + CHCl₃ + 3NaOH  ⟶  C₆H₄(OH)(CHO) [o-Salicylaldehyde] + 3NaCl + 2H₂O</code> (Electrophile is dichlorocarbene :CCl₂).</p>\n      <p><strong>(b) Kolbe's Reaction:</strong><br>\n      Sodium phenoxide treated with carbon dioxide (CO₂) under pressure (4-7 atm) at 400 K followed by acidification produces <strong>Salicylic acid (2-hydroxybenzoic acid)</strong>:<br>\n      <code>C₆H₅ONa + CO₂ (400 K, 4-7 atm)  ⟶  C₆H₄(OH)(COONa)  —[H⁺]⟶  C₆H₄(OH)(COOH)</code>.</p>\n      <p><strong>(c) Williamson Synthesis & Steric Restriction:</strong><br>\n      Reaction involves S_N2 attack of alkoxide on primary alkyl halide:<br>\n      <code>(CH₃)₃C-O⁻ Na⁺ + CH₃CH₂-Br  ⟶  (CH₃)₃C-O-CH₂CH₃ + NaBr</code>.<br>\n      <em>Why not vice versa?</em> If tertiary alkyl halide (CH₃)₃C-Br is reacted with strong base CH₃CH₂O⁻Na⁺, <strong>elimination predominates over substitution</strong>, yielding an alkene (2-methylpropene) rather than an ether.</p>\n    </div>",
        "stepMarking": "[1 Mark] Reimer-Tiemann equation producing salicylaldehyde | [1 Mark] Kolbe's reaction producing salicylic acid | [1 Mark] Williamson synthesis equation and explanation of elimination with 3° halides",
        "cautionTrap": "Using tertiary alkyl halide in Williamson ether synthesis. 3° halide gives ALKENE via E2 elimination!",
        "topperTip": "Remember the electrophile in Reimer-Tiemann is neutral dichlorocarbene :CCl₂. Mentioning this impresses examiners.",
        "mnemonic": "Reimer makes Aldehyde (R-A); Kolbe makes Acid (K-A)."
    });

    pushQ("Aldehydes, Ketones and Carboxylic Acids", {
        "id": "chem-ald-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 56/1/1 Q33)",
        "pacing": "10 min",
        "type": "Organic Conversions & Tests",
        "competency": "Carbonyl Chemistry & Distinguishing Tests",
        "stem": "(a) Distinguish chemically between the following pairs of compounds:\\n  (i) Acetaldehyde (Ethanal) and Benzaldehyde\\n  (ii) Pentan-2-one and Pentan-3-one\\n(b) Write the chemical equations for:\\n  (i) Aldol Condensation of ethanal\\n  (ii) Cannizzaro Reaction of benzaldehyde\\n  (iii) Hell-Volhard-Zelinsky (HVZ) reaction of propanoic acid.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Distinguishing Chemical Tests:</strong><br>\n      • (i) <strong>Ethanal vs Benzaldehyde (Fehling's Test / Iodoform Test):</strong><br>\n      Ethanal gives a red precipitate of Cu₂O with Fehling's solution (aliphatic aldehyde), whereas Benzaldehyde (aromatic aldehyde) does not reduce Fehling's solution. Alternatively, Ethanal gives yellow CHI₃ precipitate with I₂/NaOH (Iodoform test).<br>\n      • (ii) <strong>Pentan-2-one vs Pentan-3-one (Iodoform Test):</strong><br>\n      Pentan-2-one contains a methyl ketone group (CH₃-C=O) and forms a <strong>yellow crystalline precipitate of Iodoform (CHI₃)</strong> upon warming with I₂ and NaOH. Pentan-3-one lacks a methyl ketone group and gives no yellow precipitate.</p>\n      <p><strong>(b) Chemical Equations:</strong><br>\n      • (i) <strong>Aldol Condensation:</strong><br>\n      <code>2 CH₃CHO  —[dil. NaOH]⟶  CH₃-CH(OH)-CH₂-CHO (3-hydroxybutanal)  —[Δ, -H₂O]⟶  CH₃-CH=CH-CHO (But-2-enal)</code>.<br>\n      • (ii) <strong>Cannizzaro Reaction:</strong><br>\n      Aldehydes without α-hydrogen undergo disproportionation with conc. NaOH:<br>\n      <code>2 C₆H₅CHO + conc. NaOH  ⟶  C₆H₅COONa (Sodium benzoate) + C₆H₅CH₂OH (Benzyl alcohol)</code>.<br>\n      • (iii) <strong>HVZ Reaction:</strong><br>\n      Carboxylic acids with α-hydrogen react with Br₂ in presence of red phosphorus to form α-bromo carboxylic acid:<br>\n      <code>CH₃-CH₂-COOH + Br₂ —[Red P]⟶ CH₃-CH(Br)-COOH (2-bromopropanoic acid) + HBr</code>.</p>\n    </div>",
        "stepMarking": "[2 Marks] 1M each for correct chemical tests with observable results (Fehling's / Iodoform) | [3 Marks] 1M each for Aldol, Cannizzaro, and HVZ balanced equations",
        "cautionTrap": "Writing that benzaldehyde reduces Fehling's solution. Aromatic aldehydes DO NOT reduce Fehling's solution!",
        "topperTip": "Always state the clear observable result: e.g. 'Yellow crystalline precipitate of CHI₃ with antiseptic smell'.",
        "mnemonic": "Iodoform Key: Needs CH₃-C=O or CH₃-CH(OH)- group."
    });

    pushQ("Amines", {
        "id": "chem-am-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 56/1/1 Q26)",
        "pacing": "5 min",
        "type": "Hinsberg Test & Basic Strength",
        "competency": "Functional Group Identification",
        "stem": "(a) How will you distinguish between primary (1°), secondary (2°), and tertiary (3°) amines using the Hinsberg reagent (benzenesulphonyl chloride)? Give reactions and observations.\\n(b) Arrange the following in increasing order of their basic strength in aqueous solution:\\n  (C₂H₅)₃N, (C₂H₅)₂NH, C₂H₅NH₂, NH₃.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Hinsberg Test (C₆H₅SO₂Cl):</strong><br>\n      1. <strong>Primary (1°) Amine:</strong> Reacts with Hinsberg reagent to form N-alkylbenzenesulphonamide, which has an acidic hydrogen attached to nitrogen. Hence, it <strong>dissolves in aqueous KOH / NaOH</strong>.<br>\n      <code>C₆H₅SO₂Cl + R-NH₂  ⟶  C₆H₅SO₂-NH-R + HCl  —[KOH]⟶  Soluble potassium salt</code>.<br>\n      2. <strong>Secondary (2°) Amine:</strong> Reacts to form N,N-dialkylbenzenesulphonamide, which has no acidic hydrogen. Hence, it <strong>remains insoluble in alkali</strong>.<br>\n      <code>C₆H₅SO₂Cl + R₂NH  ⟶  C₆H₅SO₂-NR₂ + HCl (Insoluble precipitate)</code>.<br>\n      3. <strong>Tertiary (3°) Amine:</strong> Has no hydrogen atom on nitrogen and <strong>does not react</strong> with Hinsberg reagent.</p>\n      <p><strong>(b) Basic Strength in Aqueous Medium:</strong><br>\n      Governed by the combined interplay of inductive effect (+I), steric hindrance, and hydration of conjugate cations.<br>\n      For ethyl-substituted amines, the order is <strong>2° > 3° > 1° > NH₃</strong>:<br>\n      <strong>NH₃ < C₂H₅NH₂ < (C₂H₅)₃N < (C₂H₅)₂NH</strong>.</p>\n    </div>",
        "stepMarking": "[2 Marks] Complete Hinsberg distinction: 1° dissolves in KOH, 2° insoluble in KOH, 3° no reaction | [1 Mark] Correct basic strength order with explanation of 2° maximum",
        "cautionTrap": "Confusing ethyl vs methyl order! For Ethyl: 2° > 3° > 1° (231 rule). For Methyl: 2° > 1° > 3° (213 rule).",
        "topperTip": "State the rule: 'Ethyl groups are bigger, so order is 2-3-1 (231); Methyl groups are smaller, so order is 2-1-3 (213)'.",
        "mnemonic": "Ethyl amine order = 231; Methyl amine order = 213."
    });

    pushQ("Biomolecules", {
        "id": "chem-bio-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 56/1/1 Q23)",
        "pacing": "5 min",
        "type": "Protein Denaturation & Nucleic Acids",
        "competency": "Biological Chemistry",
        "stem": "(a) What is meant by denaturation of proteins? Which protein structures are destroyed and which structure remains intact during denaturation? Give one common example.\\n(b) Write two structural differences between DNA and RNA.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Denaturation of Proteins:</strong><br>\n      • When a protein in its native state is subjected to physical change (e.g. heating) or chemical change (e.g. pH change), the hydrogen bonds are broken, globules unfold, and the protein loses its biological activity. This is called <strong>denaturation</strong>.<br>\n      • <strong>Structures:</strong> Secondary (2°) and tertiary (3°) structures are completely destroyed, while the <strong>primary (1°) structure (covalent peptide backbone sequence) remains completely intact</strong>.<br>\n      • <strong>Examples:</strong> Coagulation of egg white on boiling (albumin), or curdling of milk caused by lactic acid bacteria.</p>\n      <p><strong>(b) Two Differences between DNA and RNA:</strong><br>\n      1. <strong>Pentose Sugar:</strong> DNA contains 2-deoxy-D-ribose sugar; RNA contains D-ribose sugar.<br>\n      2. <strong>Nitrogenous Bases:</strong> DNA contains Thymine (along with Adenine, Guanine, Cytosine); RNA contains <strong>Uracil</strong> instead of Thymine.<br>\n      3. <strong>Structure:</strong> DNA is double-stranded helical; RNA is single-stranded.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Denaturation definition, identifying 2°/3° destroyed while 1° remains intact, and example | [1.5 Marks] Two correct structural differences between DNA and RNA",
        "cautionTrap": "Claiming that primary structure is destroyed during boiling an egg. Primary peptide covalent bonds NEVER break during denaturation!",
        "topperTip": "Emphasize that the covalent peptide sequence (primary structure) remains 100% intact.",
        "mnemonic": "Denaturation: 1° survives; 2° and 3° untangle."
    });

    pushQ("Inverse Trigonometric Functions", {
        "id": "math-itf-10y-2023",
        "marks": 2,
        "year": "CBSE 2023 (Set 65/1/1 Q19)",
        "pacing": "3 min",
        "type": "Principal Value Evaluation",
        "competency": "Domain & Principal Value",
        "stem": "Find the principal value of each of the following:\\n(a) sin⁻¹(-1/2) + 2 cos⁻¹(-√3/2)\\n(b) tan⁻¹(tan 3π/4)",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Evaluation of sin⁻¹(-1/2) + 2 cos⁻¹(-√3/2):</strong><br>\n      • Principal branch of sin⁻¹ is <code>[-π/2, π/2]</code>: <code>sin⁻¹(-1/2) = - sin⁻¹(1/2) = - π/6</code>.<br>\n      • Principal branch of cos⁻¹ is <code>[0, π]</code>: <code>cos⁻¹(-√3/2) = π - cos⁻¹(√3/2) = π - π/6 = 5π/6</code>.<br>\n      • Sum = <code>- π/6 + 2 (5π/6) = - π/6 + 5π/3 = - π/6 + 10π/6 = 9π/6 = <strong>3π/2</strong></code>.</p>\n      <p><strong>(b) Evaluation of tan⁻¹(tan 3π/4):</strong><br>\n      • The principal value branch of tan⁻¹ is <code>(-π/2, π/2)</code>.<br>\n      • 3π/4 does not belong to (-π/2, π/2).<br>\n      • Write <code>tan (3π/4) = tan (π - π/4) = - tan (π/4) = tan (-π/4)</code>.<br>\n      • Since -π/4 ∈ (-π/2, π/2):<br>\n      <strong>tan⁻¹(tan 3π/4) = - π/4</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct principal values of sin⁻¹ and cos⁻¹ and sum = 3π/2 | [1 Mark] Handling range of tan⁻¹ and obtaining -π/4",
        "cautionTrap": "Writing tan⁻¹(tan 3π/4) = 3π/4 directly! The formula tan⁻¹(tan x) = x holds ONLY when x belongs to the principal branch (-π/2, π/2).",
        "topperTip": "Always verify that your final angle lies within the principal value interval before moving to the next question.",
        "mnemonic": "Range check: sin⁻¹ & tan⁻¹ live in (-π/2, π/2); cos⁻¹ lives in [0, π]."
    });

    pushQ("Continuity and Differentiability", {
        "id": "math-cont-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 65/1/1 Q23)",
        "pacing": "5 min",
        "type": "Continuity at a Point & Finding k",
        "competency": "Limit & Continuity",
        "stem": "Find the value of k so that the function f(x) defined by:\\nf(x) = { (1 - cos 4x) / (8 x²), if x ≠ 0 ;  k, if x = 0 }\\nis continuous at x = 0.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Condition for Continuity:</strong><br>\n      For f(x) to be continuous at x = 0, we must have: <code>lim_{x → 0} f(x) = f(0) = k</code>.</p>\n      <p><strong>2. Evaluating the Limit:</strong><br>\n      Using trigonometric identity: <code>1 - cos 4x = 2 sin²(2x)</code>.<br>\n      <code>lim_{x → 0} [ 2 sin²(2x) ] / (8 x²) = lim_{x → 0} [ 2 sin²(2x) ] / [ 2 (4 x²) ]</code><br>\n      <code>= lim_{x → 0} [ sin²(2x) ] / [ (2x)² ] = [ lim_{x → 0} sin(2x) / (2x) ]²</code>.<br>\n      Since <code>lim_{θ → 0} (sin θ / θ) = 1</code>:<br>\n      <strong>Limit = (1)² = 1</strong>.</p>\n      <p><strong>3. Determining k:</strong><br>\n      Since lim_{x → 0} f(x) = f(0) = k: <strong>k = 1</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Statement of continuity condition lim_{x→0} f(x) = f(0) | [1 Mark] Use of identity 1 - cos 4x = 2 sin²(2x) | [1 Mark] Standard limit evaluation sin(2x)/(2x) → 1 and finding k = 1",
        "cautionTrap": "Forgetting to square the standard limit or miscalculating the coefficient of (2x)².",
        "topperTip": "You can alternatively apply L'Hôpital's rule twice: (4 sin 4x)/(16x) ⟹ (16 cos 4x)/16 = 1. Mention both methods for verification.",
        "mnemonic": "Continuity: LHL = RHL = Value of Function at the point."
    });

    pushQ("Continuity and Differentiability", {
        "id": "math-diff-10y-2020",
        "marks": 5,
        "year": "CBSE 2020 (Delhi Set 1 Q32)",
        "pacing": "10 min",
        "type": "Second Order Differential Equation Proof",
        "competency": "Parametric & Second Derivative Proof",
        "stem": "If y = (sin⁻¹ x)², prove that (1 - x²) (d²y/dx²) - x (dy/dx) - 2 = 0.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. First Derivative:</strong><br>\n      Given <code>y = (sin⁻¹ x)²</code>.<br>\n      Differentiating with respect to x:<br>\n      <code>dy/dx = 2 (sin⁻¹ x) · (1 / √(1 - x²))</code>.<br>\n      Cross-multiplying: <code>√(1 - x²) (dy/dx) = 2 sin⁻¹ x</code>.</p>\n      <p><strong>2. Squaring Both Sides:</strong><br>\n      <code>(1 - x²) (dy/dx)² = 4 (sin⁻¹ x)² = 4 y</code>.</p>\n      <p><strong>3. Differentiating Again with respect to x:</strong><br>\n      Using product rule on LHS:<br>\n      <code>(1 - x²) · [ 2 (dy/dx) (d²y/dx²) ] + (dy/dx)² · [ - 2x ] = 4 (dy/dx)</code>.<br>\n      Factoring out <code>2 (dy/dx)</code> on both sides (since dy/dx ≠ 0 in general):<br>\n      <code>2 (dy/dx) [ (1 - x²) (d²y/dx²) - x (dy/dx) ] = 2 (dy/dx) [ 2 ]</code>.<br>\n      Cancelling <code>2 (dy/dx)</code>:<br>\n      <strong>(1 - x²) (d²y/dx²) - x (dy/dx) - 2 = 0</strong>. (Hence Proved).</p>\n    </div>",
        "stepMarking": "[1.5 Marks] First derivative dy/dx and cross multiplication | [1.5 Marks] Squaring both sides to get (1 - x²)(dy/dx)² = 4y | [2 Marks] Second differentiation and cancelling 2(dy/dx) to achieve final relation",
        "cautionTrap": "Differentiating dy/dx directly using quotient rule without cross-multiplying first. Direct quotient rule leads to massive algebraic mess with square roots!",
        "topperTip": "Golden Topper Strategy: Always cross-multiply √(1 - x²) and SQUARE both sides before taking the second derivative.",
        "mnemonic": "Cross-Multiply ⟹ Square Both Sides ⟹ Differentiate Again."
    });

    pushQ("Three Dimensional Geometry", {
        "id": "math-3d-10y-2022",
        "marks": 5,
        "year": "CBSE 2022 (Term 2 Q14)",
        "pacing": "10 min",
        "type": "Shortest Distance between Skew Lines",
        "competency": "3D Vector Geometry",
        "stem": "Find the shortest distance between the following two skew lines:\\nLine 1: r⃗ = (î + 2ĵ + 3k̂) + λ (î - 3ĵ + 2k̂)\\nLine 2: r⃗ = (4î + 5ĵ + 6k̂) + μ (2î + 3ĵ + k̂)",
        "diagram": "<div class=\"practice-diagram-wrap my-3 flex justify-center\"><svg viewBox=\"0 0 340 180\" class=\"max-w-full h-auto rounded-lg bg-slate-50 border border-slate-200 shadow-sm\" style=\"max-height: 200px;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"40\" x2=\"310\" y2=\"70\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"140\" x2=\"310\" y2=\"120\" stroke=\"#16a34a\" stroke-width=\"2.5\"/><line x1=\"170\" y1=\"56\" x2=\"170\" y2=\"130\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4\"/><text x=\"180\" y=\"95\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">Shortest Distance d</text><text x=\"40\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#1d4ed8\">Line 1 (a⃗₁, b⃗₁)</text><text x=\"40\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#15803d\">Line 2 (a⃗₂, b⃗₂)</text></svg></div>",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Identify Vectors:</strong><br>\n      • Line 1: <code>a⃗₁ = î + 2ĵ + 3k̂</code>,  <code>b⃗₁ = î - 3ĵ + 2k̂</code>.<br>\n      • Line 2: <code>a⃗₂ = 4î + 5ĵ + 6k̂</code>, <code>b⃗₂ = 2î + 3ĵ + k̂</code>.<br>\n      • Difference vector: <code>a⃗₂ - a⃗₁ = (4-1)î + (5-2)ĵ + (6-3)k̂ = 3î + 3ĵ + 3k̂</code>.</p>\n      <p><strong>2. Cross Product (b⃗₁ × b⃗₂):</strong><br>\n      <code>b⃗₁ × b⃗₂ = | î   ĵ   k̂ |\\n| 1  -3   2 |\\n| 2   3   1 |</code><br>\n      <code>= î [(-3)(1) - (2)(3)] - ĵ [(1)(1) - (2)(2)] + k̂ [(1)(3) - (-3)(2)]</code><br>\n      <code>= î [-3 - 6] - ĵ [1 - 4] + k̂ [3 + 6] = -9î + 3ĵ + 9k̂</code>.<br>\n      Magnitude: <code>|b⃗₁ × b⃗₂| = √[(-9)² + 3² + 9²] = √[81 + 9 + 81] = √171 = 3√19</code>.</p>\n      <p><strong>3. Dot Product (a⃗₂ - a⃗₁) · (b⃗₁ × b⃗₂):</strong><br>\n      <code>(3î + 3ĵ + 3k̂) · (-9î + 3ĵ + 9k̂) = (3)(-9) + (3)(3) + (3)(9) = -27 + 9 + 27 = 9</code>.</p>\n      <p><strong>4. Shortest Distance Formula:</strong><br>\n      <code>d = | [ (a⃗₂ - a⃗₁) · (b⃗₁ × b⃗₂) ] / |b⃗₁ × b⃗₂| | = | 9 / (3√19) | = 3 / √19 = <strong>(3√19) / 19 units</strong></code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct formula d = |(a⃗₂ - a⃗₁) · (b⃗₁ × b⃗₂)| / |b⃗₁ × b⃗₂| | [1.5 Marks] Cross product b⃗₁ × b⃗₂ and its magnitude 3√19 | [1.5 Marks] Dot product calculation (value = 9) | [1 Mark] Final rationalized shortest distance (3√19)/19 units",
        "cautionTrap": "Dropping the absolute value brackets. Distance is always a non-negative scalar quantity!",
        "topperTip": "Rationalize the denominator: express 3/√19 as 3√19 / 19 units with proper units stated.",
        "mnemonic": "Skew Distance: d = |(Δa⃗ · (b⃗₁ × b⃗₂)) / |b⃗₁ × b⃗₂||."
    });

    pushQ("Linear Programming", {
        "id": "math-lpp-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 65/1/1 Q35)",
        "pacing": "10 min",
        "type": "Bounded Feasible Region Optimization",
        "competency": "Graphical Method & Corner Point Evaluation",
        "stem": "Solve the following Linear Programming Problem graphically:\\nMaximize: Z = 4x + y\\nSubject to constraints:\\nx + y ≤ 50\\n3x + y ≤ 90\\nx ≥ 0, y ≥ 0.",
        "diagram": "<div class=\"practice-diagram-wrap my-3 flex justify-center\"><svg viewBox=\"0 0 300 220\" class=\"max-w-full h-auto rounded-lg bg-slate-50 border border-slate-200 shadow-sm\" style=\"max-height: 220px;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"180\" x2=\"280\" y2=\"180\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"180\" x2=\"40\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"40,180 40,80 80,100 160,180\" fill=\"#bbf7d0\" fill-opacity=\"0.6\" stroke=\"#16a34a\" stroke-width=\"2\"/><circle cx=\"40\" cy=\"180\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"40\" cy=\"80\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"80\" cy=\"100\" r=\"4\" fill=\"#dc2626\"/><circle cx=\"160\" cy=\"180\" r=\"4\" fill=\"#0f172a\"/><text x=\"25\" y=\"195\" font-size=\"10\" font-weight=\"bold\">O(0,0)</text><text x=\"5\" y=\"80\" font-size=\"10\" font-weight=\"bold\">B(0,50)</text><text x=\"90\" y=\"95\" font-size=\"10\" font-weight=\"bold\" fill=\"#dc2626\">C(20,30)</text><text x=\"150\" y=\"195\" font-size=\"10\" font-weight=\"bold\">A(30,0)</text><text x=\"260\" y=\"195\" font-size=\"11\" font-weight=\"bold\">X</text><text x=\"25\" y=\"25\" font-size=\"11\" font-weight=\"bold\">Y</text></svg></div>",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Boundary Lines & Intercepts:</strong><br>\n      • Line 1: <code>x + y = 50</code> passes through (50, 0) and (0, 50). Testing (0,0): 0 + 0 ≤ 50 (True, contains origin).<br>\n      • Line 2: <code>3x + y = 90</code> passes through (30, 0) and (0, 90). Testing (0,0): 0 + 0 ≤ 90 (True, contains origin).<br>\n      • Non-negativity constraints <code>x ≥ 0, y ≥ 0</code> restrict the region to the First Quadrant.</p>\n      <p><strong>2. Point of Intersection (C):</strong><br>\n      Subtracting: <code>(3x + y) - (x + y) = 90 - 50  ⟹  2x = 40  ⟹  x = 20</code>.<br>\n      Substitute x = 20: <code>20 + y = 50  ⟹  y = 30</code>. Intersection point is <strong>C(20, 30)</strong>.</p>\n      <p><strong>3. Corner Points & Objective Value Z = 4x + y:</strong><br>\n      The feasible region OACB is bounded.</p>\n      <div class=\"overflow-x-auto\">\n        <table class=\"w-full border-collapse border border-slate-300 text-left text-xs\">\n          <thead>\n            <tr class=\"bg-slate-100\">\n              <th class=\"border border-slate-300 p-1 font-bold\">Corner Point</th>\n              <th class=\"border border-slate-300 p-1 font-bold\">Z = 4x + y Value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr><td class=\"border border-slate-300 p-1\">O (0, 0)</td><td class=\"border border-slate-300 p-1\">Z = 4(0) + 0 = 0</td></tr>\n            <tr><td class=\"border border-slate-300 p-1\">A (30, 0)</td><td class=\"border border-slate-300 p-1 font-bold text-indigo-700\">Z = 4(30) + 0 = 120 (MAXIMUM)</td></tr>\n            <tr><td class=\"border border-slate-300 p-1\">C (20, 30)</td><td class=\"border border-slate-300 p-1\">Z = 4(20) + 30 = 80 + 30 = 110</td></tr>\n            <tr><td class=\"border border-slate-300 p-1\">B (0, 50)</td><td class=\"border border-slate-300 p-1\">Z = 4(0) + 50 = 50</td></tr>\n          </tbody>\n        </table>\n      </div>\n      <p><strong>Conclusion:</strong> Maximum value of Z is <strong>120 at point A(30, 0)</strong>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Accurate plotting of both constraint lines and shading feasible region OACB | [1 Mark] Finding intersection point C(20, 30) | [1.5 Marks] Corner point table with Z evaluation | [1 Mark] Final conclusion: Max Z = 120 at (30, 0)",
        "cautionTrap": "Assuming the maximum must occur at the intersection point C(20, 30). Here A(30,0) gives 120 while C(20,30) gives only 110!",
        "topperTip": "Always evaluate Z at ALL corner points in a neat table. Never guess which point gives the optimum.",
        "mnemonic": "LPP 4 Steps: Plot lines ⟹ Shade Region ⟹ Find Corner Points ⟹ Table Z."
    });

    pushQ("Probability", {
        "id": "math-prob-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 65/1/1 Q34)",
        "pacing": "10 min",
        "type": "Bayes' Theorem Application",
        "competency": "Conditional Probability & Bayes' Law",
        "stem": "An insurance company insured 2000 scooter drivers, 4000 car drivers and 6000 truck drivers. The probability of an accident involving a scooter, car, and truck is 0.01, 0.03, and 0.15 respectively. One of the insured persons meets with an accident. What is the probability that he is a scooter driver?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Define Events:</strong><br>\n      • Total insured drivers = 2000 + 4000 + 6000 = 12,000.<br>\n      • Let E₁ = Insured person is a scooter driver ⟹ <code>P(E₁) = 2000 / 12000 = 2/12 = 1/6</code>.<br>\n      • Let E₂ = Insured person is a car driver ⟹ <code>P(E₂) = 4000 / 12000 = 4/12 = 1/3</code>.<br>\n      • Let E₃ = Insured person is a truck driver ⟹ <code>P(E₃) = 6000 / 12000 = 6/12 = 1/2</code>.<br>\n      • Let A = Person meets with an accident.</p>\n      <p><strong>2. Conditional Probabilities:</strong><br>\n      • <code>P(A|E₁) = 0.01 = 1/100</code>.<br>\n      • <code>P(A|E₂) = 0.03 = 3/100</code>.<br>\n      • <code>P(A|E₃) = 0.15 = 15/100</code>.</p>\n      <p><strong>3. Applying Bayes' Theorem:</strong><br>\n      We need <code>P(E₁|A)</code>:<br>\n      <code>P(E₁|A) = [ P(E₁) P(A|E₁) ] / [ P(E₁) P(A|E₁) + P(E₂) P(A|E₂) + P(E₃) P(A|E₃) ]</code>.<br>\n      Numerator = <code>(1/6) × (1/100) = 1 / 600</code>.<br>\n      Denominator = <code>(1/6)(1/100) + (1/3)(3/100) + (1/2)(15/100)</code><br>\n      <code>= (1/600) + (6/600) + (45/600) = 52 / 600</code>.<br>\n      Therefore: <code>P(E₁|A) = (1 / 600) / (52 / 600) = <strong>1 / 52</strong></code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct definition of events E₁, E₂, E₃ and prior probabilities | [1 Mark] Correct conditional probabilities P(A|E_i) | [1.5 Marks] Statement of Bayes' formula | [1.5 Marks] Numerator/denominator evaluation and final answer 1/52",
        "cautionTrap": "Confusing P(A|E₁) with P(E₁|A). P(A|E₁) is given (probability of accident given scooter); P(E₁|A) is asked (probability of scooter given accident).",
        "topperTip": "Express all prior probabilities with a common denominator (e.g. out of 600) to cancel denominators instantly and prevent fraction arithmetic errors.",
        "mnemonic": "Bayes' Law: Posterior = (Prior × Likelihood) / Total Evidence."
    });

    pushQ("Computer Networks", {
        "id": "cs-net-10y-2023",
        "marks": 4,
        "year": "CBSE 2023 (Set 083 Q35)",
        "pacing": "8 min",
        "type": "Network Architecture Case Study",
        "competency": "Network Design & 80-20 Rule",
        "stem": "Knowledge Hub Organization has set up its new center in Mangalore. It has 4 blocks of buildings: Admin Block, Tech Block, Research Block, and Training Block.\\n\nDistances between blocks:\\n\n• Admin to Tech: 60 m\\n\n• Admin to Research: 110 m\\n\n• Admin to Training: 45 m\\n\n• Tech to Research: 70 m\\n\n• Tech to Training: 95 m\\n\n• Research to Training: 140 m\\n\nNumber of Computers in each block: Admin: 30, Tech: 120, Research: 40, Training: 25.\\n\n(a) Suggest the most suitable block to house the SERVER with justification.\\n\n(b) Suggest the best cable layout connecting the blocks.\\n\n(c) Suggest the placement of: (i) Repeater, and (ii) Hub/Switch with justification.\\n\n(d) Which fast wired transmission media should be used to connect the blocks?",
        "diagram": "<div class=\"practice-diagram-wrap my-3 flex justify-center\"><svg viewBox=\"0 0 340 180\" class=\"max-w-full h-auto rounded-lg bg-slate-50 border border-slate-200 shadow-sm\" style=\"max-height: 200px;\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"30\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.5\"/><text x=\"45\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#0369a1\">Admin</text><text x=\"50\" y=\"70\" font-size=\"9\" fill=\"#0369a1\">(30 PCs)</text><rect x=\"230\" y=\"30\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"245\" y=\"52\" font-size=\"10\" font-weight=\"bold\" fill=\"#b45309\">Tech (SERVER)</text><text x=\"250\" y=\"68\" font-size=\"9\" fill=\"#b45309\">(120 PCs)</text><rect x=\"30\" y=\"110\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"45\" y=\"132\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\">Training</text><text x=\"50\" y=\"148\" font-size=\"9\" fill=\"#334155\">(25 PCs)</text><rect x=\"230\" y=\"110\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"1.5\"/><text x=\"245\" y=\"132\" font-size=\"10\" font-weight=\"bold\" fill=\"#047857\">Research</text><text x=\"250\" y=\"148\" font-size=\"9\" fill=\"#047857\">(40 PCs)</text><line x1=\"230\" y1=\"55\" x2=\"110\" y2=\"55\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"270\" y1=\"80\" x2=\"270\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"70\" y1=\"80\" x2=\"70\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"2\"/></svg></div>",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Server Placement:</strong><br>\n      The Server should be housed in the <strong>Tech Block</strong>. Justification: According to the <strong>80/20 rule of networking</strong>, the server must be installed in the building containing the maximum number of computers (120 computers), which minimizes network transit traffic.</p>\n      <p><strong>(b) Cable Layout:</strong><br>\n      Star Topology centered at Tech Block or Bus Topology minimizing cable length:<br>\n      • Tech Block to Admin Block: 60 m<br>\n      • Tech Block to Research Block: 70 m<br>\n      • Admin Block to Training Block: 45 m<br>\n      Total cable required = 60 + 70 + 45 = <strong>175 m</strong> (Optimal minimal spanning tree layout).</p>\n      <p><strong>(c) Device Placements:</strong><br>\n      • <strong>Repeater:</strong> Required between blocks where distance exceeds 100 m (e.g. between Admin and Research: 110 m, or Training and Research: 140 m) to regenerate signals and prevent attenuation.<br>\n      • <strong>Hub / Switch:</strong> Required in <strong>EACH of the 4 blocks</strong> to interconnect computers within that local building network.</p>\n      <p><strong>(d) Transmission Media:</strong><br>\n      <strong>Optical Fiber Cable (OF)</strong> for high-speed, high-bandwidth inter-block backbone communication, or <strong>CAT-6 UTP (Twisted Pair)</strong> for cost-effective local intra-block wiring.</p>\n    </div>",
        "stepMarking": "[1 Mark] (a) Server in Tech block with 80/20 rule justification | [1 Mark] (b) Star / Minimal spanning tree diagram with 175m calculation | [1 Mark] (c) Repeater for >100m runs + Hub/Switch in each block | [1 Mark] (d) Optical Fiber / CAT-6 cable",
        "cautionTrap": "Suggesting a repeater for a distance under 70m. Repeaters are only justified when cable length exceeds 100 meters (Ethernet 100m limit)!",
        "topperTip": "Draw the block diagram with arrows showing Tech connected to Admin, Tech connected to Research, and Admin connected to Training.",
        "mnemonic": "80/20 Rule: Server goes to the Crowded Block (Max PCs)."
    });

    pushQ("Computer Networks", {
        "id": "cs-net-10y-2024",
        "marks": 2,
        "year": "CBSE 2024 (Set 083 Q18)",
        "pacing": "3 min",
        "type": "Network Hardware & Protocols",
        "competency": "Device Functionality",
        "stem": "(a) Differentiate between a Switch and a Router in computer networking.\\n(b) Expand and explain the purpose of: (i) VoIP, and (ii) DNS.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Switch vs Router:</strong><br>\n      • <strong>Switch:</strong> Operates at Data Link Layer (Layer 2). Connects devices within the <em>same local network (LAN)</em> and forwards data packets using physical <strong>MAC addresses</strong>.<br>\n      • <strong>Router:</strong> Operates at Network Layer (Layer 3). Connects <em>different, disparate networks</em> (e.g. connecting a LAN to the Internet WAN) and routes packets using logical <strong>IP addresses</strong>.</p>\n      <p><strong>(b) Expansions & Purpose:</strong><br>\n      • (i) <strong>VoIP (Voice over Internet Protocol):</strong> Enables transmission of voice calls, multimedia, and audio sessions over digital IP networks (Internet) rather than traditional analogue PSTN phone circuits.<br>\n      • (ii) <strong>DNS (Domain Name System):</strong> Translates human-readable domain names (e.g. <code>www.cbse.gov.in</code>) into machine-readable numerical IP addresses (e.g. <code>164.100.128.5</code>).</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct distinction between Switch (Layer 2, MAC, LAN) and Router (Layer 3, IP, inter-network) | [0.5 Mark] VoIP expansion and purpose | [0.5 Mark] DNS expansion and purpose",
        "cautionTrap": "Saying switch and router both connect to the internet. A switch only connects local devices; ONLY the router routes to outside networks.",
        "topperTip": "Mention MAC address for Switch and IP address for Router to demonstrate precise technical mastery.",
        "mnemonic": "Switch = Same Subnet (MAC); Router = Remote Routes (IP)."
    });

    pushQ("Writing Skills Box Formats", {
        "id": "eng-inv-10y-2023",
        "marks": 4,
        "year": "CBSE 2023 (Set 301 Q4)",
        "pacing": "7 min",
        "type": "Formal Invitation Card Format",
        "competency": "Card Format & Formal Etiquette",
        "stem": "You are the Principal of St. Xavier's Senior Secondary School, Delhi. Draft a formal printed invitation card in not more than 50 words inviting parents and guests to the Annual Prize Distribution Ceremony on 15th November 2026. The Minister of Education has consented to be the Chief Guest.",
        "diagram": "<div class=\"practice-diagram-wrap my-3 flex justify-center\"><svg viewBox=\"0 0 520 200\" class=\"max-w-full h-auto rounded-lg bg-slate-50 border border-slate-200 shadow-sm\" style=\"max-height: 200px;\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"15\" y=\"15\" width=\"490\" height=\"170\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"260\" y=\"40\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">THE MANAGEMENT, STAFF AND STUDENTS OF</text><text x=\"260\" y=\"58\" font-size=\"13\" font-weight=\"extrabold\" fill=\"#1e40af\" text-anchor=\"middle\">ST. XAVIER'S SR. SEC. SCHOOL, DELHI</text><text x=\"260\" y=\"78\" font-size=\"10\" font-style=\"italic\" fill=\"#475569\" text-anchor=\"middle\">cordially solicit your benign presence on the auspicious occasion of their</text><text x=\"260\" y=\"98\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">ANNUAL PRIZE DISTRIBUTION CEREMONY</text><text x=\"260\" y=\"118\" font-size=\"10\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">on Saturday, 15th November 2026 at 10:00 AM</text><text x=\"260\" y=\"134\" font-size=\"10\" fill=\"#334155\" text-anchor=\"middle\">in the School Auditorium</text><text x=\"35\" y=\"165\" font-size=\"9\" font-weight=\"bold\" fill=\"#0f172a\">RSVP: Principal (011-2748XXXX)</text><text x=\"360\" y=\"165\" font-size=\"9\" fill=\"#dc2626\">Special Instructions: Carry Invite</text></svg></div>",
        "modelAnswer": "<div class=\"space-y-2 text-xs border-2 border-slate-800 p-3 bg-white text-slate-900 font-serif\">\n      <div class=\"text-center text-xs tracking-wider\">The Management, Staff and Students of</div>\n      <div class=\"text-center font-bold text-sm text-indigo-900 tracking-wide my-1\">ST. XAVIER'S SENIOR SECONDARY SCHOOL, DELHI</div>\n      <div class=\"text-center italic text-xs text-slate-700\">cordially solicit the benign presence of</div>\n      <div class=\"text-center font-semibold text-xs my-1\">____________________________________________________</div>\n      <div class=\"text-center italic text-xs text-slate-700\">on the auspicious occasion of the</div>\n      <div class=\"text-center font-extrabold text-sm text-red-700 tracking-widest my-1\">ANNUAL PRIZE DISTRIBUTION CEREMONY</div>\n      <div class=\"text-center font-bold text-xs my-1\">on Saturday, 15th November 2026 at 10:00 AM</div>\n      <div class=\"text-center text-xs\">in the <strong>School Auditorium</strong></div>\n      <div class=\"text-center text-xs my-1\"><strong>Hon'ble Minister of Education</strong> has kindly consented to be the Chief Guest.</div>\n      <div class=\"flex justify-between items-end mt-3 pt-2 border-t border-slate-200 text-xs\">\n        <div><strong>RSVP:</strong><br>Principal<br>Phone: 011-2748XXXX</div>\n        <div class=\"text-right text-red-600 font-medium\">Please be seated by 9:45 AM.<br>Entry by invitation card only.</div>\n      </div>\n    </div>",
        "stepMarking": "[1 Mark] Format: Box, 3rd person pronoun, centered card layout, RSVP | [2 Marks] Content: Host, Occasion, Date, Time, Venue, Chief Guest | [1 Mark] Expression: Grammatical accuracy, formal vocabulary, 50-word limit",
        "cautionTrap": "Writing in the first person ('I invite you' / 'We invite you'). Printed formal invitations must ALWAYS be drafted in the THIRD PERSON ('The Management... cordially solicits the presence of...').",
        "topperTip": "Include 'RSVP' at bottom left and 'Please be seated by 9:45 AM' at bottom right. Never sign your personal name inside a printed card.",
        "mnemonic": "Card Rules: Box + 3rd Person + RSVP + Centered Elegance."
    });

    pushQ("Lost Spring", {
        "id": "eng-ls-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 301 Q8)",
        "pacing": "10 min",
        "type": "Comparative Essay & Social Critique",
        "competency": "Social Theme & Character Contrast",
        "stem": "“Survival in Seemapuri means rag-picking. Through the years, it has acquired the proportions of a fine art.” Contrast the lives of Saheb-e-Alam in Seemapuri with Mukesh in Firozabad. How does Anees Jung highlight the apathy of society and the vicious cycle that crushes children's dreams in “Lost Spring”?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>In <em>“Lost Spring”</em>, Anees Jung presents a harrowing indictment of the perpetual poverty and callous societal apathy that rob millions of Indian children of their childhood innocence and aspirations.<br><br>\n      • <strong>Saheb-e-Alam (The Irony of Name):</strong> Saheb, whose name ironically means “Lord of the Universe”, scrounges garbage dumps in Seemapuri for “gold”. Garbage to elders is daily bread; to children, it is wrapped in wonder. However, when Saheb takes up a job at a tea stall for ₹800, his carefree freedom is replaced by a heavy steel canister—he is no longer his own master.<br><br>\n      • <strong>Mukesh (The Daring Spark):</strong> In Firozabad, every family is caught in the suffocating glass bangle-making furnaces where children lose their eyesight before adulthood. Unlike his peers who surrender to fate (<em>karma</em>), Mukesh dares to dream of becoming a <strong>motor mechanic</strong>, refusing to fly aeroplanes but aiming for tangible independence.<br><br>\n      • <strong>The Vicious Circle:</strong> Anees Jung exposes the twin strangleholds: the stigma of caste and the ruthless <strong>“sahukars, middlemen, policemen, bureaucrats, and politicians”</strong> who collude to keep child labourers terrified and unorganized.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Analysis of Saheb: name irony, garbage as survival vs wonder, loss of freedom at tea stall | [1.5 Marks] Analysis of Mukesh: glass industry perils vs courageous dream of motor mechanic | [2 Marks] Critique of societal apathy, nexus of middlemen/police, and theme of stolen childhood",
        "cautionTrap": "Describing only the physical garbage without analyzing the psychological surrender of Saheb vs the defiant optimism of Mukesh.",
        "topperTip": "Quote the crucial nexus: 'Sahukars, middlemen, keepers of law, bureaucrats and politicians'. It secures full marks for thematic depth.",
        "mnemonic": "Lost Spring = Saheb (Surrender to Canister) vs Mukesh (Daring Mechanic)."
    });

    pushQ("Deep Water", {
        "id": "eng-dw-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 301 Q9)",
        "pacing": "10 min",
        "type": "Psychological Analysis & Overcoming Fear",
        "competency": "Autobiographical Analysis",
        "stem": "“All we have to fear is fear itself.” Trace William Douglas's journey from visceral childhood terror to complete psychological triumph over hydrophobia in “Deep Water”. How does Roosevelt's philosophy illuminate Douglas's ultimate realization?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>In William Douglas's autobiographical narrative <em>“Deep Water”</em>, the author chronicles how deep-seated trauma can paralyze human existence and how methodical willpower can overcome the most crippling fears.<br><br>\n      • <strong>Roots of Childhood Terror:</strong> At age three or four on California beach, waves knocked him down. At ten or eleven, the YMCA pool misadventure occurred when a big bruiser hurled him into the 9-foot deep end. Douglas experienced utter black asphyxiation, paralyzed lungs, and the peace of near-death where “there is no fear, only peaceful oblivion.”<br><br>\n      • <strong>Systematic Rebuilding by Instructor:</strong> Determined to reclaim his life, Douglas hired an instructor who built a swimmer <strong>“piece by piece”</strong>—first putting a belt and pulley system over him for months, teaching him to exhale underwater and inhale above water, and kicking his legs until his terror-stiffened muscles yielded.<br><br>\n      • <strong>Solo Confrontation:</strong> Knowing residual fear lingered, Douglas tested himself alone at Lake Wentworth in New Hampshire and Warm Lake, boldly commanding terror: <em>“Well, Mr Terror, what do you think you can do to me?”</em><br><br>\n      • <strong>Roosevelt’s Realization:</strong> Douglas concludes that in death there is peace; fear exists only in the anticipation of death. Having conquered the dread of dying, the will to live grew intensely triumphant.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Description of YMCA near-drowning trauma and sensory paralysis | [1.5 Marks] Instructor's systematic step-by-step physical conditioning | [1 Mark] Solo tests at Lake Wentworth and Warm Lake | [1 Mark] Application of Roosevelt's quote 'All we have to fear is fear itself'",
        "cautionTrap": "Omitting Douglas's solo swimming tests after the instructor finished. The instructor built the swimmer, but Douglas himself had to conquer the lingering psychological terror alone at Lake Wentworth!",
        "topperTip": "Conclude with the exact quote: 'The will to live somehow grew in intensity.' It highlights the existential victory.",
        "mnemonic": "Douglas Conquest: YMCA Trauma ⟶ Instructor Rebuild ⟶ Lake Wentworth Solo Test ⟶ Roosevelt Freedom."
    });

    pushQ("Indigo", {
        "id": "eng-ind-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 301 Q10)",
        "pacing": "10 min",
        "type": "Historical Leadership & Civil Disobedience",
        "competency": "Historical Narrative & Self-Reliance",
        "stem": "Why did Mahatma Gandhi consider the Champaran episode to be the turning point in his life and the Indian freedom struggle? How did he combine political action with deep socio-economic and medical reform in Louis Fischer's “Indigo”?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Louis Fischer's <em>“Indigo”</em> demonstrates how Gandhi's first campaign of Civil Disobedience in India became the ideological and strategic foundation of the freedom movement.<br><br>\n      • <strong>Spontaneous Peasant Mobilization:</strong> When Gandhi arrived in Motihari and was served an eviction notice by the British magistrate, he disobeyed. Thousands of unlettered peasants spontaneously surrounded the courthouse—their spontaneous demonstration was the beginning of their <strong>liberation from the fear of the British</strong>.<br><br>\n      • <strong>The 25% Compromise:</strong> When landlords offered only a 25% refund of the illegally extorted money, Gandhi immediately accepted. For him, the refund percentage was secondary; what mattered was that the arrogant British planters were forced to <strong>surrender their prestige and refund stolen money</strong>.<br><br>\n      • <strong>Holistic Constructive Work:</strong> Gandhi recognized that political freedom was meaningless without social upliftment. He recruited voluntary teachers (Mahadev Desai, Narhari Parikh), opened primary schools in six villages, engaged Kasturbai to teach personal hygiene, and deployed a doctor offering three basic medicines (castor oil, quinine, sulphur ointment).<br><br>\n      • <strong>Lesson in Self-Reliance:</strong> Gandhi fiercely opposed retaining Charles Freer Andrews as a supporter, asserting that Indians must rely on their own strength: <strong>“Self-reliance, Indian independence, and help to sharecroppers were all bound together.”</strong></p>\n    </div>",
        "stepMarking": "[1.5 Marks] Civil disobedience at Motihari court and liberation from fear | [1 Mark] Rationale behind accepting 25% refund (loss of British prestige) | [1.5 Marks] Social, educational, and medical reforms initiated in Champaran villages | [1 Mark] Refusal of C.F. Andrews' help and doctrine of self-reliance",
        "cautionTrap": "Focusing only on the indigo sharecropping contract (tinkathia system) while completely ignoring the social, health, and hygiene reforms that Gandhi led.",
        "topperTip": "Include the concluding synthesis: 'Self-reliance, Indian independence and help to sharecroppers were all bound together.'",
        "mnemonic": "Champaran Formula: Courtyard Courage + 25% Refund + Village Reform + Self-Reliance."
    });

    pushQ("A Thing of Beauty", {
        "id": "eng-tob-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 301 Q7)",
        "pacing": "8 min",
        "type": "Poetic Philosophy & Imagery",
        "competency": "Literary & Philosophical Analysis",
        "stem": "“A thing of beauty is a joy forever: Its loveliness increases; it will never pass into nothingness.” How does John Keats establish the therapeutic and immortal power of beauty against human despair and mortality? Discuss the imagery of the “bower quiet” and the “endless fountain of immortal drink”.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>In his romantic masterpiece <em>“A Thing of Beauty”</em> (excerpted from <em>Endymion</em>), John Keats presents beauty as an eternal, transcendent sanctuary that preserves human sanity amidst existential misery.<br><br>\n      • <strong>Permanence vs Transience:</strong> Human life is afflicted by despondence, dearth of noble natures, unhealthy ways, and dark days. Yet beauty never diminishes (<em>“never passes into nothingness”</em>); instead, its emotional resonance multiplies over time.<br><br>\n      • <strong>The “Bower Quiet”:</strong> Keats uses the pastoral metaphor of a bower—a peaceful shaded arbor that grants quiet refuge, sound sleep, sweet dreams, and soothing health. Every morning we weave a “flowery band” to bind our weary souls to the earth.<br><br>\n      • <strong>Catalogue of Beautiful Things:</strong> Keats finds solace in the sun, moon, old and young trees providing shade for simple sheep, vibrant daffodils in green world, clear cooling rills defying hot summer, and fair musk-rose blooms in mid-forest brakes.<br><br>\n      • <strong>The Endless Fountain:</strong> Keats links the magnificence of heroic ancestors (<em>“the mighty dead”</em>) and immortal literature to <strong>“an endless fountain of immortal drink”</strong> poured by divine grace from the brink of heaven, ensuring spiritual rejuvenation.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Keatsian philosophy: loveliness increases and never fades into nothingness | [1.5 Marks] Analysis of bower quiet and flowery band binding us to earth | [1 Mark] Examples of natural beauty (daffodils, clear rills, musk-rose) | [1 Mark] Metaphor of the endless fountain of immortal drink from heaven's brink",
        "cautionTrap": "Treating beauty merely as sensory physical pleasure rather than Keats' philosophical medicine that lifts the 'pall of despondence' from dark spirits.",
        "topperTip": "Quote the crucial lines: 'Removes the pall from our dark spirits' and 'Endless fountain of immortal drink, pouring unto us from the heaven's brink.'",
        "mnemonic": "Keats Triad: Joy Forever ⟶ Bower Quiet ⟶ Heavenly Immortal Drink."
    });

    pushQ("Keeping Quiet", {
        "id": "eng-kq-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 301 Q8)",
        "pacing": "8 min",
        "type": "Introspection & Universal Brotherhood",
        "competency": "Eco-Poetic Analysis",
        "stem": "How does Pablo Neruda advocate for peaceful coexistence and self-introspection in “Keeping Quiet”? Why does he explicitly clarify that his message must not be confused with “total inactivity”?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>In <em>“Keeping Quiet”</em>, Pablo Neruda presents an urgent philosophical plea for global cessation of frantic, destructive pursuits to allow humanity time for soul-searching and mutual solidarity.<br><br>\n      • <strong>The Exotic Moment:</strong> Counting up to twelve and maintaining silence for one second transcends linguistic barriers and nationalist divides. In this pause—free from engines, screeching factories, and rush—humanity experiences a sudden, luminous strangeness of togetherness.<br><br>\n      • <strong>Healing of Nature and Self:</strong> The fisherman will refrain from hunting whales in the cold seas, and the salt gatherer will pause to tend to his bruised, bleeding hands—symbolizing the restoration of ecology and human well-being.<br><br>\n      • <strong>Stop All Destructive Wars:</strong> Those who orchestrate <em>“green wars, wars with gas, wars with fire”</em> (yielding victories with no survivors) are urged to put on clean clothes and walk alongside their brothers in the shade, doing nothing.<br><br>\n      • <strong>Clarification against Total Inactivity:</strong> Neruda explicitly warns: <em>“What I want should not be confused with total inactivity. Life is what it is about; I want no truck with death.”</em> Silence is not lifeless inertia; it is like the dormant earth in winter that appears dead but secretly nurtures vibrant life for spring.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Significance of counting to twelve and the exotic moment without rush/engines | [1 Mark] Healing of nature (whales) and worker self-care (hurt hands) | [1 Mark] Critique of green wars / chemical wars ('victory with no survivors') | [1.5 Marks] Vital distinction between silent rejuvenation vs total inactivity/death with Earth analogy",
        "cautionTrap": "Confusing Neruda's silence with passivity or death. Neruda explicitly states: 'I want no truck with death'—silence is active regeneration!",
        "topperTip": "Cite the Earth symbol: 'As when everything seems dead and later proves to be alive.'",
        "mnemonic": "Neruda Steps: Count to 12 ⟶ Exotic Pause ⟶ Stop Wars ⟶ Earth Regenerates."
    });

    pushQ("Aunt Jennifer's Tigers", {
        "id": "eng-ajt-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 301 Q9)",
        "pacing": "8 min",
        "type": "Feminist Imagery & Art Immortality",
        "competency": "Poetic Symbolism & Gender Critique",
        "stem": "Analyze the powerful contrast between Aunt Jennifer and her embroidered tigers in Adrienne Rich's poem. How does the poem critique patriarchal subjugation, and in what way does Aunt Jennifer achieve immortality through her artistic creation?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Adrienne Rich's <em>“Aunt Jennifer's Tigers”</em> is a profound feminist critique of patriarchal domestic oppression, counterpoised against the liberating immortality of art.<br><br>\n      • <strong>The Vivid Tigers:</strong> Across the woollen screen, Aunt Jennifer prances tigers of <em>“bright topaz denizens of a world of green”</em>. They are fearless, confident, and majestic—they <em>“pace in sleek chivalric certainty”</em>, unafraid of the men standing beneath the trees.<br><br>\n      • <strong>The Oppressed Creator:</strong> In stark contrast, Aunt Jennifer's own hands are <em>“fluttering through her wool”</em>, unable even to pull the delicate ivory needle. The cause is <strong>“the massive weight of Uncle's wedding band”</strong>, a poignant metaphor for the stifling, patriarchal matrimony that has physically and emotionally subjugated her throughout her life.<br><br>\n      • <strong>Ordeals that Outlive the Mortal Body:</strong> Even in death, her terrified hands will remain <em>“ringed with ordeals she was mastered by”</em>—the social institution of male domination marks her corpse.<br><br>\n      • <strong>The Triumph of Art:</strong> Yet her soul finds defiance through creativity. The tigers she created in the tapestry will outlive her, continuing to <strong>“go on prancing, proud and unafraid”</strong>—immortalizing her suppressed longing for freedom and courage.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Vibrant characterization of tigers: topaz denizens, chivalric certainty, fearless | [1.5 Marks] Symbolism of fluttering fingers and massive weight of Uncle's wedding band | [1 Mark] Critique of lifelong patriarchal subjugation ('mastered by ordeals') | [1 Mark] Immortality of art: tigers prancing proud and unafraid after her death",
        "cautionTrap": "Failing to explain the symbolism of 'wedding band'. It is not just a ring; it represents the oppressive weight of patriarchal marriage.",
        "topperTip": "Contrast the key words: 'fluttering fingers' vs 'sleek chivalric certainty'; 'mastered' vs 'proud and unafraid'.",
        "mnemonic": "Rich Contrast: Frail Jennifer (Oppressed) vs Fierce Tigers (Immortal Art)."
    });

    pushQ("The Enemy", {
        "id": "eng-en-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 301 Q11)",
        "pacing": "10 min",
        "type": "Moral Dilemma & Humanitarian Ethics",
        "competency": "Ethical Conflict & Character Study",
        "stem": "“A surgeon should not let a man die if he can save him.” How does Dr. Sadao Hoki navigate the agonizing conflict between professional duty and intense nationalistic loyalty during wartime in Pearl S. Buck's “The Enemy”? How does compassion ultimately triumph?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>In Pearl S. Buck's <em>“The Enemy”</em>, Dr. Sadao Hoki embodies the profound moral dilemma between universal humanitarian ethics (the Hippocratic Oath) and militant nationalism during World War II.<br><br>\n      • <strong>The Dilemma:</strong> A severely wounded, unconscious American POW (Tom) is washed ashore outside Sadao's beachside house. As Japanese citizens during wartime, harbouring an American is high treason punishable by death. Throwing him back into the sea means certain death for the wounded youth.<br><br>\n      • <strong>Triumph of the Doctor:</strong> Trained in America to value every human life, Sadao's surgical instincts instinctively take command: <em>“He was a surgeon, and his hands knew their work.”</em> Aided reluctantly by his terrified wife Hana, Sadao operates, removes the bullet lodged near Tom's kidney, and nurses his mortal enemy back to health despite open rebellion and abandonment by his domestic servants.<br><br>\n      • <strong>Patriotic Duty & General's Selfishness:</strong> To fulfill his patriotic duty, Sadao informs General Takima about the prisoner. The General promises to dispatch private assassins, but fails due to self-absorbed illness.<br><br>\n      • <strong>Compassionate Resolution:</strong> Realizing the General is unreliable and unable to kill in cold blood, Sadao secretly equips Tom with a boat, provisions, flashlight, and Japanese kimono, enabling him to escape to an American vessel. Looking out at the ocean, Sadao muses why he could not kill him—proving that <strong>human compassion transcends national borders and wartime hatred</strong>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Nature of moral dilemma: harbouring enemy POW vs medical oath to save life | [1.5 Marks] Surgical courage: operating near kidney, Hana's assistance despite servants' revolt | [1 Mark] Confession to General Takima and the forgotten assassins | [1 Mark] Final humanitarian rescue: providing boat, supplies, and escape to freedom",
        "cautionTrap": "Portraying Sadao as an unpatriotic traitor. He reported the prisoner to the General! His dilemma was navigating between humanity and duty.",
        "topperTip": "Cite Sadao's introspective concluding thought: 'I wonder why I could not kill him.' It encapsulates the victory of humanism over wartime conditioning.",
        "mnemonic": "Sadao's Moral Compass: Save the Dying ⟶ Report to General ⟶ Assist Escape ⟶ Universal Humanity."
    });


    // --- 10-YEAR OFFICIAL CBSE IMPORTED QUESTION SETS (BATCH 2) ---
    pushQ("Magnetism and Matter", {
        "id": "phy-mm-10y-2022",
        "marks": 2,
        "year": "CBSE 2022 (Term 2 Q5)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Magnetic Dipole & Properties",
        "stem": "Write two characteristic properties of magnetic field lines. Why can two magnetic field lines never intersect each other?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Two Characteristic Properties:</strong><br>\n      • Magnetic field lines form <strong>continuous closed loops</strong> (they emerge outside from North to South pole and continue inside the magnet from South to North pole). This reflects the non-existence of isolated magnetic monopoles (<code>∇ · B = 0</code>).<br>\n      • The tangent drawn to a magnetic field line at any point gives the <strong>direction of the magnetic field B</strong> at that point.</p>\n      <p><strong>2. Why Lines Never Intersect:</strong><br>\n      If two field lines intersected at a point, then two tangents could be drawn at the point of intersection, indicating <strong>two different directions of magnetic field at the same single point</strong>, which is physically impossible.</p>\n    </div>",
        "stepMarking": "[1 Mark] Two correct properties of magnetic field lines | [1 Mark] Reason why lines never intersect (two tangents = two directions)",
        "cautionTrap": "Saying magnetic field lines start at North and end at South. They DO NOT end; they form continuous closed loops!",
        "topperTip": "Contrast with electric field lines: Electric field lines are discontinuous (start on +q and terminate on -q), whereas magnetic field lines are continuous closed loops.",
        "mnemonic": "Field Line Rule: One Point = One Direction (Never Intersect)."
    });

    pushQ("Magnetism and Matter", {
        "id": "phy-mm-10y-2019",
        "marks": 3,
        "year": "CBSE 2019 (All India Q19)",
        "pacing": "5 min",
        "type": "Core / Derivation (3M)",
        "competency": "Magnetic Dipole in Uniform Field",
        "stem": "A magnetic dipole of magnetic moment M is placed in a uniform magnetic field B. Derive an expression for the potential energy stored in the dipole. Hence identify the orientations of stable and unstable equilibrium.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Work Done in Rotating Dipole:</strong><br>\n      Torque acting on dipole at angle θ: <code>τ = M B sin θ</code>.<br>\n      Small work done in rotating through dθ: <code>dW = τ dθ = M B sin θ dθ</code>.<br>\n      Total work done in rotating from θ₁ to θ₂:<br>\n      <code>W = ∫_{θ₁}^{θ₂} M B sin θ dθ = - M B [cos θ₂ - cos θ₁]</code>.</p>\n      <p><strong>2. Potential Energy:</strong><br>\n      Taking reference orientation at θ₁ = 90° (where U = 0):<br>\n      <code>U(θ) = - M B cos θ = <strong>- M⃗ · B⃗</strong></code>.</p>\n      <p><strong>3. Equilibrium States:</strong><br>\n      • <strong>Stable Equilibrium:</strong> At <strong>θ = 0°</strong> (M⃗ parallel to B⃗), torque τ = 0 and potential energy is minimum: <code>U_min = - M B</code>.<br>\n      • <strong>Unstable Equilibrium:</strong> At <strong>θ = 180°</strong> (M⃗ antiparallel to B⃗), torque τ = 0 and potential energy is maximum: <code>U_max = + M B</code>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Integration of dW = MB sinθ dθ to obtain U = -MB cosθ | [0.75 Mark] Stable equilibrium at θ = 0° (U = -MB) | [0.75 Mark] Unstable equilibrium at θ = 180° (U = +MB)",
        "cautionTrap": "Setting θ = 90° as equilibrium. At 90°, torque is MAXIMUM (τ = MB); equilibrium requires net torque to be zero (θ = 0° or 180°).",
        "topperTip": "Always state both conditions for equilibrium: Torque must be zero, and identify whether U is minimum (stable) or maximum (unstable).",
        "mnemonic": "0° = Minimum Energy (Stable); 180° = Maximum Energy (Unstable)."
    });

    pushQ("Electromagnetic Induction", {
        "id": "phy-emi-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q9)",
        "pacing": "5 min",
        "type": "Core / Derivation (3M)",
        "competency": "Self & Mutual Inductance",
        "stem": "Define mutual inductance between a pair of coils. Derive the expression for the mutual inductance M of two long coaxial solenoids S₁ and S₂ of same length l, radii r₁ and r₂ (r₁ < r₂), and turns n₁ and n₂ per unit length.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Definition of Mutual Inductance:</strong><br>\n      The magnetic flux linked with the secondary coil per unit current flowing in the primary coil: <code>Φ₂ = M I₁</code>, or the induced EMF produced in secondary when rate of change of current in primary is unity: <code>ε₂ = - M (dI₁/dt)</code>. SI unit is <strong>Henry (H)</strong>.</p>\n      <p><strong>2. Derivation for Coaxial Solenoids:</strong><br>\n      • Let current I₂ pass through outer solenoid S₂ (radius r₂, turns n₂).<br>\n      • Magnetic field inside S₂: <code>B₂ = μ₀ n₂ I₂</code>.<br>\n      • This field permeates inner solenoid S₁ of area <code>A₁ = π r₁²</code>.<br>\n      • Total flux linked with inner solenoid S₁ of length l (total turns N₁ = n₁ l):<br>\n      <code>Φ₁ = N₁ (B₂ A₁) = (n₁ l) (μ₀ n₂ I₂) (π r₁²) = μ₀ n₁ n₂ π r₁² l I₂</code>.<br>\n      • By definition: <code>Φ₁ = M₁₂ I₂  ⟹  <strong>M₁₂ = μ₀ n₁ n₂ π r₁² l</strong></code>.<br>\n      By reciprocity theorem: <code>M₂₁ = M₁₂ = M = <strong>μ₀ n₁ n₂ π r₁² l</strong></code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Definition of mutual inductance and SI unit (Henry) | [1.5 Marks] Magnetic field B₂ = μ₀n₂I₂ and total flux Φ₁ = N₁B₂A₁ | [0.5 Mark] Final boxed formula M = μ₀ n₁ n₂ π r₁² l",
        "cautionTrap": "Using the area of the larger solenoid A₂ = π r₂²! The flux is confined only within the cross-section of the INNER solenoid (π r₁²).",
        "topperTip": "Explicitly state the Reciprocity Theorem: M₁₂ = M₂₁ = M.",
        "mnemonic": "Mutual Inductance: M = μ₀ · n₁ · n₂ · (Area of Smaller) · Length."
    });

    pushQ("Electromagnetic Induction", {
        "id": "phy-emi-10y-2020",
        "marks": 2,
        "year": "CBSE 2020 (Delhi Set 1 Q16)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Lenz's Law & Conservation of Energy",
        "stem": "State Lenz's law. A bar magnet falls vertically through a stationary horizontal copper ring. Will its acceleration be equal to, greater than, or less than acceleration due to gravity g? Justify your answer using Lenz's law.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Statement of Lenz's Law:</strong><br>\n      The polarity of induced EMF is such that it produces an induced current whose magnetic field <strong>opposes the change in magnetic flux</strong> that produces it: <code>ε = - dΦ_B / dt</code>.</p>\n      <p><strong>2. Falling Magnet through Copper Ring:</strong><br>\n      • As the North pole of the magnet approaches the copper ring from above, the downward magnetic flux increases.<br>\n      • By Lenz's law, an induced current is set up in the ring in an anticlockwise direction (viewed from above), forming an induced North pole on top that <strong>repels the approaching North pole</strong>.<br>\n      • Therefore, an upward retarding magnetic force acts on the falling magnet.<br>\n      • As the magnet leaves below the ring, an induced South pole attracts the departing North pole, again exerting an upward retarding force.<br>\n      • <strong>Conclusion:</strong> In both phases, the net downward acceleration of the magnet is <strong>strictly less than g (a < g)</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct statement of Lenz's Law | [1 Mark] Deduction that acceleration a < g due to upward repulsive/attractive magnetic forces",
        "cautionTrap": "Saying acceleration becomes zero. The magnet still accelerates downwards, but with a < g (not a = 0).",
        "topperTip": "Mention that Lenz's law is a direct manifestation of the Law of Conservation of Energy.",
        "mnemonic": "Lenz Opposition: Approaching is repelled; Leaving is attracted (a < g always)."
    });

    pushQ("Alternating Current", {
        "id": "phy-ac-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 55/1/1 Q27)",
        "pacing": "5 min",
        "type": "Core / Derivation (3M)",
        "competency": "Average Power & Wattless Current",
        "stem": "Derive the expression for the average power consumed in a series LCR AC circuit: P_avg = V_rms I_rms cos φ. Under what condition is the current in an AC circuit said to be 'wattless'?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Instantaneous Power Derivation:</strong><br>\n      Let alternating voltage be: <code>v = V₀ sin(ωt)</code>.<br>\n      Then alternating current is: <code>i = I₀ sin(ωt - φ)</code> (where φ is the phase difference).<br>\n      Instantaneous power: <code>p = v · i = V₀ I₀ sin(ωt) sin(ωt - φ)</code>.<br>\n      Using <code>2 sin A sin B = cos(A - B) - cos(A + B)</code>:<br>\n      <code>p = (V₀ I₀ / 2) [ cos φ - cos(2ωt - φ) ]</code>.</p>\n      <p><strong>2. Average Power over a Full Cycle:</strong><br>\n      The average of the time-dependent term <code>cos(2ωt - φ)</code> over a complete cycle is zero.<br>\n      <code>P_avg = (V₀ I₀ / 2) cos φ = (V₀ / √2) (I₀ / √2) cos φ = <strong>V_rms I_rms cos φ</strong></code>.<br>\n      Here <code>cos φ = R / Z</code> is called the <strong>Power Factor</strong>.</p>\n      <p><strong>3. Wattless Current Condition:</strong><br>\n      When the circuit is purely inductive (L) or purely capacitive (C) with zero resistance (R = 0), phase angle <strong>φ = ± π/2 (90°)</strong>.<br>\n      Then <code>cos(90°) = 0  ⟹  P_avg = 0</code>.<br>\n      The current flowing in such a circuit consumes zero average electrical power and is termed <strong>Wattless Current</strong>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Instantaneous power trigonometric expansion | [1 Mark] Cycle average and P_avg = V_rms I_rms cos φ | [0.5 Mark] Wattless condition (R = 0, φ = 90°, cos φ = 0)",
        "cautionTrap": "Writing P_avg = V_rms I_rms without the power factor cos φ. cos φ is mandatory for reactive AC circuits!",
        "topperTip": "Define cos φ = R/Z explicitly. In pure inductor/capacitor circuits, power consumed is zero.",
        "mnemonic": "AC Power: P = V_rms · I_rms · cos φ (cos φ is the Power Factor)."
    });

    pushQ("Ray Optics and Optical Instruments", {
        "id": "phy-ro-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q10)",
        "pacing": "5 min",
        "type": "Core / Derivation (3M)",
        "competency": "Prism Formula Derivation",
        "stem": "Derive the prism formula relating the refractive index μ of the material of a prism with the angle of prism A and the angle of minimum deviation δ_m: μ = sin((A + δ_m)/2) / sin(A/2).",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Geometric Relations:</strong><br>\n      Consider a ray incident at angle <em>i</em> on face AB of a prism of angle <em>A</em>, refracted at angle <em>r₁</em>, incident on face AC at angle <em>r₂</em>, and emerging at angle <em>e</em>.<br>\n      • In quadrilateral AQNR: <code>∠A + ∠QNR = 180°</code>.<br>\n      • In triangle QNR: <code>r₁ + r₂ + ∠QNR = 180°  ⟹  <strong>r₁ + r₂ = A</strong></code> ...(1)<br>\n      • Total deviation: <code>δ = (i - r₁) + (e - r₂) = (i + e) - (r₁ + r₂) = <strong>(i + e) - A</strong></code> ...(2)</p>\n      <p><strong>2. Condition of Minimum Deviation (δ = δ_m):</strong><br>\n      At minimum deviation, the ray passes symmetrically through the prism parallel to its base:<br>\n      <code>i = e</code>  and  <code>r₁ = r₂ = r</code>.<br>\n      • From (1): <code>r + r = A  ⟹  <strong>r = A / 2</strong></code>.<br>\n      • From (2): <code>δ_m = 2i - A  ⟹  <strong>i = (A + δ_m) / 2</strong></code>.</p>\n      <p><strong>3. Applying Snell's Law:</strong><br>\n      By Snell's law at first surface: <code>μ = sin i / sin r</code>.<br>\n      Substituting i and r:<br>\n      <strong>μ = sin [ (A + δ_m) / 2 ] / sin [ A / 2 ]</strong>. (Hence Derived).</p>\n    </div>",
        "stepMarking": "[1 Mark] Proof of r₁ + r₂ = A and δ = i + e - A | [1 Mark] Symmetry condition at minimum deviation: i = e, r = A/2, i = (A + δ_m)/2 | [1 Mark] Snell's law substitution to obtain final formula",
        "cautionTrap": "Forgetting to state that at minimum deviation, the refracted ray inside the prism is PARALLEL to the base of the prism.",
        "topperTip": "Draw the ray through the equilateral prism with incident angle i, emergence angle e, and deviation angle δ clearly marked.",
        "mnemonic": "Prism Minimum: i = e, r = A/2, ray parallels base."
    });

    pushQ("Wave Optics", {
        "id": "phy-wo-10y-2020",
        "marks": 3,
        "year": "CBSE 2020 (Delhi Set 1 Q21)",
        "pacing": "5 min",
        "type": "Core / Derivation (3M)",
        "competency": "Diffraction at Single Slit",
        "stem": "Describe diffraction of light at a single slit of width 'a'. Explain why the central maximum is twice as wide as any secondary maximum. Write the condition for secondary minima and maxima.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Diffraction Condition at Single Slit:</strong><br>\n      When a plane wavefront of wavelength λ is incident on a slit of width <em>a</em>, secondary wavelets from different parts of the slit interfere.<br>\n      • <strong>Secondary Minima:</strong> Occur when path difference across the slit is an integral multiple of λ:<br>\n      <code>a sin θ_n = n λ  ⟹  θ_n ≈ (n λ) / a</code> (for n = ±1, ±2, ±3...).<br>\n      • <strong>Secondary Maxima:</strong> Occur at: <code>a sin θ_n = (2n + 1) λ / 2  ⟹  θ_n ≈ (2n + 1) λ / (2a)</code> (for n = 1, 2, 3...).</p>\n      <p><strong>2. Width of Central Maximum:</strong><br>\n      The central maximum extends between the first minima on either side (from <code>θ = - λ/a</code> to <code>θ = + λ/a</code>).<br>\n      • Angular width of central maximum: <code>2 θ₁ = <strong>2 λ / a</strong></code>.<br>\n      • Linear width on screen at distance D: <code>β_0 = (2 λ D) / a</code>.<br>\n      • Angular width of any secondary maximum (between consecutive minima n and n+1):<br>\n      <code>Δθ = (n + 1) λ / a - n λ / a = <strong>λ / a</strong></code>.<br>\n      <em>Conclusion:</em> The angular and linear width of the central diffraction maximum is <strong>strictly twice that of any secondary maximum</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Conditions for secondary minima (a sin θ = nλ) and maxima | [1 Mark] Angular width calculation 2θ₁ = 2λ/a | [1 Mark] Proof that central width is double secondary maximum width",
        "cautionTrap": "Confusing diffraction minima condition (a sin θ = nλ) with interference maxima condition (d sin θ = nλ). In diffraction, nλ gives MINIMA!",
        "topperTip": "Draw the central diffraction envelope showing the central peak having 2λ/a width and secondary peaks having λ/a width.",
        "mnemonic": "Diffraction Inversion: Single slit a sin θ = nλ gives ZERO (dark minima)!"
    });

    pushQ("Atoms and Nuclei", {
        "id": "phy-an-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q11)",
        "pacing": "5 min",
        "type": "Core / Derivation (3M)",
        "competency": "Nuclear Binding Energy Curve",
        "stem": "Draw a plot showing the variation of binding energy per nucleon (BE/A) with mass number A. Explain using this curve: (i) why nuclear fission occurs in very heavy nuclei (A > 200), and (ii) why nuclear fusion occurs in very light nuclei (A < 20).",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Key Features of BE/A Curve:</strong><br>\n      • BE/A is very low for light nuclei (e.g. ²H has ~1.1 MeV/nucleon).<br>\n      • Peaks at <strong>⁵⁶Fe with maximum value of ~8.75 MeV/nucleon</strong>.<br>\n      • Remains nearly constant at ~8.5 MeV/nucleon for intermediate nuclei (30 < A < 170).<br>\n      • Decreases gradually for heavy nuclei, dropping to ~7.6 MeV/nucleon for ²³⁸U.</p>\n      <p><strong>2. Explanation of Fission & Fusion:</strong><br>\n      • <strong>(i) Nuclear Fission:</strong> Heavy nuclei (A > 200) have lower BE/A (~7.6 MeV) due to strong Coulombic repulsion among numerous protons. When a heavy nucleus splits into two middle-mass fragments (A ~ 100-120), BE/A rises to ~8.5 MeV. The fragments are more tightly bound, releasing enormous energy (<code>Q = ΔBE > 0</code>).<br>\n      • <strong>(ii) Nuclear Fusion:</strong> Very light nuclei (A < 20) have low BE/A. When two light nuclei fuse to form a heavier nucleus (e.g. four protons fusing into ⁴He with BE/A ~ 7.1 MeV), BE/A increases steeply, releasing immense nuclear energy.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct sketch of BE/A vs A curve with peak at ⁵⁶Fe (~8.8 MeV) | [1 Mark] Fission explanation via increase in BE/A from 7.6 to 8.5 MeV | [1 Mark] Fusion explanation via steep rise in BE/A from light to heavier nuclei",
        "cautionTrap": "Saying heavy nuclei fuse and light nuclei undergo fission. Remember: Heavy nuclei SPLIT (fission), light nuclei JOIN (fusion) to reach the peak at ⁵⁶Fe.",
        "topperTip": "Explicitly quote the numbers: ⁵⁶Fe has peak BE/A of 8.75 MeV; Uranium has ~7.6 MeV; Helium has ~7.1 MeV.",
        "mnemonic": "Iron is King: All roads (Fission & Fusion) lead towards ⁵⁶Fe peak."
    });

    pushQ("Semiconductor Electronics", {
        "id": "phy-semi-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 55/1/1 Q30)",
        "pacing": "5 min",
        "type": "Core / Derivation (3M)",
        "competency": "Rectifier Circuit & Working",
        "stem": "With the help of a labeled circuit diagram, explain the working of a full-wave rectifier using two p-n junction diodes. Draw the input AC voltage and output rectified voltage waveforms across the load resistor.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Circuit Arrangement:</strong><br>\n      Uses a center-tapped step-down transformer, two p-n junction diodes (D₁ and D₂), and a load resistor R_L connected between the center tap and common diode cathode junction.</p>\n      <p><strong>2. Working Mechanism:</strong><br>\n      • <strong>Positive Half Cycle of AC:</strong> Terminal A becomes positive and B negative relative to center tap. Diode <strong>D₁ is forward biased (conducts)</strong> while diode D₂ is reverse biased (blocks). Current flows through R_L from X to Y.<br>\n      • <strong>Negative Half Cycle of AC:</strong> Terminal A becomes negative and B positive relative to center tap. Diode <strong>D₂ is forward biased (conducts)</strong> while D₁ is reverse biased. Current again flows through R_L in the <strong>SAME direction from X to Y</strong>.<br>\n      • Since current through R_L is unidirectional in both half-cycles, a continuous full-wave rectified DC output is achieved.</p>\n      <p><strong>3. Frequency Relation:</strong><br>\n      Output ripple frequency is <strong>twice the input frequency: f_out = 2 f_in</strong> (e.g. 100 Hz output for 50 Hz input).</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct circuit diagram with center-tapped transformer, D₁, D₂, and R_L | [1 Mark] Clear explanation of D₁ conducting in +ve half and D₂ in -ve half | [1 Mark] Accurate input AC vs unidirectional pulsating DC output waveforms",
        "cautionTrap": "Drawing output current in alternating directions. Current through R_L MUST flow in the exact same direction during both cycles!",
        "topperTip": "State the output frequency relation: f_out = 2 × f_in. Examiners love this detail.",
        "mnemonic": "Full-Wave: D₁ works top half, D₂ works bottom half; Load current never reverses."
    });

    pushQ("Relations and Functions", {
        "id": "math-rf-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 65/1/1 Q21)",
        "pacing": "5 min",
        "type": "Equivalence Relation Proof",
        "competency": "Equivalence Relation Verification",
        "stem": "Show that the relation R on the set Z of all integers defined by R = {(a, b) : (a - b) is divisible by 5} is an equivalence relation.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>To prove R is an equivalence relation, we must prove Reflexivity, Symmetry, and Transitivity on set Z:</p>\n      <p><strong>1. Reflexive:</strong><br>\n      For any integer <code>a ∈ Z</code>, <code>a - a = 0 = 5 × 0</code>, which is divisible by 5.<br>\n      Hence, <code>(a, a) ∈ R</code> for all a ∈ Z. Therefore, R is <strong>Reflexive</strong>.</p>\n      <p><strong>2. Symmetric:</strong><br>\n      Let <code>(a, b) ∈ R</code>. Then <code>a - b = 5k</code> for some integer k.<br>\n      Then <code>b - a = - (a - b) = - 5k = 5 (-k)</code>.<br>\n      Since -k is also an integer, <code>(b - a)</code> is divisible by 5.<br>\n      Hence, <code>(b, a) ∈ R</code>. Therefore, R is <strong>Symmetric</strong>.</p>\n      <p><strong>3. Transitive:</strong><br>\n      Let <code>(a, b) ∈ R</code> and <code>(b, c) ∈ R</code>.<br>\n      Then <code>a - b = 5k₁</code> and <code>b - c = 5k₂</code> for some integers k₁, k₂.<br>\n      Adding both equations:<br>\n      <code>(a - b) + (b - c) = 5k₁ + 5k₂  ⟹  a - c = 5 (k₁ + k₂)</code>.<br>\n      Since (k₁ + k₂) is an integer, <code>(a - c)</code> is divisible by 5.<br>\n      Hence, <code>(a, c) ∈ R</code>. Therefore, R is <strong>Transitive</strong>.</p>\n      <p><em>Conclusion:</em> Since R is reflexive, symmetric, and transitive, R is an <strong>Equivalence Relation</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Proof of Reflexivity: a - a = 0 is divisible by 5 | [1 Mark] Proof of Symmetry: b - a = -5k = 5(-k) | [1 Mark] Proof of Transitivity: a - c = 5(k₁ + k₂) and conclusion",
        "cautionTrap": "Omitting the definition of k as an integer. Divisibility holds only if the quotient belongs to the set of integers Z!",
        "topperTip": "Structure into 3 neat labeled headers: 1. Reflexive, 2. Symmetric, 3. Transitive, concluding with 'Equivalence Relation verified'.",
        "mnemonic": "Equivalence Trio: Reflexive (Self), Symmetric (Swap), Transitive (Chain)."
    });

    pushQ("Matrices and Determinants", {
        "id": "math-mat-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 65/1/1 Q31)",
        "pacing": "10 min",
        "type": "System of Linear Equations Matrix Method",
        "competency": "Matrix Inverse & Equation Solving",
        "stem": "Solve the following system of linear equations using matrix method:\\n2x + 3y + 3z = 5\\nx - 2y + z = -4\\n3x - y - 2z = 3",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Matrix Representation AX = B:</strong><br>\n      <code>A = [ [2, 3, 3], [1, -2, 1], [3, -1, -2] ]</code>,  <code>X = [ [x], [y], [z] ]</code>,  <code>B = [ [5], [-4], [3] ]</code>.</p>\n      <p><strong>2. Determinant |A|:</strong><br>\n      <code>|A| = 2 [(-2)(-2) - (1)(-1)] - 3 [(1)(-2) - (1)(3)] + 3 [(1)(-1) - (-2)(3)]</code><br>\n      <code>= 2 [4 + 1] - 3 [-2 - 3] + 3 [-1 + 6] = 2(5) - 3(-5) + 3(5) = 10 + 15 + 15 = <strong>40 ≠ 0</strong></code>.<br>\n      Since |A| ≠ 0, A is non-singular and has a unique solution given by <code>X = A⁻¹ B</code>.</p>\n      <p><strong>3. Adjoint of Matrix A:</strong><br>\n      Cofactors: A₁₁ = 5, A₁₂ = 5, A₁₃ = 5; A₂₁ = 3, A₂₂ = -13, A₂₃ = 11; A₃₁ = 9, A₃₂ = 1, A₃₃ = -7.<br>\n      <code>adj(A) = [ [5, 3, 9], [5, -13, 1], [5, 11, -7] ]</code>.<br>\n      <code>A⁻¹ = (1/40) adj(A)</code>.</p>\n      <p><strong>4. Calculating X = A⁻¹ B:</strong><br>\n      <code>X = (1/40) [ [5, 3, 9], [5, -13, 1], [5, 11, -7] ] [ [5], [-4], [3] ]</code><br>\n      • x = (1/40) [ (5)(5) + (3)(-4) + (9)(3) ] = (1/40) [ 25 - 12 + 27 ] = (1/40) [40] = <strong>1</strong>.<br>\n      • y = (1/40) [ (5)(5) + (-13)(-4) + (1)(3) ] = (1/40) [ 25 + 52 + 3 ] = (1/40) [80] = <strong>2</strong>.<br>\n      • z = (1/40) [ (5)(5) + (11)(-4) + (-7)(3) ] = (1/40) [ 25 - 44 - 21 ] = (1/40) [-40] = <strong>-1</strong>.<br>\n      <strong>Final Solution: x = 1, y = 2, z = -1</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct matrix formulation AX = B and |A| = 40 calculation | [2 Marks] Finding all 9 cofactors and transposing to find adj(A) | [2 Marks] Matrix multiplication A⁻¹B and final values x = 1, y = 2, z = -1",
        "cautionTrap": "Forgetting to TRANSPOSE the cofactor matrix to get the adjoint! adj(A) is the transpose of the cofactor matrix.",
        "topperTip": "Substitute x = 1, y = 2, z = -1 back into equation 1: 2(1) + 3(2) + 3(-1) = 2 + 6 - 3 = 5. Always check your answer in 10 seconds!",
        "mnemonic": "Matrix Solving: AX = B ⟹ |A| ≠ 0 ⟹ adj(A) = C^T ⟹ X = A⁻¹B."
    });

    pushQ("Differential Equations", {
        "id": "math-de-10y-2023",
        "marks": 3,
        "year": "CBSE 2023 (Set 65/1/1 Q25)",
        "pacing": "5 min",
        "type": "Linear Differential Equation",
        "competency": "Integrating Factor Method",
        "stem": "Find the particular solution of the differential equation: dy/dx + y cot x = 2x + x² cot x, given that y = 0 when x = π/2.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Standard Linear Form:</strong><br>\n      The equation is in standard linear form <code>dy/dx + P(x) y = Q(x)</code>, where:<br>\n      <code>P(x) = cot x</code> and <code>Q(x) = 2x + x² cot x</code>.</p>\n      <p><strong>2. Integrating Factor (I.F.):</strong><br>\n      <code>I.F. = e^{∫ P dx} = e^{∫ cot x dx} = e^{log(sin x)} = <strong>sin x</strong></code>.</p>\n      <p><strong>3. General Solution:</strong><br>\n      <code>y · (I.F.) = ∫ Q(x) · (I.F.) dx + C</code><br>\n      <code>y sin x = ∫ (2x + x² cot x) sin x dx + C = ∫ (2x sin x + x² cos x) dx + C</code>.<br>\n      Notice that <code>d/dx [ x² sin x ] = 2x sin x + x² cos x</code>!<br>\n      Therefore: <code>y sin x = x² sin x + C</code>.</p>\n      <p><strong>4. Particular Solution (y = 0 at x = π/2):</strong><br>\n      <code>0 · sin(π/2) = (π/2)² sin(π/2) + C  ⟹  0 = π²/4 + C  ⟹  <strong>C = - π² / 4</strong></code>.<br>\n      Dividing by sin x:<br>\n      <strong>y = x² - (π² / 4) cosec x</strong> (or <strong>y sin x = x² sin x - π²/4</strong>).</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct integrating factor I.F. = sin x | [1 Mark] Integration of ∫(2x sin x + x² cos x)dx = x² sin x | [1 Mark] Evaluation of constant C = -π²/4 and final particular solution",
        "cautionTrap": "Trying to integrate 2x sin x and x² cos x separately by parts. Recognize the product derivative d/dx[x² sin x] immediately!",
        "topperTip": "e^{log(sin x)} simplifies directly to sin x. Box the final particular solution.",
        "mnemonic": "Linear DE: dy/dx + Py = Q ⟹ I.F. = e^{∫P dx} ⟹ y·(I.F.) = ∫Q·(I.F.)dx + C."
    });

    pushQ("The Last Lesson", {
        "id": "eng-tll-10y-2023",
        "marks": 5,
        "year": "CBSE 2023 (Set 301 Q9)",
        "pacing": "10 min",
        "type": "Linguistic Chauvinism & Patriotism",
        "competency": "Literary & Historical Analysis",
        "stem": "“When a people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison.” Analyze M. Hamel's profound discourse on the French language in Alphonse Daudet's “The Last Lesson”. How does linguistic identity become the ultimate bastion against political subjugation?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>In Alphonse Daudet's <em>“The Last Lesson”</em>, set against the backdrop of the Franco-Prussian War (1870-71), the Prussian mandate enforcing German in Alsace and Lorraine strikes at the core of human identity.<br><br>\n      • <strong>Awakening of Franz:</strong> Little Franz, who previously dreaded M. Hamel's iron ruler and found French participles tedious, is stricken with visceral remorse. The books that seemed nuisance suddenly feel like <em>“old friends that I couldn't give up.”</em><br><br>\n      • <strong>M. Hamel's Eulogy to French:</strong> M. Hamel calls French <strong>“the most beautiful language in the world—the clearest, the most logical”</strong>. He commands them to guard it among themselves and never forget it. His profound metaphor—that holding fast to one's mother tongue is having <em>“the key to their prison”</em>—identifies linguistic consciousness as an unconquerable fortress that no occupier can breach.<br><br>\n      • <strong>Universal Collective Guilt:</strong> M. Hamel does not spare himself or the parents, pointing out how education was subordinated to petty earnings at mills and fishing holidays.<br><br>\n      • <strong>The Climax of Defiance:</strong> As the church clock strikes twelve and Prussian trumpets sound, M. Hamel chokes with emotion, turns to the blackboard, and with all his might writes in towering letters: <strong>“VIVE LA FRANCE!”</strong> (Long Live France!).</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Prussian imposition of German and Franz's transformation from dread to emotional awakening | [1.5 Marks] M. Hamel's speech on French as the clearest/most logical language and 'key to prison' | [1 Mark] Reflection on collective procrastination and societal guilt | [1 Mark] Climax: Writing 'VIVE LA FRANCE!' on the blackboard",
        "cautionTrap": "Describing Franz's tardiness without analyzing the geopolitical and psychological themes of linguistic chauvinism and colonial subjugation.",
        "topperTip": "Quote 'Vive La France!' and the key phrase: 'Key to their prison'.",
        "mnemonic": "Last Lesson: Prussian Order ⟶ French as Prison Key ⟶ Collective Remorse ⟶ Vive La France."
    });


    // --- 10-YEAR OFFICIAL CBSE IMPORTED QUESTION SETS (BATCH 3) ---
    pushQ("Dual Nature of Radiation and Matter", {
        "id": "phy-dn-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q7)",
        "pacing": "5 min",
        "type": "de Broglie Wavelength Derivation & Numerical",
        "competency": "Matter Wave Physics",
        "stem": "(a) Derive the expression for the de Broglie wavelength λ of an electron accelerated from rest through a potential difference of V volts.\\n(b) An electron, an alpha-particle, and a proton have the same kinetic energy. Which of these particles has the shortest de Broglie wavelength?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Derivation of λ = h / √(2mqV):</strong><br>\n      • Kinetic energy acquired by electron: <code>K = e V</code>.<br>\n      • Relation between momentum and KE: <code>p = √(2 m K) = √(2 m e V)</code>.<br>\n      • de Broglie wavelength: <code>λ = h / p = h / √(2 m e V)</code>.<br>\n      Substituting constants (h = 6.63×10⁻³⁴ J·s, m = 9.1×10⁻³¹ kg, e = 1.6×10⁻¹⁹ C):<br>\n      <strong>λ = 1.227 / √V nm = 12.27 / √V Å</strong>.</p>\n      <p><strong>(b) Comparing de Broglie Wavelengths for Equal Kinetic Energy:</strong><br>\n      • Formula: <code>λ = h / √(2 m K) ∝ 1 / √m</code> (since K is identical for all three).<br>\n      • Masses: <code>m_alpha ≈ 4 m_p >> m_p >> m_e</code>.<br>\n      • Since mass of alpha-particle is largest (m_alpha ≈ 4 amu), its de Broglie wavelength is the <strong>shortest</strong>.<br>\n      Order: <strong>λ_alpha < λ_proton < λ_electron</strong>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Derivation of λ = h/√(2meV) and evaluation of 1.227/√V nm | [1.5 Marks] Deduction that λ ∝ 1/√m and concluding alpha particle has shortest wavelength",
        "cautionTrap": "Saying electron has shortest wavelength. Wavelength is INVERSELY proportional to mass; heavier particles have SHORTER matter wavelengths!",
        "topperTip": "Express the final formula as 1.227/√V nm and state λ_alpha < λ_proton < λ_electron.",
        "mnemonic": "Heavier Particle = Shorter Wave: Alpha is heaviest, so Alpha has shortest λ."
    });

    pushQ("Dual Nature of Radiation and Matter", {
        "id": "phy-dn-10y-2020",
        "marks": 2,
        "year": "CBSE 2020 (Delhi Set 1 Q14)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Photoelectric Graphs",
        "stem": "Draw graphs showing the variation of stopping potential with: (i) frequency of incident radiation for two different metals A and B having work functions Φ_A > Φ_B, and (ii) intensity of incident radiation.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(i) Stopping Potential V₀ vs Frequency ν:</strong><br>\n      From Einstein's equation: <code>e V₀ = h ν - Φ₀  ⟹  V₀ = (h / e) ν - (Φ₀ / e)</code>.<br>\n      • The plot is a straight line with slope <code>h / e</code> (identical for all metals).<br>\n      • Intercept on frequency axis gives threshold frequency <code>ν₀ = Φ₀ / h</code>.<br>\n      • Since Φ_A > Φ_B, threshold frequency for metal A is greater (<code>ν₀_A > ν₀_B</code>), so line for metal A is shifted to the right of line for metal B (parallel slopes).</p>\n      <p><strong>(ii) Stopping Potential V₀ vs Intensity:</strong><br>\n      • The stopping potential is <strong>completely independent of the intensity</strong> of incident light.<br>\n      • The graph is a straight horizontal line parallel to the intensity axis.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct parallel lines for metals A and B with ν₀_A > ν₀_B and slope h/e | [1 Mark] Horizontal line showing stopping potential independent of intensity",
        "cautionTrap": "Drawing different slopes for metals A and B. The slope is h/e, which is a universal constant for ALL metals!",
        "topperTip": "Emphasize that the slope is universally (h/e) and both lines must be strictly parallel.",
        "mnemonic": "Slope = h/e (Parallel); Intensity = Flatline (No effect on V₀)."
    });

    pushQ("Atoms and Nuclei", {
        "id": "phy-an-10y-2019",
        "marks": 3,
        "year": "CBSE 2019 (All India Q21)",
        "pacing": "5 min",
        "type": "Core / Derivation (3M)",
        "competency": "Rutherford Model & Alpha Scattering",
        "stem": "In Geiger-Marsden experiment, calculate the distance of closest approach for an alpha particle of kinetic energy 5.5 MeV approaching a gold nucleus (Z = 79). State two main drawbacks of Rutherford's atomic model.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Distance of Closest Approach (r₀):</strong><br>\n      At distance of closest approach r₀, the entire kinetic energy of the alpha particle converts into electrostatic potential energy:<br>\n      <code>K = (1 / 4πε₀) [ (q₁ q₂) / r₀ ] = (1 / 4πε₀) [ (2e)(Ze) / r₀ ] = (2 Z e²) / (4πε₀ r₀)</code>.<br>\n      <code>r₀ = [ 2 Z e² ] / [ 4πε₀ K ]</code>.<br>\n      Given: Z = 79, K = 5.5 MeV = 5.5 × 10⁶ × 1.6 × 10⁻¹⁹ J = 8.8 × 10⁻¹³ J.<br>\n      <code>r₀ = [ (9 × 10⁹) × 2 × 79 × (1.6 × 10⁻¹⁹)² ] / (8.8 × 10⁻¹³)</code><br>\n      <code>r₀ = [ 1.422 × 10⁻²⁶ × 79 ] / (8.8 × 10⁻¹³) ≈ <strong>4.13 × 10⁻¹⁴ m = 41.3 fm</strong></code>.</p>\n      <p><strong>2. Two Drawbacks of Rutherford's Model:</strong><br>\n      1. <strong>Atomic Instability:</strong> According to Maxwell's electromagnetic theory, an accelerating charged electron orbiting the nucleus must continuously radiate energy, spiraling into the nucleus in ~10⁻⁸ s. Hence the model cannot explain the stability of the atom.<br>\n      2. <strong>Discrete Line Spectra:</strong> As electrons spiral inwards, emitted radiation should produce a continuous spectrum. However, experimental atomic spectra consist of sharp, discrete spectral lines.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Formulation of r₀ = 2Ze²/(4πε₀K) and calculation of r₀ ≈ 4.1×10⁻¹⁴ m | [1.5 Marks] 0.75M each for atomic stability (spiral collapse) and discrete line spectrum drawbacks",
        "cautionTrap": "Forgetting that alpha particle charge is 2e (not 1e). q₁ = 2e and q₂ = Ze!",
        "topperTip": "Convert MeV to Joules before calculating: 1 MeV = 1.6 × 10⁻¹³ J.",
        "mnemonic": "Closest Approach: Kinetic Energy = Electrostatic Potential Energy (½mv² = 2Ze²/4πε₀r₀)."
    });

    pushQ("Semiconductor Electronics", {
        "id": "phy-semi-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q12)",
        "pacing": "5 min",
        "type": "Core / Derivation (3M)",
        "competency": "Energy Band Theory & Extrinsic Doping",
        "stem": "(a) Distinguish between conductors, semiconductors, and insulators on the basis of energy band diagrams (valence band, conduction band, and forbidden band gap E_g).\\n(b) Differentiate between n-type and p-type semiconductors based on dopant atom type, majority charge carriers, and energy level created in the band gap.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Energy Band Classification:</strong><br>\n      • <strong>Conductors:</strong> Conduction band and valence band either overlap, or the conduction band is partially filled with zero band gap (<code>E_g ≈ 0 eV</code>). Electrons move freely.<br>\n      • <strong>Semiconductors:</strong> Possess a small, finite forbidden band gap (<code>0 < E_g < 3 eV</code>, e.g. Si: 1.1 eV, Ge: 0.7 eV). At room temperature, some electrons cross over.<br>\n      • <strong>Insulators:</strong> Possess a very large forbidden energy band gap (<code>E_g > 3 eV</code>, e.g. Diamond: 5.4 eV). Conduction band is completely empty.</p>\n      <p><strong>(b) n-type vs p-type Semiconductors:</strong><br>\n      • <strong>n-type:</strong> Doped with <strong>pentavalent impurity</strong> (P, As, Sb). Majority carriers are <strong>electrons (n_e >> n_h)</strong>. Creates a <strong>Donor Energy Level (E_d)</strong> located just below the bottom of the conduction band.<br>\n      • <strong>p-type:</strong> Doped with <strong>trivalent impurity</strong> (B, Al, In). Majority carriers are <strong>holes (n_h >> n_e)</strong>. Creates an <strong>Acceptor Energy Level (E_a)</strong> located just above the top of the valence band.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Band gap classification: Conductor (overlap/0eV), Semiconductor (E_g < 3eV), Insulator (E_g > 3eV) | [1.5 Marks] Complete n-type vs p-type comparison: dopant, majority carriers, and donor/acceptor levels",
        "cautionTrap": "Saying that n-type semiconductor is negatively charged! Both n-type and p-type bulk crystals remain electrically NEUTRAL overall.",
        "topperTip": "Draw the energy band diagram showing Donor level E_d just below CB and Acceptor level E_a just above VB.",
        "mnemonic": "n-type = Pentavalent + Donor (top); p-type = Trivalent + Acceptor (bottom)."
    });

    pushQ("d- and f-Block Elements", {
        "id": "chem-df-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q8)",
        "pacing": "5 min",
        "type": "Inorganic Reactions & Preparation",
        "competency": "Industrial Preparation of Oxidizing Agents",
        "stem": "Describe the preparation of potassium dichromate (K₂Cr₂O₇) from chromite ore (FeCr₂O₄). Write balanced chemical equations for all three steps involved.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Potassium dichromate is industrially manufactured from chromite ore in three sequential steps:<br><br>\n      • <strong>Step 1: Conversion of Chromite Ore into Sodium Chromate:</strong><br>\n      Finely powdered chromite ore is fused with sodium carbonate in the presence of excess air in a reverberatory furnace:<br>\n      <code>4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂  ⟶  8 Na₂CrO₄ (Yellow solution) + 2 Fe₂O₃ + 8 CO₂ ↑</code>.<br><br>\n      • <strong>Step 2: Conversion of Sodium Chromate into Sodium Dichromate:</strong><br>\n      The yellow solution of sodium chromate is filtered, acidified with concentrated sulfuric acid:<br>\n      <code>2 Na₂CrO₄ + H₂SO₄  ⟶  Na₂Cr₂O₇ (Orange solution) + Na₂SO₄ + H₂O</code>.<br><br>\n      • <strong>Step 3: Conversion of Sodium Dichromate into Potassium Dichromate:</strong><br>\n      The hot concentrated solution of sodium dichromate is treated with potassium chloride (KCl). Since K₂Cr₂O₇ is much less soluble than sodium salts, it crystallizes out as bright orange crystals:<br>\n      <code>Na₂Cr₂O₇ + 2 KCl  ⟶  K₂Cr₂O₇ ↓ (Orange crystals) + 2 NaCl</code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Step 1 balanced equation producing yellow Na₂CrO₄ | [1 Mark] Step 2 acidification producing orange Na₂Cr₂O₇ | [1 Mark] Step 3 potassium exchange with KCl producing crystalline K₂Cr₂O₇",
        "cautionTrap": "Writing K₂CO₃ in Step 1. Potassium chromate is highly soluble and difficult to crystallize; hence Na₂CO₃ is used first, followed by KCl displacement in Step 3!",
        "topperTip": "State the pH dependency: Chromate (yellow, CrO₄²⁻) and Dichromate (orange, Cr₂O₇²⁻) exist in equilibrium: 2 CrO₄²⁻ + 2 H⁺ ⇌ Cr₂O₇²⁻ + H₂O.",
        "mnemonic": "Dichromate 3 Steps: Fuse with Soda (Yellow) ⟶ Acidify (Orange) ⟶ Salt with KCl (Crystals)."
    });

    pushQ("Haloalkanes and Haloarenes", {
        "id": "chem-halo-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q9)",
        "pacing": "5 min",
        "type": "Organometallic Reactions & Grignard",
        "competency": "Reagent Chemistry & Precaution",
        "stem": "(a) Why must Grignard reagents (RMgX) be prepared and stored under strictly anhydrous (dry) conditions?\\n(b) Write chemical equations for:\\n  (i) Sandmeyer reaction for preparing chlorobenzene from aniline\\n  (ii) Fittig reaction for preparing biphenyl.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Strict Anhydrous Requirement for Grignard Reagent:</strong><br>\n      Grignard reagents are highly reactive organometallic compounds. The carbon-magnesium bond is strongly polarized (<code>R^δ⁻ - Mg^δ⁺X</code>). The carbanion-like R group is an extremely strong base and nucleophile. It reacts instantaneously with any source of proton (even traces of moisture/water, alcohols, or amines) to produce hydrocarbons:<br>\n      <code>R-MgX + H₂O  ⟶  R-H (Alkane) + Mg(OH)X</code>.<br>\n      Therefore, presence of moisture completely destroys the reagent into an alkane.</p>\n      <p><strong>(b) Chemical Reactions:</strong><br>\n      • (i) <strong>Sandmeyer Reaction:</strong><br>\n      Aniline treated with NaNO₂ + HCl at 273-278 K forms benzene diazonium chloride, which when treated with Cu₂Cl₂/HCl yields <strong>Chlorobenzene</strong>:<br>\n      <code>C₆H₅NH₂ + NaNO₂ + 2HCl (0-5°C)  ⟶  C₆H₅N₂⁺Cl⁻  —[Cu₂Cl₂ / HCl]⟶  C₆H₅Cl + N₂ ↑</code>.<br>\n      • (ii) <strong>Fittig Reaction:</strong><br>\n      Two molecules of aryl halide react with metallic sodium in dry ether to form <strong>Biphenyl</strong>:<br>\n      <code>2 C₆H₅Cl + 2 Na —[dry ether]⟶ C₆H₅-C₆H₅ (Biphenyl) + 2 NaCl</code>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Anhydrous condition explanation with R-MgX + H₂O ⟶ R-H equation | [0.75 Mark] Sandmeyer reaction with diazonium intermediate | [0.75 Mark] Fittig reaction producing biphenyl",
        "cautionTrap": "Confusing Wurtz-Fittig with Fittig reaction. Fittig uses TWO aryl halides (yielding biphenyl); Wurtz-Fittig uses ONE alkyl halide and ONE aryl halide (yielding alkylbenzene)!",
        "topperTip": "Always state the temperature for diazotization: 0°C to 5°C (273 - 278 K).",
        "mnemonic": "Grignard Water Rule: RMgX + Water = Alkane (Ruined Reagent)."
    });

    pushQ("Alcohols, Phenols and Ethers", {
        "id": "chem-alc-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q10)",
        "pacing": "5 min",
        "type": "Acidic Strength & Distinguishing Test",
        "competency": "Comparative Acidity & Lucas Test",
        "stem": "(a) Explain why phenol is significantly more acidic than ethanol.\\n(b) How does the Lucas Test distinguish between primary (1°), secondary (2°), and tertiary (3°) alcohols? Give observations.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Acidity of Phenol vs Ethanol:</strong><br>\n      • <strong>Phenol:</strong> Deprotonation yields the <strong>phenoxide ion (C₆H₅O⁻)</strong>. The negative charge on oxygen is delocalized over the ortho and para positions of the aromatic benzene ring across 5 resonating structures, stabilizing the phenoxide ion effectively.<br>\n      • <strong>Ethanol:</strong> Deprotonation yields the <strong>ethoxide ion (C₂H₅O⁻)</strong>. The ethyl group exerts an electron-donating inductive effect (+I effect), which intensifies the negative charge on oxygen, making the ethoxide ion unstable.<br>\n      • Therefore, phenol releases H⁺ much more readily than ethanol (<code>pK_a(phenol) ≈ 10</code> vs <code>pK_a(ethanol) ≈ 16</code>).</p>\n      <p><strong>(b) Lucas Test (Conc. HCl + anhydrous ZnCl₂):</strong><br>\n      Alcohols react to form insoluble alkyl chlorides that produce cloudiness (turbidity):<br>\n      • <strong>Tertiary (3°) Alcohol:</strong> Forms turbidity <strong>immediately at room temperature</strong> due to high stability of tertiary carbocation.<br>\n      • <strong>Secondary (2°) Alcohol:</strong> Produces turbidity <strong>within 5 minutes</strong> upon standing.<br>\n      • <strong>Primary (1°) Alcohol:</strong> Produces <strong>no turbidity at room temperature</strong>; cloudiness appears only upon heating.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Phenol acidity explained via phenoxide resonance stabilization vs ethoxide +I destabilization | [1.5 Marks] Lucas test observations: 3° immediate, 2° within 5 min, 1° only upon heating",
        "cautionTrap": "Saying phenol is basic because it has an -OH group. Phenol is weakly acidic (carbolic acid) and reacts with aqueous NaOH!",
        "topperTip": "Lucas reagent composition is: concentrated HCl + anhydrous ZnCl₂. State this definition.",
        "mnemonic": "Lucas Turbidity Timer: 3° = Instant, 2° = 5 minutes, 1° = Never (unless heated)."
    });

    pushQ("Aldehydes, Ketones and Carboxylic Acids", {
        "id": "chem-ald-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q11)",
        "pacing": "5 min",
        "type": "Carbonyl Reductions & Decarboxylation",
        "competency": "Carbonyl Synthetic Methods",
        "stem": "Write balanced chemical equations for:\\n(a) Clemmensen Reduction of acetone\\n(b) Wolff-Kishner Reduction of acetophenone\\n(c) Decarboxylation of sodium ethanoate using soda lime.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Clemmensen Reduction:</strong><br>\n      Carbonyl group (>C=O) of aldehydes or ketones is reduced to methylene group (>CH₂) by treatment with <strong>Zinc amalgam (Zn-Hg) and concentrated HCl</strong>:<br>\n      <code>CH₃-CO-CH₃ (Acetone) + 4[H] —[Zn-Hg / conc. HCl]⟶ CH₃-CH₂-CH₃ (Propane) + H₂O</code>.</p>\n      <p><strong>(b) Wolff-Kishner Reduction:</strong><br>\n      Carbonyl group treated with hydrazine (NH₂NH₂) forms a hydrazone, which upon heating with KOH in ethylene glycol decomposes to give hydrocarbon:<br>\n      <code>C₆H₅-CO-CH₃ (Acetophenone) + NH₂NH₂  ⟶  C₆H₅-C(=N-NH₂)-CH₃  —[KOH / ethylene glycol, Δ]⟶  C₆H₅-CH₂-CH₃ (Ethylbenzene) + N₂ ↑</code>.</p>\n      <p><strong>(c) Decarboxylation with Soda Lime:</strong><br>\n      Heating sodium salt of carboxylic acid with soda lime (NaOH + CaO in 3:1 ratio) removes carbon dioxide as carbonate, yielding an alkane with one less carbon atom:<br>\n      <code>CH₃COONa + NaOH —[CaO, Δ]⟶ CH₄ (Methane) + Na₂CO₃</code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Clemmensen reduction equation with Zn-Hg/conc. HCl | [1 Mark] Wolff-Kishner equation with hydrazine and KOH/glycol | [1 Mark] Soda lime decarboxylation yielding methane",
        "cautionTrap": "Using Clemmensen reduction for acid-sensitive compounds. Clemmensen uses conc. HCl (acidic); Wolff-Kishner uses KOH (basic)!",
        "topperTip": "State the complementary roles: Clemmensen is for base-sensitive molecules; Wolff-Kishner is for acid-sensitive molecules.",
        "mnemonic": "Clemmensen uses Acid (Zn-Hg/HCl); Wolff-Kishner uses Base (Hydrazine/KOH)."
    });

    pushQ("Amines", {
        "id": "chem-am-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q13)",
        "pacing": "5 min",
        "type": "Gabriel Phthalimide & Carbylamine Test",
        "competency": "Named Synthesis & Test",
        "stem": "(a) Explain why aromatic primary amines (like aniline) cannot be prepared by Gabriel Phthalimide Synthesis.\\n(b) Write the chemical equation and observation for the Carbylamine Test. Which class of amines gives this test?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Why Aniline cannot be prepared by Gabriel Synthesis:</strong><br>\n      • Gabriel phthalimide synthesis involves an <strong>S_N2 nucleophilic substitution</strong> reaction between the potassium phthalimide anion and an alkyl halide (<code>R-X</code>).<br>\n      • Aryl halides (like bromobenzene) do not undergo nucleophilic substitution with phthalimide anion under normal conditions because the C-X bond has partial double bond character due to resonance with the benzene ring and steric hindrance prevents backside attack.<br>\n      • Hence, aromatic primary amines cannot be prepared by this method.</p>\n      <p><strong>(b) Carbylamine Test (Isocyanide Test):</strong><br>\n      • <strong>Applicability:</strong> Given <strong>ONLY by primary (1°) amines</strong> (both aliphatic and aromatic). Secondary and tertiary amines do NOT give this test.<br>\n      • <strong>Reaction:</strong> Primary amine warmed with chloroform (CHCl₃) and ethanolic KOH produces an <strong>extremely foul / obnoxious smelling isocyanide (carbylamine)</strong>:<br>\n      <code>R-NH₂ + CHCl₃ + 3 KOH (ethanolic) —[Δ]⟶ R-NC (Alkyl isocyanide) + 3 KCl + 3 H₂O</code>.<br>\n      • <em>Observation:</em> Unmistakable, highly offensive foul odor of isocyanide.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Explanation of aryl halide resonance/partial double bond preventing S_N2 attack by phthalimide anion | [1.5 Marks] Carbylamine equation, foul smelling isocyanide observation, and restriction to 1° amines",
        "cautionTrap": "Saying secondary amines give carbylamine test. ONLY primary (1°) amines give the carbylamine test!",
        "topperTip": "Always state the observation: 'Extremely foul-smelling carbylamine (isocyanide) evolved'.",
        "mnemonic": "Carbylamine Test = 1° Amine ONLY (Foul Odor NC)."
    });

    pushQ("Biomolecules", {
        "id": "chem-bio-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q14)",
        "pacing": "5 min",
        "type": "Glucose Structural Evidence Reactions",
        "competency": "Chemical Proof of Structure",
        "stem": "Write chemical equations for the following reactions of D-glucose and state what structural information each reaction provides regarding the glucose molecule:\\n(a) Reaction with hydroxylamine (NH₂OH)\\n(b) Reaction with bromine water (Br₂ / H₂O)\\n(c) Reaction with concentrated nitric acid (HNO₃).",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>(a) Reaction with Hydroxylamine (NH₂OH):</strong><br>\n      <code>CHO-(CHOH)₄-CH₂OH + NH₂OH  ⟶  CH=N-OH-(CHOH)₄-CH₂OH (Glucose oxime) + H₂O</code>.<br>\n      • <em>Structural Deduction:</em> Confirms the presence of a <strong>carbonyl group (>C=O)</strong> in glucose.</p>\n      <p><strong>(b) Reaction with Bromine Water (Br₂ / H₂O):</strong><br>\n      Bromine water is a mild oxidizing agent that selectively oxidizes the aldehyde group to a carboxylic acid without affecting alcoholic groups:<br>\n      <code>CHO-(CHOH)₄-CH₂OH + [O] —[Br₂ water]⟶ COOH-(CHOH)₄-CH₂OH (Gluconic acid)</code>.<br>\n      • <em>Structural Deduction:</em> Confirms that the carbonyl group is an <strong>aldehyde group (-CHO)</strong>, not a ketone.</p>\n      <p><strong>(c) Reaction with Concentrated Nitric Acid (HNO₃):</strong><br>\n      Concentrated HNO₃ is a strong oxidizing agent that oxidizes both the terminal aldehyde group and the terminal primary alcohol group into carboxylic acids:<br>\n      <code>CHO-(CHOH)₄-CH₂OH + 3[O] —[conc. HNO₃]⟶ COOH-(CHOH)₄-COOH (Saccharic acid / Glucaric acid) + 2H₂O</code>.<br>\n      • <em>Structural Deduction:</em> Confirms the presence of a <strong>primary alcoholic group (-CH₂OH)</strong> at one end of the chain.</p>\n    </div>",
        "stepMarking": "[1 Mark] (a) Oxime formation proving carbonyl group | [1 Mark] (b) Gluconic acid formation with Br₂ water proving aldehyde group | [1 Mark] (c) Saccharic acid formation with conc. HNO₃ proving primary alcohol",
        "cautionTrap": "Writing that Br₂ water oxidizes the alcohol groups. Br₂ water is mild and ONLY oxidizes the -CHO group to -COOH!",
        "topperTip": "Remember the triad: NH₂OH proves Carbonyl; Br₂ water proves Aldehyde; HNO₃ proves Primary Alcohol.",
        "mnemonic": "Glucose Proofs: Oxime = Carbonyl, Gluconic = Aldehyde, Saccharic = Primary Alcohol."
    });

    pushQ("Inverse Trigonometric Functions", {
        "id": "math-itf-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q4)",
        "pacing": "4 min",
        "type": "Simplification & Trigonometric Identity",
        "competency": "Algebraic Simplification",
        "stem": "Write the function in the simplest form:\\nf(x) = tan⁻¹ [ (cos x - sin x) / (cos x + sin x) ], where -π/4 < x < 3π/4.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Divide Numerator and Denominator by cos x (cos x ≠ 0):</strong><br>\n      <code>[ (cos x - sin x) / cos x ] / [ (cos x + sin x) / cos x ] = [ 1 - tan x ] / [ 1 + tan x ]</code>.</p>\n      <p><strong>2. Apply Compound Angle Formula:</strong><br>\n      Since <code>tan(π/4) = 1</code>:<br>\n      <code>[ tan(π/4) - tan x ] / [ 1 + tan(π/4) tan x ] = tan [ π/4 - x ]</code>.<br>\n      Therefore: <code>f(x) = tan⁻¹ [ tan (π/4 - x) ]</code>.</p>\n      <p><strong>3. Verify Principal Range:</strong><br>\n      Given <code>-π/4 < x < 3π/4  ⟹  -3π/4 < -x < π/4</code>.<br>\n      Adding π/4: <code>-3π/4 + π/4 < π/4 - x < π/4 + π/4  ⟹  -π/2 < π/4 - x < π/2</code>.<br>\n      Since (π/4 - x) strictly lies within the principal value branch <code>(-π/2, π/2)</code> of tan⁻¹:<br>\n      <strong>f(x) = π/4 - x</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Dividing by cos x to get (1 - tan x)/(1 + tan x) | [1 Mark] Applying tan(π/4 - x) compound angle identity | [1 Mark] Domain verification showing -π/2 < π/4 - x < π/2 and concluding π/4 - x",
        "cautionTrap": "Skipping the domain check! CBSE awards 1 full mark exclusively for showing that (π/4 - x) lies within (-π/2, π/2).",
        "topperTip": "Always show the 3-line domain verification: -π/4 < x < 3π/4 ⟹ -π/2 < (π/4 - x) < π/2.",
        "mnemonic": "Divide by cos x ⟹ Convert to tan(π/4 - x) ⟹ Domain check ⟹ π/4 - x."
    });

    pushQ("Applications of Derivatives", {
        "id": "math-aod-10y-2022",
        "marks": 5,
        "year": "CBSE 2022 (Term 2 Q13)",
        "pacing": "10 min",
        "type": "Maxima & Minima Optimization",
        "competency": "Geometric Optimization",
        "stem": "Show that the semi-vertical angle of a right circular cone of given surface area and maximum volume is sin⁻¹(1/3).",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Surface Area & Dimensions:</strong><br>\n      Let r be radius, h be height, l be slant height, and α be the semi-vertical angle of the cone.<br>\n      <code>l² = r² + h²</code>, and <code>sin α = r / l</code>.<br>\n      Given total surface area: <code>S = π r² + π r l = constant  ⟹  l = (S - π r²) / (π r)</code>.</p>\n      <p><strong>2. Volume Equation:</strong><br>\n      <code>V = (1/3) π r² h  ⟹  V² = (1/9) π² r⁴ h² = (1/9) π² r⁴ (l² - r²)</code>.<br>\n      Let <code>Z = V²</code> (maximizing Z maximizes V):<br>\n      <code>Z = (1/9) π² r⁴ [ ( (S - π r²) / (π r) )² - r² ] = (1/9) π² r⁴ [ (S² - 2π S r² + π² r⁴ - π² r⁴) / (π² r²) ]</code><br>\n      <code>Z = (1/9) r² (S² - 2π S r²) = (1/9) [ S² r² - 2π S r⁴ ]</code>.</p>\n      <p><strong>3. First Derivative & Critical Point:</strong><br>\n      <code>dZ/dr = (1/9) [ 2 S² r - 8π S r³ ]</code>.<br>\n      Setting dZ/dr = 0: <code>2 S r [ S - 4π r² ] = 0  ⟹  <strong>S = 4π r²</strong></code> (since r > 0).</p>\n      <p><strong>4. Second Derivative Test:</strong><br>\n      <code>d²Z/dr² = (1/9) [ 2 S² - 24π S r² ]</code>.<br>\n      At S = 4π r²: <code>d²Z/dr² = (1/9) [ 2(4π r²)² - 24π (4π r²) r² ] = (1/9) [ 32 π² r⁴ - 96 π² r⁴ ] = - (64/9) π² r⁴ < 0</code>.<br>\n      By second derivative test, volume is <strong>maximum when S = 4π r²</strong>.</p>\n      <p><strong>5. Finding Semi-Vertical Angle α:</strong><br>\n      Since S = π r² + π r l: <code>4π r² = π r² + π r l  ⟹  3π r² = π r l  ⟹  l = 3r  ⟹  r / l = 1/3</code>.<br>\n      Since <code>sin α = r / l = 1/3  ⟹  <strong>α = sin⁻¹(1/3)</strong></code>. (Hence Proved!).</p>\n    </div>",
        "stepMarking": "[1 Mark] Formulating l = (S - πr²)/(πr) and V² function | [1.5 Marks] First derivative dZ/dr and solving S = 4πr² | [1.5 Marks] Second derivative test d²Z/dr² < 0 proving maximality | [1 Mark] Proving l = 3r and final angle α = sin⁻¹(1/3)",
        "cautionTrap": "Differentiating V with square root √(l² - r²). Always maximize Z = V² to eliminate radical signs and avoid differentiation errors!",
        "topperTip": "Substitute Z = V². Maximizing V² is mathematically identical to maximizing V and simplifies algebra by 70%.",
        "mnemonic": "Cone Surface Max Volume: S = 4πr² ⟹ l = 3r ⟹ sin α = 1/3."
    });

    pushQ("Three Dimensional Geometry", {
        "id": "math-3d-10y-2020",
        "marks": 5,
        "year": "CBSE 2020 (Delhi Set 1 Q34)",
        "pacing": "10 min",
        "type": "Foot of Perpendicular & Image",
        "competency": "Perpendicular Distance & Coordinates",
        "stem": "Find the coordinates of the foot of the perpendicular and the length of the perpendicular drawn from the point P(1, 2, 3) to the line: (x - 6)/3 = (y - 7)/2 = (z - 7)/(-2). Also find the image of point P in the line.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. General Point on the Line (Q):</strong><br>\n      Let <code>(x - 6)/3 = (y - 7)/2 = (z - 7)/(-2) = λ</code>.<br>\n      Coordinates of any point Q on the line: <code>Q(3λ + 6, 2λ + 7, -2λ + 7)</code>.</p>\n      <p><strong>2. Direction Ratios of Line PQ:</strong><br>\n      Direction ratios of PQ connecting P(1, 2, 3) and Q:<br>\n      <code>(3λ + 6 - 1, 2λ + 7 - 2, -2λ + 7 - 3) = (3λ + 5, 2λ + 5, -2λ + 4)</code>.<br>\n      Direction ratios of the given line: <code>(a, b, c) = (3, 2, -2)</code>.</p>\n      <p><strong>3. Perpendicularity Condition (PQ ⊥ Line):</strong><br>\n      <code>a₁ a₂ + b₁ b₂ + c₁ c₂ = 0</code><br>\n      <code>3(3λ + 5) + 2(2λ + 5) + (-2)(-2λ + 4) = 0</code><br>\n      <code>9λ + 15 + 4λ + 10 + 4λ - 8 = 0  ⟹  17λ + 17 = 0  ⟹  <strong>λ = -1</strong></code>.</p>\n      <p><strong>4. Foot of Perpendicular (Q) & Length (d):</strong><br>\n      Substituting λ = -1 into Q:<br>\n      <code>x = 3(-1) + 6 = 3</code>, <code>y = 2(-1) + 7 = 5</code>, <code>z = -2(-1) + 7 = 9</code>.<br>\n      <strong>Foot of Perpendicular: Q(3, 5, 9)</strong>.<br>\n      Length: <code>|PQ| = √[(3 - 1)² + (5 - 2)² + (9 - 3)²] = √[4 + 9 + 36] = √49 = <strong>7 units</strong></code>.</p>\n      <p><strong>5. Image Point P'(x', y', z'):</strong><br>\n      Q is the midpoint of segment PP':<br>\n      <code>(1 + x')/2 = 3  ⟹  x' = 5</code><br>\n      <code>(2 + y')/2 = 5  ⟹  y' = 8</code><br>\n      <code>(3 + z')/2 = 9  ⟹  z' = 15</code>.<br>\n      <strong>Image Point: P'(5, 8, 15)</strong>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] General point Q in terms of parameter λ | [1.5 Marks] Orthogonality condition a₁a₂ + b₁b₂ + c₁c₂ = 0 and finding λ = -1 | [1 Mark] Foot of perpendicular Q(3, 5, 9) and length PQ = 7 units | [1 Mark] Image coordinates P'(5, 8, 15) using midpoint formula",
        "cautionTrap": "Forgetting the negative sign in c = -2 when applying the dot product. (-2)(-2λ + 4) = +4λ - 8.",
        "topperTip": "Always verify that Q(3, 5, 9) satisfies the original line equation: (3-6)/3 = -1, (5-7)/2 = -1, (9-7)/(-2) = -1. Perfect check!",
        "mnemonic": "Foot of Perpendicular: Line in λ ⟹ Dot Product = 0 ⟹ Find Q ⟹ Midpoint gives Image."
    });

    pushQ("Probability", {
        "id": "math-prob-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q11)",
        "pacing": "5 min",
        "type": "Probability Distribution & Mean",
        "competency": "Random Variable Expectation",
        "stem": "Find the probability distribution of the number of doublets in three throws of a pair of dice. Also calculate the mean (expected value) of the distribution.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Define Parameters:</strong><br>\n      When a pair of dice is thrown, total outcomes = 36.<br>\n      Doublets = {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)} (6 outcomes).<br>\n      Probability of getting a doublet in a single throw: <code>p = 6/36 = 1/6</code>.<br>\n      Probability of not getting a doublet: <code>q = 1 - p = 5/6</code>.<br>\n      Number of throws: <code>n = 3</code>.<br>\n      Let random variable X = Number of doublets in 3 throws. Possible values: <code>X = 0, 1, 2, 3</code>.</p>\n      <p><strong>2. Probability Distribution:</strong><br>\n      • <code>P(X = 0) = ³C₀ (1/6)⁰ (5/6)³ = 1 × 1 × (125/216) = 125/216</code>.<br>\n      • <code>P(X = 1) = ³C₁ (1/6)¹ (5/6)² = 3 × (1/6) × (25/36) = 75/216</code>.<br>\n      • <code>P(X = 2) = ³C₂ (1/6)² (5/6)¹ = 3 × (1/36) × (5/6) = 15/216</code>.<br>\n      • <code>P(X = 3) = ³C₃ (1/6)³ (5/6)⁰ = 1 × (1/216) × 1 = 1/216</code>.<br>\n      (Check: Sum = 125 + 75 + 15 + 1 = 216/216 = 1).</p>\n      <p><strong>3. Mean (Expected Value E(X) = ∑ x_i P(x_i)):</strong><br>\n      <code>Mean = 0(125/216) + 1(75/216) + 2(15/216) + 3(1/216) = (0 + 75 + 30 + 3) / 216 = 108 / 216 = <strong>1/2</strong></code>.<br>\n      (Alternatively, for binomial distribution: <code>Mean = n p = 3 × (1/6) = 1/2</code>).</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct identification of p = 1/6, q = 5/6 and values of X | [1.5 Marks] Complete probability distribution table with all 4 probabilities evaluated | [0.5 Mark] Mean calculation E(X) = 1/2",
        "cautionTrap": "Leaving fractions with different denominators. Keep all probabilities over common denominator 216 so you can verify that the sum of probabilities equals exactly 1!",
        "topperTip": "Always verify that ∑ P(X) = 1. Mention both the table method and n·p formula for full marks.",
        "mnemonic": "Binomial Mean = n · p (3 × 1/6 = 0.5)."
    });

    pushQ("Lost Spring", {
        "id": "eng-ls-10y-2022",
        "marks": 2,
        "year": "CBSE 2022 (Term 2 Q5)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Character & Thematic Analysis",
        "stem": "Why does Mukesh's grandmother accept her husband's blindness as 'his karam, his destiny'? What does this reveal about the mind-set of the bangle makers of Firozabad?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Mukesh's grandmother views her husband's blindness—caused by the fine glass dust from polishing glass bangles—as an inescapable, divine decree: <em>“It is his karam, his destiny. Can a god-given lineage ever be broken?”</em><br><br>\n      This reveals the deeply entrenched <strong>fatalism and psychological paralysis</strong> that grips the bangle makers of Firozabad. Generations of unbroken exploitation and crushing poverty have conditioned them to believe that suffering is ordained by birth. This defeatist mindset kills all initiative, stifles ambition, and prevents them from organizing into cooperatives or seeking alternative livelihoods.</p>\n    </div>",
        "stepMarking": "[1 Mark] Explanation of grandmother's belief in 'god-given lineage' and karma | [1 Mark] Analysis of psychological paralysis, fatalism, and crushed initiative",
        "cautionTrap": "Explaining only the physical cause of blindness (glass dust) without analyzing the cultural fatalism and hopelessness.",
        "topperTip": "Quote the phrase: 'Can a god-given lineage ever be broken?' to demonstrate text familiarity.",
        "mnemonic": "Firozabad Trap: Glass Dust + God-Given Lineage = Crushed Ambition."
    });

    pushQ("Deep Water", {
        "id": "eng-dw-10y-2022",
        "marks": 2,
        "year": "CBSE 2022 (Term 2 Q6)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Narrative Plot & Sensory Detail",
        "stem": "What physical and psychological sensations did William Douglas experience as he was hurled into the YMCA pool and began sinking to the bottom?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>When the eighteen-year-old bully tossed nine-year-old Douglas into the deep end, he experienced acute visceral trauma:<br><br>\n      • <strong>Physical Sensations:</strong> The nine feet seemed like ninety feet. His lungs were ready to burst; his mouth swallowed filthy water instead of air; his throat was choked, and his legs felt dead, paralyzed, and rigid like dead weights.<br><br>\n      • <strong>Psychological Terror:</strong> An unreasoning, absolute panic gripped him—a terror that <em>“knows no understanding, knows no control”</em>. When his frantic attempts to spring from the tile bottom failed three times, all terror ceased and a black curtain wiped out reason, plunging him into the quiet, peaceful numbness of near-death.</p>\n    </div>",
        "stepMarking": "[1 Mark] Physical sensations: burst lungs, choking, paralyzed legs | [1 Mark] Psychological terror: stark panic followed by the quiet numbness of oblivion",
        "cautionTrap": "Writing only that he was scared. Mention the specific physical details: 'nine feet seemed like ninety', 'lungs ready to burst', and 'legs hung as dead weights'.",
        "topperTip": "Describe the transition from stark panic to peaceful oblivion ('curtain of life fell').",
        "mnemonic": "YMCA Pool: 9 feet = 90 ⟶ Lungs bursting ⟶ Rigid legs ⟶ Black oblivion."
    });

    pushQ("Indigo", {
        "id": "eng-ind-10y-2022",
        "marks": 2,
        "year": "CBSE 2022 (Term 2 Q7)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Historical Narrative & Legal Ethics",
        "stem": "Why did Mahatma Gandhi chide the lawyers of Muzaffarpur who came to brief him about the Champaran sharecroppers' court cases?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Mahatma Gandhi chided the Muzaffarpur lawyers for <strong>collecting exorbitant fees from the impoverished, crushed sharecroppers</strong>.<br><br>\n      Gandhi pointed out that taking such cases to court did little good when the peasants were so crushed and fear-stricken. He declared: <em>“The real relief for them is to be free from fear.”</em> Law courts could not liberate peasants who were physically intimidated by British planters; what was needed was fearless collective action rather than costly, prolonged litigation.</p>\n    </div>",
        "stepMarking": "[1 Mark] Gandhi's rebuke regarding exorbitant legal fees taken from poor peasants | [1 Mark] Real relief philosophy: liberation from fear rather than court litigation",
        "cautionTrap": "Saying Gandhi opposed the lawyers personally. He opposed the mercenary system of draining poor peasants' money in ineffective courts!",
        "topperTip": "Quote Gandhi's famous deduction: 'The real relief for them is to be free from fear.'",
        "mnemonic": "Muzaffarpur Rebuke: Stop heavy fees; Law courts can't cure fear."
    });

    pushQ("The Enemy", {
        "id": "eng-en-10y-2022",
        "marks": 2,
        "year": "CBSE 2022 (Term 2 Q8)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Character & Domestic Conflict",
        "stem": "How did the domestic servants react to Dr. Sadao's decision to harbour and operate on the wounded American prisoner? What does their reaction signify?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>The domestic servants (Yumi the maid, the old gardener, and the cook) reacted with <strong>deep superstition, overt terror, and quiet defiance</strong>:<br><br>\n      • Yumi flatly refused to wash the white soldier, threatening to quit.<br>\n      • The old gardener superstitiously believed the sea and the gun had tried to kill him, and saving him would invite natural retribution.<br>\n      • Viewing Sadao's action as treason and fearful of being arrested as accomplices, all three servants packed their belongings and left the household in protest.<br><br>\n      • <strong>Significance:</strong> Their reaction highlights the pervasive, blind wartime patriotism and xenophobia among the common masses, in contrast to Dr. Sadao and Hana's higher humanist consciousness that transcended national hatred.</p>\n    </div>",
        "stepMarking": "[1 Mark] Specific servant rebellions: Yumi refusing to wash, gardener's superstition, packing bags | [1 Mark] Significance: Blind nationalist conditioning vs Sadao's medical humanism",
        "cautionTrap": "Saying the servants reported Sadao to the police. They did NOT betray him; they only quit their jobs quietly out of fear!",
        "topperTip": "Emphasize that the servants remained loyal by not snitching, but could not overcome their wartime prejudice.",
        "mnemonic": "Servants' Revolt: Fear of Law + Superstition ⟶ Depart Household ⟶ Highlight Common Xenophobia."
    });


    // --- 10-YEAR OFFICIAL CBSE IMPORTED QUESTION SETS (BATCH 4) ---
    pushQ("Amines", {
        "id": "chem-am-10y-2020",
        "marks": 3,
        "year": "CBSE 2020 (Delhi Set 1 Q22)",
        "pacing": "5 min",
        "type": "Named Degradation Reaction",
        "competency": "Carbon Chain Step-Down Synthesis",
        "stem": "Write the chemical equation for Hoffmann Bromamide Degradation Reaction. Why is this reaction considered a 'step-down' reaction? Give an example of converting ethanamide to methanamine.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Hoffmann Bromamide Degradation Reaction:</strong><br>\n      An aliphatic or aromatic primary amide is treated with bromine (Br₂) in aqueous or ethanolic sodium hydroxide (NaOH) to yield a primary amine:<br>\n      <code>R-CO-NH₂ + Br₂ + 4 NaOH  ⟶  R-NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O</code>.</p>\n      <p><strong>2. Why Called a 'Step-Down' Reaction:</strong><br>\n      The primary amine produced contains <strong>exactly one carbon atom less</strong> than the starting amide (the carbonyl carbon is removed as sodium carbonate Na₂CO₃). Hence, it is widely utilized for stepping down a homologous series.</p>\n      <p><strong>3. Conversion of Ethanamide to Methanamine:</strong><br>\n      <code>CH₃-CO-NH₂ (Ethanamide, 2 carbons) + Br₂ + 4 NaOH  ⟶  CH₃-NH₂ (Methanamine, 1 carbon) + Na₂CO₃ + 2 NaBr + 2 H₂O</code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] General balanced equation for Hoffmann bromamide degradation | [1 Mark] Explanation of 'step-down' (one carbon less) | [1 Mark] Specific conversion of ethanamide to methanamine",
        "cautionTrap": "Balancing with 2 NaOH instead of 4 NaOH. 4 moles of NaOH are consumed per mole of amide!",
        "topperTip": "Mention that this reaction proceeds via an isocyanate intermediate (R-N=C=O).",
        "mnemonic": "Hoffmann Bromamide: Amide ⟶ Lose C=O ⟶ 1° Amine (Step Down)."
    });

    pushQ("Inverse Trigonometric Functions", {
        "id": "math-itf-10y-2020",
        "marks": 2,
        "year": "CBSE 2020 (Delhi Set 1 Q18)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Inverse Trigonometric Evaluation",
        "stem": "Find the exact numerical value of: cos [ cos⁻¹(-√3/2) + π/6 ].",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Principal Value of cos⁻¹(-√3/2):</strong><br>\n      • The principal value branch of cos⁻¹ is <code>[0, π]</code>.<br>\n      • Using property <code>cos⁻¹(-x) = π - cos⁻¹(x)</code>:<br>\n      <code>cos⁻¹(-√3/2) = π - cos⁻¹(√3/2) = π - π/6 = 5π/6</code>.</p>\n      <p><strong>2. Evaluating the Expression:</strong><br>\n      <code>cos [ 5π/6 + π/6 ] = cos [ 6π/6 ] = cos(π) = <strong>-1</strong></code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct evaluation of cos⁻¹(-√3/2) = 5π/6 | [1 Mark] Evaluating cos(π) = -1",
        "cautionTrap": "Writing cos⁻¹(-√3/2) = -π/6. The range of cos⁻¹ is [0, π], never negative!",
        "topperTip": "Remember: cos⁻¹(-x) = π - cos⁻¹(x). Never drop the π.",
        "mnemonic": "cos⁻¹ Negative: Flip from π (π - θ)."
    });

    pushQ("Continuity and Differentiability", {
        "id": "math-cont-10y-2022",
        "marks": 3,
        "year": "CBSE 2022 (Term 2 Q5)",
        "pacing": "5 min",
        "type": "Core / Derivation (3M)",
        "competency": "Logarithmic Differentiation",
        "stem": "Differentiate with respect to x: y = x^(sin x) + (sin x)^(cos x) for x > 0.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Let <code>y = u + v</code>, where <code>u = x^(sin x)</code> and <code>v = (sin x)^(cos x)</code>.<br>\n      Then <code>dy/dx = du/dx + dv/dx</code>.</p>\n      <p><strong>1. Differentiating u = x^(sin x):</strong><br>\n      Taking natural logarithm: <code>log u = sin x · log x</code>.<br>\n      Differentiating with respect to x:<br>\n      <code>(1/u)(du/dx) = cos x · log x + sin x · (1/x)</code>.<br>\n      <code>du/dx = x^(sin x) [ cos x · log x + (sin x) / x ]</code>.</p>\n      <p><strong>2. Differentiating v = (sin x)^(cos x):</strong><br>\n      Taking natural logarithm: <code>log v = cos x · log(sin x)</code>.<br>\n      Differentiating with respect to x:<br>\n      <code>(1/v)(dv/dx) = (- sin x) · log(sin x) + cos x · [ (1/sin x) · cos x ]</code><br>\n      <code>= - sin x · log(sin x) + cos x · cot x</code>.<br>\n      <code>dv/dx = (sin x)^(cos x) [ cos x · cot x - sin x · log(sin x) ]</code>.</p>\n      <p><strong>3. Final Derivative:</strong><br>\n      <strong>dy/dx = x^(sin x) [ cos x · log x + (sin x)/x ] + (sin x)^(cos x) [ cos x · cot x - sin x · log(sin x) ]</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Splitting into y = u + v | [1 Mark] Logarithmic differentiation of u = x^(sin x) | [1 Mark] Logarithmic differentiation of v = (sin x)^(cos x) and final sum",
        "cautionTrap": "Taking log of y directly: log y ≠ log u + log v! Logarithm cannot be distributed over addition: log(u + v) ≠ log u + log v.",
        "topperTip": "Always split composite sums into u and v separately before taking logs.",
        "mnemonic": "Log rule: Split into u + v; Never take log of a sum!"
    });

    pushQ("Three Dimensional Geometry", {
        "id": "math-3d-10y-2019",
        "marks": 3,
        "year": "CBSE 2019 (All India Q26)",
        "pacing": "5 min",
        "type": "Shortest Distance between Parallel Lines",
        "competency": "Parallel Line Vector Geometry",
        "stem": "Find the shortest distance between the parallel lines:\\nr⃗ = (î + 2ĵ - 4k̂) + λ (2î + 3ĵ + 6k̂)\\nr⃗ = (3î + 3ĵ - 5k̂) + μ (2î + 3ĵ + 6k̂)",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Identify Parallel Line Vectors:</strong><br>\n      Both lines share the same direction vector: <code>b⃗ = 2î + 3ĵ + 6k̂</code>.<br>\n      Position vectors of given points on the lines:<br>\n      • <code>a⃗₁ = î + 2ĵ - 4k̂</code><br>\n      • <code>a⃗₂ = 3î + 3ĵ - 5k̂</code><br>\n      • Difference vector: <code>a⃗₂ - a⃗₁ = (3 - 1)î + (3 - 2)ĵ + (-5 - (-4))k̂ = 2î + ĵ - k̂</code>.</p>\n      <p><strong>2. Cross Product b⃗ × (a⃗₂ - a⃗₁):</strong><br>\n      <code>b⃗ × (a⃗₂ - a⃗₁) = | î   ĵ   k̂ |\\n| 2   3   6 |\\n| 2   1  -1 |</code><br>\n      <code>= î [ (3)(-1) - (6)(1) ] - ĵ [ (2)(-1) - (6)(2) ] + k̂ [ (2)(1) - (3)(2) ]</code><br>\n      <code>= î [ -3 - 6 ] - ĵ [ -2 - 12 ] + k̂ [ 2 - 6 ] = -9î + 14ĵ - 4k̂</code>.<br>\n      Magnitude: <code>|b⃗ × (a⃗₂ - a⃗₁)| = √[(-9)² + 14² + (-4)²] = √[81 + 196 + 16] = √293</code>.</p>\n      <p><strong>3. Magnitude of Vector b⃗:</strong><br>\n      <code>|b⃗| = √[2² + 3² + 6²] = √[4 + 9 + 36] = √49 = 7</code>.</p>\n      <p><strong>4. Shortest Distance Formula for Parallel Lines:</strong><br>\n      <code>d = | [ b⃗ × (a⃗₂ - a⃗₁) ] | / |b⃗| = <strong>√293 / 7 units</strong> ≈ 2.44 units</code>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correct formula d = |b⃗ × (a⃗₂ - a⃗₁)| / |b⃗| | [1 Mark] Evaluation of cross product b⃗ × (a⃗₂ - a⃗₁) = -9î + 14ĵ - 4k̂ and magnitude √293 | [1 Mark] Division by |b⃗| = 7 and final answer √293 / 7 units",
        "cautionTrap": "Using the skew lines formula containing dot product with (b⃗₁ × b⃗₂). For parallel lines b⃗₁ × b⃗₂ = 0, so the cross product formula d = |b⃗ × (a⃗₂ - a⃗₁)| / |b⃗| MUST be used!",
        "topperTip": "Recognize parallel lines immediately when the direction vectors are identical or proportional.",
        "mnemonic": "Parallel Lines Distance: Cross Product with b⃗ divided by magnitude of b⃗."
    });

    pushQ("Linear Programming", {
        "id": "math-lpp-10y-2020",
        "marks": 5,
        "year": "CBSE 2020 (Delhi Set 1 Q36)",
        "pacing": "10 min",
        "type": "Unbounded Feasible Region Minimization",
        "competency": "Unbounded Region Optimization",
        "stem": "Minimize: Z = 3x + 5y\\nSubject to constraints:\\nx + 3y ≥ 3\\nx + y ≥ 2\\nx ≥ 0, y ≥ 0.\\nGraph the feasible region and explain the extra half-plane test required for unbounded feasible regions.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Constraints & Lines:</strong><br>\n      • Line 1: <code>x + 3y = 3</code> passes through (3, 0) and (0, 1). Testing (0,0): 0 ≥ 3 (False; region lies away from origin).<br>\n      • Line 2: <code>x + y = 2</code> passes through (2, 0) and (0, 2). Testing (0,0): 0 ≥ 2 (False; region lies away from origin).<br>\n      • Intersection Point: Subtracting gives <code>2y = 1 ⟹ y = 1/2</code>; then <code>x = 3/2</code>. Point is <strong>(3/2, 1/2)</strong>.<br>\n      • The feasible region is <strong>unbounded</strong> with corner points: A(3, 0), B(3/2, 1/2), and C(0, 2).</p>\n      <p><strong>2. Evaluating Z = 3x + 5y at Corner Points:</strong><br>\n      • At A(3, 0): <code>Z = 3(3) + 5(0) = 9</code>.<br>\n      • At B(3/2, 1/2): <code>Z = 3(3/2) + 5(1/2) = (9 + 5)/2 = 14/2 = <strong>7 (Smallest)</strong></code>.<br>\n      • At C(0, 2): <code>Z = 3(0) + 5(2) = 10</code>.<br>\n      Candidate minimum value is <strong>M = 7</strong>.</p>\n      <p><strong>3. Open Half-Plane Test for Unbounded Region:</strong><br>\n      Since the region is unbounded, we must test whether the open half-plane <code>3x + 5y < 7</code> has any common points with the feasible region.<br>\n      • Line <code>3x + 5y = 7</code> passes through (7/3 ≈ 2.33, 0) and (0, 1.4).<br>\n      • Testing (3/2, 1/2): <code>3(3/2) + 5(1/2) = 7</code> (lies on the boundary).<br>\n      • The open half-plane <code>3x + 5y < 7</code> has <strong>NO common points</strong> with the feasible region.<br>\n      <strong>Conclusion:</strong> Minimum value of Z is <strong>7 at point (3/2, 1/2)</strong>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Accurate graphing of lines and shading unbounded feasible region | [1 Mark] Corner points evaluation (A=9, B=7, C=10) | [1.5 Marks] Crucial open half-plane test 3x + 5y < 7 showing no common points | [1 Mark] Final conclusion: Min Z = 7 at (3/2, 1/2)",
        "cautionTrap": "Skipping the open half-plane test! CBSE marking schemes strictly deduct 1.5 to 2 marks if the open half-plane check ax + by < M is omitted for unbounded regions.",
        "topperTip": "Draw the line 3x + 5y = 7 as a dashed line to indicate the boundary of the open half-plane.",
        "mnemonic": "Unbounded Rule: Check Open Half-Plane (No common points = True Minimum)."
    });

    pushQ("Probability", {
        "id": "math-prob-10y-2019",
        "marks": 2,
        "year": "CBSE 2019 (All India Q18)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Independent Events & Set Probability",
        "stem": "If A and B are two independent events such that P(A) = 0.3 and P(B) = 0.6, find:\\n(a) P(A ∩ B)\\n(b) P(A ∪ B)\\n(c) P(A | B)\\n(d) P(B | A)",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Since A and B are independent events:<br><br>\n      • <strong>(a) P(A ∩ B):</strong><br>\n      <code>P(A ∩ B) = P(A) · P(B) = 0.3 × 0.6 = <strong>0.18</strong></code>.<br><br>\n      • <strong>(b) P(A ∪ B):</strong><br>\n      <code>P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.3 + 0.6 - 0.18 = 0.90 - 0.18 = <strong>0.72</strong></code>.<br><br>\n      • <strong>(c) P(A | B):</strong><br>\n      By definition of independent events: <code>P(A | B) = P(A) = <strong>0.3</strong></code> (or <code>0.18 / 0.6 = 0.3</code>).<br><br>\n      • <strong>(d) P(B | A):</strong><br>\n      By definition of independent events: <code>P(B | A) = P(B) = <strong>0.6</strong></code> (or <code>0.18 / 0.3 = 0.6</code>).</p>\n    </div>",
        "stepMarking": "[0.5 Mark] P(A ∩ B) = 0.18 | [0.5 Mark] P(A ∪ B) = 0.72 | [0.5 Mark] P(A | B) = 0.3 | [0.5 Mark] P(B | A) = 0.6",
        "cautionTrap": "Adding P(A) and P(B) directly without subtracting P(A ∩ B) for union. Independent does NOT mean mutually exclusive!",
        "topperTip": "For independent events: P(A|B) is simply P(A), and P(B|A) is simply P(B).",
        "mnemonic": "Independent: Intersection = Product; Conditional = Unaffected."
    });

    pushQ("The Last Lesson", {
        "id": "eng-tll-10y-2020",
        "marks": 2,
        "year": "CBSE 2020 (Delhi Set 1 Q8)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Character & Social Context",
        "stem": "Why were the village elders (Old Hauser, the former mayor, the former postmaster) seated on the back benches of the classroom during the last French lesson?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>The village elders were seated on the back benches for three poignant reasons:<br><br>\n      1. <strong>Tribute and Gratitude:</strong> To honor and thank M. Hamel for his <strong>forty years of faithful, devoted service</strong> to the village school.<br>\n      2. <strong>Remorse for Neglect:</strong> They felt collective sorrow and guilt that they had not gone to school more often and had prioritized work at mills over their children's education.<br>\n      3. <strong>Patriotic Solidarity:</strong> It was their solemn way of showing respect for their conquered country and the French language that was no longer theirs.</p>\n    </div>",
        "stepMarking": "[1 Mark] Respect and gratitude for M. Hamel's 40 years of service | [1 Mark] Collective sorrow/guilt for neglecting education and patriotic respect for their mother tongue",
        "cautionTrap": "Saying they were there to inspect or audit the school. They were there as grieving citizens paying solemn farewell!",
        "topperTip": "Mention the specific tenure: '40 years of faithful service'.",
        "mnemonic": "Back Benches: Honor Hamel (40 yrs) + Regret Lost Schooling + Patriotic Farewell."
    });

    pushQ("The Rattrap", {
        "id": "eng-rt-10y-2020",
        "marks": 2,
        "year": "CBSE 2020 (Delhi Set 1 Q9)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Psychological Motivation & Plot",
        "stem": "Why did the peddler decline the ironmaster's invitation to spend Christmas Eve at the manor house?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>The peddler declined the invitation because he was acutely aware that the ironmaster had mistaken him for his old regimental comrade, Captain Nils Olof.<br><br>\n      Having <strong>thirty stolen kronor in his pocket</strong> (stolen from the old crofter), going up to the grand manor house felt like walking voluntarily into the <strong>lion's den</strong>. He feared his true identity would be discovered immediately in full daylight, leading to his arrest by the sheriff. He only desired to sleep on the forge floor and slip away unnoticed.</p>\n    </div>",
        "stepMarking": "[1 Mark] Awareness of mistaken identity and possession of stolen 30 kronor | [1 Mark] Fear of walking into 'lion's den' and being handed to the sheriff",
        "cautionTrap": "Saying he declined because he was shy. He declined out of mortal fear of arrest with stolen money in his pocket!",
        "topperTip": "Use the author's metaphor: 'Throwing himself voluntarily into the lion's den.'",
        "mnemonic": "Manor House Rejection: Stolen 30 Kronor + Mistaken Identity = Lion's Den Fear."
    });

    pushQ("Indigo", {
        "id": "eng-ind-10y-2020",
        "marks": 2,
        "year": "CBSE 2020 (Delhi Set 1 Q10)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Character Trait & Historical Narrative",
        "stem": "Why is Rajkumar Shukla described as being 'resolute' in Louis Fischer's 'Indigo'?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Rajkumar Shukla is described as <strong>'resolute' (determined)</strong> because he refused to give up until he brought Mahatma Gandhi to Champaran:<br><br>\n      • When Gandhi explained he had pre-arranged commitments in Cawnpore (Kanpur) and across India, Shukla did not return home; he <strong>accompanied Gandhi everywhere</strong>.<br>\n      • He followed Gandhi to his ashram near Ahmedabad and waited patiently for weeks.<br>\n      • Finally, he tracked Gandhi to Calcutta, sat on his haunches for hours until Gandhi was free, and boarded the train with him to Patna.<br>\n      His unyielding perseverance and tenacity ultimately compelled Gandhi to champion the sharecroppers' cause.</p>\n    </div>",
        "stepMarking": "[1 Mark] Following Gandhi across Kanpur, ashram at Ahmedabad, and waiting for weeks | [1 Mark] Meeting him in Calcutta, boarding train, and unshakeable tenacity",
        "cautionTrap": "Calling Shukla an educated political leader. Shukla was an illiterate, poor sharecropper whose only weapon was unyielding determination!",
        "topperTip": "Quote Gandhi's reaction: 'Impressed by the sharecropper's tenacity and story, Gandhi relented.'",
        "mnemonic": "Shukla's Resolute Trail: Kanpur ⟶ Ashram ⟶ Calcutta ⟶ Champaran Victory."
    });

    pushQ("A Thing of Beauty", {
        "id": "eng-tob-10y-2022",
        "marks": 2,
        "year": "CBSE 2022 (Term 2 Q7)",
        "pacing": "3 min",
        "type": "Poetic Line Analysis",
        "competency": "Symbolic Interpretation",
        "stem": "What does Keats mean by the line: 'Therefore, on every morrow, are we wreathing a flowery band to bind us to the earth'?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Keats suggests that despite human life being overwhelmed by grief, disappointment, cruelty, and despondence, the <strong>enchanting creations of beauty act as an emotional anchor</strong>.<br><br>\n      Every morning ('morrow'), we symbolically weave a garland of beautiful memories and encounters with nature (the 'flowery band'). This floral wreath binds our exhausted, disillusioned spirits to life on earth, giving us hope, optimism, and the willpower to continue living amidst earthly trials.</p>\n    </div>",
        "stepMarking": "[1 Mark] Earthly despair, sorrow, and despondence context | [1 Mark] Flowery band as emotional anchor/garland connecting human soul to love for life",
        "cautionTrap": "Taking 'flowery band' literally as making flower necklaces. It is a metaphor for cultivating joy and beauty to anchor our will to live!",
        "topperTip": "Pair 'flowery band' with 'spite of despondence' to highlight the contrast.",
        "mnemonic": "Flowery Band: Metaphor for Beautiful Memories Binding Us to Earth."
    });

    pushQ("Keeping Quiet", {
        "id": "eng-kq-10y-2022",
        "marks": 2,
        "year": "CBSE 2022 (Term 2 Q8)",
        "pacing": "3 min",
        "type": "Poetic Imagery Analysis",
        "competency": "Eco-Poetic Symbols",
        "stem": "What message does Pablo Neruda convey through the images of: (i) the fisherman in the cold sea, and (ii) the man gathering salt looking at his hurt hands?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Fisherman in the Cold Sea:</strong><br>\n      Symbolizes humanity's predatory exploitation of nature. The fisherman ceasing to harm whales represents an <strong>end to ecological destruction and ruthless exploitation of marine wildlife</strong>, establishing harmony between man and nature.</p>\n      <p><strong>2. Man Gathering Salt Looking at Hurt Hands:</strong><br>\n      Symbolizes the relentless, agonizing toll of modern industrial labor. In the frenzied quest for material survival and economic gain, humans blind themselves to self-harm. Pausing allows workers time for <strong>self-healing, self-reflection, and reclaiming physical and emotional well-being</strong>.</p>\n    </div>",
        "stepMarking": "[1 Mark] Fisherman: Cessation of ecological violence / cruelty against nature | [1 Mark] Salt gatherer: Pause for self-reflection and healing from destructive commercial toil",
        "cautionTrap": "Treating these images as literal career advice. They are universal symbols of ecological violence and capitalist self-destruction!",
        "topperTip": "Frame both as twin dimensions: Outer Harmony (saving whales) and Inner Harmony (healing hurt hands).",
        "mnemonic": "Neruda Imagery: Fisherman = Stop Hurting Nature; Salt Gatherer = Stop Hurting Self."
    });

    pushQ("Aunt Jennifer's Tigers", {
        "id": "eng-ajt-10y-2022",
        "marks": 2,
        "year": "CBSE 2022 (Term 2 Q9)",
        "pacing": "3 min",
        "type": "Symbolic Analysis",
        "competency": "Feminist Imagery",
        "stem": "Why are Aunt Jennifer's fingers described as 'fluttering through her wool'? What prevents her from pulling the needle?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Aunt Jennifer's fingers are 'fluttering through her wool' due to <strong>deep physical nervousness, psychological trauma, and physical weakness</strong> born out of a lifetime of domestic oppression.<br><br>\n      She finds even the lightweight ivory needle hard to pull because her hands are mentally weighed down by <strong>'the massive weight of Uncle's wedding band'</strong>. The wedding ring represents the patriarchal tyranny, terror, and loss of personal autonomy that have systematically crushed her vitality.</p>\n    </div>",
        "stepMarking": "[1 Mark] Fluttering fingers: nervous trembling caused by domestic intimidation | [1 Mark] Inability to pull needle: psychological burden of 'Uncle's wedding band' (patriarchal oppression)",
        "cautionTrap": "Saying she is physically ill or old. Her trembling is emotional and psychological trauma from marital subjugation!",
        "topperTip": "Connect 'fluttering fingers' directly with 'massive weight of Uncle's wedding band'.",
        "mnemonic": "Aunt Jennifer: Fluttering Fingers = Living Trauma; Wedding Band = Patriarchal Yoke."
    });

    pushQ("The Enemy", {
        "id": "eng-en-10y-2020",
        "marks": 3,
        "year": "CBSE 2020 (Delhi Set 1 Q11)",
        "pacing": "5 min",
        "type": "Plot & Ethical Resolution",
        "competency": "Moral Conflict Resolution",
        "stem": "How did Dr. Sadao help the American prisoner of war, Tom, to escape to safety? What does this final act reveal about Dr. Sadao's character?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Method of Escape:</strong><br>\n      Realizing that the General had forgotten his promise of sending assassins and that keeping Tom posed continuous danger, Dr. Sadao organized a clandestine escape:<br>\n      • Put his sturdy boat on the shore, loaded with <strong>bottled water, food provisions, extra quilts</strong>, and a flashlight.<br>\n      • Dressed Tom in Japanese clothes and wrapped his blond hair in a black cloth.<br>\n      • Instructed him to row to a nearby uninhabited island and wait for a Korean fishing boat, using flash signals (two flashes at dusk if out of food; one flash if safe).<br>\n      Tom escaped safely without alerting authorities.</p>\n      <p><strong>2. Character Revelation:</strong><br>\n      This final act demonstrates that Dr. Sadao was an exemplary human being whose <strong>reverence for human life and professional ethics completely superseded wartime jingoism, racial prejudice, and parochial nationalism</strong>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Details of boat, provisions, disguising clothes, island destination, and flashlight code | [1.5 Marks] Character analysis: Universal humanism triumphing over wartime hatred and racial prejudice",
        "cautionTrap": "Omitting the details of the escape plan (boat, provisions, flashlight signals). These specific details score top marks in CBSE English!",
        "topperTip": "Cite the flashcode instructions: 'Two flashes at sundown if in trouble; one flash if safe.'",
        "mnemonic": "Tom's Escape: Boat + Japanese Kimono + Island Haven + Flashlight Code."
    });


    // --- 10-YEAR OFFICIAL CBSE IMPORTED QUESTION SETS (BATCH 5) ---
    pushQ("Linear Programming", {
        "id": "math-lpp-10y-2019",
        "marks": 4,
        "year": "CBSE 2019 (All India Q29)",
        "pacing": "8 min",
        "type": "Case-Based / Diet Problem Formulation",
        "competency": "Linear Model Formulation",
        "stem": "A dietician wishes to mix two types of foods in such a way that vitamin contents of the mixture contain at least 8 units of vitamin A and 10 units of vitamin C. Food 'X' contains 2 units/kg of vitamin A and 1 unit/kg of vitamin C. Food 'Y' contains 1 unit/kg of vitamin A and 2 units/kg of vitamin C. It costs ₹50/kg to purchase Food 'X' and ₹70/kg to purchase Food 'Y'. Formulate this problem as a linear programming problem to minimize the cost of such a mixture and find the minimum cost graphically.",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Mathematical Formulation:</strong><br>\n      Let x kg of Food 'X' and y kg of Food 'Y' be mixed.<br>\n      • Objective Function: <strong>Minimize Z = 50x + 70y</strong>.<br>\n      • Constraints:<br>\n        - Vitamin A: <code>2x + y ≥ 8</code><br>\n        - Vitamin C: <code>x + 2y ≥ 10</code><br>\n        - Non-negativity: <code>x ≥ 0, y ≥ 0</code>.</p>\n      <p><strong>2. Feasible Region & Corner Points:</strong><br>\n      • Line 1: <code>2x + y = 8</code> passes through (4, 0) and (0, 8).<br>\n      • Line 2: <code>x + 2y = 10</code> passes through (10, 0) and (0, 5).<br>\n      • Intersection: Multiplying line 2 by 2: <code>2x + 4y = 20</code>; subtracting line 1: <code>3y = 12 ⟹ y = 4</code>; then <code>x = 2</code>. Point is <strong>B(2, 4)</strong>.<br>\n      The feasible region is unbounded with corner points: A(10, 0), B(2, 4), and C(0, 8).</p>\n      <p><strong>3. Corner Points & Z Evaluation:</strong><br>\n      • At A(10, 0): <code>Z = 50(10) + 70(0) = ₹500</code>.<br>\n      • At B(2, 4): <code>Z = 50(2) + 70(4) = 100 + 280 = <strong>₹380 (MINIMUM)</strong></code>.<br>\n      • At C(0, 8): <code>Z = 50(0) + 70(8) = ₹560</code>.<br>\n      • Open half-plane <code>50x + 70y < 380  ⟹  5x + 7y < 38</code> has no common points with the feasible region.<br>\n      <strong>Conclusion:</strong> Minimum cost is <strong>₹380</strong> obtained by mixing <strong>2 kg of Food X and 4 kg of Food Y</strong>.</p>\n    </div>",
        "stepMarking": "[1.5 Marks] Formulation of objective function Z = 50x + 70y and constraints | [1.5 Marks] Feasible region graph and intersection B(2, 4) | [1 Mark] Evaluating Z at corner points and concluding minimum cost ₹380",
        "cautionTrap": "Reversing coefficients for Vitamin A and C in the table. Match Food X units with x and Food Y units with y!",
        "topperTip": "Create a 3-column table: Nutrient | Food X (x) | Food Y (y) | Minimum Requirement, to write constraints error-free.",
        "mnemonic": "LPP Diet: Constraints = Columns in Nutrients."
    });

    pushQ("A Thing of Beauty", {
        "id": "eng-tob-10y-2020",
        "marks": 2,
        "year": "CBSE 2020 (Delhi Set 1 Q7)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Poetic Catalogue of Nature",
        "stem": "List four things of beauty mentioned by John Keats in his poem. What quiet blessing do they offer to humanity?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p><strong>1. Four Things of Beauty:</strong><br>\n      1. The <strong>sun</strong> and the <strong>moon</strong> (cosmic celestial beacons).<br>\n      2. <strong>Trees old and young</strong> sprouting a shady boon for simple sheep.<br>\n      3. <strong>Daffodils</strong> blooming amidst their green world.<br>\n      4. <strong>Clear rills (streams)</strong> that make cooling shelters against the hot season.<br>\n      (Also: mid-forest brake musk-rose blooms and lovely heroic tales of the mighty dead).</p>\n      <p><strong>2. The Quiet Blessing:</strong><br>\n      They offer a <strong>'bower quiet'</strong>—an immortal spiritual sanctuary providing peaceful health, sweet dreams, quiet breathing, and lifting the heavy pall of depression from human souls.</p>\n    </div>",
        "stepMarking": "[1 Mark] Correctly listing 4 natural things of beauty from the poem | [1 Mark] Explanation of the blessing (quiet bower, lifting gloom, spiritual rejuvenation)",
        "cautionTrap": "Listing generic things like 'mountains and oceans' not explicitly in Keats' poem. Stick strictly to: Sun, Moon, Trees, Sheep, Daffodils, Clear rills, Musk-roses!",
        "topperTip": "Name the specific text images: 'shady boon for simple sheep' and 'clear rills'.",
        "mnemonic": "Keats List: Sun, Moon, Trees, Daffodils, Rills, Musk-rose."
    });

    pushQ("Keeping Quiet", {
        "id": "eng-kq-10y-2020",
        "marks": 2,
        "year": "CBSE 2020 (Delhi Set 1 Q8)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Linguistic & Philosophical Analysis",
        "stem": "Why does Pablo Neruda ask us 'not to speak in any language' and 'stop for one second'?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>Pablo Neruda asks us not to speak in any language because <strong>spoken languages are historical barriers that divide humanity</strong> into conflicting nationalities, races, and cultural factions. Speech often leads to arguments, hate propaganda, and geopolitical hostility.<br><br>\n      By keeping silent and motionless for one brief second, all divisive national identities vanish. Humanity enters a state of <strong>universal, meditative silence</strong>, fostering genuine empathy, mutual brotherhood, and global peace.</p>\n    </div>",
        "stepMarking": "[1 Mark] Language as a source of division, arguments, and ideological strife | [1 Mark] Silence as a universal equalizer uniting all humanity in mutual brotherhood",
        "cautionTrap": "Saying silence saves energy. Neruda's silence is about transcending linguistic divisions and war!",
        "topperTip": "State that silence eliminates the Babel of conflicting national tongues.",
        "mnemonic": "Silence Unites: Language divides nations; Silence unites humanity."
    });

    pushQ("Aunt Jennifer's Tigers", {
        "id": "eng-ajt-10y-2020",
        "marks": 2,
        "year": "CBSE 2020 (Delhi Set 1 Q9)",
        "pacing": "3 min",
        "type": "Short Answer (2M)",
        "competency": "Diction & Characterization",
        "stem": "What do the words 'chivalric' and 'denizens' signify in the context of Aunt Jennifer's tigers?",
        "diagram": "",
        "modelAnswer": "<div class=\"space-y-2 text-xs\">\n      <p>• <strong>'Denizens':</strong> Means citizens or rightful inhabitants. Tigers are the natural, proud occupants of the lush green forest. They belong to their wild habitat with complete belonging, ease, and regal freedom—unlike Aunt Jennifer who feels like an insecure alien in her own domestic household.<br><br>\n      • <strong>'Chivalric Certainty':</strong> 'Chivalric' connotes knightly bravery, courtly dignity, and noble confidence. The tigers pace with fearless, majestic swagger, untainted by cowardice or self-doubt. This stands in acute, tragic contrast to Aunt Jennifer's own terrified submission, fluttering fingers, and shattered self-esteem under patriarchal intimidation.</p>\n    </div>",
        "stepMarking": "[1 Mark] Denizens: Rightful natural inhabitants possessing absolute freedom and belonging | [1 Mark] Chivalric certainty: Knightly bravery, bold majesty, and contrast with Aunt's subjugation",
        "cautionTrap": "Defining chivalric only as 'polite'. In poetry, chivalric refers to knightly fearlessness and heroic confidence!",
        "topperTip": "Directly contrast the tigers' 'chivalric certainty' with Aunt Jennifer's 'fluttering fear'.",
        "mnemonic": "Denizens = Proud Citizens; Chivalric = Knightly Fearless Swagger."
    });

  }

  addTenYearQuestions();

  HM.getChapterProbableQuestions = function (lessonOrTitle) {
    if (!lessonOrTitle) return [];
    const title = (typeof lessonOrTitle === 'string' ? lessonOrTitle : (lessonOrTitle.title || '')).trim().toLowerCase();
    if (!title) return [];

    // 1. Exact match (case-insensitive)
    for (const [key, questions] of Object.entries(Q)) {
      if (key.toLowerCase() === title) {
        return questions;
      }
    }

    // 2. Substring match
    for (const [key, questions] of Object.entries(Q)) {
      const k = key.toLowerCase();
      if (title.includes(k) || k.includes(title)) {
        return questions;
      }
    }

    // 3. Alphanumeric match (handles punctuation / spacing nuances)
    const normTitle = title.replace(/[^a-z0-9]/g, '');
    for (const [key, questions] of Object.entries(Q)) {
      const normKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (normTitle && normKey && (normTitle.includes(normKey) || normKey.includes(normTitle))) {
        return questions;
      }
    }

    return [];
  };

  HM.allProbableQuestions = Q;

})();
