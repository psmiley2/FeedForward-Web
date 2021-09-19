import React from 'react'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'FeedForward',
}
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
