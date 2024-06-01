import {useSelector} from "react-redux";
import {Product} from "../../../types/product";
import SingleProduct from "../../../pages/products/SingleProduct";
import React from "react";

const Mens = () => {
  const {products} = useSelector((store:any) => store.products);
  const mens = products.filter((product:any) => product.category.includes('Men'));
  return (
      <div className='products'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {
            mens.map((product: Product) => (
                <SingleProduct key={product.id} product={product}/>
            ))
          }
        </div>
      </div>
  )
}

export default Mens
