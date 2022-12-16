
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nv'>
        <div className='nv1'>
            <h3>HOTEL</h3>
        </div>
        <div className='nv2'>
            <a href='Home'>HOME</a>
            <a href='Vistor'>VISTOR</a>
            <a href='Addroom'>ADD ROOM</a>
            <a href='Availablerom'>AVAILABLE ROOMS</a>
            <a href='Message'>MESSAGE</a>
            <a href='Signup'>SIGN UP</a>
            <a href='Contact'>CONTACT</a>
            
        </div>
    </div>
  )
}

export default Navbar
