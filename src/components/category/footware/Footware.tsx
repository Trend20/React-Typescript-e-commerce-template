import {useSelector} from "react-redux";
import {Product} from "../../../types/product";
import SingleProduct from "../../../pages/products/SingleProduct";
import React from "react";

const Footware = () => {
  const {products} = useSelector((store:any) => store.products);
  const footwares = products.filter((product:any) => product.category.includes('Footware'));
  return (
      <div className='products'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {
            footwares.map((product: Product) => (
                <SingleProduct key={product.id} product={product}/>
            ))
          }
        </div>
      </div>
  )
}

export default Footware
