import React from 'react'
import { useState } from 'react'
import "./header.css"
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'



function Header1(props) {
  const {menu, color} = props;
  const [checked, setChecked] = useState(menu)
  const [textcolor, setTextColor] = useState(color)

  window.onscroll =() =>{
    
    if(menu != "Projects"){

    
    if(window.scrollY <759){
      setChecked("Home")
      setTextColor("inactive")
    }else if(window.scrollY >=760 && window.scrollY <=1466){
      setChecked("Projects")
      setTextColor("shade")

    }else if(window.scrollY >=1465 && window.scrollY <=2615){
      setChecked("Team")
      setTextColor("inactive")

    }else{
      setChecked("Contact us")
      setTextColor("shade")
    }

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


        <div className='user-reactions'>
            <box-icon type='logo' name='facebook-circle'></box-icon>
            <box-icon name='twitter' type='logo' ></box-icon>
            <box-icon name='instagram-alt' type='logo' ></box-icon>
        </div>
    </div>
  )
}

export default Header1;