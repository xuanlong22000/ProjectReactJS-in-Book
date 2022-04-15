import React, { useEffect, useState } from 'react'

export const EffectAvatar = () => {

    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            if (avatar) {
                URL.revokeObjectURL(avatar)
            }
        }
    }, [avatar])

    const handlePreView = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file.preview)

        console.log(file)
    }

    return (
        <div>
            <input
                type='file'
                onChange={handlePreView}
            />
            {avatar && <img src={avatar} alt='' />}

        </div>
    )
}
