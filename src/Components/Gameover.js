import React from 'react';

export default function Gameover({ turn, solution, correct }) {
  const handleNewGame = () => {
    window.location.reload(true);
  };

  return (
    <div className="Gameover">
      {correct && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p> You found the solution in {turn} guesses</p>
          <button onClick={handleNewGame}>New Game</button>
        </div>
      )}
      {!correct && (
        <div>
          <h1>You Lost!</h1>
          <p className="solution">The Word was {solution}</p>
          <p> Better Luck Next Time</p>
          <button onClick={handleNewGame}>New Game</button>
        </div>
      )}
    </div>
  );
}
