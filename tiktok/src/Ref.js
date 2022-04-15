import React, { useEffect, useRef, useState } from 'react'


//useRef
export const Ref = () => {

    const [number, setNumber] = useState(60)

    const timer = useRef()
    const prevNumber = useRef()

    useEffect(() => {
        prevNumber.current = number
    }, [number])

    const handleStart = () => {
        timer.current = setInterval(() => {
            setNumber(prev => prev - 1)
        }, 1000)

        console.log(timer.current)
    }

    const handleStop = () => {
        clearInterval(timer.current)
        console.log(timer.current)
    }

    console.log(prevNumber.current, number)

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop} >Stop</button>
        </div>
    )
}
