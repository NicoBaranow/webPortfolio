import React from "react";
import {motion} from 'framer-motion'

import styles from '../styles/home.module.css'
import face from '../images/Face.svg'

export default function Home(){
    
    return(
        <div className={styles.home}>
            <motion.div className={styles.infoContainer}>
                <h1 className={styles.greeting}>Hi, I am <br></br></h1>
                <h1 className={styles.name}>Nicolas Baranowski</h1>
                <p className={styles.position}>Front-end developer</p>
                <button className={styles.work}>See my work</button>
            </motion.div>
            <motion.img src={face} alt="Face" className={styles.faceImage}></motion.img>
        </div>
    )
}