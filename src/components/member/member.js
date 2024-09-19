import React from 'react'
import "./member.css"


function Member(props) {

    const {name, role,image} = props;
  return (
    <div className='member'>
        <div className='member-img'>
            <img src={image} alt='member-img' />
        </div>
        <h3>{name}</h3>
        <p>{role.toUpperCase()}</p>
    </div>
  )
}

export default Member