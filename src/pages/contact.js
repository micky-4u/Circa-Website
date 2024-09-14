import React from 'react'

function Contact() {
  return (
    <div id="Contact us"className='contacts'>
        <form method='post'>
            <div className='input-area'>
            <box-icon type='solid' name='user'></box-icon>
                <input type='text' placeholder='Name'/>
            </div>
            <div className="input-area">
            <box-icon name='envelope' type='solid' ></box-icon>
                <input type='email'placeholder='Email' />
            </div>
            <div className='text-area'>
                <textarea type='text'  placeholder='Message'/>
            </div>
        </form>

    </div>
  )
}

export default Contact