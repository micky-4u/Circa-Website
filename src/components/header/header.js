import React from 'react'
import { useState } from 'react'
import "./header.css"
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'


function Header() {

  const [checked, setChecked] = useState('Home')

  const handleMenu = (item) =>{
    setChecked(item)
    
  }

  const items = ["Home","Projects","Team","Contact us"]
  return (
    <div className='header'>
        <Link to={"/"}className='logo-area'>
            <img src={logo} alt='logo1' />
        </Link>

        <ul>
          {items.map((item)=>(
            <li 
              key={item}
              onClick={() =>handleMenu(item)}
              className={checked===item?"active-menu":"none"}
            ><a href={`#${item}`}>{item}</a></li>
          ))}
            {/* <li onClick={handleMenu} className={checked?"active-menu":"none"}>Home</li>
            <li onClick={handleMenu} className={checked?"active-menu":"none"}>Projects</li>
            <li onClick={handleMenu} className={checked?"active-menu":"none"}>Team</li>
            <li onClick={handleMenu} className={checked?"active-menu":"none"}>Contact us</li> */}
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