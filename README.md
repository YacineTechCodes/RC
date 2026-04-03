<div align="center">
  <h1>🌐 OSI Reference Model · Interactive Learning</h1>
  <p>An interactive, visually stunning educational web application exploring the 7 layers of the OSI Model, Data Link, Network, and Physical layers.</p>

  <p>
    <a href="https://github.com/YacineTechCodes/RC/stargazers">
      <img src="https://img.shields.io/github/stars/YacineTechCodes/RC?style=for-the-badge&color=7c6aff" alt="Stars" />
    </a>
    <a href="https://github.com/YacineTechCodes/RC/issues">
      <img src="https://img.shields.io/github/issues/YacineTechCodes/RC?style=for-the-badge&color=ff6b6b" alt="Issues" />
    </a>
    <a href="https://github.com/YacineTechCodes/RC/network/members">
      <img src="https://img.shields.io/github/forks/YacineTechCodes/RC?style=for-the-badge&color=4ecdc4" alt="Forks" />
    </a>
  </p>
</div>

---

## 📖 About The Project

This project transforms traditional, text-heavy networking concepts into an **engaging, interactive viewing experience**. Built natively with HTML, CSS, and Vanilla JavaScript, it offers deep-dives into the intricacies of Computer Networks—specifically focusing on the OSI Reference Model.

### 🌟 Key Features

- **Interactive Layers View:** A beautiful encapsulation animation and animated components that build a visual intuition for how data is structured as it travels the stack.
- **Subnetting Calculator:** Real-time IPv4 subnet and masking calculator with visual bitwise AND operations.
- **Signal Modulation Demos:** HTML5 Canvas-based wave drawing functions displaying AM, FM, PM analog modulation alongside NRZ and Manchester digital encoding.
- **Shannon & Data Rate Tools:** Interactive baud and theoretical limit calculators.
- **Knowledge Checks:** Built-in dynamic quizzes carefully designed to test retention at the end of each module.
- **Glassmorphic UI:** Smooth, highly responsive, and meticulously crafted dark-theme aesthetics. 

## 🏗️ Architecture

The codebase strictly separates global styling from page-specific concerns:
- `global.css`: Manages design tokens, typography, root variables, generic layout systems, UI components (buttons, nav), and responsive breakpoints.
- `[page_name].css`: Responsible for context-specific overrides, animations, and unique color theming per OSI layer.

### Core Modules

1. **OSI Model Overview** (`osi_model.html`)
2. **Layer 1: Physical Layer** (`physical_layer.html`)
3. **Layer 2: Data Link Layer** (`data_link_layer.html`)
4. **Layer 3: Network Layer** (`network_layer.html`)

## 🚀 Getting Started

Since the project uses vanilla web technologies, running it locally requires zero configuration or build steps.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YacineTechCodes/RC.git
   ```
2. **Open the project:**
   Simply double-click `osi_model.html` to open it in your default web browser, or use a local development server like VSCode Live Server.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/YacineTechCodes/RC/issues). 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🎓 Academic Credit
Developed partially in reference to the Communication Networks syllabus at the NTIC Faculty, University of Constantine 2 (Prof. Nabil Belala · 2025).
