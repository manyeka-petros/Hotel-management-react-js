import "@fontsource/poppins"; // Defaults to weight 400.
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nv'>
        <div className='nv1'>
            <h3>HOTEL</h3>
            <img src='fl.jpg'/>
        </div>
        <div className='nv2'>
            <a href='Home'>HOME</a>
          
            <a href='Signin'>SIGNIN</a>
            <a href='bookroom'>BOOKROOM</a>
            <a href='Contact'>CONTACT</a>
            <a href='addroom'>ADDROOM</a>
            <a href='Contact'>VIEWROOM</a>
           
        </div>
    </div>
  )
}

export default Navbar
