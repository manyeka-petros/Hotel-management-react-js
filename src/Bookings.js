import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Booking.css'

const Bookings = () => {
    useEffect(()=>{
        getBooki()
    },[])
    const[boo,setBoo] = useState([])
    const getBooki = async()=>{
        const res = await axios.get('http://localhost:8080/gt')
        setBoo(res.data)
    }
  return (
    <div className='mgt'>
         <div>
            <h3 className='text-center text-primary'>View the Message</h3>
        </div>
        <div>
            <table className='table table-bordered'>
                <thead className='taf'>
                    <th>USER NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE </th>
                    <th>ADDRESS</th>
                    <th>BEDDING TYPE</th>
                    <th>COST PER ROOM</th>
                    <th>NUMBER OF ROOM</th>
                    <th>CHECKIN</th>
                    <th>CHECKOUT</th>
                    <th>TOTAL COST</th>
                    <th>ACTION ADMIN</th>
                </thead>
                <tbody>
                    {
                        boo.map(
                            mes =><tr key={mes.id}>
                                <td>{mes.username}</td>
                                <td>{mes.email}</td>
                                <td>{mes.phoneNumber}</td>
                                <td>{mes.address}</td>
                                <td>{mes.bedType}</td>
                                <td>{mes.cost}</td>
                                <td>{mes.roomNumber}</td>
                                <td>{mes.checkIn}</td>
                                <td>{mes.checkOut}</td>
                                <td>{mes.totalCost}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Bookings