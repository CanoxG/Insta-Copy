import React from 'react';
import './Name.css'

export default function Name({ align, children }) {

    return (
        <div className={`nameText ${align}`}>
            {children}
        </div>
    )

}