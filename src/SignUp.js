import './SignUp.css'


import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    let nav = useNavigate()
    const[vistors,setVistors] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        phoneNumber:''
    })
    const {firstName,lastName,email,password,phoneNumber} = vistors;

    const onInput = (e) =>{
        setVistors({...vistors,[e.target.name]:e.target.value});
    }

    const onSubm = async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8080/visitor",vistors)
        nav("/Vistor")
    }
  return (
    <div className='top1'>

        <div className='top2'>

       
        <div className='hdt'>
            <h>Sign up</h>
        </div>
        <div>
            <form onSubmit= {onSubm}>
                <div>
                <label>firstName</label>
                <input
                type= 'text'
                name = 'firstName'
                value = {firstName}
                onChange = {onInput}
                />
                </div>
                <div>
                <label>lastName</label>
                <input
                type= 'text'
                name = 'lastName'
                value = {lastName}
                onChange = {onInput}
                />
                </div>
                <div>
                <label>Email</label>
                <input
                type= 'text'
                name = 'email'
                value = {email}
                onChange = {onInput}
                />
                </div>
                <div>
                <label>Password</label>
                <input
                type= 'text'
                name = 'password'
                value = {password}
                onChange = {onInput}
                />
                </div>
                <div>
                <label>phoneNumber</label>
                <input
                type= 'text'
                name = 'phoneNumber'
                value = {phoneNumber}
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