
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
          
            <a href='Signin'>ADMIN LOGIN</a>
            <a href='Contact'>CONTACT</a>
            
            
        </div>
    </div>
  )
}

export default Navbar
