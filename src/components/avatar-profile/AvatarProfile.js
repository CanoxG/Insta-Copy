import React from 'react';
import './AvatarProfile.css'
import Name from '../avatar-names/Name'
import Avatar from '../../34c24f55-5673-449e-8e0d-b1a7e426e935.jpg'

export default function AvatarProfile({ size = 'lm', src = Avatar }) {

    return (
        <ul>
            <li className='profile'>
                <img className={`avatar ${size}`} src={src} alt='Profile Avatar' />
                <Name />
            </li>
        </ul>
    )
}