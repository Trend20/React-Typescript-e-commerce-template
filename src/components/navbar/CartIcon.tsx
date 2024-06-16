import {FaShoppingCart} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const CartIcon = ({items}:any) =>{
    const navigate = useNavigate();
    return (
        <span
            className="flex relative"
            onClick={() => {
                navigate('/cart')
            }}>
                <i><FaShoppingCart fill="#023047"/></i>
                <p className="absolute left-5 -top-3">{items.length}</p>
            </span>
    )
}

export default CartIcon;