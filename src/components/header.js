import React from "react";
import '../styles/header.css'

export default function Header(){
    
    return(
        <header className="header">
            <h3 className="headerLogo">Nicolas Baranowski</h3>
            <ul className="headerLinks">
                <li><a href="about">About</a></li>
                <li><a href="about">Skills</a></li>
                <li><a href="about">Projects</a></li>
                <li><a href="about">Contact</a></li>
            </ul>
        </header>
    )
}