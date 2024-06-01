import React, {FC, useEffect, useState} from 'react'
import axios from "axios";
import {Product} from "../../types/product";
import SingleProduct from "./SingleProduct";
import {useDispatch} from "react-redux";
import {fetchAllProducts} from "../../features/slices/productSlice";

const Products:FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | any >(null);
    const dispatch = useDispatch();

  //   fetch products
    useEffect(() =>{
        const getAllProducts = async () => {
            try{
                const results = await axios.get('/products.json');
                // console.log(results);
                if(results.statusText !== 'OK'){
                   setLoading(false);
                }
                const data = await results.data;
                // console.log('data....', data)
                setProducts(data.products);
                dispatch(fetchAllProducts(data.products))
                setLoading(false);
            }catch (error){
                setError(error);
                setLoading(false);
            }
        }
        getAllProducts();
    },[])

    // console.log('products.....', products)

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
