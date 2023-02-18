import React from "react";
import styles from '../styles/home.module.css'
import face from '../images/Face.svg'
import AOS from 'aos';

export default function Home(){
    
    AOS.init({duration: 1200})

    return(
        <div className={styles.home}>
            <div className={styles.infoContainer} data-aos="fade-right">
                <h1 className={styles.greeting}>Hi, I am <br></br></h1>
                <h1 className={styles.name}>Nicolas Baranowski</h1>
                <p className={styles.position}>Front-end developer</p>
                <button className={styles.downloadButton}>Download CV</button>
            </div>
            <img src={face} alt="Face" className={styles.faceImage} data-aos="fade-left"></img>
        </div>
    )
}