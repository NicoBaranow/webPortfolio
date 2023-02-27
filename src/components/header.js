import React from "react";
import {motion} from 'framer-motion'

import styles from '../styles/header.module.css'

export default function Header(){
    

    return(
        <motion.header className={styles.header}
            initial={{y:-100}}
            animate={{y:0}}
            transition={{duration:1}}
        >
            <h3 className={styles.headerLogo}>Nicolas Baranowski</h3>
            <ul className={styles.headerLinks}>
                <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{duration:0.01}}>Skills</motion.li>
                <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{duration:0.01}}>Projects</motion.li>
                <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{duration:0.01}}>About</motion.li>
                <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{duration:0.01}}>Contact</motion.li>
            </ul>

        </motion.header>
    )
}