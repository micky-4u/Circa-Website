import React from 'react'
import overlay from '../assets/images/proimg.png'
import Button from '../components/button/button'


function Projects() {
  return (
    <section id="Projects" className='projects'>
          <div className='overlay'>
            <img src={overlay} alt='overlay' />
        </div>

        <div className='content'>
            <h1>PROJECTS 1</h1>

            <p><span>e-qual Cloud Distribution Software.</span></p>
            <p>What if every business in the world could operate on the internet?</p>


        </div>
        <Button id="btn" label="Explore e-qual" color="#000" />

    </section>
  )
}

export default Projects