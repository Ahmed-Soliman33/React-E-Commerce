import React, { useEffect } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Item(props) {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div className='item'  data-aos="flip-left"  data-aos-duration="1500" >
       <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} /></Link> 
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                ${props.new_price}
            </div>
            <div className='item-price-old'>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}
