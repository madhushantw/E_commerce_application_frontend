import React, { useContext } from 'react'
import { ShopContex } from '../Context/ShopContex'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay';
import Discription from '../Components/Discription';
import RelatedProduct from '../Components/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContex);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Discription />
      <RelatedProduct product={product}/>
    </div>
  )
}

export default Product