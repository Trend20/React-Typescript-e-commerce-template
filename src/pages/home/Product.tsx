import {FC} from "react";
import {Product} from "../../assets/data/popular";
import {Link} from "react-router-dom";

interface ProductProps {
    product: Product
}

const SingleProduct:FC<ProductProps> = ({product}) =>{
    return (
        <Link to={`/store/products/${product.description}`} className='product-item' key={product.id}>
            <img src={product.img} alt={product.description}/>
            <p>{product.description}</p>
            <h6><strong>{product.price}</strong></h6>
        </Link>
    )
}

export default SingleProduct;