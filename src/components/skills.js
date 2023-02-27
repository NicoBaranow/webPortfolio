import React from "react";
import {motion} from 'framer-motion'

import reactJS from '../images/ReactJS.png'
import JS from '../images/JavaScript.jpg'
import css from '../images/css.png'
import git from '../images/git.png'

import styles from '../styles/skills.module.css'
import { MotionConfig } from "framer-motion";

export default function Skills(){
    
    const skillsArray = [
        {
            name: 'JavaScript',
            usage:'Used for making the web interactive',
            logo: JS
        },
        {
            name: 'CSS',
            usage:'Used for styling webpages and adding personality to it',
            logo: css
        },
        {
            name: 'React JS',
            usage:'Used for creating beautiful interfaces quickly and efficiently',
            logo: reactJS
        },
        {
            name: 'Git',
            usage:'Used for working on different versions of the same project with a team',
            logo: git
        },
        
    ]


    return(
        <div className={styles.skills}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.allSkillsCards}>
                {skillsArray.map((skill, index)=>{
                    return(
                        <motion.div key={index} className={styles.skillCard}>
                            <img src={skill.logo} className={styles.skillCardLogo}></img>
                            <h2 className={styles.skillCardName}>{skill.name}</h2>
                            <h3 className={styles.skillCardUsage}>{skill.usage}</h3>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}