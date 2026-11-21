<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0b1220,100:14b8a6&height=170&section=header&text=Deadlock%20Avoidance%20Lab&fontColor=ecfeff&fontSize=38" width="100%" alt="Deadlock Avoidance Lab banner"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=900&color=5EEAD4&center=true&vCenter=true&width=620&lines=Explore+the+Banker's+algorithm;Find+a+safe+resource+sequence" alt="Animated project tagline"/>
<p><strong>An interactive, local-first Banker's algorithm simulator.</strong></p>
<img src="https://img.shields.io/github/license/CyberLoop-dev/deadlock-avoidance-lab?style=flat-square" alt="MIT license"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/deadlock-avoidance-lab?style=flat-square" alt="Primary language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/deadlock-avoidance-lab?style=flat-square" alt="GitHub stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/deadlock-avoidance-lab?style=flat-square" alt="Last commit"/>
<br/><img src="./assets/mark.svg" width="90%" alt="Resource nodes connected by a safe execution path"/>
</div>

## 🧭 Overview
Deadlock Avoidance Lab lets you edit allocation, maximum-demand, and available-resource matrices, then checks whether the state has a safe completion order. It runs locally and never interacts with operating-system processes.

## ✨ Features
- 🧮 Validates matrix dimensions and resource counts.
- 🔎 Calculates each process's remaining need.
- 🛡️ Finds a safe sequence or lists blocked processes.
- 🧾 Shows each resource-availability step.
- 🔒 Keeps all input in your browser.

## 🎬 Demo
Run the local app and load the built-in classic Banker’s algorithm example. The initial example should produce a safe sequence; edit the matrices to explore an unsafe state.

## 🚀 Quick Start
Requires Node.js 20 or newer.

```bash
npm start
```

Open http://127.0.0.1:4173. Run the automated checks with `npm test`.

## 🧰 Tech Stack
- 🟢 Node.js built-in HTTP server
- 🌐 HTML, CSS, and browser JavaScript modules
- 🧪 Node.js built-in test runner

## 🗂️ Folder Structure
```text
public/       Browser interface and algorithm
test/         Automated algorithm tests
assets/       Original project artwork
.github/      CI workflow
server.js     Dependency-free local server
```

## 🛣️ Roadmap
- [ ] Import and export problem files.
- [ ] Add step-by-step playback controls.
- [ ] Compare safe sequences across multiple states.

## 🤝 Contributing
Issues and pull requests are welcome. Keep the algorithm deterministic, add tests for edge cases, and avoid adding dependencies without a clear need.

## 📄 License
MIT. See [LICENSE](./LICENSE).

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:14b8a6,100:0b1220&height=100&section=footer" width="100%" alt="Animated wave footer"/></div>
