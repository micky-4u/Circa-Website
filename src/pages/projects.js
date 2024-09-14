import React from 'react'
import Button from '../components/button/button'
import overlay from '../assets/images/overlay.png'


function Projects() {
  return (
    <section id="Projects" className='home projects'>
                <div className='overlay'>
            <img src={overlay} alt='overlay' />
        </div>
        <div className='content'>
            <h1>PROJECTS</h1>

            <p>e-qual Cloud Distribution Software</p>
            <p>Utilizing AI to connect business with other business and consumers</p>
        </div>
        <Button label="EXPLORE  e-qual"/>
        

    </section>
  )
}

export default Projects