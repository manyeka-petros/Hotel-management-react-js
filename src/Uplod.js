import React, { useState } from 'react'
import axios from 'axios'  
import './Uplo.css'
import {singleFileUplo}  from "./data/Api"       
const Uplod = () => {
    const[selectFile,setSelect] = useState('')
    const[category,setCategory] = useState('')
   
    
    const handleFiles= (e)=>{

        setSelect(e.target.files[0])
    }
    const sub = async()=>{
        console.log(selectFile)
        const formData = new FormData()
        formData.append('category',category)
        formData.append('file',selectFile)


        await singleFileUplo(formData)
             
    }
  return (
    <div className='upl'>
        <div className='upi'>
            <h2 className='txt txt-primary'>ADD ROOMS</h2>
        </div>
        <div className='upili'>
          <div>
          <div>
                        <label>Room Type</label>
                        <select className="form-control" name="category" value={category} 
                        onChange={(e)=>setCategory(e.target.value)}>
                            <option >Select Type</option>
                            <option value='Gospel'>Gospel</option>
                            <option value='local'>Local</option>
                            <option value='hipop'>Hipop</option>
                            <option value='dancel'>Dancel</option>
                            <option value='top10'>Top 10</option>
                        </select>
                        
                    </div>
          </div>
          <div>
            <label>Cost</label>
            <input
            name=''
            className="form-control"
            placeholder='Cost'
            />
          </div>
          <div>
            <label>Number of Room</label>
            <input
            name=''
            className="form-control"
            placeholder='Number of Rooms'
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
        
        </div>
        
    </div>
  )
}

export default Uplod