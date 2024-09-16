import React from 'react'
import overlay from '../assets/images/overlay.png'
function Home() {
  return (
    <section id="Home" className='home'>
        <div className='overlay'>
            <img src={overlay} alt='overlay' />
        </div>
        <div className='content'>
            <h1>WE CREATE  THE FUTURE ...</h1>

            <p>Welcome to <span>circa</span>!</p>
            <p>We build AI products that advance our individual and collective human experience</p>
            <p>
            We aim to leverage AI and other advancements in computing to build <span>interconnected</span> and <span>interoperable</span> software and hardware products that operate in synergy to make radical impacts towards solving the biggest problems such as :
            Communicable and Terminal Diseases, Accidents, Famine, Poverty, Climate Crisis, Supply Chain Crisis, Education Crisis, Energy Crisis, Homelessness, Terrorism, Violent Crimes and the likes in Africa and other parts of the world.
            </p>

        </div>
        

    </section>
  )
}

export default Home