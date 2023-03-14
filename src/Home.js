 import axios from 'axios'
import React, { useEffect, useState } from 'react'
 import './Home.css'
 
 const Home = () => {

  const [download,setDownload] = useState([])
  useEffect(()=>{
    getDownload()
  },[])

  const getDownload = async() =>{
    const result = await axios.get("http://localhost:8080/files")
    setDownload(result.data)
  }
   return (
     <div className='hero'>
        <div>
            <div className= 'vds'>
                <img src='../rm32.jpg'/>
            </div>
            
            <div className='cit'>
                <h1>WELCOME TO OUR RESORT BEACH</h1>
                <p>What are your favourite food ?</p>
            </div>
        </div>


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

     </div>
   )
 }
 
 export default Home