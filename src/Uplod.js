import React, { useState } from 'react'
import axios from 'axios'  
import './Uplo.css'
import {singleFileUplo}  from "./data/Api"       
const Uplod = () => {
    const[selectFile,setSelect] = useState('')
    const[category,setCategory] = useState('')
    const[cost,setCost] = useState('')
    const[roomNumber,setRoomNumber] = useState('')
   
    
    const handleFiles= (e)=>{

        setSelect(e.target.files[0])
    }
    const sub = async()=>{
        console.log(selectFile)
        console.log(cost)
        console.log(roomNumber)
        console.log(category)
        const formData = new FormData()
        formData.append('category',category)
        formData.append('file',selectFile)
        formData.append('cost',cost)
        formData.append('roomNumber',roomNumber)


        await singleFileUplo(formData)
        
        
             
    }
  return (
    <div className='ups'>
        <div className='upl'>
            <h2 className='txt txt-primary'>ADD ROOMS</h2>
        </div>
      
        <div className='upili'>
          <div>
          <div>
                        <label>Room Type</label>
                        <select className="form-control" name="category" value={category} 
                        onChange={(e)=>setCategory(e.target.value)}>
                            <option value='Luxury Room'>Luxury Room</option>
                            <option value='Delux Room'>Delux Room</option>
                            <option value='Geust Room'>Geust Room</option>
                            <option value='Single Room'>Single Room</option>
                            <option value='Double Room'>double Room</option>
                        </select>
                        
                    </div>
          </div>
          <div>
            <label>Cost</label>
            <input
            type='text'
            name='cost'
            className="form-control"
            placeholder='Cost'
            value={cost}
            onChange = {(e)=>setCost(e.target.value)}
            />
          </div>
          <div>
            <label>Number of Room</label>
            <input
            type='text'
            name='roomNumber'
            className="form-control"
            placeholder='Number of Rooms'
            value={roomNumber}
            onChange = {(e)=>setRoomNumber(e.target.value)}
            />
          </div>
           
          <label>Room Image</label>
          <input
          className='fil'
            type='file'
            name='file_upload'
            onChange={(e)=>handleFiles(e)} 
            />
            <button className='btn btn-success' type='button' onClick={()=>sub()}>submit</button>
            
         
        </div>
        <div>
          <div className='sv'>
            <img src='sv1.svg'/>
          </div>
         
        </div>
        
    </div>
  )
}

export default Uplod