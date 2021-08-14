import React from 'react';
import './AvatarProfile.css'
import AvatarName from '../avatar-names/Name'
import Avatar from '../../it-chapter-two-4883x3848-clown-pennywise-2019-4k-18540.JPG'

export default function AvatarProfile({ size, src = Avatar }) {

    return (
        <ul>
            <li className={`profile ${size}`}>
                <img className={`avatar ${size = 'lg'}`} src={src} alt='Profile Avatar' />
                <AvatarName>
                    zlemakkus
                </AvatarName>
            </li>
        </ul>
    )
}