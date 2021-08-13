import React from 'react';
import './Name.css'

export default function Name({ align, position, children }) {

    return (
        <div className={`nameText ${align} ${position}`}>
            {children}
        </div>
    )

}