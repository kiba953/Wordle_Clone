import React, { useEffect } from 'react'
import useWordle from '../GameLogic/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({ solution} ){
    const {turn,currentGuess, guesses,correct,usedKeys,keypress}  = useWordle(solution)

    useEffect(()=>{
        window.addEventListener('keyup', keypress)
        if(correct===true){
            console.log("congrats, you won")
            window.removeEventListener('keyup',keypress)
        }
        if(turn>5){
            console.log('Out of Guesses')
            window.removeEventListener('keyup',keypress)
        }
        return () => window.removeEventListener('keyup',keypress)
    },[keypress,correct,turn])
    
    return(
        <div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keypad usedKeys={usedKeys} keypress={keypress} correct={correct} turn={turn}/>
        </div>
    )
}