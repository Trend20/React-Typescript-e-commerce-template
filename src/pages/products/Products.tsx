import React, {FC} from 'react'
import {Product} from "../../types/product";
import SingleProduct from "./SingleProduct";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../features/slices/cartSlice";
import {addProductToCart} from "../../features/slices/productSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/common/Loader";

interface ProductsProps {
    loading: boolean;
    error: null | any;
    products: Product[];
    hasMore: boolean;
    getAllProducts: () => Promise<void>;
}

const Products:FC<ProductsProps> = ({loading, hasMore, error, products, getAllProducts}) => {
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
        <InfiniteScroll next={getAllProducts} hasMore={hasMore} loader={<Loader />} dataLength={products.length}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {
                    products.map((product: Product) => (
                        <SingleProduct key={product.id} product={product} addToCart={handleAddToCart}/>
                    ))
                }
            </div>
        </InfiniteScroll>
    </div>
  )
}

export default Products;
