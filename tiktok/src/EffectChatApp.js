import React, { useEffect, useState } from 'react'


const lessons = [
    {
        id: 1,
        name: 'Java'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'Python'
    }
]

export const EffectChatApp = () => {

    const [lessonId, setlessonId] = useState(1)

    const handleComment = ({ detail }) => {
        console.log(detail)
    }

    useEffect(() => {
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson.id} style={{ color: lessonId === lesson.id ? 'red' : '' }} onClick={() => setlessonId(lesson.id)}>{lesson.name}</li>
                ))}
            </ul>
        </div>
    )
}
