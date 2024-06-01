import {useSelector} from "react-redux";
import React, {FC} from "react";
import {Product} from "../../../types/product";
import SingleProduct from "../../../pages/products/SingleProduct";

const Accessories:FC = () => {
  const {products} = useSelector((store:any) => store.products);
  const accessories = products.filter((product:any) => product.category === "Accessories");
  return (
      <div className='products'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {
            accessories.map((product: Product) => (
                <SingleProduct key={product.id} product={product}/>
            ))
          }
        </div>
      </div>
  )
}

export default Accessories
