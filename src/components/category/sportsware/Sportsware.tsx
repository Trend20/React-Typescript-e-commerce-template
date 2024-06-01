import {useSelector} from "react-redux";
import {Product} from "../../../types/product";
import SingleProduct from "../../../pages/products/SingleProduct";
import React from "react";

const Sportsware = () => {
  const {products} = useSelector((store:any) => store.products);
  const sportsware = products.filter((product:any) => product.category.includes('Sportsware'));
  return (
      <div className='products'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {
              sportsware.map((product: Product) => (
                <SingleProduct key={product.id} product={product}/>
            ))
          }
        </div>
      </div>
  )
}

export default Sportsware
