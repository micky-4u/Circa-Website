import React from 'react'
import overlay from '../assets/images/prophone.png'

function Prophone() {
  return (
    <div className='prophone'>
        <div className='overlay'>
            <img src={overlay} alt='overlay' />
        </div>

        <div className='content'>
            <p>
            One App for customers of all businesses.
            </p>
            <p>
            -A Million Shops in Your Pocket!
            </p>

            <p>-Free P2P Payments</p>
            <p>-A powerful AI Assistant</p>
        </div>

    </div>
  )
}

export default Prophone