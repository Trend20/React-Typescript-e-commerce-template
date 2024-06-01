import { onsaleProducts, type Product } from '../../assets/data/popular'
import {Link} from "react-router-dom";
import {FC} from "react";

const ProductsOnSale:FC = () => {
  return (
        <div className='onsale-products'>
            <h1>On Sale Products</h1>
            <div className="product-items">
                {
                    onsaleProducts.map((item: Product) => {
                      return (
                            <Link to={'/'} className='product-item' key={item.id}>
                                <img src={item.img} alt={item.description}/>
                                <p>{item.description}</p>
                                <h6><strong>{item.price}</strong></h6>
                            </Link>
                      )
                    })
                }
            </div>
        </div>
  )
}

export default ProductsOnSale
