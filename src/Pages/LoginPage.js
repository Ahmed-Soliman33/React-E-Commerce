import React, { useRef } from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'
import { Bounce, toast, ToastContainer, Zoom } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const name = localStorage.getItem("name")
    const password = localStorage.getItem("password")
    const nameRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate();


    const loginHandle = () => {

        if (nameRef.current.value != '' && passwordRef.current.value != '') {
            if (nameRef.current.value === name && passwordRef.current.value === password) {
              toast.success(`Welcome ${name}`, {
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
              setTimeout(() => {
                navigate('/');
                window.location.reload() 
              }, 2000);
            }
            else if (!(name && password)) {
                toast.error('This account does not exist⚠️', {
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
            else {
                toast.error('Name or Password is Wrong⚠️', {
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
        className='ToastContainer'/>
      <div className='login-signup-container'>
        <h1>Log In</h1>
        <div className='login-signup-fields'>
          <input ref={nameRef} type='text' placeholder='Your Name' />
          <input ref={passwordRef} type='password' placeholder='Password' />
        </div>
        <button onClick={loginHandle}>Continue</button>
        <p className='login-signup-login'>Not have an account? <Link to='/signup'>Sign Up Here</Link></p>
      </div>
    </div>
  )
}
