import { useState } from "react"

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [correct, setCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})


    const Guesscolor = () =>{
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l)=>{
            return {key: l,color:'grey'}
        })
        formattedGuess.forEach((l,i)=>{
            if(solutionArray[i] === l.key){
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })
        formattedGuess.forEach((l,i)=>{
            if(solutionArray.includes(l.key) && l.color !== 'green'){
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })
        return formattedGuess

    }

    const newGuess = (formattedGuess) =>{
        if(currentGuess===solution){
            setCorrect(true)
        }
        setGuesses((prevGuesses)=>{
            let newGuess = [...prevGuesses]
            newGuess[turn] = formattedGuess
            return newGuess
        })
        setHistory((prevHistory)=>{
            return [...prevHistory,currentGuess]
        })
        setTurn((prevTurn)=>{
            return prevTurn+1
        })
        setUsedKeys((prevUsedKeys)=>{
            let newKeys ={...prevUsedKeys}
            formattedGuess.forEach((l)=>{
                const currentColor = newKeys[l.key]

                if(l.color==='green'){
                    newKeys[l.key] = 'green'
                    return
                }
                if(l.color==='yellow' && currentColor!=='green'){
                    newKeys[l.key] = 'yellow'
                    return
                }
                if(l.color==='grey' && currentColor!=='green' && currentColor!=='yellow'){
                    newKeys[l.key] = 'grey'
                    return
                }
            })
            return newKeys
        })
        setCurrentGuess('')
    }

    const keypress = ({key}) =>{
        if(key==='Enter'){
            if(turn > 5){
                console.log("no guess remaining")
                return
            }
            if(history.includes(currentGuess)){
                console.log("Already Tried")
                return
            }
            if(currentGuess.length!==5){
                console.log("Word must be 5 letter long")
                return
            }
            const formatted = Guesscolor(currentGuess)
            newGuess(formatted)

        }

        if(key=== 'Backspace'){
            setCurrentGuess((prev)=>{
                return prev.slice(0,-1)
            })
        }
        if (/^[a-zA-Z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev)=>{
                    return prev+key
                })
            }

        }
    }

    return {turn,currentGuess, guesses,correct,usedKeys,keypress}
}
 
export default useWordle;