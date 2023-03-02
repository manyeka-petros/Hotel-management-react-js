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
             <h1 className="text-center text-primary mt-3"> BOOK YOUR ROOM NOW</h1>
            <div className="container " id="cont">

                        {
                            download.map(p =>
                                    <div className="card shadow fb" key={p.fileId
                                    } >
                                        <div className="card-header">
                                         FileName:   {p.filename}
                                        </div>
                                        <div className="card-body">
                                           File Type: {p.filetype}
                                            <br />
                                            <br />
                                            <a className='btn btn-primary' href={p.downloadUrl}>download</a>
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