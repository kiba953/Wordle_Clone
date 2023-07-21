import React from 'react'
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn }) {
  return (
    <div className='grid'>
      {guesses.map((g, i) => {
        if(turn ===i){
          return <Row key={i} currentGuess={currentGuess} />
        }
        return <Row key={i} guess={g} turn={turn} /> 
      })}
    </div>
  )
}
