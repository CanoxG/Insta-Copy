import React from 'react';
import './AvatarProfile.css'
import AvatarName from '../avatar-names/Name'
import Avatar from '../../34c24f55-5673-449e-8e0d-b1a7e426e935.jpg'

export default function AvatarProfile({ size, src = Avatar }) {

    return (
        <ul>
            <li className='profile'>
                <img className={`avatar ${size = 'lg'}`} src={src} alt='Profile Avatar' />
                <AvatarName>
                    zlemakkus
                </AvatarName>
            </li>
        </ul>
    )
}