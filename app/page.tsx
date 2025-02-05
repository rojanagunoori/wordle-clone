
"use client";
import React, { useState, useEffect } from "react";
import "./index.css"; // Ensure Tailwind CSS is properly configured locally

const WORD_LENGTH = 5; // Length of the word to guess
const MAX_ATTEMPTS = 6;

//https://ttsmp3.com/ai

//const correctSound = "https://cdn.freesound.org/previews/475/475460_7495013-lq.mp3";
//const wrongSound = "https://cdn.freesound.org/previews/587/587253_10334845-lq.mp3";
//const winSound = "https://cdn.freesound.org/previews/521/521638_7724198-hq.mp3";
//const loseSound = "https://cdn.freesound.org/previews/535/535236_11754962-hq.mp3"
const correctSound = "/sounds/correct.mp3";
const wrongSound = "/sounds/wrong.mp3";
const winSound = "/sounds/win.mp3";
const loseSound = "/sounds/lose.mp3";

const WordleClone = () => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const [score, setScore] = useState<number>(0);
  const [word, setWord] = useState<string>("");
  const [showRules, setShowRules] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);



  useEffect(() => {
    // Fetch a random word when the component mounts
    const fetchRandomWord = async () => {
      try {
        const response = await fetch("https://random-word-api.herokuapp.com/word?number=1&length=5");
        
        const data = await response.json();
        console.log(data)
        if (data && data.length > 0) {
          setWord(data[0].toUpperCase());
        } else {
          console.error("Failed to fetch a random word.");
        }
      } catch (error) {
        console.error("Error fetching random word:", error);
      }
    };

    fetchRandomWord();
  }, []);

  useEffect(() => {
    if (gameStatus === "won") {
      new Audio("/sounds/win.mp3").play();
      setScore(score + 10);
    } else if (gameStatus === "lost") {
      new Audio("/sounds/lose.mp3").play();
      setScore(0);
    }
  }, [gameStatus]);

  const checkGuess = () => {
    if (currentGuess.length !== WORD_LENGTH) return;
    if (guesses.length >= MAX_ATTEMPTS || gameStatus !== "playing") return;

    const newGuess = currentGuess.toUpperCase();
    setGuesses([...guesses, newGuess]);
    setCurrentGuess("");

    if (newGuess === word) {
      setGameStatus("won");
    } else if (guesses.length + 1 >= MAX_ATTEMPTS) {
      setGameStatus("lost");
    }
  };

  const getLetterStyle = (letter: string, index: number) => {
    if (word[index] === letter) {
      return "bg-green-500 animate-pulse";
    }
    if (word.includes(letter)) {
      return "bg-yellow-500 animate-bounce";
    }
    return "bg-gray-500";
  };

  const restartGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setGameStatus("playing");
    setWord(""); // Reset the word
    // Fetch a new random word
    const fetchRandomWord = async () => {
      try {
        const response = await fetch("https://random-word-api.herokuapp.com/word?number=1&length=5");
        const data = await response.json();
        if (data && data.length > 0) {
          setWord(data[0].toUpperCase());
        } else {
          console.error("Failed to fetch a random word.");
        }
      } catch (error) {
        console.error("Error fetching random word:", error);
      }
    };

    fetchRandomWord();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade">Wordle Clone</h1>
      <p className="mb-2">Rules: Guess the 5-letter word in {MAX_ATTEMPTS} attempts.</p>
      <p className="text-lg font-semibold mb-2">Score: {score}</p>
      <div className="grid grid-rows-6 gap-2">
        {[...Array(MAX_ATTEMPTS)].map((_, row) => (
          <div key={row} className="flex gap-2">
            {[...Array(WORD_LENGTH)].map((_, col) => (
              <div
                key={col}
                className={`w-12 h-12 flex items-center justify-center border-2 border-gray-600 text-xl font-bold uppercase transition-all duration-300 ease-in-out transform hover:scale-110 ${
                  guesses[row] ? getLetterStyle(guesses[row][col], col) : ""
                }`}
              >
                {guesses[row] ? guesses[row][col] : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameStatus !== "playing" && (
        <p className="mt-4 text-lg font-semibold animate-fade-in">
          {gameStatus === "won" ? "You Won! 🎉" : `You Lost! The word was ${word}`}
        </p>
      )}
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value.slice(0, WORD_LENGTH))}
        className="mt-4 p-2 text-black rounded border border-gray-400 hover:border-blue-500"
        placeholder="Enter a word"
      />
      <button
        onClick={checkGuess}
        className="mt-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        Submit
      </button>
      <button
        onClick={restartGame}
        className="mt-2 bg-red-500 px-4 py-2 rounded hover:bg-red-700 transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        New Game
      </button>
      <button
        onClick={() => setShowRules(!showRules)}
        className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        ?
      </button>

      {/* Rules Section */}
      {showRules && (
        <div className="fixed bottom-0 right-0 w-64 bg-white text-black p-4 rounded-tl-lg shadow-lg transform transition-transform duration-300 ease-in-out">
          <h2 className="text-xl font-semibold mb-2">Game Rules</h2>
          <p className="text-sm mb-2">
            Guess the <strong>5-letter</strong> word in {MAX_ATTEMPTS} attempts. Each guess must be a valid word.
          </p>
          <p className="text-sm mb-2">
            <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span> Green: Correct letter in the correct position.
          </p>
          <p className="text-sm mb-2">
            <span className="inline-block w-4 h-4 bg-yellow-500 mr-2"></span> Yellow: Correct letter in the wrong position.
          </p>
          <p className="text-sm">
            <span className="inline-block w-4 h-4 bg-gray-500 mr-2"></span> Gray: Letter is not in the word.
          </p>
          <button
  onClick={() => setShowAnswer(!showAnswer)}
  className="mt-4 bg-purple-500 px-4 py-2 rounded hover:bg-purple-700 transition-all duration-200 ease-in-out transform hover:scale-105"
>
  {showAnswer ? "Hide Answer" : "Show Answer"}
</button>
{showAnswer && (
  <div className="mt-2 p-2 bg-gray-800 rounded text-white text-lg font-semibold animate-fade-in">
    🔍 The correct word is: <span className="text-yellow-400">{word}</span>
  </div>
)}

          <button
            onClick={() => setShowRules(false)}
            className="mt-4 w-full bg-red-500 px-4 py-2 rounded hover:bg-red-700 transition-all duration-200 ease-in-out"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default WordleClone;


/*
"use client"; 
import React, { useState, useEffect } from "react";
import "./index.css"; // Ensure Tailwind CSS is properly configured locally
//import correctSound from "./sounds/correct.mp3";
//import wrongSound from "./sounds/wrong.mp3";
//import winSound from "./sounds/win.mp3";
//import loseSound from "./sounds/lose.mp3";
//https://ttsmp3.com/ai

//const correctSound = "https://cdn.freesound.org/previews/475/475460_7495013-lq.mp3";
//const wrongSound = "https://cdn.freesound.org/previews/587/587253_10334845-lq.mp3";
//const winSound = "https://cdn.freesound.org/previews/521/521638_7724198-hq.mp3";
//const loseSound = "https://cdn.freesound.org/previews/535/535236_11754962-hq.mp3"
const correctSound = "/sounds/correct.mp3";
const wrongSound = "/sounds/wrong.mp3";
const winSound = "/sounds/win.mp3";
const loseSound = "/sounds/lose.mp3";


const WORD = "REACT"; // Hardcoded word to guess
const MAX_ATTEMPTS = 6;

const WordleClone = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("playing");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (gameStatus === "won") {
      new Audio(winSound).play();
      setScore(score + 10);
    } else if (gameStatus === "lost") {
      new Audio(loseSound).play();
      setScore(0);
    }
  }, [gameStatus]);

  const checkGuess = () => {
    if (currentGuess.length !== 5) return;
    if (guesses.length >= MAX_ATTEMPTS || gameStatus !== "playing") return;
    
    const newGuess = currentGuess.toUpperCase();
    setGuesses([...guesses, newGuess]);
    setCurrentGuess("");
    
    if (newGuess === WORD) {
      setGameStatus("won");
    } else if (guesses.length + 1 >= MAX_ATTEMPTS) {
      setGameStatus("lost");
    }
  };

  const getLetterStyle = (letter, index) => {
    if (WORD[index] === letter) {
      //new Audio(correctSound).play();
      return "bg-green-500 animate-pulse";
    }
    if (WORD.includes(letter)) {
      return "bg-yellow-500 animate-bounce";
    }
    //new Audio(wrongSound).play();
    return "bg-gray-500";
  };

  const restartGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setGameStatus("playing");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade">Wordle Clone</h1>
      <p className="mb-2">Rules: Guess the 5-letter word in {MAX_ATTEMPTS} attempts.</p>
      <p className="text-lg font-semibold mb-2">Score: {score}</p>
      <div className="grid grid-rows-6 gap-2">
        {[...Array(MAX_ATTEMPTS)].map((_, row) => (
          <div key={row} className="flex gap-2">
            {[...Array(5)].map((_, col) => (
              <div
                key={col}
                className={`w-12 h-12 flex items-center justify-center border-2 border-gray-600 text-xl font-bold uppercase transition-all duration-300 ease-in-out transform hover:scale-110 ${
                  guesses[row] ? getLetterStyle(guesses[row][col], col) : ""
                }`}
              >
                {guesses[row] ? guesses[row][col] : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameStatus !== "playing" && (
        <p className="mt-4 text-lg font-semibold animate-fade-in">
          {gameStatus === "won" ? "You Won! 🎉" : `You Lost! The word was ${WORD}`}
        </p>
      )}
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value.slice(0, 5))}
        className="mt-4 p-2 text-black rounded border border-gray-400 hover:border-blue-500"
        placeholder="Enter a word"
      />
      <button
        onClick={checkGuess}
        className="mt-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        Submit
      </button>
      <button
        onClick={restartGame}
        className="mt-2 bg-red-500 px-4 py-2 rounded hover:bg-red-700 transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        New Game
      </button>
    </div>
  );
};

export default WordleClone;
*/

