import './App.css';
import { useEffect, useState } from 'react'
import Wordle from './Components/Wordle'

function App() {

  const [solution,setSolution] = useState(null)
  useEffect(()=>{
    fetch("http://localhost:8000/solutions")
    .then(res => res.json())
    .then(json =>{
      const Word = json[Math.floor(Math.random()*json.length)]
      setSolution(Word.word)
    })

  },[setSolution]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;