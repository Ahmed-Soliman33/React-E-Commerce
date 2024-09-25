import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import github_icon from '../Assets/github-sign.png'
import linkedin_icon from '../Assets/linkedin_icon.jpg'
import facebook_icon from '../Assets/facebook.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
        <Link to='/' className='footer-logo'>
            <img src={footer_logo} />
            <p>evo<span>Shop</span></p>
        </Link>
        <ul className='footer-links'>
            <Link to='/cart' ><li>Your Cart</li></Link>
            <Link to='/' ><li>Shop</li></Link>
            <Link to='/mens' ><li>Men</li></Link>
            <Link to='/womens' ><li>Women</li></Link>
            <Link to='/kids' ><li>Kids</li></Link>
        </ul>
        <div className='footer-social-icon'>
             <div className='footer-icon-container'>
                <a target='_blank' href="https://github.com/Ahmed-Soliman33"><img src={github_icon} /></a>
             </div>
             <div className='footer-icon-container'>
                <a target='_blank' href="https://www.linkedin.com/in/ahmed-soliman-19901b325"><img src={linkedin_icon} /></a>
             </div>
             <div className='footer-icon-container'>
                <a target='_blank' href="https://www.facebook.com/570ahmedelfares"><img src={facebook_icon} /></a>
             </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Coded By <span>Ahmed Soliman</span></p>
        </div>
    </div>
  )
}
