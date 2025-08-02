// src/components/Games/GuessTheCategory/GuessTheCategory.tsx

import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle, Info } from "lucide-react";

interface Quiz {
  date: string;
  clues: string[];
  answer: string;
}

// Mock quiz data – replace with backend API later if needed
const MOCK_QUIZ: Quiz = {
  date: "2025-07-31",
  clues: ["bike", "sword", "door", "social media username", "suitcase"],
  answer: "things with a handle",
};

// Background colors for the 5 clues: gradient light to dark blue
const clueBgColors = [
  "#cbe7fa", // lightest
  "#a0d1f4",
  "#74b8ea",
  "#499fdf",
  "#2172b7", // darkest
];

const STORAGE_KEYS = {
  lastPlayedDate: "gtc_lastPlayed",
  lastResult: "gtc_lastResult",
  streak: "gtc_streak",
};

function getTodayDateString() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function normalize(str: string) {
  return str.trim().toLowerCase().replace(/[^\w\s]/g, "");
}

export default function GuessTheCategory() {
  const [quiz] = useState<Quiz>(MOCK_QUIZ);

  const [guesses, setGuesses] = useState<{ guess: string; isCorrect: boolean }[]>([]);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0); // Number of clues revealed - 1
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [streak, setStreak] = useState(0);
  const [playedToday, setPlayedToday] = useState(false);

  // Load streak and today's play status on component mount
  useEffect(() => {
    const todayStr = getTodayDateString();
    const lastPlayed = localStorage.getItem(STORAGE_KEYS.lastPlayedDate);
    const lastResult = localStorage.getItem(STORAGE_KEYS.lastResult);
    const savedStreak = Number(localStorage.getItem(STORAGE_KEYS.streak) || "0");

    if (lastPlayed === todayStr) {
      setPlayedToday(true);
      setSubmitted(true);
      setIsCorrect(lastResult === "true");
      setMessage(
        lastResult === "true"
          ? `You already solved today's quiz! 🎉`
          : `You have used all chances for today. Try again tomorrow!`
      );
      setStreak(savedStreak);
    } else {
      // Reset streak if last played not yesterday
      if (lastPlayed) {
        const lastDate = new Date(lastPlayed);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastDate.toISOString().slice(0, 10) === yesterday.toISOString().slice(0, 10)) {
          setStreak(savedStreak);
        } else {
          setStreak(0);
        }
      } else {
        setStreak(0);
      }
    }
  }, []);

  // Accept guess if contains "handle" or exactly matches normalized answer
  const isWinningGuess = (input: string) => {
    const normalizedGuess = normalize(input);
    return normalizedGuess.includes("handle") || normalizedGuess === normalize(quiz.answer);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted) return;

    const userGuess = guess.trim();
    if (!userGuess) {
      setMessage("Please enter a guess.");
      return;
    }

    const won = isWinningGuess(userGuess);

    setGuesses((prev) => [...prev, { guess: userGuess, isCorrect: won }]);
    setGuess("");

    if (won) {
      setMessage("🎉 Correct! You guessed the category.");
      setSubmitted(true);
      setIsCorrect(true);
      setPlayedToday(true);

      const todayStr = getTodayDateString();
      const newStreak = streak + 1;
      localStorage.setItem(STORAGE_KEYS.lastPlayedDate, todayStr);
      localStorage.setItem(STORAGE_KEYS.lastResult, "true");
      localStorage.setItem(STORAGE_KEYS.streak, newStreak.toString());
      setStreak(newStreak);
    } else {
      if (attempts >= 4) {
        setMessage(`🛑 All 5 chances used! The category was: "${quiz.answer}".`);
        setSubmitted(true);
        setIsCorrect(false);
        setPlayedToday(true);

        const todayStr = getTodayDateString();
        localStorage.setItem(STORAGE_KEYS.lastPlayedDate, todayStr);
        localStorage.setItem(STORAGE_KEYS.lastResult, "false");
        localStorage.setItem(STORAGE_KEYS.streak, "0");
        setStreak(0);
      } else {
        setAttempts(attempts + 1);
        setMessage(null);
      }
    }
  };

  const handleReset = () => {
    setGuesses([]);
    setGuess("");
    setAttempts(0);
    setSubmitted(false);
    setMessage(null);
    setIsCorrect(false);
    setPlayedToday(false);
    localStorage.removeItem(STORAGE_KEYS.lastPlayedDate);
    localStorage.removeItem(STORAGE_KEYS.lastResult);
    localStorage.removeItem(STORAGE_KEYS.streak);
    setStreak(0);
  };

  // Prepare wrong guesses for display (no label, striked)
  const wrongGuesses = guesses.filter((g) => !g.isCorrect).map((g) => g.guess);

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-xl rounded-xl border border-gray-200">
      <h1 className="text-2xl font-bold mb-5 flex items-center gap-2 tracking-tight">
        <Info className="w-7 h-7 text-blue-600" /> Guess the Category
      </h1>

      {/* Clues displayed with gradient background */}
      <div className="flex flex-col gap-3 mb-6">
        {quiz.clues.slice(0, attempts + 1).map((clue, idx) => (
          <div
            key={idx}
            className="rounded-xl p-4 text-lg font-semibold shadow flex items-center transition-all"
            style={{
              background: clueBgColors[idx] || clueBgColors[clueBgColors.length - 1],
              color: idx >= 3 ? "white" : "#164e63",
              border: idx === attempts && !submitted ? "2px solid #1d4ed8" : undefined,
            }}
          >
            <span className="opacity-85 mr-2">Clue #{idx + 1}:</span>
            <span className="italic tracking-wide">{clue}</span>
          </div>
        ))}
      </div>

      {/* Guess input and submit button */}
      {!submitted && !playedToday && (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-1">
            <input
              type="text"
              className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              placeholder="Type your guess..."
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              autoFocus
              disabled={submitted}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded font-semibold hover:from-blue-600 hover:to-blue-800"
            >
              Submit Guess
            </button>
          </form>

          {/* Display all wrong guesses in one line, strikethrough, no label */}
          {wrongGuesses.length > 0 && (
            <p className="text-sm text-red-600 line-through mt-2">{wrongGuesses.join(", ")}</p>
          )}
        </>
      )}

      {/* Feedback message */}
      {message && (
        <div
          className={`mt-2 p-3 rounded-lg flex items-center gap-2 ${
            isCorrect
              ? "bg-green-100 text-green-800"
              : message.startsWith("🛑")
              ? "bg-red-100 text-red-800"
              : "bg-blue-50 text-blue-700"
          }`}
        >
          {isCorrect ? (
            <CheckCircle className="w-5 h-5" />
          ) : message.startsWith("🛑") ? (
            <XCircle className="w-5 h-5" />
          ) : (
            <Info className="w-5 h-5" />
          )}
          <span>{message}</span>
        </div>
      )}

      {/* Show the correct answer when submitted - always visible after game end */}
      {submitted && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded text-green-800 font-semibold">
          Correct answer: <span className="italic">{quiz.answer}</span>
        </div>
      )}

      {/* Streak display */}
      {(submitted || playedToday) && (
        <div className="mt-7 text-center text-gray-700">
          <div className="text-lg mb-1">
            <span className="font-semibold">{streak}</span> day{streak !== 1 ? "s" : ""} streak
          </div>
          <small className="text-gray-500">Come back tomorrow for a new quiz!</small>
        </div>
      )}

      {/* Dev reset button (only in development mode) */}
      {process.env.NODE_ENV === "development" && (
        <button
          onClick={handleReset}
          className="mt-8 w-full py-2 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100"
          title="Reset game for testing"
        >
          Reset Game (Dev only)
        </button>
      )}
    </div>
  );
}
