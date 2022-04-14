import React from 'react'
import { useState } from 'react'

//const gifts = ['CPU i9', 'Ram 8gb', 'GPU MSI']
const courses = [
    {
        id: 1,
        name: 'HTML/CSS'
    },
    {
        id: 2,
        name: 'ReactJS'
    },
    {
        id: 3,
        name: 'JavaScript'
    }
]
export const Twobinding = () => {

    // const [gift, setGift] = useState()

    // const random = () => {
    //     setGift(gifts[Math.floor(Math.random() * gifts.length)])
    //     console.log(Math.floor(Math.random() * gifts.length))
    // }

    // return (
    //     <div style={{ padding: '10%' }}>
    //         <h1>{gift || 'Chua co phan thuong'}</h1>
    //         <button onClick={() => { random() }}>Random</button>
    //     </div>
    // )

    const [checked, setChecked] = useState([])

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if (isChecked) {
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    const handleUpdate = () => {
        console.log(checked)
    }


    return (
        <div style={{ padding: '10%' }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type='checkbox'
                        checked={checked.includes(course.id)}
                        onChange={() => { handleCheck(course.id) }}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleUpdate}>Register</button>
        </div>
    )
}
