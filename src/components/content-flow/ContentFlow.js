import React from "react";
import "./ContentFlow.css";

export default function ContentFlow({ children }) {
    return (
        <div className="contents">
            {children}
        </div>
    );
}
