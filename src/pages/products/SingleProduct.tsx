import {FC} from "react";
import {Link} from "react-router-dom";
// import {Product} from "../../types/product";
import {FaCartPlus} from "react-icons/fa";


interface SingleProductProps {
    product: any
    addToCart: (product: any) => void
}

const SingleProduct:FC<SingleProductProps> = ({product,addToCart}) =>{
    const status = product.cart_status;
    return (
        <div className="flex flex-col justify-start space-y-2">
            <Link to={`/product/${product.id}`} className='product-item' key={product.id}>
                <img src={product.img} alt={product.description}/>
                <p>{product.description}</p>
                <h6><strong>${product.price}</strong></h6>
            </Link>
            {
                status === 'Not in Cart' ?
                    <button onClick={() => addToCart(product)}
                            className="flex bg-[#023047] p-3 text-white space-x-3 justify-center items-center w-36">
                        <FaCartPlus/>
                        <span>Add To Cart</span>
                    </button>
                    :
                    <button
                            className="flex bg-[#023047] p-3 text-white space-x-3 justify-center items-center w-36">
                        <span>Remove from Cart</span>
                    </button>
            }
        </div>
    )
}

export default SingleProduct;