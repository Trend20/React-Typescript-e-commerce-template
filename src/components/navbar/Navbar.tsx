import { Link, type NavigateFunction, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaBalanceScale, FaUserAlt } from 'react-icons/fa'
// import { useSelector } from 'react-redux'
import { navData } from '../../assets/data/navData'
import {FC} from "react";

const Navbar: FC = () => {
  const navigate: NavigateFunction = useNavigate()
  // const { isLoggedIn, user } = useSelector((store: any) => store.auth)
  return (
    <div className='navbar'>
      <div className="logo">
        <h1 onClick={() => { navigate('/') }}>Styler</h1>
      </div>
      <div className="nav-links">
          {
            navData.map((item) => (
              <ul key={item.id}>
                <Link to={item.url} className='navLinkItem'>{item.name}</Link>
              </ul>
            ))
          }
      </div>
        <div className="nav-action cursor-pointer">
            <p onClick={() => { navigate('/cart') }}><i><FaShoppingCart /></i></p>
            <p onClick={() => { navigate('/comparison') }}><i><FaBalanceScale /></i></p>
            <p onClick={() => { navigate('/login') }} id='auth-icon'><i><FaUserAlt /></i></p>
        </div>
    </div>
  )
}
export default Navbar
