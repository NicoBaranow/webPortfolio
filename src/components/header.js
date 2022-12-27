import React from "react";
import ReactDOM  from "react-dom";
import '../styles/header.css'

export default function Header(){
    
    return(
        <header className="header">
            <h3 className="headerLogo">Nicolas Baranowski</h3>
            <div className="headerLinks">
                <h4>About</h4>
                <h4>Skills</h4>
                <h4>Projects</h4>
                <h4>Contact</h4>
            </div>
        </header>
    )
}