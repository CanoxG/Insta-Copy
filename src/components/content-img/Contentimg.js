import React from 'react';
import './Contentimg.css'
import Img from '../../1550393094_Yen Noir 2 by Bomyman.JPG'

export default function ContentPost({ src = Img }) {

    return (
        <div>
            <img className='img' src={src} alt='Content Img' />
        </div>

    )
}