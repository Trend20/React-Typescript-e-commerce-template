import {FC} from "react";
import { popularProducts } from '../../assets/data/popular'
import SingleProduct from "../../components/SingleProduct";
import {Product} from "../../types/product";

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
