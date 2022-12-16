

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Visito = () => {

    useEffect( ()=>{
        loadVis()

    },[])

    const [vist,setVist] = useState([])
    const loadVis = async() =>{
       const res =  await axios.get("http://localhost:8080/visit")
       setVist(res.data)

    }
  return (
    <div>
        <div>
            <h3>VISTORS LIST</h3>
        </div>
        <div>
            <table>
                <thead>
                    <th>Firt Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone Number</th>
                </thead>
                <tbody>
                    {
                        vist.map(
                            vis => <tr key={vis.id}>
                                <td>{vis.firstName}</td>
                                <td>{vis.lastName}</td>
                                <td>{vis.email}</td>
                                <td>{vis.password}</td>
                                <td>{vis.phoneNumber}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Visito