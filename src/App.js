import {React} from 'react';

import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'

import styles from './styles/app.module.css'

function App() {

  return (
    <div className={styles.container}> 
      <Header/>
      
      <section>
        <Home/>
      </section>

      <section>
        <Skills/>
      </section>

      <section>
        <Projects/>
      </section>

      <section>
        <About/>
      </section>

      <section>
        <Contact/>
      </section>
    </div>
  )
}

export default App;
