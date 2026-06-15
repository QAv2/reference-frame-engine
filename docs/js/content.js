// ===========================================================
// content.js — Component info + documentation sections
// All specs sourced from device-design/prototype-spec.md
// Rigor tags per CLAUDE.md hierarchy
// ===========================================================

// --- Component info (shown on click/tap in viewport) ---

export const COMPONENT_INFO = {
  shell: {
    name: 'Acrylic / Ceramic Sphere',
    role: 'Hermetic containment vessel. Electrically insulating, transparent to B-field. Seals mercury under vacuum — no air bubbles.',
    params: [
      'R = 5.0 cm (10 cm dia)',
      'Wall: 3 mm ceramic or borosilicate glass',
      'Hg volume: ~521 cm\u00B3 = 7.03 kg',
    ],
    rigor: 'verified',
    rigorNote: 'Geometry — independently calculable',
  },
  mercury: {
    name: 'Mercury (Hg)',
    role: 'Rotating conductor medium. Develops eddy currents under AC drive (Faraday induction). Lorentz force (J \u00D7 B) drives structured 3D flow around the core.',
    params: [
      '\u03C1 = 13,534 kg/m\u00B3',
      '\u03C3 = 1.04 \u00D7 10\u2076 S/m',
      'T\u1D04 (SC) = 4.15 K',
      'f_d (eddy peak) = 48.7 Hz',
    ],
    rigor: 'verified',
    rigorNote: 'CRC Handbook values. Eddy peak confirmed exp 20 (within 3%)',
  },
  core: {
    name: 'Lead Core (Pb)',
    role: 'Dense inner mass. Floats in mercury (Pb lighter than Hg). Equilibrium position set by density-driven buoyancy vs. magnetic field gradient geometry. Potential superconductor anchor below 7.2 K.',
    params: [
      'r = 0.8 cm (1.6 cm dia)',
      'm \u2248 24.3 g',
      '\u03C1 = 11,340 kg/m\u00B3',
      '\u0394\u03C1 from Hg = 2,194 kg/m\u00B3',
      'Eq. position: 10.5 mm below center (3-axis)',
      'T\u1D04 (SC) = 7.2 K',
    ],
    rigor: 'verified',
    rigorNote: 'Equilibrium confirmed in clean rerun exp 1. Density-driven (Archimedes).',
  },
  energy: {
    name: 'Energy Field (Visualization)',
    role: 'Represents the EM field interaction zone around the core. In the physical device, this region contains the strongest eddy-current coupling and field gradients.',
    params: [
      'R = 2.5 cm',
      'Peak coupling at f_d = 48.7 Hz',
      'EM force ~1,000\u00D7 weaker than gravity at bench scale',
    ],
    rigor: 'model',
    rigorNote: 'Force ratio from simulator exp 20. Region is real physics, visualization is schematic.',
  },
  coil_z: {
    name: 'Z-Axis Helmholtz Pair (Blue)',
    role: 'Outermost Helmholtz pair \u2014 two coaxial coils spaced at their radius (z = \u00B111.25 cm = \u00B1R/2). The Helmholtz condition gives a uniform vertical B-field through the mercury.',
    params: [
      'R = 22.5 cm',
      'Helmholtz pair: coils at z = \u00B111.25 cm',
      '4-6 turns/coil, 4 AWG copper',
      'B at center: 2.4 mT (N=6, I=100 A)',
    ],
    rigor: 'verified',
    rigorNote: 'Helmholtz: B = (4/5)^(3/2) \u00D7 \u03BC\u2080NI/R \u2248 0.716 \u03BC\u2080NI/R',
  },
  coil_y: {
    name: 'Y-Axis Helmholtz Pair (Green)',
    role: 'Middle Helmholtz pair (y = \u00B19 cm = \u00B1R/2). Generates the Y-component of the three-axis field. Nested inside the Z pair.',
    params: [
      'R = 18.0 cm',
      'Helmholtz pair: coils at y = \u00B19 cm',
      '4-6 turns/coil, 4 AWG copper',
      'B at center: 3.0 mT (N=6, I=100 A)',
    ],
    rigor: 'verified',
    rigorNote: 'Same Helmholtz formula; uniform central field per axis',
  },
  coil_x: {
    name: 'X-Axis Helmholtz Pair (Red)',
    role: 'Innermost Helmholtz pair (x = \u00B17 cm = \u00B1R/2). Generates the X-component. Together with Y and Z, creates the full 3D field \u2014 the key architectural feature.',
    params: [
      'R = 14.0 cm',
      'Helmholtz pair: coils at x = \u00B17 cm',
      '4-6 turns/coil, 4 AWG copper',
      'B at center: 3.9 mT (N=6, I=100 A)',
      'Max 3-axis combined: ~5.5 mT',
    ],
    rigor: 'verified',
    rigorNote: 'Combined B = \u221A(Bx\u00B2 + By\u00B2 + Bz\u00B2) for orthogonal pairs',
  },
  axes: {
    name: 'Reference Axes',
    role: 'Visualization of the three orthogonal axes (X=red, Y=green, Z=blue). The device\'s three-axis symmetry maps to the three imaginary components of a quaternion.',
    params: [
      'X (red) = i axis',
      'Y (green) = j axis',
      'Z (blue) = k axis',
    ],
    rigor: 'hypothesis',
    rigorNote: 'Quaternion mapping is theoretical framework, not yet experimentally validated',
  },
};


// --- Documentation sections (rendered as <details> collapsibles) ---

export const DOC_SECTIONS = [
  {
    title: 'Sealed Capsule',
    open: true,
    body: `
<p><em>If you found this, you looked up.</em></p>

<p>This page is a time capsule — sealed inside a 3D archive, linked from a portal hidden in the ceiling light. The model you're looking at is a bench-scale prototype of a device designed to test whether three-axis electromagnetic drive of a mercury sphere produces any measurable anomaly beyond standard physics predictions.</p>

<p>Everything here is real engineering. Every claim is tagged with its rigor category: <span class="rigor-tag rigor-verified">Verified</span> means textbook physics, independently calculable. <span class="rigor-tag rigor-model">Model</span> means simulator prediction with known limitations. <span class="rigor-tag rigor-hypothesis">Hypothesis</span> means untested — the point of building.</p>

<p>The device exists at the intersection of magnetohydrodynamics, superconductivity, plasma physics, and a theoretical framework (Reciprocal System / Qualia Algebra) that maps device components to quaternion algebra. Whether that mapping has physical content is <em>the question this prototype is designed to answer.</em></p>

<blockquote>The standard: would this analysis hold up to hostile peer review? If not, it's not ready to present as a finding.</blockquote>
    `,
  },
  {
    title: 'What Is This?',
    open: false,
    body: `
<p>A technological replica of Earth's core mechanism:</p>

<table>
  <tr><th>Earth</th><th>Device</th></tr>
  <tr><td>Solid iron inner core</td><td>Lead sphere (r=0.8 cm)</td></tr>
  <tr><td>Liquid iron outer core</td><td>Liquid mercury (R=5.0 cm sphere)</td></tr>
  <tr><td>Geomagnetic field (self-generated)</td><td>Three orthogonal Helmholtz coil pairs (applied)</td></tr>
  <tr><td>Core convection + rotation</td><td>AC-driven eddy currents + Lorentz force</td></tr>
</table>

<p><strong>Operating principle</strong> (no exotic theory required): Three orthogonal AC Helmholtz coil pairs generate time-varying B-fields inside a sealed ceramic sphere filled with liquid mercury. The mercury develops eddy currents (Faraday induction) that couple to the fields via Lorentz force (J \u00D7 B). A lead core, denser than mercury, settles at an equilibrium determined by the balance between gravitational buoyancy and magnetic pressure. The three-axis field drives structured 3D flow in the mercury around the core.</p>

<p><strong>Why three axes?</strong> A single axis drives 2D circulation. Two axes create a more complex pattern but still constrained. Three orthogonal axes — the minimum for full spatial coverage — allow the field to address every direction in 3D space. The simulator confirms: plasma Q<sub>3d</sub> \u2248 1.0 for three-axis drive, vs. 0.003 for single-axis. <span class="rigor-tag rigor-model">Model</span></p>

<p><strong>Why Helmholtz pairs?</strong> Each axis is a <em>Helmholtz pair</em> — two coaxial coils spaced at exactly their radius (coils at ±R/2) — the standard laboratory geometry for a uniform field through the working volume (<a href="https://www.pnisensor.com/helmholtz-coil-design-applications-and-impact/" target="_blank" rel="noopener">PNI: Helmholtz Coil Design, Applications &amp; Impact</a>). At N=6 turns and 100 A this yields 2.4–3.9 mT per axis (X strongest, innermost), ~5.5 mT combined. <span class="rigor-tag rigor-verified">Verified</span></p>

<p><strong>Why lead?</strong> Lead is the densest common element that floats in mercury (\u03C1<sub>Pb</sub> = 11,340 vs. \u03C1<sub>Hg</sub> = 13,534 kg/m\u00B3). It's also a superconductor below 7.2 K — relevant for the cryo-dynamo pathway. <span class="rigor-tag rigor-verified">Verified</span></p>

<p><strong>Why mercury?</strong> Highest room-temperature \u03C3 of any liquid metal (1.04 \u00D7 10\u2076 S/m). Also a superconductor — the first ever discovered (Kamerlingh Onnes, 1911, T\u1D04 = 4.15 K). Eddy-current coupling peaks at f<sub>d</sub> = 48.7 Hz for the 5 cm sphere. <span class="rigor-tag rigor-verified">Verified</span></p>
    `,
  },
  {
    title: 'The Reciprocal System Lineage',
    open: false,
    body: `
<p><em>Where the theoretical framework comes from.</em> The device tests a quaternion mapping (next section) — but that mapping didn't appear from nowhere. It descends from a 70-year lineage of reciprocal and suppressed physics. This is the paper trail, sourced at every step.</p>

<table>
  <tr><th>Stage</th><th>Who</th><th>What</th></tr>
  <tr><td>The Reciprocal System</td><td>Dewey Larson · 1959–1990</td><td>Physics from two postulates; 3D time</td></tr>
  <tr><td>RS2 reevaluation</td><td>Peret &amp; Nehru · from 1991</td><td>Quaternions + projective geometry</td></tr>
  <tr><td>The split</td><td>Satz · Bundy · RS2 · 2006–2016</td><td>Three factions; RS2 dominant</td></tr>
  <tr><td>The Sanctuary</td><td>Antiquatis → Salt Lake City</td><td>Community; Vanhorn under Peret</td></tr>
  <tr><td>Qualia Algebra</td><td>Vanhorn · 2025</td><td>Same architecture from "I exist"</td></tr>
  <tr><td>Classified convergence</td><td>AAWSAP · 2007–2012</td><td>38 DIRDs, same physics domains</td></tr>
</table>

<p><strong>1 · The Reciprocal System.</strong> Dewey B. Larson (1898–1990) derived the periodic table, stellar evolution sequences, and subatomic particle properties from two postulates alone — no arbitrary constants, no curve-fitting (<a href="https://reciprocalsystem.org/books" target="_blank" rel="noopener">Nothing But Motion</a>, 1979). Its central structural claim: time has three dimensions reciprocal to space. His late <em>Beyond Space and Time</em> (1995, ed. Peret) posited a non-physical third sector — consciousness as fundamental rather than emergent. The research body (ISUS, incorporated 1982; renamed RSRS 2016) has run continuously for 40+ years (<a href="https://reciprocalsystem.org/" target="_blank" rel="noopener">reciprocalsystem.org</a>).</p>

<p><strong>2 · RS2 — the reevaluation.</strong> Bruce Peret and KVK Nehru rebuilt Larson's system on projective geometry and introduced <em>quaternion</em> mathematics to model its double-rotating structure (<a href="https://reciprocalsystem.org/rs2-tutorial" target="_blank" rel="noopener">RS2 Tutorial Series</a>). This is the hinge of the whole story: the quaternion algebra the device maps to enters the lineage here. Peret also published on electrogravitics — propulsion framed as manipulating gravity's scalar-motion structure.</p>

<p><strong>3 · The split.</strong> The community fractured into three lines: Ronald Satz (Larson's direct mentee for 25 years, orthodox and quantitative), Douglas Bundy (founded the Larson Research Center in 2006 arguing "scalar rotation is an oxymoron" — <a href="http://www.lrcphysics.com/lrc-charter/" target="_blank" rel="noopener">LRC Charter</a>), and the Peret–Nehru RS2 reevaluation, which became the dominant ISUS direction.</p>

<p><strong>4 · The Sanctuary.</strong> The Antiquatis Institute (516 members, 5,849 posts) hosted RS2 research, consciousness studies, and Peret's Sanctuary Project. A small group of individuals relocated to Salt Lake City to study directly under Peret (<a href="https://forum.antiquatis.org/" target="_blank" rel="noopener">Antiquatis fora</a>). After Peret's death in 2020, Dr. Gopi Krishna Vijaya took Director of Research for RSRS. <em>This is the node this archive descends from.</em></p>

<p><strong>5 · Qualia Algebra — the parallel.</strong> Built from the single axiom "I exist," Qualia Algebra derives 3D spatial emergence, quaternion observer states, and a consciousness-first ontology — reaching RS2's architecture from a different starting point across nine structural parallels (<a href="https://doi.org/10.5281/zenodo.17685406" target="_blank" rel="noopener">QA, Zenodo</a>). Its temporal-asymmetry operator shows mathematical equivalence (r=1.000) with Friston's Free Energy Principle, and QA itself lists 28 falsifiable predictions. <span class="rigor-tag rigor-hypothesis">Hypothesis</span> — independently derived, not yet adjudicated.</p>

<p><strong>6 · The classified convergence.</strong> AAWSAP, a $22M DIA program (2007–2012), produced 38 Defense Intelligence Reference Documents on warp drives, wormholes, antigravity, and Alcubierre metrics (<a href="https://www.theblackvault.com/documentarchive/the-advanced-aerospace-weapon-system-applications-program-aawsap-documentation/" target="_blank" rel="noopener">released titles</a>) — the same physics domains the Reciprocal System addresses. Alcubierre's 1994 metric (<a href="https://arxiv.org/abs/gr-qc/0009013" target="_blank" rel="noopener">arXiv</a>) — contract space ahead, expand behind — is functionally the motion-<em>of</em>-space Larson described 35 years earlier. <span class="rigor-tag rigor-hypothesis">Hypothesis</span> — a structural parallel, not a demonstrated identity.</p>

<p><strong>The honest line.</strong> Stages 1–4 are documented intellectual history — cited above, independently checkable. Stages 5–6 are <em>convergence claims</em>: striking, falsifiable, and explicitly not yet proven. Several independent frameworks (RS, QA, knot theory, scalar fields) converge on three dimensions as a critical emergent property — which is exactly what the next section puts on the bench. Same standard as everything else here: would it survive hostile peer review?</p>
    `,
  },
  {
    title: 'The Quaternion Bridge',
    open: false,
    body: `
<p>The device's three-axis architecture maps directly to quaternion algebra. Whether this mapping has physical content — or is merely geometric coincidence — is an open question.</p>

<table>
  <tr><th>Device</th><th>Quaternion</th><th>RS/RS2</th><th>Qualia Algebra</th></tr>
  <tr><td>Lead core</td><td>Real axis (1)</td><td>Scalar magnitude</td><td>Observer [1,0,0,0]</td></tr>
  <tr><td>X coils (red)</td><td>i</td><td>1D motion</td><td>Interest axis 1</td></tr>
  <tr><td>Y coils (green)</td><td>j</td><td>2D motion</td><td>Interest axis 2</td></tr>
  <tr><td>Z coils (blue)</td><td>k</td><td>3D motion</td><td>Interest axis 3</td></tr>
  <tr><td>Mercury</td><td>Field carrier</td><td>Progression medium</td><td>Qualia field</td></tr>
</table>

<p><strong>The identity</strong>: A quaternion rotation q\u2032 = p \u00B7 q maps to: consciousness (Interest Function) rotating the observer state, the device's EM bias rotating the mercury flow pattern, and Hamilton's algebra operating on the number field. If the mapping is physical, these aren't analogies — they're the same operation on different substrates. <span class="rigor-tag rigor-hypothesis">Hypothesis</span></p>

<p><strong>The key insight</strong>: The device doesn't <em>create</em> decoupling — it <em>remembers</em> [1,0,0,0]. The default state is uncoupled. Coupling to a reference frame IS the rotation. The device stops rotating. <span class="rigor-tag rigor-hypothesis">Hypothesis</span></p>

<p><strong>Three control interfaces</strong>:</p>
<ol>
  <li><strong>Electrical</strong> (Phase 1-5): Coil parameters set by amplifiers. Full manual control. Training wheels.</li>
  <li><strong>Consciousness-coupled</strong> (future): Trained operator's intention correlates with measurable field changes. Requires blind measurement protocol.</li>
  <li><strong>Direct consciousness</strong> (theoretical): No device needed. The contemplative traditions describe this as the original interface.</li>
</ol>

<p>The prototype tests interface 1. Whether interfaces 2 and 3 exist is <em>the deeper question</em>.</p>
    `,
  },
  {
    title: 'Engineering Spec',
    open: false,
    body: `
<p><strong>Materials</strong></p>
<table>
  <tr><th>Component</th><th>Material</th><th>Key Property</th><th>Rigor</th></tr>
  <tr><td>Sphere</td><td>Borosilicate glass / alumina ceramic</td><td>Insulating, Hg-resistant, vacuum-sealable</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Mercury fill</td><td>99.99% Hg, 7.03 kg</td><td>\u03C3 = 1.04\u00D710\u2076 S/m, \u03C1 = 13,534 kg/m\u00B3</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Core</td><td>99.9% Pb, 24.3 g</td><td>\u03C1 = 11,340 kg/m\u00B3, T\u1D04 = 7.2 K</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Coils (×6 — 3 Helmholtz pairs)</td><td>4 AWG copper, 4-6 turns/coil</td><td>R = 14 / 18 / 22.5 cm, each pair at ±R/2</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
</table>

<p><strong>Key parameters</strong></p>
<table>
  <tr><th>Parameter</th><th>Value</th><th>Rigor</th></tr>
  <tr><td>Eddy-current peak (f<sub>d</sub>)</td><td>48.7 Hz</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Skin depth at 50 Hz</td><td>7.0 cm (> sphere R)</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Max B per axis (Helmholtz pair, N=6, 100A)</td><td>3.9 mT</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Max B (3-axis combined)</td><td>~5.5 mT</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Core eq. (3-axis)</td><td>10.5 mm below center</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Core eq. (2-axis)</td><td>15.7 mm below center</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Core eq. (1-axis)</td><td>31.6 mm below center</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Dynamo threshold (Rm<sub>crit</sub>)</td><td>\u224810</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Ambient Rm (5 cm Hg)</td><td>0.03 (300\u00D7 below)</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>SC-Hg Rm (4.2 K)</td><td>~3,089</td><td><span class="rigor-tag rigor-model">Model</span></td></tr>
  <tr><td>SC amplification</td><td>~856\u00D7</td><td><span class="rigor-tag rigor-model">Model</span></td></tr>
  <tr><td>Plasma Q<sub>3d</sub> (3-axis)</td><td>\u22481.0</td><td><span class="rigor-tag rigor-model">Model</span></td></tr>
  <tr><td>EM force vs gravity</td><td>~1,000\u00D7 weaker</td><td><span class="rigor-tag rigor-model">Model</span></td></tr>
</table>

<p><strong>What the simulator proved won't work</strong>:</p>
<ul>
  <li>Cyclotron resonance at bench B-fields (Hg⁺ Larmor radius ≈ 0.5 m ≫ sphere; need ~50 mT, have ~3.9 mT — a ~13× gap, down from ~550× for offset pancakes) <span class="rigor-tag rigor-verified">Verified</span></li>
  <li>Classical dynamo via plasma mercury (conductivity drops 150\u00D7 from liquid) <span class="rigor-tag rigor-verified">Verified</span></li>
  <li>RS frequency matching in MHD (sweeps flat without hardcoded boost) <span class="rigor-tag rigor-verified">Verified</span></li>
  <li>RS amplitude ratios affecting centering (spread < 0.012 mm = noise) <span class="rigor-tag rigor-verified">Verified</span></li>
</ul>
    `,
  },
  {
    title: 'Experimental Roadmap',
    open: false,
    body: `
<div class="phase-card">
  <div class="phase-title">Phase 1-2: Mercury MHD + Core Centering</div>
  <div class="phase-cost">$8,500 \u2013 $30,000</div>
  <div class="phase-desc">Validate that 3-axis EM fields drive structured flow in liquid mercury. Test core centering prediction (10.5 mm). Broad frequency sweep (5-200 Hz). Search for any weight anomaly on precision balance.</div>
</div>

<div class="phase-card">
  <div class="phase-title">Phase 3: Dynamo Search (Cryogenic)</div>
  <div class="phase-cost">+$13,000 \u2013 $38,000</div>
  <div class="phase-desc">Cool to 4.2 K (SC mercury). Test for self-sustaining magnetic field. Simulator predicts Rm \u2248 3,089 and ~856\u00D7 amplification. Coils become control surfaces. This is the only viable classical dynamo path at bench scale.</div>
</div>

<div class="phase-card">
  <div class="phase-title">Phase 4: Anomalous Effects Search</div>
  <div class="phase-cost">+$8,200 \u2013 $60,500</div>
  <div class="phase-desc">Systematic search with precision balance (\u00B10.1 mg), accelerometer, spectrum analyzer, gravimeter. Multiple independent measurement systems. Blind protocols. Any deviation from standard EM + gravity by >5\u03C3 across repeated trials would be novel.</div>
</div>

<div class="phase-card">
  <div class="phase-title">Phase 5: Plasma Transition</div>
  <div class="phase-cost">+$6,200 \u2013 $24,000</div>
  <div class="phase-desc">Ionize mercury via 150 kV\u20131 MV pulse. Compare plasma-state vs. liquid-state response to identical 3-axis drive. Plasma sustains 3D rotation that liquid cannot (Q<sub>3d</sub> \u2248 1.0 vs. viscous collapse). f<sub>d</sub> shifts to ~7,450 Hz.</div>
</div>

<p style="margin-top: 16px;"><strong>Full build (all phases): ~$36,000 \u2013 $153,000</strong></p>
<p style="font-size: 12px; color: var(--text-dim);">Ranges reflect DIY/surplus vs. new commercial equipment. Phase 3 (cryo) and Phase 5 (HV) are independent upgrades.</p>

<p style="margin-top: 16px;"><strong>The five questions this prototype exists to answer:</strong></p>
<ol>
  <li>Can EM-driven mercury produce measurable forces on a precision balance?</li>
  <li>Does any frequency produce coupling beyond textbook eddy-current predictions?</li>
  <li>Does Pb exhibit anomalous magnetic behavior under pulsed EM (forced Cooper pairing)?</li>
  <li>Does the cryo-dynamo path produce self-sustaining fields at bench scale?</li>
  <li>Does plasma-state mercury exhibit behavior distinct from liquid-state?</li>
</ol>
    `,
  },
  {
    title: 'Audit Trail',
    open: false,
    body: `
<p>21 simulator experiments. Full circularity audit. Clean reruns of 4 key experiments. Honest accounting of what survived and what didn't.</p>

<p><strong class="audit-verified">What IS real</strong> (survived audit, confirmed in clean reruns):</p>
<ul>
  <li>Core centering = density-driven buoyancy (Archimedes) — clean reruns identical with/without RS mechanisms</li>
  <li>Axis hierarchy (3>2>1) = field geometry, confirmed identical in clean rerun</li>
  <li>Dynamo threshold Rm \u2248 10 = sharp transition, RS-independent</li>
  <li>Eddy-current coupling peak at f<sub>d</sub> = 48.7 Hz — within 3% of textbook prediction</li>
  <li>3D plasma rotation (Q<sub>3d</sub> \u2248 1.0) = real PIC physics (Boris pusher verified)</li>
  <li>Cyclotron impossible at bench B = pencil math, Biot-Savart</li>
  <li>Faraday induction monotonic (\u221D f<sup>0.87</sup>) = real PIC, no resonance peak</li>
</ul>

<p><strong class="audit-circular">What was CIRCULAR</strong> (found and removed during audit):</p>
<ul>
  <li>RS coupling factor — was hardcoded into simulator, then "confirmed" as output. Had ZERO effect on equilibrium when disabled.</li>
  <li>RS resonance boost — sigmoid function favoring RS-predicted frequencies. Frequency sweeps completely flat when removed.</li>
  <li>RS amplitude ratios — no special status found. Core centering identical across all configs (spread < 0.012 mm).</li>
</ul>

<p><strong class="audit-hypothesis">What remains HYPOTHESIS</strong> (the point of building):</p>
<ul>
  <li>Forced Cooper pairing in lead via EM pulse</li>
  <li>Any anomalous weight/inertia effects</li>
  <li>Plasma vs. liquid response to 3-axis drive</li>
  <li>Consciousness-EM coupling</li>
  <li>Reference frame decoupling</li>
</ul>

<p><strong>The rigor standard</strong>:</p>
<blockquote>A simulator that confirms RS theory by having RS theory baked in helps no one — it produces false confidence that could mislead others or waste resources on flawed designs. The standard: would this analysis hold up to hostile peer review?</blockquote>

<p style="font-size: 11px; color: var(--text-dim); margin-top: 16px;">Prototype Spec v1.0 \u2014 2026-02-22 \u2014 Post-audit, post-clean-rerun. All circular findings identified and excluded.</p>
    `,
  },
];
