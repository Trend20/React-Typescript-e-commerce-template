import React, {FC, useEffect, useState} from 'react'
import axios from "axios";

const Products:FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | any >(null);

  //   fetch products
    useEffect(() =>{
        const getAllProducts = async () => {
            try{
                const results = await axios.get('/products.json')
                console.log(results)
            }catch (error){
                setError(error);
                setLoading(false);
            }
        }
        getAllProducts();
    },[])
  return (
    <div className='products'>
        <h1>Available Products</h1>
    </div>
  )
}

export default Products
