import React from "react";

import reactJS from '../images/ReactJS.png'
import JS from '../images/JavaScript.jpg'
import css from '../images/css.png'

import styles from '../styles/skills.module.css'

export default function Skills(){
    
    return(
        <div className={styles.skills}>
            <h1 className={styles.title}>Skills</h1><br/>
            <ul className={styles.images}>
                <li><img src={reactJS}></img></li>
                <li><img src={JS}></img></li>
                <li><img src={css}></img></li>
            </ul>
        </div>
    )
}