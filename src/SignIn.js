
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import AuthContext from '../Contex/AuthProvider';
import './SignIn.css'

const SignIn = () => {
    const userRef = useRef()
    const errRef = useRef()
    const[errMsg,setErrMsg] = useState('')
    const[success,setSuccess] = useState(false)
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const{setAuth} = useContext(AuthContext)
    useEffect(()=>{
       
    },[])
    useEffect(()=>{
        setErrMsg('')
    },[email,password])
   
    
    const sign = async(event)=>{
        try{
            const respon = await axios.post("http://localhost:8080/logins",
            JSON.stringify({email,password}),{
                headers:{"Content-Type":"applicatio/json"},
                withCredentials: true
            })
            console.log(JSON.stringify(respon?.data ))
            const accessToken = respon.data?.accessToken;
            setAuth({email,password,accessToken})
            console.log(JSON.stringify( ))
            setEmail('')
            setPassword('')
            setSuccess(true)
        }catch(error){
            if(!error.respon){
                setErrMsg('No server respond')

            }
            else if(error.respon?.status == 400){
                setErrMsg('missing username or password')
            }
            else if(error.respon?.status == 401){
                setErrMsg('unauthorised')
            }
            else{
                setErrMsg('Login failed')
            }
            
        }
    }
  return (
    <>
    {
        success ? (
            <section>
                <h3>You are logged in</h3>
            </section>
        ):(

       
   
    <div className='sig1 p-3'>
        
        <div className=''>
            <div className='wrapp'>
            <div>
            <p ref={errRef} className={errMsg ? "errmsg":"offscreen"
       } aria-live ='assertive'>{errMsg}</p>
        </div>
          
        <div>
            <h2 className='text-center text-primary'>Sign In</h2>
        </div>
        <div>
            <form onSubmit={sign}>
                <div>
                <label>Username</label>
                <input
                type= "text"
                placeholder='Enter Username'
                name='username'
                required
                autoComplete='off'
                onChange={(e)=>setEmail(e.target.value)}

                />
                </div>
                <div>
                    <label>Password</label>
                    <input
                    type='text'
                    placeholder=' Passwor'
                    name='password'
                    required
                    autoComplete='off'
                    onChange={(e)=>setPassword(e.target.value)}
                    
                    />
                </div>
                <div className='text-center pt-1 bt'>
                    <button className='btn btn-primary text text-center ' type='submit'>submit</button>
                </div>
            </form>
        </div>
              
        </div>
        </div>
    </div>
     )
    }
    </>
  )
}

export default SignIn