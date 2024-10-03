import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DecriptionBox from '../Components/DecriptionBox/DecriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {

  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  console.log(productId)

  const product = all_product.find((ele) => ele.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DecriptionBox />
      <RelatedProducts />
    </div>
  )
}
export default React.memo(Product)