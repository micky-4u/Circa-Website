import React from 'react'
import { useState } from 'react'
import "./header.css"
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'



function Header(props) {
  const {menu, color,background} = props;
  const [checked, setChecked] = useState(menu)
  const [textcolor, setTextColor] = useState(color)
  const [bg, setBg] = useState(background)

  window.onscroll =() =>{
    console.log(scrollY)
    if(menu != "Projects"){

    
    if(window.scrollY <749){
      setChecked("Home")
      setTextColor("inactive")
      setBg("whitebg")
    }else if(window.scrollY >=750 && window.scrollY <=1499){
      setChecked("Projects")
      setTextColor("shade")
      setBg("darkbg")

    }else if(window.scrollY >=1500 && window.scrollY <=2549){
      setChecked("Team")
      setTextColor("inactive")
      setBg("whitebg")


    }else{
      setChecked("Contact us")
      setTextColor("shade")
      setBg("darkbg")

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
    <div className={`header ${bg}`}>
        <Link to={"/"}className='logo-area'>
            <img src={logo} alt='logo1' />
        </Link>

        <ul>
          {items.map((item)=>(
            <li 
              key={item}
              onClick={() =>handleMenu(item)}
              
            ><a className={checked===item?"active":textcolor} href={`#${item}`}>{item.toLocaleUpperCase()}</a></li>
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