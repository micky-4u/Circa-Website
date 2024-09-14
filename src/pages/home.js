import React from 'react'
import Button from '../components/button/button'
import overlay from '../assets/images/overlay.png'
function Home() {
  return (
    <section id="Home" className='home'>
        <div className='overlay'>
            <img src={overlay} alt='overlay' />
        </div>
        <div className='content'>
            <h1>WE ARE THE FUTURE ...</h1>

            <p>Welcome to <span>circa</span></p>
            <p>We build AI products that advance our individual and collective human experience</p>
            <p>
                We focus on 3 core ideas upon which we seek to make radical impact using AI in the coming years
            </p>

        </div>
        <Button label="EXPLORE circa"/>
        

    </section>
  )
}

export default Home