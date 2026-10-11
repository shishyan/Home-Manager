# Build comprehensive 10-year CBSE Board Questions for all Class 12 chapters
import json

questions_data = {
    # --- PHYSICS ---
    "Electric Charges and Fields": [
        {
            "id": "phy-ch1-q2",
            "marks": 3,
            "type": "Derivation & Reasoning",
            "prob": "🔥 Repeated in CBSE 2024, 2022, 2018",
            "stem": "An electric dipole of dipole moment p is placed in a uniform electric field E. (a) Derive an expression for the torque experienced by it. (b) Find the work done in rotating the dipole from stable equilibrium (θ = 0°) to unstable equilibrium (θ = 180°).",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>(a) Torque on Dipole:</strong><br>Consider charges -q and +q separated by 2a. Forces on +q is +qE and on -q is -qE (equal, opposite, non-collinear).<br>Torque τ = Force × perpendicular distance = (qE) × (2a sin θ) = (q · 2a) E sin θ = <strong>p × E</strong> (magnitude τ = pE sin θ).<br><br><strong>(b) Work Done (Potential Energy):</strong><br>dW = τ dθ = pE sin θ dθ.<br>W = ∫[0° to 180°] pE sin θ dθ = -pE [cos 180° - cos 0°] = -pE [-1 - 1] = <strong>+2 p E</strong>.</div>",
            "explanation": "CBSE examiners verify both the vector cross product τ = p × E and the exact sign convention in potential energy ΔU = U(180°) - U(0°) = 2pE.",
            "stepMarking": "[1.5 Marks] Force couple and torque derivation | [1.5 Marks] Integration for work done from 0° to 180°"
        },
        {
            "id": "phy-ch1-q3",
            "marks": 3,
            "type": "Derivation",
            "prob": "🔥 Repeated in CBSE 2023, 2021, 2017",
            "stem": "Using Gauss's law, prove that the electric field due to a uniformly charged infinite plane sheet of surface charge density σ is independent of the distance of the point from the sheet.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'>Consider a Gaussian cylinder of cross-sectional area A piercing the plane sheet perpendicularly.<br>Flux through curved surface = 0 (E ⊥ dA).<br>Flux through both flat end caps = E·A + E·A = 2EA.<br>According to Gauss's theorem: Φ = q_enclosed / ε₀.<br>Since q_enclosed = σ A: 2EA = (σ A) / ε₀ ⟹ <strong>E = σ / (2ε₀)</strong>.<br>Since this expression contains no distance variable r, the electric field is completely independent of distance from the sheet.</div>",
            "explanation": "Note that for a charged conductor (sheet of finite thickness), E = σ/ε₀, whereas for an infinitely thin sheet, E = σ/(2ε₀).",
            "stepMarking": "[1 Mark] Gaussian pillbox cylinder description | [1 Mark] Total flux 2EA | [1 Mark] Boxed formula E = σ/(2ε₀)"
        }
    ],
    "Electrostatic Potential and Capacitance": [
        {
            "id": "phy-ch2-q2",
            "marks": 3,
            "type": "Concept & Reasoning",
            "prob": "🔥 Repeated in CBSE 2023, 2020, 2019",
            "stem": "(a) Define an equipotential surface. (b) Draw equipotential surfaces for: (i) an isolated positive point charge, (ii) an electric dipole. (c) Why can two equipotential surfaces never intersect?",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>(a) Definition:</strong> A surface which has the same electrostatic potential at every point is called an equipotential surface (work done in moving charge on it is W = qΔV = 0).<br><strong>(b) Shapes:</strong><br>• Point charge: Concentric spherical surfaces with charge at center; spacing increases as field weakens.<br>• Dipole: Dumbbell-shaped oval surfaces clustered closer between the two charges.<br><strong>(c) Non-intersection:</strong> If two equipotential surfaces intersect, at the point of intersection there would be two different directions of the electric field (since E is always normal to the surface), which is physically impossible.</div>",
            "explanation": "Remember to write that electric field lines are always perpendicular to equipotential surfaces (E = -dV/dr).",
            "stepMarking": "[1 Mark] Definition and work zero | [1 Mark] Two correct surface sketches | [1 Mark] Non-intersection reasoning"
        },
        {
            "id": "phy-ch2-q3",
            "marks": 3,
            "type": "Derivation & Numericals",
            "prob": "Repeated in CBSE 2022, 2018, 2016",
            "stem": "A parallel plate capacitor of capacitance C is charged by a battery to potential V. The battery is disconnected and a dielectric slab of dielectric constant K is inserted filling the space. How do (i) charge, (ii) potential difference, and (iii) energy stored change?",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'>When the battery is <strong>disconnected</strong>, the charge remains isolated:<br>• <strong>(i) Charge Q:</strong> Remains constant (Q = Q₀) by conservation of charge.<br>• <strong>(ii) Potential Difference V:</strong> Capacitance increases to C = K·C₀. Therefore, V = Q / C = Q₀ / (K C₀) = <strong>V₀ / K (decreases by factor of K)</strong>.<br>• <strong>(iii) Energy Stored U:</strong> U = Q² / (2C) = Q₀² / (2K C₀) = <strong>U₀ / K (decreases by factor of K)</strong>.<br>The reduction in electrostatic energy goes into mechanical work done by the capacitor pulling in the dielectric slab.</div>",
            "explanation": "If the battery had remained CONNECTED: V = V₀ (constant), Q = K·Q₀ (increases), and U = K·U₀ (increases).",
            "stepMarking": "[1 Mark] Charge constant | [1 Mark] Potential decreases by 1/K | [1 Mark] Energy decreases by 1/K"
        }
    ],
    "Current Electricity": [
        {
            "id": "phy-ch3-q2",
            "marks": 3,
            "type": "Derivation",
            "prob": "🔥 Repeated in CBSE 2023, 2020, 2018",
            "stem": "State Kirchhoff's rules. Using these rules, obtain the condition for balance in a Wheatstone bridge.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>1. Junction Rule:</strong> ∑ I = 0 at any node (conservation of charge).<br><strong>2. Loop Rule:</strong> ∑ ΔV = ∑ IR + ∑ E = 0 around any closed loop (conservation of energy).<br><br><strong>Wheatstone Balance:</strong> In bridge with resistors P, Q, R, S and galvanometer G:<br>At balance, galvanometer current I_g = 0 ⟹ V_B = V_D.<br>Applying loop rule to loop ABDA: -I₁P + I₂R = 0 ⟹ I₁P = I₂R ... (1)<br>Applying loop rule to loop BCDB: -I₁Q + I₂S = 0 ⟹ I₁Q = I₂S ... (2)<br>Dividing (1) by (2): <strong>P / Q = R / S</strong>.</div>",
            "explanation": "Always explicitly mention the conservation laws underlying each rule: Junction rule = Conservation of Charge; Loop rule = Conservation of Energy.",
            "stepMarking": "[1 Mark] Kirchhoff's 2 rules with conservation laws | [1 Mark] Application to loops ABDA & BCDB | [1 Mark] Final ratio P/Q = R/S"
        }
    ],
    "Moving Charges and Magnetism": [
        {
            "id": "phy-ch4-q2",
            "marks": 5,
            "type": "Derivation",
            "prob": "🔥 Repeated in CBSE 2024, 2022, 2019",
            "stem": "(a) State the principle of a Moving Coil Galvanometer. (b) Explain how it can be converted into: (i) an Ammeter of range 0 to I, (ii) a Voltmeter of range 0 to V. Derive the expressions for the required resistance in each case.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>(a) Principle:</strong> A current-carrying coil placed in a uniform radial magnetic field experiences a deflecting torque τ = NIAB. Deflection θ ∝ I (linear scale due to cylindrical soft iron core providing radial field).<br><br><strong>(b) Conversions:</strong><br>• <strong>(i) To Ammeter (Range 0 - I):</strong> Connect a small resistance (shunt S) in <strong>parallel</strong> with galvanometer coil.<br>Potential across G = Potential across S ⟹ I_g · G = (I - I_g) · S ⟹ <strong>S = (I_g · G) / (I - I_g)</strong>.<br>• <strong>(ii) To Voltmeter (Range 0 - V):</strong> Connect a high resistance R in <strong>series</strong> with galvanometer coil.<br>V = I_g (G + R) ⟹ G + R = V / I_g ⟹ <strong>R = (V / I_g) - G</strong>.</div>",
            "explanation": "Radial magnetic field makes angle between area vector and field lines 90° at all times (cos θ = 1), giving a linear relation between current and deflection.",
            "stepMarking": "[1.5 Marks] Principle and torque equation | [1.75 Marks] Ammeter shunt formula | [1.75 Marks] Voltmeter series resistance formula"
        }
    ],
    "Magnetism and Matter": [
        {
            "id": "phy-ch5-q1",
            "marks": 3,
            "type": "Comparative Analysis",
            "prob": "🔥 Repeated in CBSE 2023, 2020, 2018",
            "stem": "Distinguish between diamagnetic, paramagnetic, and ferromagnetic materials in terms of: (i) Magnetic susceptibility χ, (ii) Relative permeability μ_r, (iii) Effect of temperature on magnetic properties.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><table class='w-full text-xs border border-slate-300'><thead><tr class='bg-slate-100'><th class='p-1 border'>Property</th><th class='p-1 border'>Diamagnetic</th><th class='p-1 border'>Paramagnetic</th><th class='p-1 border'>Ferromagnetic</th></tr></thead><tbody><tr><td class='p-1 border font-bold'>Susceptibility χ</td><td class='p-1 border'>Small & negative (-1 ≤ χ < 0)</td><td class='p-1 border'>Small & positive (0 < χ < ε)</td><td class='p-1 border'>Very large & positive (χ >> 1000)</td></tr><tr><td class='p-1 border font-bold'>Relative Permeability μ_r</td><td class='p-1 border'>0 ≤ μ_r < 1</td><td class='p-1 border'>μ_r slightly > 1</td><td class='p-1 border'>μ_r >> 1000</td></tr><tr><td class='p-1 border font-bold'>Temperature Effect</td><td class='p-1 border'>Independent of temperature</td><td class='p-1 border'>Inversely proportional (χ ∝ 1/T, Curie's Law)</td><td class='p-1 border'>Above Curie temp T_c becomes paramagnetic (χ ∝ 1/(T - T_c))</td></tr></tbody></table></div>",
            "explanation": "Remember standard examples: Bismuth/Water/Copper for Diamagnetic; Aluminum/Oxygen for Paramagnetic; Iron/Cobalt/Nickel for Ferromagnetic.",
            "stepMarking": "[1 Mark] Susceptibility comparison | [1 Mark] Relative permeability comparison | [1 Mark] Curie's law and temperature effect"
        }
    ],
    "Electromagnetic Induction": [
        {
            "id": "phy-ch6-q1",
            "marks": 3,
            "type": "Derivation",
            "prob": "🔥 Repeated in CBSE 2023, 2022, 2019",
            "stem": "Define mutual inductance. Derive an expression for the mutual inductance of two long coaxial solenoids of same length l, radii r₁ and r₂ (r₁ < r₂), and turns n₁ and n₂ per unit length.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>Definition:</strong> Mutual inductance is the magnetic flux linked with secondary coil when unit current flows through primary: Φ₂ = M I₁ ⟹ M = Φ₂ / I₁.<br><br><strong>Derivation:</strong><br>Let current I₁ pass through inner solenoid S₁ (radius r₁). Magnetic field inside S₁ is B₁ = μ₀ n₁ I₁.<br>Magnetic flux linked with outer solenoid S₂ over length l (effective area is smaller cross-section πr₁²):<br>Φ₂ = (Total turns in S₂) × (B₁ · Area) = (n₂ · l) × (μ₀ n₁ I₁ · π r₁²).<br>Φ₂ = μ₀ n₁ n₂ π r₁² l · I₁.<br>Since Φ₂ = M I₁: <strong>M = μ₀ n₁ n₂ π r₁² l</strong>.</div>",
            "explanation": "Note that mutual inductance M₁₂ = M₂₁ (reciprocity theorem). The area taken is always the area of the smaller solenoid.",
            "stepMarking": "[1 Mark] Definition of mutual inductance | [1 Mark] Magnetic field and flux setup | [1 Mark] Final boxed formula"
        }
    ],
    "Alternating Current": [
        {
            "id": "phy-ch7-q2",
            "marks": 5,
            "type": "Derivation & Working",
            "prob": "🔥 Repeated in CBSE 2024, 2020, 2017",
            "stem": "(a) State the principle of a transformer. (b) Derive the relationship between primary and secondary voltages in terms of number of turns. (c) Mention four major causes of energy loss in a practical transformer and how each is minimized.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>(a) Principle:</strong> Works on Mutual Induction—an alternating voltage in primary induces an alternating EMF in secondary.<br><br><strong>(b) Voltage Ratio:</strong><br>e_p = -N_p (dΦ/dt), e_s = -N_s (dΦ/dt) ⟹ <strong>V_s / V_p = N_s / N_p = k</strong> (transformation ratio).<br>For ideal transformer (Input Power = Output Power): V_p I_p = V_s I_s ⟹ <strong>I_s / I_p = N_p / N_s</strong>.<br><br><strong>(c) Energy Losses & Minimization:</strong><br>1. <strong>Copper Loss (Joule heating):</strong> Minimized by using thick copper wire in high-current winding.<br>2. <strong>Iron / Eddy Current Loss:</strong> Minimized by using laminated core made of insulated soft iron sheets.<br>3. <strong>Hysteresis Loss:</strong> Minimized by choosing magnetic material of low retentivity and low coercivity (soft iron).<br>4. <strong>Flux Leakage:</strong> Minimized by winding primary and secondary coils coaxially one over the other.</div>",
            "explanation": "A step-up transformer increases voltage while reducing current proportionately, conserving energy (Power = V × I).",
            "stepMarking": "[1 Mark] Principle | [1.5 Marks] Voltage and current derivation | [2.5 Marks] 4 energy losses and remedies"
        }
    ],
    "Ray Optics and Optical Instruments": [
        {
            "id": "phy-ch8-q1",
            "marks": 5,
            "type": "Derivation",
            "prob": "🔥 Repeated in CBSE 2024, 2023, 2020",
            "stem": "Derive the Lens Maker's Formula 1/f = (μ - 1)(1/R₁ - 1/R₂) for a double convex lens of refractive index μ placed in air. State the sign conventions used.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'>Consider refraction at two spherical surfaces of radii R₁ and R₂.<br><strong>1. Refraction at first surface (radius R₁):</strong><br>μ/v' - 1/u = (μ - 1) / R₁ ... (1)<br><br><strong>2. Refraction at second surface (radius R₂):</strong><br>Here I' acts as virtual object in denser medium forming final image at v in rarer medium:<br>1/v - μ/v' = (1 - μ) / R₂ = - (μ - 1) / R₂ ... (2)<br><br><strong>Adding equations (1) and (2):</strong><br>1/v - 1/u = (μ - 1) [ 1/R₁ - 1/R₂ ] ... (3)<br><br>When object is at infinity (u = ∞), image forms at focus (v = f). Substituting in (3):<br><strong>1/f = (μ - 1) [ 1/R₁ - 1/R₂ ]</strong>.</div>",
            "explanation": "Sign conventions: For biconvex lens, R₁ is positive (+R₁) and R₂ is negative (-R₂), making f always positive.",
            "stepMarking": "[1.5 Marks] Surface 1 refraction equation | [1.5 Marks] Surface 2 refraction equation | [2 Marks] Addition and final boxed formula"
        },
        {
            "id": "phy-ch8-q2",
            "marks": 5,
            "type": "Ray Diagram & Derivation",
            "prob": "🔥 Repeated in CBSE 2023, 2022, 2019",
            "stem": "Draw a labeled ray diagram of an Astronomical Telescope in normal adjustment (final image at infinity). Derive the expression for its magnifying power and tube length.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>Ray Diagram:</strong> Parallel rays from distant object fall on objective lens (large focal length f_o and aperture). Objective forms real, inverted image A'B' at its focus f_o. Eye-piece (small f_e) is adjusted so that A'B' lies exactly at the focus f_e of eye-piece, yielding parallel rays emerging to the eye.<br><br><strong>Magnifying Power (m):</strong><br>m = β / α ≈ tan β / tan α.<br>From diagram: tan α = A'B' / f_o  and  tan β = - A'B' / f_e.<br>Therefore: <strong>m = - f_o / f_e</strong> (negative indicates inverted image).<br><br><strong>Tube Length:</strong> Distance between objective and eye-piece: <strong>L = f_o + f_e</strong>.</div>",
            "explanation": "CBSE examiners insist on arrowheads on rays! Make sure rays show parallel incident beam, focal crossover, and parallel emergent beam.",
            "stepMarking": "[2 Marks] Accurate ray diagram with arrows | [2 Marks] Magnifying power derivation | [1 Mark] Tube length formula"
        }
    ],
    "Wave Optics": [
        {
            "id": "phy-ch9-q1",
            "marks": 5,
            "type": "Derivation",
            "prob": "🔥 Repeated in CBSE 2023, 2022, 2020",
            "stem": "Define a wavefront. Using Huygens' principle, verify Snell's Law of Refraction for a plane wave propagating from a rarer to a denser medium.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>Wavefront:</strong> The continuous locus of all points vibrating in the same phase.<br><br><strong>Refraction Derivation:</strong><br>Let AB be incident plane wavefront making angle i with surface, and v₁, v₂ be wave speeds in medium 1 and 2.<br>In time τ, point B travels distance BC = v₁ τ to hit the interface.<br>Secondary wavelet from point A grows into sphere of radius v₂ τ in medium 2. Tangent plane CD gives refracted wavefront.<br>From right triangle ABC: sin i = BC / AC = (v₁ τ) / AC.<br>From right triangle ADC: sin r = AD / AC = (v₂ τ) / AC.<br>Dividing: sin i / sin r = (v₁ τ) / (v₂ τ) = v₁ / v₂ = <strong>μ</strong> (Snell's Law).</div>",
            "explanation": "Because v₁ > v₂, angle of refraction r < i, proving wave bends towards the normal in denser medium.",
            "stepMarking": "[1 Mark] Wavefront definition | [2 Marks] Huygens wavefront construction | [2 Marks] sin i / sin r = v₁/v₂ = μ derivation"
        },
        {
            "id": "phy-ch9-q2",
            "marks": 5,
            "type": "Derivation",
            "prob": "🔥 Repeated in CBSE 2024, 2020, 2018",
            "stem": "In Young's double slit experiment, derive the condition for constructive and destructive interference, and show that fringe width β = λD/d is the same for dark and bright fringes.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'>Path difference between waves from slits S₁ and S₂ reaching point P at distance x from center:<br>Δx = S₂P - S₁P = (x · d) / D.<br><br>• <strong>Bright Fringe (Constructive):</strong> Δx = nλ ⟹ x_n = (n λ D) / d  (n = 0, 1, 2, ...)<br>Fringe width β_bright = x_n - x_{n-1} = <strong>(λ D) / d</strong>.<br>• <strong>Dark Fringe (Destructive):</strong> Δx = (2n - 1) λ / 2 ⟹ x'_n = (2n - 1)(λ D) / (2d)<br>Fringe width β_dark = x'_n - x'_{n-1} = <strong>(λ D) / d</strong>.<br>Thus, all fringes (bright and dark) are of equal width <strong>β = λD / d</strong>.</div>",
            "explanation": "If the apparatus is immersed in water (refractive index μ), fringe width decreases to β' = β / μ because wavelength shortens to λ/μ.",
            "stepMarking": "[1.5 Marks] Path difference formula Δx = xd/D | [1.5 Marks] Maxima & Minima positions | [2 Marks] Equal fringe width proof"
        }
    ],
    "Dual Nature of Radiation and Matter": [
        {
            "id": "phy-ch10-q1",
            "marks": 3,
            "type": "Theory & Equation",
            "prob": "🔥 Repeated in CBSE 2023, 2022, 2020",
            "stem": "Write Einstein's photoelectric equation. State clearly how this equation accounts for: (i) existence of threshold frequency, (ii) instantaneous emission of photoelectrons.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>Equation:</strong> <code>hν = Φ₀ + K_max = hν₀ + (1/2) m v_max²</code> ⟹ <strong>K_max = h(ν - ν₀)</strong>.<br><br><strong>Explanation:</strong><br>1. <strong>Threshold Frequency (ν₀):</strong> Since kinetic energy K_max cannot be negative, photoelectric emission is only possible if hν ≥ Φ₀, meaning ν ≥ ν₀. Radiation with frequency below ν₀ cannot eject electrons regardless of intensity.<br>2. <strong>Instantaneous Emission:</strong> Light consists of discrete photons. The collision between a photon and an electron is an elastic 1-to-1 event transferring entire photon energy in ~10⁻⁹ seconds, without time lag.</div>",
            "explanation": "Classical wave theory failed because it predicted energy would distribute across wave fronts requiring hours to accumulate energy.",
            "stepMarking": "[1 Mark] Einstein's equation | [1 Mark] Threshold frequency proof | [1 Mark] 1-to-1 photon collision instantaneous mechanism"
        }
    ],
    "Atoms and Nuclei": [
        {
            "id": "phy-ch11-q1",
            "marks": 5,
            "type": "Derivation",
            "prob": "🔥 Repeated in CBSE 2023, 2020, 2018",
            "stem": "Using Bohr's postulates of hydrogen atom, derive the expression for: (a) Radius of nth orbit r_n, (b) Total energy of electron in nth orbit E_n. Show that E_n ∝ 1/n².",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>Postulates:</strong><br>1. m v² / r = (1 / 4πε₀) · (e² / r²)  ⟹  m v² r = e² / (4πε₀) ... (1)<br>2. Quantization: m v r = (n h) / (2π) ⟹ v = (n h) / (2π m r) ... (2)<br><br><strong>(a) Radius:</strong> Substituting (2) in (1):<br><strong>r_n = (ε₀ h² n²) / (π m e²) ∝ n²</strong>  (for n=1, r₁ = 0.529 Å).<br><br><strong>(b) Energy:</strong><br>Kinetic Energy: K = (1/2) m v² = e² / (8πε₀ r).<br>Potential Energy: U = - e² / (4πε₀ r).<br>Total Energy: E = K + U = - e² / (8πε₀ r).<br>Substituting r_n: <strong>E_n = - (m e⁴) / (8 ε₀² h² n²) = - 13.6 / n² eV</strong>.</div>",
            "explanation": "Negative sign signifies that the electron is bound to the nucleus. As n → ∞, E → 0 (unbound ionized state).",
            "stepMarking": "[1 Mark] Bohr's 2 postulates | [2 Marks] Radius derivation r ∝ n² | [2 Marks] Total energy derivation E = -13.6/n² eV"
        }
    ],
    "Semiconductor Electronics": [
        {
            "id": "phy-ch12-q1",
            "marks": 5,
            "type": "Circuit & Working",
            "prob": "🔥 Repeated in CBSE 2024, 2023, 2020",
            "stem": "Draw a labeled circuit diagram of a full-wave rectifier using two p-n junction diodes. Explain its working principle and draw the input and output waveforms across the load resistor.",
            "diagram": "",
            "modelAnswer": "<div class='space-y-2'><strong>Circuit & Principle:</strong> Employs a center-tapped transformer and 2 diodes D₁ and D₂. Current flows through load R_L in the same direction in both half cycles.<br><br><strong>Working:</strong><br>• <strong>Positive Half Cycle:</strong> Terminal A is positive and B is negative with respect to center tap C. Diode D₁ is forward biased (conducts) while D₂ is reverse biased (does not conduct). Current flows from A → D₁ → X → R_L → Y → C.<br>• <strong>Negative Half Cycle:</strong> Terminal A is negative and B is positive. Diode D₁ is reverse biased while D₂ is forward biased (conducts). Current flows from B → D₂ → X → R_L → Y → C.<br>• Since current through R_L flows in the same direction (X to Y) during both half cycles, pulsating DC output is obtained.<br>Output frequency is <strong>2 × input frequency (100 Hz for 50 Hz input)</strong>.</div>",
            "explanation": "State output frequency explicitly: full-wave rectifier output frequency = 2f_in. A capacitor filter smoothes pulsating DC into steady DC.",
            "stepMarking": "[1.5 Marks] Center-tapped circuit diagram | [2 Marks] Operation in positive & negative half-cycles | [1.5 Marks] Input & Output waveforms"
        }
    ]
}

print(f"Prepared questions for {len(questions_data)} physics chapters.")
