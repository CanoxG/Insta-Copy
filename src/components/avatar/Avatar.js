import React from 'react';
import './Avatar.css'
import AvatarProfile from '../../IMG_0031.JPG'

export default function Avatar({ size = "sm", src = AvatarProfile }) {

    return (
        <div className={`profile ${size}`}>
            <img className={`avatar ${size}`} src={src} alt='Profile Avatar' />
        </div>
    )
}