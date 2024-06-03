import {FC} from "react";
import {Link} from "react-router-dom";
import {Product} from "../../types/product";
import AddToCart from "../../components/AddToCart";


interface ProductProps {
    product: Product
}

const SingleProduct:FC<ProductProps> = ({product}) =>{
    return (
        <div className="flex flex-col justify-start space-y-2">
            <Link to={`/product/${product.id}`} className='product-item' key={product.id}>
                <img src={product.img} alt={product.description}/>
                <p>{product.description}</p>
                <h6><strong>${product.price}</strong></h6>
            </Link>
            <AddToCart />
        </div>
    )
}

export default SingleProduct;