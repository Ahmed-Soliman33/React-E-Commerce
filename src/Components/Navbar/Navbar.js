import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cartIcon from '../Assets/cart_icon.png'
import { Link, redirect } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Bounce, toast, ToastContainer, Zoom } from 'react-toastify'



export default function Navbar() {

    const [menu, setMenu] = useState("shop")
    const menuRef = useRef();
    const name = localStorage.getItem("name")
    const password = localStorage.getItem("password")
    const { totalItems } = useContext(ShopContext)




    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle("nav-menu-visible")
        e.target.classList.toggle("open")
    }

    const btnHandle = () => {
        if (name && password) {
            toast.success('Account has been Deleted', {
                position: "top-right",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
                });
            setTimeout( ()=> {
                window.location.assign('/signup')
                localStorage.clear()
            },2000)
        }
        else {
            window.location.assign('/login')
        }
    }

    return (

        <div className='navbar'>
            <Link to='/' className='nav-logo' >
                <img className='nav-logo-img1' src={logo} />
                <p className='nav-logo-img2'>evo<span>Shop</span></p>
            </Link>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => { setMenu("shop") }} > <Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("men") }} ><Link to='/mens'>Men</Link>{menu === "men" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("women") }} ><Link to='/womens'>Women</Link>{menu === "women" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("kids") }} ><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : null}</li>
            </ul>
            <div className='nav-login-cart' >
                <button onClick={btnHandle} >{name && password ? "Log Out" : 'Log In'}</button>
                <Link to="/cart"><img src={cartIcon} /></Link>
                <div className='nav-cart-count'>{totalItems}</div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
            </div>
        </div>
    )
}
