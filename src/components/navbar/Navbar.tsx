import { Link, type NavigateFunction, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaBalanceScale, FaUserAlt } from 'react-icons/fa'
import { navData } from '../../assets/data/navData'
import {FC} from "react";
import {useSelector} from "react-redux";
import CartIcon from "./CartIcon";

const Navbar: FC = () => {
    const navigate: NavigateFunction = useNavigate()
    const {items} = useSelector((store:any) => store.cart);
  return (
    <div className='navbar'>
      <div className="logo">
          <Link to={'/'} className="flex">
              <img src="/logo.png" alt="logo" className="w-24"/>
          </Link>
      </div>
        <div className="nav-links">
            <ul>
                {
                    navData.map((item) => (
                        <Link key={item.id} to={item.url} className='navLinkItem'>{item.name}</Link>
                    ))
                }
            </ul>
        </div>
        <div className="nav-action cursor-pointer">
            <CartIcon items={items}/>
            <span className="flex relative" onClick={() => {
                navigate('/comparison')
            }}>
                <i><FaBalanceScale fill="#023047"/></i>
                <p className="absolute left-5 -top-3">{items.length}</p>

            </span>
            <p onClick={() => {
                navigate('/login')
            }} id='auth-icon'><i><FaUserAlt  fill="#023047"/></i></p>
        </div>
    </div>
  )
}
export default Navbar
