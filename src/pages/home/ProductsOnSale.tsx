import { onsaleProducts } from '../../assets/data/popular'
import {FC} from "react";
import {Product} from "../../types/product";
import SingleProduct from "../products/SingleProduct";

const ProductsOnSale:FC = () => {
  return (
        <div className='onsale-products'>
            <h1>On Sale Products</h1>
            <div className="product-items">
                {
                    onsaleProducts.map((item: Product) => {
                      return (
                            <SingleProduct key={item.id} product={item} />
                      )
                    })
                }
            </div>
        </div>
  )
}

export default ProductsOnSale
