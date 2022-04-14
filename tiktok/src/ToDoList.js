import React, { useState } from 'react'

export const ToDoList = () => {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])

    const handleChange = (e) => {
        setJob(e.target.value)
    }

    const handleSubmit = () => {
        setJobs(prev => [...prev, job])
        setJob('')
    }

    return (
        <div style={{ padding: '10%' }}>
            <input value={job} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {jobs.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
