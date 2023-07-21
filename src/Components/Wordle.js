import React, { useEffect, useState } from 'react'
import useWordle from '../GameLogic/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Gameover from './Gameover'

export default function Wordle({ solution} ){
    const {turn,currentGuess, guesses,correct,usedKeys,keypress}  = useWordle(solution)
    const [gover, setGover] = useState(false)

    useEffect(()=>{
        window.addEventListener('keyup', keypress)
        if(correct===true){
            setTimeout(()=>setGover(true),2000)
            console.log("congrats, you won")
            window.removeEventListener('keyup',keypress)
        }
        if(turn>5){
            setTimeout(()=>setGover(true),2000)
            console.log('Out of Guesses')
            window.removeEventListener('keyup',keypress)
        }
        return () => window.removeEventListener('keyup',keypress)
    },[keypress,correct,turn])
    
    return(
        <div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keypad usedKeys={usedKeys} keypress={keypress} correct={correct} turn={turn}/>
        {gover && <Gameover correct={correct} turn={turn} solution={solution}/>}
        </div>
    )
}