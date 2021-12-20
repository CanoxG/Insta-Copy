import React from 'react';
import './Contentimg.css'

export function ContentPost({ src }) {

    return (
        <div>
            <img className='img' src={src} alt='Content Img'/>
        </div>
    )
}