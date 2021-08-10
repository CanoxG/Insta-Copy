import React from 'react';
import './Content.css';
import Header from '../contentheader/Header'
import Avatar from '../avatar/Avatar'

export default function Content() {

    return (
        <div className='content'>
            <Header>
                <Avatar />
            </Header>
        </div>
    )
}