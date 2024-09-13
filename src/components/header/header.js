import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header'>
        <div className='logo-area'>
            <img src='' alt='logo' />
        </div>

        <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Team</li>
            <li>Contact us</li>
        </ul>

        <div className='user-reactions'>
            <box-icon type='logo' name='facebook-circle'></box-icon>
            <box-icon name='twitter' type='logo' ></box-icon>
            <box-icon name='instagram-alt' type='logo' ></box-icon>
        </div>
    </div>
  )
}

export default Header;