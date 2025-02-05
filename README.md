# Wordle Clone

## 🎯 Overview
This is a **Wordle Clone** built using **React and TypeScript** with Tailwind CSS. The game challenges players to guess a random 5-letter word within 6 attempts, similar to the original Wordle game.

## 🛠 Features
- 🎮 **Interactive Gameplay**: Guess the word in **6 attempts**.
- 🎨 **Stylish UI**: Designed with **Tailwind CSS** for responsiveness and animations.
- 🔊 **Sound Effects**: Plays a win or lose sound based on the outcome.
- 📊 **Score Tracking**: Keeps track of the player's score.
- 🆕 **Random Word Generation**: Fetches a new 5-letter word each game.
- 📖 **Rules & Hints**: Shows game rules and the correct answer if needed.
- 🎭 **Animations**: Animated letter colors indicate correct, misplaced, and incorrect letters.

## 🚀 Demo
[Live Demo](#) *(Add deployment link here after deployment)*

## 📸 Screenshots
*(Include game screenshots here)*

## 🛠️ Tech Stack
- **React** (TypeScript)
- **Tailwind CSS**
- **Fetch API** (for random word generation)
- **Vite** *(if applicable)*

## 🏗 Installation & Setup
### 1️⃣ Clone the Repository
```sh
https://github.com/rojanagunoori/wordle-clone.git

```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the App
```sh
npm run dev
```
Then, open `http://localhost:5173/` in your browser.

## 📦 Deployment
### Deploy on **Netlify** (Recommended)
1. **Build the project**:
   ```sh
   npm run build
   ```
2. **Deploy using Netlify CLI**:
   ```sh
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

Alternatively, use Netlify’s **drag & drop** feature to deploy the `dist/` folder.

### Deploy on **Vercel**
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```

## 🛠 How to Play
1. Type a **5-letter word** and press **Submit**.
2. The colors indicate:
   - 🟩 **Green** = Correct letter & correct position.
   - 🟨 **Yellow** = Correct letter but wrong position.
   - ⬜ **Gray** = Letter not in the word.
3. Win by guessing the word within **6 attempts**.
4. Click **New Game** to restart.
5. Click **Show Answer** if you give up!

## 🤝 Contributing
Pull requests are welcome! If you have ideas for improvements, feel free to open an issue.

## 📜 License
This project is licensed under the **MIT License**.

---
🚀 **Happy Coding!**

