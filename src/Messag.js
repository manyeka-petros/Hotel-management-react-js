

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Message.css'

const Messag = () => {
    const[mesg,setMesg] = useState([])
    useEffect(()=>{
        loadMe()
    },[])

    const loadMe = async()=>{
        const resu = await axios.get("http://localhost:8080/ge")
        setMesg(resu.data)
    }
  return (
    <div className='cps container'style={{ backgroundImage: "url(/bd.jpeg)" ,backgroundRepeat: 'no-repeat',backgroundSize:"contain"}}>
        <div className='row'> 
            <div className='col-md-8 offset-md-2 '>
                       <div className='hf'>
            <h3 className='text-center hf'>View the Message</h3>
        </div>
        <div>
            <table className='hs table table-bordered'>
                <thead className='tb'>
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
    </div>
    </div>
  )
}

export default Messag