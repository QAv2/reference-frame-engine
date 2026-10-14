# Suppressed Physics R&D — Ground Rules

These rules are NON-NEGOTIABLE. They override any instinct to be agreeable, helpful, or validating.

> **Corrected 14 October 2026.** §4–§6 were updated after the October theory review re-ran the February simulator code. Three results §5 listed as validated (centering, the dynamo threshold, the axis hierarchy) were assumptions written into the code, and the η(ω) "peak at f_d" is a property of the lumped model, not of a real sphere. A re-run of experiment 14 with a no-field control showed that "3D plasma rotation" was also an input read back as an output. Sources: `device-design/theory-review-2026-10.md` §1 and §10 (internal; not yet in this repository); `showcase/research/M4-what-makes-motion-3d.md` §4 (internal; not yet in this repository).

## 1. Never validate what hasn't been tested

- If a hypothesis is INPUT to the simulator, it CANNOT be claimed as OUTPUT.
- Distinguish: "the model assumes X" vs "the model predicts X" vs "the model validates X."
- A result that follows directly from an assumption is NOT a finding. It's a tautology.
- When reporting results, explicitly state which assumptions produced them.

## 2. Do not make the illogical logical

- If the math doesn't work, say so. Don't soften it, don't hedge toward "but maybe."
- If a hypothesis fails a test, report the failure cleanly before exploring alternatives.
- Negative results are results. A flat frequency sweep IS the finding.
- Never adjust the analysis to rescue a hypothesis. Adjust the hypothesis to fit the analysis.

## 3. Rigor hierarchy

For every claim, categorize it:
- **Verified**: Matches textbook physics, independently calculable, no model assumptions needed
- **Model prediction**: Follows from simulator physics, but simulator has known limitations
- **Hypothesis**: Not yet testable with current tools — state what WOULD test it
- **Circular**: Baked into the model as an assumption — CANNOT be claimed as validated

When presenting results, ALWAYS state which category applies.

## 4. Known simulator limitations

The SPH/MHD module:
- HAS eddy-current induction physics: η(ω) = ωτ_d/(1+(ωτ_d)²), skin depth P(r,R,δ)
- ~~Frequency coupling VERIFIED analytically (exp 20): peaks at f_d within 3%~~ Corrected 2026-10-14: this single-time-constant η(ω) peaks at f_d by construction, and exp 20 checked the formula against itself. The exact conducting sphere's torque per B² peaks near 565 Hz (radius = 2.41 skin depths), not at f_d.
- BUT: EM induction force is ~1000× weaker than gravity at bench scale (5cm, ambient σ)
- SPH internal dynamics (pressure, boundaries, damping) mask the EM signal at bench scale
- Has NO induced magnetic field feedback below dynamo threshold. The threshold itself is a constant (`RM_CRIT = 10.0` in `research.py`), not a computed result.
- Flow speed is clamped at 0.5 m/s (`max_speed` in `physics/mhd.py`); the "ambient Rm ≈ 0.03" is this clamp, not a computed flow
- Core dynamics previously contained hardcoded RS boost (now has disable flag)
- Core position is set by an assumed centering spring (`k_pin_base = 500` N/m per T² in `physics/core_dynamics.py`), not derived from any physics, which exists only while the claimed activation is on (`pulse=True`)
- CANNOT meaningfully test: EM-driven flow at bench-scale ambient σ (force too weak)

The PIC plasma module:
- Is honest single-particle physics (Boris pusher is verified)
- Has NO collective effects (no particle-particle interaction)
- CANNOT test: collective plasma modes, wave propagation, instabilities
- Its Q_3d metric (experiment 14) reads back the isotropic starting velocities at bench fields, and the 0.2 ms step used there moves a 500 m/s ion 10 cm, twice the sphere radius (M4 §4, added 2026-10-14)

## 5. What IS validated (as of 2026-02-22, post clean reruns; corrected 2026-10-14)

- **Cyclotron resonance impossible at bench B**: Pencil math, textbook Biot-Savart
- **Faraday induction monotonic** (∝ f^0.87): Real PIC, no resonance peak
- **Field penetration at f_d**: f_d = 1/(2πμ₀σR²) = 48.7 Hz for the 5 cm sphere is where ωμ₀σR² = 1. There the skin depth is 7.1 cm, so the field fills the sphere almost uniformly. Textbook EM. (Restated 2026-10-14; the "peak" claim is withdrawn below.)

**Withdrawn from this list on 2026-10-14** (theory review §1 and §10; M4 §4). Each was an assumption or a model property reported as a result:

- **Eddy-current coupling peak at f_d** (was: "Analytical peak at f_d = 1/(2πμ₀σR²), verified (exp 20)") → **Model**. The single-time-constant η(ω) peaks at f_d by construction, and exp 20 confirmed the formula against itself. The exact solution for a conducting sphere in a turning field gives a torque per B² that keeps rising past 48.7 Hz and peaks near 565 Hz (radius = 2.41 skin depths), about 5.4 times the 48.7 Hz value.
- **Centering = density physics** (was: equilibrium from Δρ plus field-gradient geometry, confirmed in clean reruns exp 1, 3, 5) → **Circular**. The core sits where buoyancy balances the assumed spring (§4); the offset scales in exact proportion to the spring constant (41.0 / 21.0 / 10.5 / 5.2 / 2.6 mm for 125 / 250 / 500 / 1000 / 2000 N/m per T²). The runs used `config.py` coils of about 75 mT per pair, not the 2.4–3.9 mT spec. Lead floats in mercury, so the code put the core above centre, not below. The buoyancy (Δρ) part is real; the position is the assumption.
- **Axis hierarchy (3>2>1)** (was: real field geometry, confirmed in clean rerun exp 3) → **Circular**. The 1 : 1.5 : 3 ratio is one, two or three pairs adding to ⟨B²⟩ in the assumed spring. For a light core, conventional physics predicts a different ordering (theory review §4).
- **Dynamo threshold (Rm ≈ 10)** (was: real SPH physics, sharp transition, RS-independent) → **Circular**. `RM_CRIT = 10.0` is a constant in `research.py`; the "sharp transition", the σ^4.05 law and the 856–864× amplification follow from the growth law written into the code. The cryogenic dynamo path is physically unavailable: mercury freezes at 234 K and superconducts only below 4.15 K, so nothing can flow.
- **3D plasma rotation (Q_3d ≈ 1.0)** (was: real PIC physics, Boris pusher verified) → **Circular** (three-axis) and **a numerical artefact** (single-axis). Re-run with controls, Q_3d = 0.9999 with no field at all: the isotropic 500 m/s starting ions stay isotropic because 0.65 mT cannot bend them inside 5 cm (gyroradius ≈ 1.6 m). The single-axis "collapse" to Q_3d ≈ 0.003 is a time-step artefact: in a 0.05 s run Q_3d = 0.24 at dt = 0.2 ms, 0.76 at 20 µs and 0.998 at 2 µs. The metric gives 0.88 for a ball in plain one-axis solid rotation, so it cannot show "rotation about three axes at once". The Boris pusher itself is sound. Scripts: `showcase/research/sources/M4/q3d_control.py`, `q3d_timestep.py`.

## 6. What is NOT validated (as of 2026-02-22; updated 2026-10-14)

- RS frequency formula (was circular — hardcoded, then "confirmed"; flat when disabled)
- RS amplitude ratios producing physical effects (exp 21: no effect found)
- RS coupling factor affecting equilibrium (clean reruns: zero effect on final positions)
- Any frequency preference in MHD (flat when RS boost removed)
- Decoupling / unity transition (theoretical, no test possible with current simulator)
- Core centering position and the 3>2>1 axis hierarchy (assumed spring; see §5, withdrawn)
- A self-sustained field at bench scale: the coded threshold proves nothing, and the stirred mercury's Rm (about 0.0025) is roughly 4,000 times short of self-excitation (theory review §2). The cryogenic path is retired (mercury is frozen when superconducting).
- Any plasma "3D rotation", or any plasma-versus-liquid contrast, from the PIC Q_3d metric (M4 §4)
- Coupling "peak" at 48.7 Hz (a lumped-model property; see §5, withdrawn)
- The RS displacement values in `physics/materials.py` were wrong for most materials until 2026-10-14 (corrected to Larson, *Nothing But Motion* ch. 10). Every February run of the RS formulas used the old values.

## 7. Ethics of the work

This research aims to determine whether suppressed physics concepts have real physical
content. That goal is ONLY served by honest results. A simulator that confirms RS theory
by having RS theory baked in helps no one — it produces false confidence that could
mislead others or waste resources on flawed designs.

The standard: would this analysis hold up to hostile peer review?
If not, it's not ready to present as a finding.
