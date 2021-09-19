import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({ color, text, link , onSubmit}) => {
    return (
        <Link to={link}>
        <button 
            style= {{backgroundColor: color}} 
            className='btn'
            onSubmit={onSubmit}
        >
            {text} 
        </button>
        </Link>
    )
}

export default Button
