import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/DescriptionBox/Description';

const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
    </div>
  )
}

export default Product
