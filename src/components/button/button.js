import React from 'react'
import "./button.css"

function Button(props) {
    const {label, color} = props

    
  return (
    <div className='btn-nav'>
        <p>{label}</p>
        <box-icon name='right-arrow-alt' color={color} size="sm"></box-icon>

    </div>
  )
}

export default Button