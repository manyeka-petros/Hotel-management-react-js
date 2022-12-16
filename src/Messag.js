

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Messag = () => {
    const[mesg,setMesg] = useState([])
    useEffect(()=>{
        loadMe()
    },[])

    const loadMe = async()=>{
        const resu = await axios.get("http://localhost:8080/find")
        setMesg(resu.data)
    }
  return (
    <div>
        <div>
            <h3>View the Message</h3>
        </div>
        <div>
            <table>
                <thead>
                    <th>USER NAME</th>
                    <th>EMAIL</th>
                    <th>MESSAGE</th>
                </thead>
                <tbody>
                    {
                        mesg.map(
                            mes =><tr key={mes.id}>
                                <td>{mes.username}</td>
                                <td>{mes.email}</td>
                                <td>{mes.message}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Messag