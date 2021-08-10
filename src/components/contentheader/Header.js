import React from 'react';
import './Header.css';
import AvatarName from '../avatar-names/Name'
import Location from '../location/Location';
import Buttom from '../buttoms/Buttom'
export default function Header({ children }) {

    return (
        <div className='contentHeader'>
            {children}
            <div className='textBar'>
                <AvatarName />
                <Location />
                <Buttom />
            </div>
        </div>
    )
}