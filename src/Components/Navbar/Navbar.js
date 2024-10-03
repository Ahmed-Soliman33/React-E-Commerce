import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cartIcon from '../Assets/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { ToastContainer, toast , Bounce, Zoom  } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {

    const [menu, setMenu] = useState("shop")
    const menuRef = useRef(null);
    const name = localStorage.getItem("name")
    const password = localStorage.getItem("password")
    const { totalItems } = useContext(ShopContext)
    const navigate = useNavigate();


    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle("nav-menu-visible")
        e.target.classList.toggle("open")
    }

    const btnHandle = () => {
        if (name && password) {
            toast.success('Account has been Deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
            });
            setTimeout(() => {
                localStorage.clear();
                navigate('/');
                window.location.reload()
            }, 2000);
        }
        else {
            setTimeout(() => {
                navigate('/login'); // Replace with your desired route
            }, 1000);
        }
    }

    return (

        <div className='navbar'>
            <Link to='/' className='nav-logo' >
                <img className='nav-logo-img1' src={logo} />
                <p className='nav-logo-img2'>evo<span>Shop</span></p>
                <ToastContainer className='toast' />
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
            </div>
        </div>
    )
}
