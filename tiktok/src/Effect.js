
import React, { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']

export const Effect = () => {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [scroll, setScroll] = useState(false)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(post => setPosts(post))
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        //Clean Up
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleSubmit = () => {
        console.log(posts)
    }

    return (
        <div>

            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => { setType(tab); console.log(tab) }}
                    style={type === tab ? { background: 'green' } : {}}
                >
                    {tab}
                </button>
            ))}

            <input value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {scroll && <button style={{ position: 'fixed', right: 20, bottom: 20 }}>Go to Top</button>}

        </div>
    )
}
