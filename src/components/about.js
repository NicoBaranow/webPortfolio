import {React} from 'react';

import styles from '../styles/about.module.css'

export default function About(){

    return(
        <div className={styles.about}>
                <h1 className={styles.title}>About me</h1>
                <p className={styles.text}>
                    Born in Buenos Aires, Argentina, I became a self-taught Front end Developer and I'm ready to show my potential and transform dreams into web pages.<br/><br/>
                    Besides being a developer, I am passionate about finance and trading.
                </p>
        </div>
    )
}