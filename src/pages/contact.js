import React from 'react'

function Contact() {
  return (
    <div className='contacts'>
        <form method='post'>
            <div className='input-area'>
                <input type='text' placeholder='Name'/>
            </div>
            <div className="input-area">
                <input type='email'placeholder='Email' />
            </div>
            <div className='text-area'>
                <textarea type='text' />
            </div>
        </form>

    </div>
  )
}

export default Contact