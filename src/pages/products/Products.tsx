import React, {FC} from 'react'
import {Product} from "../../types/product";
import SingleProduct from "./SingleProduct";

interface ProductsProps {
    loading: boolean;
    error: null | any;
    products: Product[];
}

const Products:FC<ProductsProps> = ({loading, error, products}) => {

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

  return (
    <div className='products'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {
                products.map((product: Product) => (
                    <SingleProduct key={product.id} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default Products
