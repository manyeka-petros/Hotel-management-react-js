 import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
            <div className= 'vds'style={{ backgroundImage: "url(/r.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: "contain",width:"100%" }}>
                <img src='../lk1.jpg'/>
            </div>
            
            <div className='cit'>
                <h1>SPEND YOUR HOLIDAY</h1>
                <p>What are your favourite food ?</p>
                <div className='ck'>
              <button className='ch'>BOOKROOM</button>
              <button className='cs'>CONTACT US</button>
            </div>
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
                                        <div className='ctr'>
                                            {p.category}
                                            </div>
                                         <div className='ct'>
                                         $:   {p.cost}
                                         <div className='bkl'>
                                          <Link to={"/bookroom"} className = 'cd'> Book Now</Link>
                                             
                                            </div>
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