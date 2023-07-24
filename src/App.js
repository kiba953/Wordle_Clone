import './App.css';
import { useEffect, useState } from 'react';
import Wordle from './Components/Wordle';
import data from './data/data.json'; // Import the JSON data

function App() {
  const [solution, setSolution] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Step 1: Add state for dark mode

  useEffect(() => {
    const randomWord = data.solutions[Math.floor(Math.random() * data.solutions.length)].word;
    setSolution(randomWord);
  }, []);

  // Step 2: Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle Button */}
      <button
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} letters={data.letters} />}
    </div>
  );
}

export default App;
