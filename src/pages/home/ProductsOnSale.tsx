import { onsaleProducts } from '../../assets/data/popular'
import {FC} from "react";
import {Product} from "../../types/product";
import SingleProduct from "../products/SingleProduct";
import {addItemToCart} from "../../features/slices/cartSlice";
import {useDispatch} from "react-redux";

const ProductsOnSale:FC = () => {
    const dispatch = useDispatch();
    const handleAddToCart = (product:any) => {
        dispatch(addItemToCart(product));
    };
  return (
        <div className='onsale-products'>
            <h1>On Sale Products</h1>
            <div className="product-items">
                {
                    onsaleProducts.map((item: Product) => {
                      return (
                            <SingleProduct key={item.id} product={item} addToCart={handleAddToCart}/>
                      )
                    })
                }
            </div>
        </div>
  )
}

export default ProductsOnSale
