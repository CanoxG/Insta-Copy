import React from 'react';
import AvatarProfile from '../avatar-profile/AvatarProfile';
import './AvatarList.css';


export default function AvatarList({ children }) {

    return (
        <div className='avatarList'>
            {children}
        </div>
    )
}