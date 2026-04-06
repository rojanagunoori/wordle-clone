# 🎯 Wordle Clone (Next.js + React)

A fully interactive **Wordle-inspired word guessing game** built with **Next.js 13 (App Router), React, and Tailwind CSS**.
This project demonstrates **modern frontend development**, including state management, API integration, UI animations, and game logic design.

---

## 🌐 Live Links

- 🔗 **Live Demo:** https://wordle-clone-zeta-ashy.vercel.app/
- 📂 **GitHub Repository:** https://github.com/rojanagunoori/wordle-clone

---

## 📌 1. Introduction

This project is a **browser-based word puzzle game** where users attempt to guess a hidden 5-letter word within 6 attempts.

It replicates the core mechanics of Wordle while adding:

- Sound effects 🔊
- Score system 📊
- UI enhancements ✨
- Debug features 👀

---

## 📖 2. Project Overview

### 🎯 Objective

To build a **real-time interactive game** using modern React patterns and Next.js architecture.

### 💡 Problem It Solves

- Demonstrates **state-heavy UI logic**
- Shows how to manage **user input & feedback loops**
- Implements **dynamic UI updates with animations**

### 🧠 Core Concept

Each guess is evaluated and visually represented using:

- 🟩 Correct position
- 🟨 Wrong position
- ⬜ Not present

---

## 🚀 3. Features

### 🎮 Gameplay

- 5-letter word guessing system
- Maximum 6 attempts
- Real-time validation

### 🎨 UI / UX

- Animated tiles (pulse, bounce, scale)
- Responsive layout
- Smooth transitions

### 🔊 Audio System

- Win sound
- Lose sound
- Correct guess feedback
- Wrong guess feedback

### 📊 Game Mechanics

- Score tracking (+10 on win)
- Reset on loss
- Game state management

### 🧩 Additional Features

- Rules popup
- Reveal answer toggle
- Restart game button
- Input validation (max 5 letters)

---

## 📁 4. Folder Structure

```id="8m1c1u"
wordle-clone/
│
├── app/                         # Next.js App Router
│   ├── page.tsx                # Main game component
│   ├── layout.tsx              # Root layout wrapper
│   ├── globals.css             # Global styles (Tailwind)
│
├── public/
│   ├── sounds/                 # Audio files
│       ├── correct.mp3
│       ├── wrong.mp3
│       ├── win.mp3
│       ├── lose.mp3
│
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind config
└── README.md
```

---

## 🛠️ 5. Tech Stack / Environment

### 🧩 Core Technologies

| Category   | Technology   |
| ---------- | ------------ |
| Framework  | Next.js 13   |
| UI Library | React        |
| Language   | TypeScript   |
| Styling    | Tailwind CSS |
| Deployment | Vercel       |

---

### 🔌 External API

- **Random Word API**
  - Endpoint:

    ```
    https://random-word-api.herokuapp.com/word?number=1&length=5
    ```

  - Purpose:
    - Generate a random 5-letter word dynamically

---

## ⚙️ 6. Installation / Setup

### Step 1: Clone Repo

```bash id="k1p7xh"
git clone https://github.com/rojanagunoori/wordle-clone.git
cd wordle-clone
```

### Step 2: Install Dependencies

```bash id="yxr2n9"
npm install
```

### Step 3: Start Development Server

```bash id="1jlj9g"
npm run dev
```

### Step 4: Open Browser

```id="8q9h8g"
http://localhost:3000
```

---

## 🔐 7. Environment Variables

Currently, **no environment variables are required**.

### Optional Future Setup

```id="sxr1ov"
NEXT_PUBLIC_API_URL=https://random-word-api.herokuapp.com
```

---

## 🔌 8. API Usage

### 📥 Fetch Word Logic

```ts id="fd2v1l"
const fetchRandomWord = async () => {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1&length=5",
  );
  const data = await response.json();
  setWord(data[0].toUpperCase());
};
```

### 📊 Response Format

```json id="wkl3k9"
["grape"]
```

### ⚙️ Integration Flow

1. API called inside `useEffect`
2. Word stored in state
3. Used for comparison during guesses

---

## 🧱 9. Key Components

### 🧠 Main Component: `WordleClone`

Handles:

- Game logic
- UI rendering
- State management

---

### ⚛️ State Breakdown

| State          | Purpose              |
| -------------- | -------------------- |
| `guesses`      | Stores all attempts  |
| `currentGuess` | Current input        |
| `gameStatus`   | playing / won / lost |
| `score`        | Player score         |
| `word`         | Target word          |

---

### ⚙️ Core Functions

#### ✅ `checkGuess()`

- Validates input
- Updates guesses
- Determines win/loss

#### 🎨 `getLetterStyle()`

- Applies tile colors
- Logic:
  - Correct position → Green
  - Exists → Yellow
  - Not present → Gray

#### 🔁 `restartGame()`

- Resets all states
- Fetches new word

---

## 🔒 10. Security

- No authentication required
- No sensitive data handling
- API calls made via HTTPS
- Input restricted to 5 characters
- No local storage vulnerabilities

---

## ⚔️ 11. Challenges Faced

### 🧩 1. Managing Game State

**Problem:** Multiple states updating simultaneously
**Solution:** Structured state updates using React hooks

---

### 🎨 2. Color Logic Accuracy

**Problem:** Matching Wordle behavior
**Solution:** Position-based + inclusion checks

---

### 🔊 3. Audio Timing Issues

**Problem:** Sounds triggering incorrectly
**Solution:** Controlled via `useEffect` on game status

---

### 🔄 4. Resetting Game Properly

**Problem:** Old state leaking into new game
**Solution:** Full state reset + API refetch

---

## 🔮 12. Future Improvements

### 🎮 Gameplay Enhancements

- Virtual keyboard
- Difficulty modes
- Timed challenges

### 📊 Advanced Features

- Leaderboard
- User accounts
- Daily puzzles

### 🌍 UX Improvements

- Mobile optimization
- Accessibility support
- Dark/light theme toggle

---

## 🤝 13. Contributing

### Steps

1. Fork repository
2. Create branch
3. Commit changes
4. Push to GitHub
5. Open Pull Request

---

## 🙌 14. Acknowledgments

- Original Wordle game inspiration
- Random Word API
- Tailwind CSS docs
- React & Next.js ecosystem

---

## 📜 15. License

Licensed under the **MIT License**.

---

## 👤 16. Author / Contact

## 🙋‍♀️ Author / Contact

**Nagunoori Roja**

- 📧 Email: [nagunooriroja@gmail.com](mailto:nagunooriroja@gmail.com)
- 🌐 GitHub: [https://github.com/rojanagunoori](https://github.com/rojanagunoori)
- 🌐 LinkedIn: [https://www.linkedin.com/in/nagunoori-roja-51b936267/](https://www.linkedin.com/in/nagunoori-roja-51b936267/)
- 🌐 Personal Portfolio: [portfolio-roja.netlify.app](https://portfolio-roja.netlify.app/)
- 🌐 LeetCode: [https://leetcode.com/u/dSdsi6XkI8/](https://leetcode.com/u/dSdsi6XkI8/)
- 🌐 Kaggle: [https://www.kaggle.com/nagunooriroja](https://www.kaggle.com/nagunooriroja)

---

## ⭐ Support

If you found this project useful:

👉 Star the repo
👉 Share it
👉 Contribute

---

## 📊 Project Status

✅ Completed (MVP)
🚧 Improvements ongoing

---
