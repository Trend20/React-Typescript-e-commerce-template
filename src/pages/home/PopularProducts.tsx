import {FC} from "react";
import { popularProducts, type Product } from '../../assets/data/popular'
import SingleProduct from "./Product";

const PopularProducts:FC = () => {
  return (
        <div className='popular-products'>
            <h1>Popular Products</h1>
            <div className="product-items">
                {
                    popularProducts.map((product: Product) => {
                      return (
                            <SingleProduct key={product.id} product={product} />
                      )
                    })
                }
            </div>
        </div>
  )
}

export default PopularProducts
