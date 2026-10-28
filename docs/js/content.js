// ===========================================================
// content.js — Component info + documentation sections
// All specs sourced from device-design/prototype-spec.md,
// corrected 2026-10-14 after the October theory review
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
      'Hg volume: ~524 cm³ = 7.09 kg (no core)',
    ],
    rigor: 'verified',
    rigorNote: 'Geometry — independently calculable',
  },
  mercury: {
    name: 'Mercury (Hg)',
    role: 'Rotating conductor medium. Develops eddy currents under AC drive (Faraday induction). The Lorentz force (J × B) stirs it slowly when two pairs turn the field, and squeezes it without stirring when three pairs run at slightly different frequencies. Spun mechanically, its centre becomes the pressure minimum.',
    params: [
      '\u03C1 = 13,534 kg/m\u00B3',
      '\u03C3 = 1.04 \u00D7 10\u2076 S/m',
      'Freezes at −38.8 °C (superconducts only as a solid, Tᴄ = 4.15 K)',
      '48.7 Hz: skin depth 7.1 cm, field fills the sphere',
    ],
    rigor: 'verified',
    rigorNote: 'CRC Handbook values. 48.7 Hz is where ωμ₀σR² = 1 in a lumped model; the exact sphere’s stirring torque per B² peaks near 566 Hz.',
  },
  energy: {
    name: 'Centre Glow (schematic)',
    role: 'A visual marker, not a physical object. The applied field is uniform through the mercury to within 0.55 %, so there is no magnetic centre, and the induced currents are strongest near the wall. The centre matters for another reason: under the coils alone it is where the pressure is highest, and when the sphere is spun it sits on the line of lowest pressure, the spin axis.',
    params: [
      'Three equal pairs, slightly different frequencies: centre +0.09 Pa at 3 mT each, no flow',
      'Spun sphere: the axis reaches Hg vapour pressure near 16–20 rev/s (1 atm fill)',
      'EM forces at full current: about 1/3,000 of the mercury’s weight',
    ],
    rigor: 'verified',
    rigorNote: 'Exact conducting-sphere and rotating-fluid results (October 2026 review). The glow itself is schematic.',
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
<p>This page is a time capsule — sealed inside a 3D archive, linked from a portal hidden in the ceiling light. The model you're looking at is a bench-scale prototype of a device designed to test whether three-axis electromagnetic drive of a mercury sphere produces any measurable anomaly beyond standard physics predictions.</p>

<p>Everything here is real engineering. Every claim is tagged with its rigor category: <span class="rigor-tag rigor-verified">Verified</span> means textbook physics, independently calculable. <span class="rigor-tag rigor-model">Model</span> means simulator prediction with known limitations. <span class="rigor-tag rigor-hypothesis">Hypothesis</span> means untested — the point of building. <span class="rigor-tag rigor-circular">Circular</span> means an assumption that was reported as a result.</p>

<p class="correction-note"><strong>Corrected 14 October 2026.</strong> A re-run of the February simulator code found that four results this page called Verified were assumptions written into the code, or read back out of it. The lead core is retired, because lead dissolves in mercury, and the cryogenic dynamo phase is retired, because mercury only superconducts when it is frozen. The corrections are made in place and listed under <em>Corrections</em> at the end.</p>

<p class="continuation-note"><span class="rigor-tag rigor-superseded">Superseded</span> <strong>The device has moved on.</strong> In October 2026 the design was rebuilt from the physics up, as a coreless mercury sphere that is spun as well as driven, aimed at one result: a magnetic field that outlasts the coils that made it. That work continues in a new demonstration, <a href="mercury-core/" target="_blank" rel="noopener">The Mercury Core&nbsp;&rarr;</a> This capsule stays as it was sealed, with its corrections, as the record of where the device started.</p>

<p>The device exists at the intersection of magnetohydrodynamics, rotating fluids, plasma physics, and a theoretical framework (Reciprocal System / Qualia Algebra) that maps device components to quaternion algebra. Whether that mapping has physical content is <em>the question this prototype is designed to answer.</em></p>

<blockquote>The standard: would this analysis hold up to hostile peer review? If not, it's not ready to present as a finding.</blockquote>
    `,
  },
  {
    title: 'What Is This?',
    open: false,
    body: `
<p>A bench-scale model built on the template of Earth's core:</p>

<table>
  <tr><th>Earth</th><th>Device</th></tr>
  <tr><td>Solid iron inner core</td><td>No core in the first experiment. Spun, the sphere gathers anything lighter than mercury on its spin axis: an inside-out planet. A density-matched core is a later stage.</td></tr>
  <tr><td>Liquid iron outer core</td><td>Liquid mercury (R=5.0 cm sphere)</td></tr>
  <tr><td>Geomagnetic field (self-generated)</td><td>Three orthogonal Helmholtz coil pairs (applied)</td></tr>
  <tr><td>Core convection + rotation</td><td>AC-driven eddy currents + Lorentz force; mechanical spin</td></tr>
</table>

<p><strong>Operating principle</strong> (no exotic theory required): Three orthogonal AC Helmholtz coil pairs generate time-varying B-fields inside a sealed ceramic sphere filled with liquid mercury. The mercury develops eddy currents (Faraday induction) that couple to the fields via Lorentz force (J × B). At the design field these forces are small and exactly calculable. Two pairs driven in quadrature turn the field and stir the mercury about once every 7–12 seconds. Three pairs at equal strength and slightly different frequencies squeeze it toward the centre (+0.09 Pa at 3 mT each) and stir nothing. Spinning the sealed sphere mechanically does what the coils cannot: the spin axis becomes the line of lowest pressure and, with the sphere filled at 1 atm, reaches mercury's vapour pressure at roughly 16–20 revolutions per second, depending on how much the shell gives and on temperature. <span class="rigor-tag rigor-verified">Verified</span></p>

<p><strong>The coils-off test.</strong> Switch the coils off and every field in the mercury should be gone within about a millisecond (the sphere's magnetic decay time is 0.33 ms). A field still present 10 ms after the coil current reaches zero, above the mercury's own thermal noise, with the mercury at rest, the Earth's field cancelled and no iron or other magnetic material nearby, would be anomalous. <span class="rigor-tag rigor-hypothesis">Hypothesis</span> — the cleanest test in the program.</p>

<p><strong>What kind of device is this, really?</strong> Strip the exotic framing and the base is an <em>MHD machine</em> — established, decades-old engineering. Moving a conductive fluid through a magnetic field generates electricity: that's a magnetohydrodynamic (MHD) generator, Faraday's law, real enough to hold patents since the 1960s (<a href="https://patents.google.com/patent/US3430081A/en" target="_blank" rel="noopener">US Patent 3,430,081</a> — mercury-vapor MHD generation). Run the same physics in reverse — fields driving the fluid instead of the fluid making power — and it's an MHD pump/accelerator. This device is that second kind: three orthogonal fields drive liquid mercury (intrinsic conductivity ~1.04 × 10⁶ S/m, no ionization required). Everything else here — the reference-frame question, the quaternion mapping — is layered on top of that ordinary, verifiable base. <span class="rigor-tag rigor-verified">Verified</span></p>

<p><strong>Why three axes?</strong> The exact physics says three axes differ in kind, though not in the way the February simulator suggested. One axis pushes the mercury inward hardest around its equator and not at all along its own line; that lopsided push stirs it. Two axes are still lopsided and still stir. Three equal pairs at slightly different frequencies add up to a purely central squeeze that stirs nothing, because the directional parts cancel (Σ n̂n̂ = I). <span class="rigor-tag rigor-verified">Verified</span> In the plasma simulations, three-axis drive gave Q<sub>3d</sub> ≈ 1.0 against 0.003 for a single axis (single-particle physics, no collective effects). <span class="rigor-tag rigor-model">Model</span></p>

<p><strong>Why Helmholtz pairs?</strong> Each axis is a <em>Helmholtz pair</em> — two coaxial coils spaced at exactly their radius (coils at ±R/2) — the standard laboratory geometry for a uniform field through the working volume (<a href="https://www.pnisensor.com/helmholtz-coil-design-applications-and-impact/" target="_blank" rel="noopener">PNI: Helmholtz Coil Design, Applications &amp; Impact</a>). At N=6 turns and 100 A this yields 2.4–3.9 mT per axis (X strongest, innermost), ~5.5 mT combined. Inside the mercury the field is uniform to within 0.55 %, so there is no magnetic centre for anything to seek. <span class="rigor-tag rigor-verified">Verified</span></p>

<p><strong>Why no lead?</strong> The February design had a lead core. Lead dissolves in mercury (about 1.5–1.7 % by weight at room temperature), and a small lead ball in stirred mercury would be gone within hours. Lead is also lighter than mercury (11,340 vs. 13,534 kg/m³), so it floats. Metals that mercury does not dissolve include tungsten, tantalum, niobium, molybdenum, iron and stainless steel. <span class="rigor-tag rigor-verified">Verified</span></p>

<p><strong>Why mercury?</strong> It is the only metal that is liquid at room temperature without alloying, and it conducts well (1.04 × 10⁶ S/m). Gallium alloys such as Galinstan, and sodium–potassium (NaK), conduct about three times better. Mercury was also the first superconductor ever found (Kamerlingh Onnes, 1911, Tᴄ = 4.15 K), but only as a solid: it freezes at −38.8 °C, so superconducting mercury cannot flow. At 48.7 Hz the skin depth is 7.1 cm, so the field fills the 5 cm sphere. <span class="rigor-tag rigor-verified">Verified</span></p>
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
  <tr><td>Centre of the sphere (no core in the first experiment)</td><td>Real axis (1)</td><td>Scalar magnitude</td><td>Observer [1,0,0,0]</td></tr>
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
  <tr><td>Mercury fill</td><td>99.99% Hg, 7.09 kg</td><td>σ = 1.04×10⁶ S/m, ρ = 13,534 kg/m³</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Core</td><td>None in the first experiment</td><td>Lead retired (dissolves in mercury). Later option: a density-matched core of a metal mercury does not dissolve</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Coils (×6 — 3 Helmholtz pairs)</td><td>4 AWG copper, 4-6 turns/coil</td><td>R = 14 / 18 / 22.5 cm, each pair at ±R/2</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
</table>

<p><strong>Key parameters</strong></p>
<table>
  <tr><th>Parameter</th><th>Value</th><th>Rigor</th></tr>
  <tr><td>Drive frequency where the field fills the sphere</td><td>48.7 Hz (skin depth 7.1 cm)</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Skin depth at 50 Hz</td><td>7.0 cm (> sphere R)</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Max B per axis (Helmholtz pair, N=6, 100A)</td><td>3.9 mT</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Max B (3-axis combined)</td><td>~5.5 mT</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Field uniformity inside the mercury</td><td>within 0.55 % (no magnetic centre)</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Stirring, two pairs in quadrature</td><td>0.5–0.9 rad/s (a turn every 7–12 s)</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Squeeze, three equal pairs at slightly different frequencies</td><td>centre +0.09 Pa at 3 mT each, no flow</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Magnetic Reynolds number of the stirred mercury</td><td>≈ 0.0025</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Self-sustaining field (dynamo)</td><td>needs ~4,000× the stirred Rm: out of reach at this size</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Magnetic decay time after switch-off</td><td>0.33 ms</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Spin rate at which the spin axis reaches Hg vapour pressure (1 atm fill)</td><td>≈ 16–20 rev/s (the shell's give and the temperature set it)</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
  <tr><td>Plasma Q<sub>3d</sub> (3-axis)</td><td>\u22481.0</td><td><span class="rigor-tag rigor-model">Model</span></td></tr>
  <tr><td>EM force vs gravity, full current</td><td>~3,000× weaker (stirring force at the wall)</td><td><span class="rigor-tag rigor-verified">Verified</span></td></tr>
</table>

<p><strong>What the simulator proved won't work</strong>:</p>
<ul>
  <li>Cyclotron resonance at bench B-fields (Hg⁺ Larmor radius ≈ 0.5 m ≫ sphere; need ~50 mT, have ~3.9 mT — a ~13× gap, down from ~550× for offset pancakes) <span class="rigor-tag rigor-verified">Verified</span></li>
  <li>Classical dynamo via plasma mercury (conductivity drops 150\u00D7 from liquid) <span class="rigor-tag rigor-verified">Verified</span></li>
  <li>RS frequency matching in MHD (sweeps flat without hardcoded boost) <span class="rigor-tag rigor-verified">Verified</span></li>
  <li>RS amplitude ratios affecting centering (spread < 0.012 mm = noise) <span class="rigor-tag rigor-verified">Verified</span></li>
</ul>

<p><strong>What the October 2026 review ruled out</strong>:</p>
<ul>
  <li>A bare lead core (lead dissolves in mercury) <span class="rigor-tag rigor-verified">Verified</span></li>
  <li>A superconducting liquid: mercury superconducts only when frozen, so a cryogenic dynamo has nothing to stir <span class="rigor-tag rigor-verified">Verified</span></li>
  <li>A self-sustaining field at this size (about 4,000× short) <span class="rigor-tag rigor-verified">Verified</span></li>
  <li>Magnetic centring in Helmholtz wiring: the field is uniform, so it exerts no centring force on a small body <span class="rigor-tag rigor-verified">Verified</span></li>
</ul>
    `,
  },
  {
    title: 'Experimental Roadmap',
    open: false,
    body: `
<div class="phase-card">
  <div class="phase-title">Phase 1-2: Coreless Mercury Sphere</div>
  <div class="phase-cost">$8,500 – $30,000 (spin rig not included)</div>
  <div class="phase-desc">Check the exact conventional predictions: stirring with two pairs in quadrature, the central squeeze with three equal pairs at slightly different frequencies, the swept axis, and the vapour void when the sealed sphere is spun (about 16–20 rev/s at a 1 atm fill). Run the coils-off test. Broad frequency sweep (5-200 Hz). Search for any weight anomaly on precision balance.</div>
</div>

<div class="phase-card phase-retired">
  <div class="phase-title">Phase 3: Dynamo Search (Cryogenic) — retired October 2026</div>
  <div class="phase-cost"><s>+$13,000 – $38,000</s></div>
  <div class="phase-desc">Mercury superconducts only when frozen (it freezes at −38.8 °C; Tᴄ = 4.15 K), so there is no superconducting liquid to stir. The Rm ≈ 3,089 and ~856× figures came from the simulator's prescribed growth law, not from physics it computed. <span class="rigor-tag rigor-circular">Circular</span></div>
</div>

<div class="phase-card">
  <div class="phase-title">Phase 4: Anomalous Effects Search</div>
  <div class="phase-cost">+$8,200 \u2013 $60,500</div>
  <div class="phase-desc">Systematic search with precision balance (\u00B10.1 mg), accelerometer, spectrum analyzer, gravimeter. Multiple independent measurement systems. Blind protocols. Any deviation from standard EM + gravity by >5\u03C3 across repeated trials would be novel.</div>
</div>

<div class="phase-card">
  <div class="phase-title">Phase 5: Plasma Transition</div>
  <div class="phase-cost">+$6,200 \u2013 $24,000</div>
  <div class="phase-desc">Ionize mercury via 150 kV\u20131 MV pulse. Compare plasma-state vs. liquid-state response to identical 3-axis drive. (The February claim that a plasma sustains a 3D rotation the liquid cannot, Q<sub>3d</sub> \u2248 1.0, is withdrawn; see Corrections.) f<sub>d</sub> shifts to ~7,450 Hz.</div>
</div>

<p style="margin-top: 16px;"><strong>Full build (phases 1–2, 4 and 5): ~$23,000 – $115,000</strong></p>
<p style="font-size: 12px; color: var(--text-dim);">Ranges reflect DIY/surplus vs. new commercial equipment. Phase 5 (HV) is an independent upgrade. The retired cryogenic phase is excluded.</p>

<p style="margin-top: 16px;"><strong>The five questions this prototype exists to answer:</strong></p>
<ol>
  <li>Can EM-driven mercury produce measurable forces on a precision balance?</li>
  <li>Does any frequency produce coupling beyond textbook eddy-current predictions?</li>
  <li>Does any field persist after the coils are switched off (10 ms after the coil current reaches zero, above the mercury's own thermal noise)?</li>
  <li>Does spinning the sealed sphere produce anything at its centre? Ordinary physics puts the vapour void and the light material it gathers on the spin axis, at its uphill end, and nothing at the centre itself.</li>
  <li>Does plasma-state mercury exhibit behavior distinct from liquid-state?</li>
</ol>
    `,
  },
  {
    title: 'Audit Trail',
    open: false,
    body: `
<p>21 simulator experiments. Full circularity audit. Clean reruns of 4 key experiments. In October 2026, a second audit re-ran the February code itself. Honest accounting of what survived and what didn't.</p>

<p><strong class="audit-verified">What IS real</strong> (survived both audits):</p>
<ul>
  <li>Cyclotron impossible at bench B = pencil math, Biot-Savart</li>
  <li>Faraday induction monotonic (\u221D f<sup>0.87</sup>) = real PIC, no resonance peak</li>
  <li>No special frequencies and no special RS ratios (the February nulls stand)</li>
</ul>

<p><strong class="audit-circular">What was CIRCULAR</strong> (found and removed during the February audit):</p>
<ul>
  <li>RS coupling factor — was hardcoded into simulator, then "confirmed" as output. Had ZERO effect on equilibrium when disabled.</li>
  <li>RS resonance boost — sigmoid function favoring RS-predicted frequencies. Frequency sweeps completely flat when removed.</li>
  <li>RS amplitude ratios — no special status found. Core centering identical across all configs (spread < 0.012 mm).</li>
</ul>

<p><strong class="audit-circular">What was CIRCULAR</strong> (found in October 2026; the February audit had listed these as real):</p>
<ul>
  <li>Core centering at 10.5 / 15.7 / 31.6 mm — buoyancy divided by an assumed spring that exists only with the claimed activation switched on, at 75 mT per pair (the written spec is 2.4–3.9 mT). With the activation off, the core rests on the wall. The code also placed the core above centre; this page said below.</li>
  <li>Axis hierarchy (3>2>1) — the 1 : 1.5 : 3 ratio is one over the number of axes, applied to that assumed spring.</li>
  <li>Dynamo threshold Rm ≈ 10 — a constant in the code; the "sharp transition" and the amplification figures follow from the prescribed growth law.</li>
  <li>Ambient Rm ≈ 0.03 — the simulator's speed limit (0.5 m/s), not a computed flow. The stirred mercury's real value is about 0.0025.</li>
  <li>"Eddy-current coupling peak at 48.7 Hz, within 3%" — the lumped model checked against its own formula. In the exact sphere solution, 48.7 Hz is where the field fills the sphere, and the stirring torque per B² peaks near 566 Hz.</li>
  <li>3D plasma rotation (Q<sub>3d</sub> ≈ 1.0) — with no field at all the metric scores 0.9999: the ions start in random directions at 500 m/s, and 0.65 mT cannot bend them inside the sphere. The single-axis 0.003 was a time-step artefact (0.998 at a 2 µs step).</li>
</ul>

<p><strong class="audit-hypothesis">What remains HYPOTHESIS</strong> (the point of building):</p>
<ul>
  <li>A field that persists after the coils are switched off</li>
  <li>Any anomalous weight/inertia effects</li>
  <li>Anything at the centre of the spun sphere (ordinary physics puts the void on the axis, not at the centre)</li>
  <li>Plasma vs. liquid response to 3-axis drive</li>
  <li>Consciousness-EM coupling</li>
  <li>Reference frame decoupling</li>
</ul>

<p><strong>The rigor standard</strong>:</p>
<blockquote>A simulator that confirms RS theory by having RS theory baked in helps no one — it produces false confidence that could mislead others or waste resources on flawed designs. The standard: would this analysis hold up to hostile peer review?</blockquote>

<p style="font-size: 11px; color: var(--text-dim); margin-top: 16px;">Prototype Spec v1.0 — 2026-02-22 — Post-audit, post-clean-rerun. Corrected 2026-10-14 after a re-run of the February code: six more findings moved out of Verified, and two physical impossibilities removed (see Corrections).</p>
    `,
  },
  {
    title: 'Corrections (14 October 2026)',
    open: false,
    body: `
<p>Every change made to this capsule on 14 October 2026, with the reason. The February text said each of these things; none of them should be relied on.</p>

<table>
  <tr><th>February claim</th><th>Was</th><th>Now</th></tr>
  <tr><td>Core equilibrium 10.5 / 15.7 / 31.6 mm below center (3 / 2 / 1 axes)</td><td><span class="rigor-tag rigor-verified">Verified</span></td><td><span class="rigor-tag rigor-circular">Circular</span> An assumed spring, with the claimed activation switched on, at 75 mT. The sign was also wrong: the code put the core above centre. Removed.</td></tr>
  <tr><td>Axis hierarchy 3 > 2 > 1</td><td><span class="rigor-tag rigor-verified">Verified</span></td><td><span class="rigor-tag rigor-circular">Circular</span> One over the number of axes, applied to the assumed spring. The exact physics: three equal pairs at slightly different frequencies give a pure squeeze that stirs nothing.</td></tr>
  <tr><td>Dynamo threshold Rm ≈ 10</td><td><span class="rigor-tag rigor-verified">Verified</span></td><td><span class="rigor-tag rigor-circular">Circular</span> A constant in the code. Removed.</td></tr>
  <tr><td>Ambient Rm 0.03</td><td><span class="rigor-tag rigor-verified">Verified</span></td><td>The simulator's speed limit. Corrected to ≈ 0.0025.</td></tr>
  <tr><td>Eddy-current peak at 48.7 Hz</td><td><span class="rigor-tag rigor-verified">Verified</span></td><td>A lumped-model property. Restated: at 48.7 Hz the skin depth is 7.1 cm and the field fills the sphere.</td></tr>
  <tr><td>"Highest room-temperature σ of any liquid metal"</td><td><span class="rigor-tag rigor-verified">Verified</span></td><td>Wrong. Galinstan and NaK conduct about three times better. Removed.</td></tr>
  <tr><td>Lead core, 24.3 g, "denser than mercury"</td><td><span class="rigor-tag rigor-verified">Verified</span></td><td>Retired. Lead dissolves in mercury, and it is lighter than mercury, not denser. The 3D model no longer shows it.</td></tr>
  <tr><td>Cryogenic dynamo: SC mercury at 4.2 K, Rm ≈ 3,089, ~856×</td><td><span class="rigor-tag rigor-model">Model</span></td><td>Retired. Mercury superconducts only when frozen; the figures came from the prescribed growth law.</td></tr>
  <tr><td>"The three-axis field drives structured 3D flow around the core"</td><td>—</td><td>Three equal pairs at slightly different frequencies drive no flow at all; two pairs in quadrature stir slowly.</td></tr>
  <tr><td>Questions 3 and 4 (forced Cooper pairing in lead; the cryo-dynamo)</td><td>—</td><td>Replaced by the coils-off test and the spun sphere's centre.</td></tr>
  <tr><td>3D plasma rotation, Q<sub>3d</sub> ≈ 1.0 (experiment 14)</td><td><span class="rigor-tag rigor-verified">Verified</span></td><td><span class="rigor-tag rigor-circular">Circular</span> It scores 0.9999 with no field at all: the random starting directions of the ions, read back. The single-axis contrast (0.003) was a time-step artefact. Removed.</td></tr>
</table>

<p>Everything else in the capsule stands as written in February.</p>
    `,
  },
  {
    title: 'Continuation: The Mercury Core (October 2026)',
    open: false,
    body: `
<p><span class="rigor-tag rigor-superseded">Superseded</span> The design in this capsule is the first rung. The current design is in <a href="mercury-core/" target="_blank" rel="noopener"><strong>The Mercury Core</strong></a>, a step-through demonstration that holds the device to ordinary physics before anything is built. What changed:</p>
<ul>
  <li><strong>No core.</strong> The sphere is mercury and nothing in it. The lead core is gone, and a core of another metal is a later stage.</li>
  <li><strong>Two pairs stir, three pairs stop the stirring.</strong> Three equal coil pairs at slightly different frequencies give a pure squeeze, so the axis count is now a switch for flow rather than a ranking.</li>
  <li><strong>Spin.</strong> Spun, the sphere becomes an inside-out planet: anything lighter than mercury gathers on the spin axis, and at about sixteen turns a second a void opens there.</li>
  <li><strong>One target.</strong> Switch the coils off and look for a magnetic field that stays. That is the result the device is built to find, with the false alarms named in advance.</li>
  <li><strong>Every claim marked.</strong> Verified, Model, Hypothesis, plus two new marks: Framework, for what the Reciprocal System says, and Record, for documents whose claims may not hold.</li>
</ul>
<p>Read the two side by side and you can see the progression: what the February capsule assumed, what the October audit removed, and what replaced it.</p>
    `,
  },
];
