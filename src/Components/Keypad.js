import React, { useEffect, useState } from 'react';
import lettersData from '../data/data.json'; // Assuming data.json is in the same directory

export default function Keypad({ usedKeys, keypress,correct,turn }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(lettersData.letters); // Use the imported JSON data directly
  }, []);

  const handleKeyPress = (letter) => {
    if(correct!==true && turn < 5){
    keypress({key:letter}); // Call the keypress function from the props with the letter as an argumen
   }
  };
    
  return (
    <div className="keypad">
      
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color} onClick={() => handleKeyPress(l.key)}>
              {l.key}
            </div>
          );
        })}
        <div onClick={() => handleKeyPress("Enter")} className='enter'>Enter</div>
        <div onClick={() => handleKeyPress("Backspace")} className='backspace'>Backspace</div>
    </div>
  );
}
