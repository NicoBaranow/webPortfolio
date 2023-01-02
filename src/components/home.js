import React from "react";
import '../styles/home.css'
import face from '../images/Face.svg'

export default function Header(){
    
    return(
        <div className="home">
            <div className="infoContainer">
                <h1 className="name">Hi, I am <br></br>Nicolas Baranowski</h1>
                <p className="position">Front-end developer</p>
                <button className="downloadButton">Download CV</button>
            </div>
            <img src={face} className="faceImage"></img>
        </div>
    )
}