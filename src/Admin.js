

import React from 'react'

const Admin = () => {
    const itemsInBars = [
        {
            componet:"ViewRomm",
            pathname:'/viewRoom',
            icons:'ico'
        },
        {
            componet:"ViewRomm",
            pathname:'/viewRoom',
            icons:'ico'
        },
        {
            componet:"ViewRomm",
            pathname:'/viewRoom',
            icons:'ico'
        },
        {
            componet:"ViewRomm",
            pathname:'/viewRoom',
            icons:'ico'
        },{
            componet:"ViewRomm",
            pathname:'/viewRoom',
            icons:'ico'
        },
        {
            componet:"ViewRomm",
            pathname:'/viewRoom',
            icons:'ico'
        }

    ]
  return (
    <div>
        <div>
            {
                itemsInBars.map((item,index))
            }

        </div>
    </div>
  )
}

export default Admin