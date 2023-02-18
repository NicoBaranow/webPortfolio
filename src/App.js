import {React} from 'react';
import AOS from 'aos';

import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'

import styles from './styles/app.module.css'

function App() {

  AOS.init({duration: 1200})

  return (
    <div className={styles.container}> 
      <section data-aos="fade-down">
        <Header/>
      </section>
      
      <section>
        <Home/>
      </section>

      <section data-aos="fade-up"
      data-aos-anchor-placement="top-center">
        <Skills/>
      </section>

      <section data-aos="fade-up"
      data-aos-anchor-placement="top-center">
        <Projects/>
      </section>

      <section data-aos="fade-up"
      data-aos-anchor-placement="top-center">
        <About/>
      </section>

      <section data-aos="fade-up"
      data-aos-anchor-placement="top-center">
        <Contact/>
      </section>
    </div>
  )
}

export default App;
