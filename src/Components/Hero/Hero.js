import React from 'react'
import './Hero.css'
import arrowIcon from '../Assets/arrow.png'
import heroImg from '../Assets/hero_image.png'
import tShirtImg from '../Assets/shit-red.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left' >
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn' onClick={() => { window.scrollTo(0, 1700) }} >
                    <div>Latest Collection</div>
                    <img src={arrowIcon} />
                </div>
                <img className='tShirtImg' src={tShirtImg} />
            </div>
            <div className='hero-right'>
                <img src={heroImg} />
            </div>

        </div>
    )
}

export default React.memo(Hero)