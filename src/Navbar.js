
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
            <a href='Message'>BOOK ROOM</a>
            <a href='Signin'>ADMIN LOGIN</a>
            <a href='Contact'>CONTACT</a>
            <a href='addroom'>Add room</a>
            <a href='Contact'>room AVAi</a>
            <a href='Contact'>BOOKINGS</a>
            
        </div>
    </div>
  )
}

export default Navbar
