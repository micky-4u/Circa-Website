import React from 'react'
import overlay from '../assets/images/conimg.png'

function Contact() {
  return (
    <section id="Contact us"className='contacts'>
        <div className='overlay'>
            <img src={overlay} alt='overlay' />
        </div>

        <form method='post'>
            <div className='input-area'>
            <box-icon type='solid' name='user' color="#fff"></box-icon>
                <input type='text' placeholder='Name'/>
            </div>
            <div className="input-area">
            <box-icon name='envelope' type='solid' color="#fff"></box-icon>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='text-area'>
                <textarea type='text'  placeholder='Message'/>
            </div>

            <div>
                <button>Send Message</button>
            </div>
        </form>

    </section>
  )
}

export default Contact