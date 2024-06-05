import {FC} from "react";
import {Link} from "react-router-dom";
import {FaCartPlus} from "react-icons/fa";
import {useSelector} from "react-redux";


interface SingleProductProps {
    product: any
    addToCart: (product: any) => void
    removeFromCart: (product: any) => void
}

const SingleProduct:FC<SingleProductProps> = ({product,addToCart, removeFromCart}) =>{
    const {items} = useSelector((store:any) => store.cart)
    const isInCart = items.find((item:any) => item.id === product.id);
    return (
        <div className="flex flex-col justify-start space-y-2">
            <Link to={`/product/${product.id}`} className='product-item' key={product.id}>
                <img src={product.img} alt={product.description}/>
                <p>{product.description}</p>
                <h6><strong>${product.price}</strong></h6>
            </Link>
            {
                !isInCart ? <button onClick={() => addToCart(product)}
                                    className="flex bg-[#023047] p-3 text-white space-x-3 justify-center items-center w-36">
                        <FaCartPlus/>
                        <span>Add To Cart</span>
                    </button>
                    :
                    <button onClick={() => removeFromCart(product)}
                            className="flex bg-[#023047] p-3 text-white space-x-3 justify-center items-center w-36">
                        <span>Remove from Cart</span>
                    </button>
            }
        </div>
    )
}

export default SingleProduct;