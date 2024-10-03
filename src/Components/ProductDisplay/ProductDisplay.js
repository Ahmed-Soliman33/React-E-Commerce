import React, { useContext, useEffect } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import {ShopContext} from '../../Context/ShopContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return (
        <div className='product-display' >
            <div className='product-display-left'  >
                <div className='product-display-img-list'>
                    <img src={product.image} data-aos="zoom-in"  data-aos-duration="1100" />
                    <img src={product.image} data-aos="zoom-in"  data-aos-duration="1200" />
                    <img src={product.image} data-aos="zoom-in"  data-aos-duration="1300" />
                    <img src={product.image} data-aos="zoom-in"  data-aos-duration="1400" />
                </div>
                <div className='product-display-img'>
                    <img className='product-display-main-img' src={product.image} data-aos="zoom-in"  data-aos-duration="1000" />
                </div>
            </div>
            <div className='product-display-right' >
                <h1>{product.name}</h1>
                <div className='product-display-right-stars' >
                    <img src={star_icon} data-aos="fade-down-left"  data-aos-duration="800" />
                    <img src={star_icon} data-aos="fade-down-left"  data-aos-duration="900" />
                    <img src={star_icon} data-aos="fade-down-left"  data-aos-duration="1000" />
                    <img src={star_icon} data-aos="fade-down-left"  data-aos-duration="1100" />
                    <img src={star_dull_icon} data-aos="fade-down-left"  data-aos-duration="1200" />
                    <p>(122)</p>
                </div>
                <div className='product-display-right-prices'>
                    <div className='product-display-right-price-old'>${product.old_price}</div>
                    <div className='product-display-right-price-new'>${product.new_price}</div>
                </div>
                <div className='product-display-right-description'>
                    A lightweight, usually knitted , pullover shirt , 
                    close-fitting and Striped Flutter Sleeve Overlap 
                    Collar Peplum Hem Blouse
                </div>
                <div className='product-display-right-size'>
                    <h1>Select Size</h1>
                    <div className='product-display-right-sizes'>
                        <div data-aos="fade-left"  data-aos-duration="700" >S</div>
                        <div data-aos="fade-left"  data-aos-duration="800" >M</div>
                        <div data-aos="fade-left"  data-aos-duration="900" >L</div>
                        <div data-aos="fade-left"  data-aos-duration="1000" >XL</div>
                        <div data-aos="fade-left"  data-aos-duration="1100" >XXL</div>
                    </div>
                </div>
                <button onClick={(e)=> {addToCart(product.id)}} >ADD TO CART</button>
                <p className='product-display-right-category'><span>Category :</span> Women , T-Shirt, Crop Top</p>
                <p className='product-display-right-category'><span>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    )
}
export default React.memo(ProductDisplay)