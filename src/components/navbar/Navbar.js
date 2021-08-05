import React from "react";
import "./Navbar.css";
import SearchInput from "../serach-input/Search";
import Logo from "../logo/Logo";
import Icon from "../icon-group/icon";

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <div className='nav-flow'>
                <Logo />
                <SearchInput />
                <Icon />
            </div>
        </nav>
    );
}
