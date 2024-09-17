import React from 'react'
import "./button.css"
import { Link } from "react-router-dom";

function Button(props) {
    const {label, color} = props

    
  return (
    <Link reloadDocument to ={"projects"} className='btn-nav'>
        <p>{label}</p>
        <box-icon name='right-arrow-alt' color={color} size="sm"></box-icon>

    </Link>
  )
}

export default Button