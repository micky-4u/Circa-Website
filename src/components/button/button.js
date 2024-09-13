import React from 'react'
import "./button.css"

function Button(props) {

    const {label} = props
  return (
    <div className='btn-nav'>
        <p>{label}</p>
        <box-icon name='right-arrow-alt' color="#fff" size="sm"></box-icon>

    </div>
  )
}

export default Button