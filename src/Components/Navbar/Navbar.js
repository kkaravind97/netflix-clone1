import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [show,handleShow] = useState(false);

  const navigate=useNavigate();

  const transitionNavbar=()=>{
    if(window.scrollY > 100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',transitionNavbar);
    return()=>window.removeEventListener('scroll',transitionNavbar);
  },[])

  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <div className="nav-contents">
      <img
        onClick={()=>navigate("/")}
        className='nav-logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
        alt="Netflix logo" />
        <img
          onClick={()=>navigate("/profile")}
          className='nav-avatar'
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
          alt="Avatar" />
      </div>
    </div>
  )
}

export default Navbar
