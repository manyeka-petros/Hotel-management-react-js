import './Admin.css'


import { NavLink } from 'react-router-dom'

const Admin = ({children}) => {
    const itemsInBars = [
        {
            componet:"ADD ROOM",
            pathname:'/addroom',
            icons:''
        },
        {
            componet:"HOME",
            pathname:'/home',
            icons:''
        },
        {
            componet:"VIEW MESSAGE",
            pathname:'/message',
            icons:''
        },
        {
            componet:"ROOM BOOKINGS",
            pathname:'/bookroom',
            icons:''
        },
        {
            componet:"AVAILABLE",
            pathname:'/available',
            icons:''
        },{
            componet:"BOOKINGS",
            pathname:'/bookings',
            icons:''
        },{
            componet:"SIGNUP",
            pathname:'/signup',
            icons:''
        },{
            componet:"SIGNIN",
            pathname:'/signin',
            icons:''
        },
        {
            componet:"CONTACT US",
            pathname:'/contact',
            icons:''
        },{
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