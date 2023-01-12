import React from 'react';
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import './styles/app.css'

function App() {

  const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
      console.log(entry)
      if(entry.isIntersecting) entry.target.classList.toggle('show', entry.isIntersecting);
      else entry.target.classList.remove('show')
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach(el=>observer.observe(el))

  return (
    <div>
      <Header/>
      <Home/>
      <section className='hidden'>
        <About/>
      </section>
    </div>
  )
}

export default App;
