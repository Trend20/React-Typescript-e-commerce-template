import React, {FC} from 'react'
import {Product} from "../../types/product";
import SingleProduct from "./SingleProduct";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../features/slices/cartSlice";
import {addProductToCart} from "../../features/slices/productSlice";

interface ProductsProps {
    loading: boolean;
    error: null | any;
    products: Product[];
}

const Products:FC<ProductsProps> = ({loading, error, products}) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product:any) => {
        if(product){
            const productWithCartStatus = { ...product, cart_status: 'in cart' };
            dispatch(addItemToCart(productWithCartStatus));
            dispatch(addProductToCart(productWithCartStatus));
        }
    };

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

  return (
    <div className='products'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {
                products.map((product: Product) => (
                    <SingleProduct key={product.id} product={product} addToCart={handleAddToCart} />
                ))
            }
        </div>
    </div>
  )
}

export default Products
