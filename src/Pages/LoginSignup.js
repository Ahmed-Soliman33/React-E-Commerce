import React, { useRef } from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'
import LoginPage from './LoginPage'
import { ToastContainer, toast , Bounce, Zoom  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function LoginSignup() {

  const emailRef = useRef()
  const nameRef = useRef()
  const passwordRef = useRef()
  const checkRef = useRef()
  const navigate = useNavigate();


  const loginHandle = (e) => {
    if (emailRef.current.value !== '' && passwordRef.current.value !== '' && nameRef.current.value !== '' && checkRef.current.checked == true) {
      localStorage.setItem('name', nameRef.current.value)
      localStorage.setItem('email', emailRef.current.value)
      localStorage.setItem('password', passwordRef.current.value)
        setTimeout(() => {
          navigate('/login');
          // window.location.reload() // Replace with your desired route
        }, 1000);
      toast.success('Account has been created', {
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
    }
    else {
      toast.warning('Please Complete Data!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
  }


  return (
    <div className='login-signup'>
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
      <div className='login-signup-container'>
        <h1>Sign Up</h1>
        <div className='login-signup-fields'>
          <input ref={nameRef} type='text' placeholder='Your Name' />
          <input ref={emailRef} type='email' placeholder='Email Address' />
          <input ref={passwordRef} type='password' placeholder='Password' />
        </div>
        <button type='submit' onClick={loginHandle}>Continue</button>
        <p className='login-signup-login'>Already have an account? <Link to='/login'>Login Here</Link></p>
        <div className='login-signup-agree'>
          <input ref={checkRef} type='checkbox' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
