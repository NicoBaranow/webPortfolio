import React from 'react';

import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'

import './styles/app.css'

function App() {

//   const hiddenElements = document.querySelectorAll('.hidden') 

//   const observer = new IntersectionObserver(entries =>{
//     entries.forEach(entry=>{
//       console.log(entry)
//       entry.target.classList.toggle('show', entry.isIntersecting)
//     })
// },{
//   threshold:1,
// })

//   hiddenElements.forEach(el=>observer.observe(el))


  return (
    <div>
      <Header/>
      
      <section >
        <Home/>
      </section>

      <section >
        <About/>
      </section>

      <section >
        <Skills/>
      </section>
      
      <section >
        <Projects/>
      </section>

      <section >
        <Contact/>
      </section>
    </div>
  )
}

export default App;
