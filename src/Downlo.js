import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Download.css'

const Downlo = () => {
  const [download,setDownload] = useState([])
  useEffect(()=>{
    getDownload()
  },[])

  const getDownload = async() =>{
    const result = await axios.get("http://localhost:8080/files")
    setDownload(result.data)
  }
  return (
    <div className="mv">
             <h1 className="text-center text-primary mt-3"> AVAILABLE ROOMS</h1>
            <div className="container " id="cont">

                        {
                            download.map(p =>
                                    <div className="card shadow fb" key={p.fileId
                                    } >
                                      
                                        <div className="card-header">

                                        <img className='image'  src= {p.downloadUrl}/>
                                         
                                        </div>
                                        <div >
                                           $:   {p.cost}
                                            <br />
                                            <br />
                                            <div className='btn btn-primary'>
                                            {p.category}
                                            </div>
                                            <div>
                                              Book Now
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                )
                        }
    

                            </div>

                        </div>


  )
}

export default Downlo