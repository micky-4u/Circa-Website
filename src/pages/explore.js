import React from 'react'
import Proimage from './proimage'
import Prophone from './prophone' 
// import overlay from '../assets/images/overlay.png'


function Explore() {
  return (
    <div className='explore'>
                  {/* <div className='overlay'>
            <img src={overlay} alt='overlay' />
        </div> */}

        <div className='content'>
            <h2>Utilizing AI to connect businesses with other businesses and consumers.</h2>

            <p>Utilizing AI to connect businesses with other businesses and consumers.</p>
            <p>70% of businesses around the world cannot afford to operate online due to high costs and the need for technical expertise.</p>
            <p>Say hello to the e-qual Enterprise Distribution Software.</p>
            <p>Available on the Web and on Mobile.
            An Inexpensive end-to-end distribution software for Businesses that enables businesses to handle in real-time:</p>

            <p>-Orders
            <br></br>-Fulfillment
            <br></br>-Pickup and Delivery
            <br></br>-Real-Time Payment Processing</p>

            <p>The e-qual Enterprise Distribution Software comes with AI Analytics Tools for Businesses.</p>

        </div>
    </div>
  )
}

export default Explore