import React from 'react'
import {Link, NavigateFunction, useNavigate} from 'react-router-dom'
import { FaShoppingCart, FaBalanceScale, FaUserAlt} from 'react-icons/fa'
import { useSelector} from "react-redux";


const Navbar = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate()
    const { isLoggedIn, user } = useSelector((store: any) => store.auth)
  return (
    <div className='navbar'>
      <div className="logo">
        <h1 onClick={() => navigate('/')}>Styler</h1>
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
            <p onClick={() => navigate('/login')} id='auth-icon'><i><FaUserAlt /></i> {isLoggedIn ? user.firstName : 'Account'}</p>
        </div>
    </div>
  )
}
export default Navbar;