import React, { useContext, useEffect } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import Navbar from '../Components/Navbar/Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} data-aos="fade-right" />
      <div className='shopCategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopCategory-sort'>
          Sort by <img src={dropdown_icon} />
        </div>
      </div>
      <div className='shopCategory-products'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} data-aos="fade-down" />
          }
          else {
            return null;
          }
        })}
      </div>
      <a href=""><div className='shopCategory-loadmore' data-aos="fade-down">
        Explore More
      </div></a>
    </div>
  )
}
export default React.memo(ShopCategory)