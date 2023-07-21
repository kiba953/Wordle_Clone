// App.js
import './App.css';
import { useEffect, useState } from 'react';
import Wordle from './Components/Wordle';
import data from './data/data.json'; // Import the JSON data

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const randomWord = data.solutions[Math.floor(Math.random() * data.solutions.length)].word;
    setSolution(randomWord);
  }, []);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} letters={data.letters} />}
    </div>
  );
}

export default App;
