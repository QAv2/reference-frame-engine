# Suppressed Physics — R&D Research Project

> **Corrected 14 October 2026.** The October theory review re-ran the February simulator code. The dynamo threshold and the core-centering result were assumptions written into the code, and the 48.7 Hz "coupling peak" is a property of the simplified (lumped) model. The superconducting-mercury dynamo is retired, because mercury superconducts only when frozen, and a control run showed the "3D plasma rotation" result was the isotropic starting gas read back. The claims are retagged in place below; sources: `device-design/theory-review-2026-10.md` §1 and §10 (internal; not yet in this repository), and `showcase/research/M4-what-makes-motion-3d.md` §4 (internal; not yet in this repository).

## Mission
Merge convergent physics frameworks (Reciprocal System, RS2, Qualia Algebra, Alcubierre metric, DIRD program, Podkletnov, Clemens patent) toward actual engineering of reference-frame-decoupling technology.

## The Thesis
Six independent lines of investigation converge on the same device architecture: rotating conductive medium (mercury) + strong orthogonal EM fields + high-energy pulsed activation = gravity/inertia modification via spacetime metric engineering. The Reciprocal System provides the ontological WHY, Qualia Algebra provides the consciousness interface HOW, and multiple patents/experiments provide engineering constraints.

## Project Structure

```
suppressed-physics/
├── README.md                          ← You are here
├── convergence-analysis.md            ← Cross-framework convergence map
├── engineering-questions.md           ← Open questions + experimental constraints
├── documents/
│   ├── clemens-patent.md              ← US20230253896A1 — mercury ZPE device
│   ├── pais-patents.md                ← Navy UFO patents (5 total)
│   ├── dirds.md                       ← 38 DIRDs — key documents analysis
│   ├── historical.md                  ← Die Glocke, vimana, Otis Carr
│   └── podkletnov.md                  ← Rotating superconductor + IGG experiments
├── frameworks/
│   ├── rs-rs2-bridge.md               ← Larson → Peret → engineering translation
│   ├── qa-interface.md                ← Consciousness as native device interface
│   └── alcubierre-larson.md           ← Warp metric ↔ scalar motion equivalence
└── device-design/
    ├── deeper-thread.md               ← Current /deeper state (quaternion device)
    ├── parameter-space.md             ← Known constraints from all sources
    └── configurations.md             ← Counter-rotation vs orthogonal axes
```

## Key Documents (External)
- Clemens Patent: https://patents.google.com/patent/US20230253896A1/en
- Pais Craft Patent: https://patents.google.com/patent/US10144532B2/en
- Puthoff DIRD #05 (Vacuum Metric Engineering): https://arxiv.org/abs/1204.2184
- DIRDs Archive: https://www.theblackvault.com/documentarchive/the-advanced-aviation-threat-identification-program-aatip-dird-report-research/
- Podkletnov IGG: https://arxiv.org/abs/physics/0108005
- Farrell "New Plasma Patent Rings a Bell": https://gizadeathstar.com/2025/06/new-plasma-patent-rings-a-bell/

## MHD Simulator

Built a real-time 3D simulator (`simulator/`) to test device physics computationally before hardware. 21 experiments completed (11 MHD + 5 PIC + 5 honest/comparison).

**AUDIT NOTE (2026-02-22)**: Experiments 1-11 ran with `rs_resonance_boost` and `rs_coupling_factor` active — hardcoded mechanisms that rewarded RS-predicted parameters with up to 2x force multiplier. All RS-specific claims from these experiments are CIRCULAR. Both mechanisms now disabled by default. Only experiments 19-21 and PIC experiments (12-17) produce trustworthy results. See `documents/rs-frequency-circularity.md`.

**What survived the audit (real physics):** (February audit; three items withdrawn on 14 October 2026, marked below)
- ~~**Dynamo threshold** (exp 8, 11) — Rm_crit ≈ 10, sharp transition. Standard MHD. SC-Hg at 4.2K → 864x amplification.~~ **Circular** (14 Oct 2026): `RM_CRIT = 10` is a constant in `research.py`, and the sharp transition and the amplification follow from the growth law written into the code. The SC-Hg path is retired: mercury superconducts only when frozen, so nothing can flow.
- ~~**3D plasma rotation** (exp 14) — Q_3d ≈ 1.0 with 3-axis driving, 0.003 with single-axis. Real PIC physics.~~ **Circular** (14 Oct 2026): with no field at all Q_3d = 0.9999, because the isotropic 500 m/s starting ions stay isotropic (0.65 mT cannot bend them inside 5 cm). The single-axis 0.003 is a time-step artefact (Q_3d = 0.998 at a 2 µs step). The metric cannot show rotation about three axes at once.
- **Faraday induction** (exp 17) — Monotonic ∝ f^0.87. No RS frequency peak. Real PIC physics.
- ~~**Eddy-current coupling** (exp 20) — Analytical peak at f_d = 1/(2πμ₀σR²), verified within 3%. Textbook EM.~~ **Model** (14 Oct 2026): the peak at f_d belongs to the single-time-constant model, which exp 20 checked against itself. The exact sphere's torque peaks near 565 Hz. At 48.7 Hz the skin depth is 7.1 cm, so the field fills the sphere.
- **Hg plasma conductivity** — 150× WORSE than liquid. Classical plasma-dynamo path falsified.

**What was retracted (circular):**
- ~~RS frequency "validation" 5/5 elements~~ — Hardcoded. Flat when disabled (exp 19).
- ~~RS amplitude ratios outperform generic~~ — No effect when disabled (exp 21).
- ~~Material-RS coupling correlation~~ — `rs_coupling_factor` was hardcoded from RS displacement values.

Data: `simulator/data/` (JSON + CSV). Run: `python3 simulator/research.py`

## Connected Projects
- Inner Sanctum map: ~/inner-sanctum/ (Convergent Physics branch — 7 nodes)
- QA repo: https://github.com/qav2/qualia-algebra
- /deeper thread: consciousness-device interface theory

## Status
- [x] Initial research sweep (Feb 2026)
- [x] Document collection and analysis
- [x] Convergence mapping
- [x] MHD simulator built (Phase 1–5 complete)
- [x] ~~RS resonance prediction tested computationally~~ **RETRACTED** — circular (audit 2026-02-22)
- [x] ~~Frequency resonance peak located~~ **RETRACTED** — circular (hardcoded boost produced peak)
- [x] ~~Dynamo threshold mapped (Rm_crit ≈ 10; SC-Hg at 5cm → 864x amplification) — VALID~~ **CIRCULAR** (14 Oct 2026) — the threshold is a constant in the code; the SC-Hg path is retired (mercury is frozen when superconducting)
- [x] Circularity audit completed (2026-02-22) — RS boost + coupling factor identified and disabled
- [x] Honest experiments run (19-21): RS frequency flat, RS ratios no effect
- [x] Rerun experiments 1, 3, 5, 8 with all RS mechanisms disabled — COMPLETED (2026-02-22): All results IDENTICAL to contaminated runs. RS mechanisms had zero effect on equilibrium positions. ~~Real physics: density-driven buoyancy + field geometry.~~ **Corrected 14 Oct 2026**: the positions come from buoyancy balanced against an assumed centering spring, so they are **Circular**. The buoyancy is real; the position is the assumption.
- [ ] RS2 → engineering translation (scalar motion → metric manipulation)
- [ ] QA → device interface formalization
- [ ] Bench engineering feasibility assessment
- [ ] Prototype parameter selection
