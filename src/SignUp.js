import './SignUp.css'


import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    let nav = useNavigate()
    const[vistors,setVistors] = useState({
        
        username:'',
        email:'',
        password:'',
        
    })
    const {username,email,password} = vistors;

    const onInput = (e) =>{
        setVistors({...vistors,[e.target.name]:e.target.value});
    }

    const onSubm = async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8080/save",vistors)
        nav("/Vistor")
    }
  return (
    <div className='sig1 p-3 cps container top1'style={{ backgroundImage: "url(/rm32.jpg)" ,backgroundRepeat: 'no-repeat',backgroundSize:"contain"}}>

        <div className='top2'>

       
        <div className='hdt'>
            <h>Sign up</h>
        </div>
        <div>
            <form onSubmit= {onSubm}>
               
                <div>
                <label>Username</label>
                <input
                type= 'text'
                name = 'username'
                placeholder='Enter Username'
                value = {username}
                onChange = {onInput}
                />
                </div>
                <div>
                <label>Email</label>
                <input
                type= 'text'
                placeholder='Enter Email'
                name = 'email'
                value = {email}
                onChange = {onInput}
                />
                </div>
                <div>
                <label>Password</label>
                <input
                type= 'text'
                placeholder='Enter Password'
                name = 'password'
                value = {password}
                onChange = {onInput}
                />
                </div>
               
                <div className='bt1'>
                    <button type='submit'>submit</button>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default SignUp