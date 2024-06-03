import {FC} from "react";
import { popularProducts } from '../../assets/data/popular'
import SingleProduct from "../products/SingleProduct";
import {Product} from "../../types/product";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../features/slices/cartSlice";

const PopularProducts:FC = () => {
    const dispatch = useDispatch();
    const handleAddToCart = (product:any) => {
        dispatch(addItemToCart(product));
    };
  return (
        <div className='popular-products'>
            <h1>Popular Products</h1>
            <div className="product-items">
                {
                    popularProducts.map((product: Product) => {
                      return (
                            <SingleProduct key={product.id} product={product} addToCart={handleAddToCart}/>
                      )
                    })
                }
            </div>
        </div>
  )
}

export default PopularProducts
