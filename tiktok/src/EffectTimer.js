import React, { useEffect, useState } from 'react'

export const EffectTimer = () => {

    const [timer, setTimer] = useState(180)

    useEffect(() => {
        setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)
    }, [])

    return (
        <div>
            {timer}
        </div>
    )
}
