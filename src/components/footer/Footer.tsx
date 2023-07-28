import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <p>Footer Logo Here</p>
      </div>
        <ul>
            <Link to='/services'>Footer Link 1</Link>
            <Link to='/services'>Footer Link 2</Link>
            <Link to='/services'>Footer Link 3</Link>
        </ul>
    </div>
  )
}

export default Footer;