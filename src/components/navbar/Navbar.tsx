import React from 'react'
import {Link, NavigateFunction, useNavigate} from 'react-router-dom'
import { FaShoppingCart, FaBalanceScale, FaUserAlt} from 'react-icons/fa'


const Navbar = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate()
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Styler</h1>
      </div>
      <div className="nav-links">
          <ul>
              <Link to='/' className='navLinkItem active'>Home</Link>
              <Link to='/products' className='navLinkItem'>shops</Link>
              <Link to='/blog' className='navLinkItem'>Blog</Link>
              <Link to='/contacts' className='navLinkItem'>Contacts</Link>
          </ul>
      </div>

        <div className="nav-action">
            <p onClick={() => navigate('/cart')}><i><FaShoppingCart /></i></p>
            <p onClick={() => navigate('/comparison')}><i><FaBalanceScale /></i></p>
            <p onClick={() => navigate('/login')}><i><FaUserAlt /></i></p>
        </div>
    </div>
  )
}
export default Navbar;