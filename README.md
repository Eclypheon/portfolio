# Kester Neo (Eclypheon) — The Deep Generalist Matrix

> *"Dramaturgically speaking, society demands that we wear a single tailored mask for a single stage. This site is the unmasking—a deliberate dumping ground of lived obsessions, where all masks coexist without pretense. Browse at your leisure and fancy, but tread carefully for grave peril may awaiteth thee on the path forward (don't worry about any basilisks though)."*

[![Deploy to GitHub Pages](https://github.com/Eclypheon/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Eclypheon/portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-GitHub%20Pages-emerald?style=flat-square)](https://eclypheon.github.io/portfolio/)

---

## ⚡ Overview & Philosophy

This repository contains the source code for the personal portfolio of **Kester Neo (Eclypheon)**:
- **NUS Business Administration First Class Honours** (Multi-Semester Dean's List)
- **PMP® (Project Management Professional)** & **Certified Scrum Master (CSM)**
- **Former ASEAN University Games Athlete** (Sprint Canoeing, Team Singapore) & International Dragonboat Racer
- **Competitive Physique Medallist**
- **Surgical Resilience Survivor** (5 Major Orthopedic Reconstructive Surgeries, active Cheerleading Stunter & Aerialist)
- **Edge Silicon & Homelab Architect** (Repurposed 2014 MacBook Pro, rootless Quadlet + Podman stack, Tailscale WireGuard mesh)
- **Low-Level Hacker & Reversing Explorer** (Cheat Engine pointer structures, OllyDbg, Ghidra)
- **Continental Philosophy & Sociological Inquirer** (Camus, Sartre, Plato, Wittgenstein, Foucault, Weber, Goffman)

---

## 🧭 Matrix Navigation & Sections

| Section | Description |
| :--- | :--- |
| **Matrix Overview** | High-level taxonomy of the *Deep Generalist*, Erving Goffman's dramaturgical manifesto, credentials, and domain map. |
| **Projects & Systems** | Playable in-browser WebGL Bubble Tea Simulation game, precision multi-asset Finance Tracker, 3D Reality Cut Metroidvania engine, and CheerPlan Pro choreography suite. |
| **Homelab & Quadlet** | Architecture of the repurposed 2014 MacBook Pro headless server, Quadlet systemd `.container` definitions, rootless Podman vs. Docker, local LLM/Whisper/Kokoro pipelines, and Tailscale mesh. |
| **Philosophy & Canon** | Deep dives into Camus' Absurdism, Sartre's *Mauvaise Foi*, Socratic Cave epistemology, Wittgenstein's Language-Games, Foucault's Panopticon, and an interactive curated reading list. |
| **The Kinetic Realm** | Biomechanical records: sprint canoe hydrodynamics, dragonboat synchronization, competitive physique conditioning, 5 orthopedic surgeries recovery matrix, and aerials. |
| **Fiction & Lore** | Complete cosmic horror novelette: *"I was a priest of the Flat Earth Society and now I’m a traveller"*, dark prose, and poetry fragments. |
| **Toolchain** | Comprehensive breakdown of 3D modeling (3ds Max, Blender, C4D), video/audio editing (DaVinci, FL Studio), reversing (Cheat Engine, Ghidra), enterprise governance (PMP, Scrum), and GIS spatial data. |
| **Autonomous Daily Musings** | Nightly AI-generated cross-pollination chronicle with interactive "Consult Oracle" generative engine, tag filtering, and automated GitHub Actions cron workflow. |

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Audio Synthesis**: Native HTML5 Web Audio API synthesizer for tactile UI micro-feedback (zero external audio assets)
- **Canvas Physics**: Custom 60fps responsive constellation particle field
- **Command Palette**: `Cmd+K` instant search index across all portfolio nodes
- **Deployment**: GitHub Pages via [GitHub Actions](.github/workflows/deploy.yml)

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/Eclypheon/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🤖 Nightly Autonomous Cron

The repository contains an automated workflow at [`.github/workflows/daily-musing.yml`](.github/workflows/daily-musing.yml) running on a nightly cron schedule. It runs `scripts/generate_musing.py` to synthesize fresh philosophical and systemic musings on rotation.
