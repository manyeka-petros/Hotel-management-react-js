import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Available = () => {
    useEffect(()=>{
        getAvi()
    },[])
    const[avail,setAvail] = useState([])
    const getAvi = async()=>{
        const rea = await axios.get('http://localhost:8080/files')
        setAvail(rea.data)
    }
  return (
    <div className='mvc container'>
         <div>
            <h3 className='text-center'>VIEW AVAILABLE ROOM</h3>
        </div>
        <div>
            <table className='table  table-bordered'>
                <thead className='thead-dark car'>
                    <th>ROOM IMAGE</th>
                    <th>ROOM TYPE</th>
                    <th>Number OF ROOM</th>
                    <th>COST</th>
                </thead>
                <tbody>
                    {
                        avail.map(
                            mes =><tr key={mes.id}>
                                <td> <img src= {mes.downloadUrl}/> </td>
                                <td>{mes.category}</td>
                                <td>{mes.roomNumber}</td>
                                <td>{mes.cost}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Available