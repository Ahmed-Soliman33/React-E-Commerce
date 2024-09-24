import React, { useEffect } from 'react'
import './DecriptionBox.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function DecriptionBox() {

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    return (
        <div className='DecriptionBox'>
            <div className='DecriptionBox-navigator'>
                <div className='DecriptionBox-nav-box' data-aos="fade-left"  data-aos-duration="700">Decription</div>
                <div className='DecriptionBox-nav-box fade' data-aos="fade-left"  data-aos-duration="800">Reviews (122)</div>
            </div>
            <div className='DecriptionBox-discription' data-aos="fade-down"  data-aos-duration="1000">
                <p>A lightweight, usually knitted , pullover shirt , close-fitting 
                    and Striped Flutter Sleeve Overlap Collar Peplum Hem BlouseA 
                    lightweight, usually knitted , pullover shirt , close-fitting and
                     Striped Flutter Sleeve Overlap Collar Peplum Hem BlouseA lightweight
                     , usually knitted , pullover shirt , close-fitting and Striped 
                     Flutter Sleeve Overlap Collar Peplum Hem BlouseA lightweight, 
                     usually knitted , pullover shirt , close-fitting and Striped Flutter
                      Sleeve Overlap Collar Peplum Hem BlouseA lightweight, usually 
                      knitted , pullover shirt .</p>
                      <p>
                      usually knitted , pullover shirt , close-fitting and Striped Flutter
                      Sleeve Overlap Collar Peplum Hem BlouseA lightweight, usually 
                      knitted , pullover shirt lightweight, usually knitted , pullover shirt , close-fitting 
                      and Striped Flutter Sleeve
                      </p>
            </div>
        </div>
    )
}
