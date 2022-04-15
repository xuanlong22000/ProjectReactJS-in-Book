import React, { useLayoutEffect, useState } from 'react'

export const EffectLayout = () => {

    const [number, setNumber] = useState(0)

    useLayoutEffect(() => {
        { number > 5 && setNumber(0) }
    }, [number])

    const handleChange = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <h1> {number} </h1>
            <button onClick={handleChange}>Handle</button>
        </div>
    )
}
