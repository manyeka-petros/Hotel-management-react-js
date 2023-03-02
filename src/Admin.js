import './Admin.css'

import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'

const Admin = ({children}) => {
    const itemsInBars = [
        {
            componet:"ADD ROOM",
            pathname:'/addroom',
            icons:''
        },
        {
            componet:"VIEW ROOM",
            pathname:'/viewRoom',
            icons:''
        },
        {
            componet:"VIEW MESSAGE",
            pathname:'/message',
            icons:''
        },
        {
            componet:"AVAILABLE ROOM",
            pathname:'/viewRoom',
            icons:''
        },{
            componet:"ROOM BOOKINGS",
            pathname:'/contact',
            icons:''
        },
        {
            componet:"LOGOUT",
            pathname:'/viewRoom',
            icons:''
        }

    ]
  return (
    <div className='side'>
        <div className='sideItem'>
            {
                itemsInBars.map((item,index) =>(
                    <NavLink to={item.pathname} key ={index} className='links'>
                        <div>{item.icons}</div>
                        <div className='comp'>{item.componet}</div>

                    </NavLink>
                )
                )
            }

        </div>
        <div>
            <main>
            {children}
            </main>
        </div>
    </div>
  )
}

export default Admin