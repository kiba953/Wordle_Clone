import React, { useEffect, useState } from 'react';
import lettersData from '../data/data.json'; // Assuming data.json is in the same directory

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(lettersData.letters); // Use the imported JSON data directly
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
