import React from "react";
import styles from '../styles/header.module.css'

export default function Header(){
    
    return(
        <header className={styles.header}>
            <h3 className={styles.headerLogo}>Nicolas Baranowski</h3>
            <ul className={styles.headerLinks}>
                <li><a href="about">Skills</a></li>
                <li><a href="about">Projects</a></li>
                <li><a href="about">About</a></li>
                <li><a href="about">Contact</a></li>
            </ul>
        </header>
    )
}