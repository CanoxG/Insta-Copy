import React from 'react';
import './Scard.css';
import Avatar from '../avatar/Avatar';
import AvatarProfile from '../../IMG_0031.JPG'


export default function Scard({ size = 'sm', src = AvatarProfile }) {

    return (
        <div className='sCard'>
            <Avatar size={size} src={src} />
            <div className='sCardText'>
                <div>cguven</div>
                <div className='font'>Followed by tnguven</div>
            </div>
        </div>
    )
}