import React from 'react'
import { useState } from 'react'
import "./header.css"
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'



function Header() {
  
  const [checked, setChecked] = useState('')

  window.onscroll =() =>{
    console.log(window.scrollY)
    
    if(window.scrollY <779){
      setChecked("Home")
    }else if(window.scrollY >=780 && window.scrollY <=1466){
      setChecked("Projects")

    }else if(window.scrollY >=1465 && window.scrollY <=2645){
      setChecked("Team")

    }else{
      setChecked("Contact us")
    }
    // switch(window.scrollY){
    //   case 0:
    //     setChecked("Home")
    //     console.log(checked)
    //     break;
      
    //   case 780:
    //     setChecked("Projects")
    //     console.log(checked)

    //     break;
      
    //   case 1467:
    //     setChecked("Team")
    //     console.log(checked)

    //     break;
    // }
  }
  
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
              
            ><a className={checked===item?"active":"inactive"} href={`#${item}`}>{item}</a></li>
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