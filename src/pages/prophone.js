import React from 'react'
import overlay from '../assets/images/prophone.png'
import overlay1 from '../assets/images/prophone1.png'


function Prophone() {
  return (
    <div className='prophone'>
        <div className='overlay'>
            <img src={overlay} alt='overlay' />
        </div>

        <div className='content'>
          <div>

            <p>
            One App for customers of all businesses.
            </p>
            <p>
            -A Million Shops in Your Pocket!
            </p>

            <p>-Free P2P Payments</p>
            <p>-A powerful AI Assistant</p>
          </div>
            <div>
            <img src={overlay1} alt='overlay' />
            </div>
        </div>

    </div>
  )
}

export default Prophone