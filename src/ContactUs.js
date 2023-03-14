

import React, { useState } from 'react'
import './Contac.css'
import { FaAddressBook, FaPhoneAlt, FaVoicemail } from "react-icons/fa";
import axios from 'axios';

const ContactUs = () => {
    
    const[conta,setConta] = useState({
        username:'',
        email:'',
        message:''
    })
    const{username,email,message} = conta
    const handle = (e)=>{
        setConta({...conta,[e.target.name]:e.target.value})
    }
    const sends = async(e)=>{
        console.log(email ,message , username)
        await axios.post("http://localhost:8080/sa",conta)
    }
  return (
    <div className='cont1'>
        <div>
            <div className='cont2'>
                <h3 className='co'>contact us</h3>
                <p>We are software developer with good exprience</p>
            </div>
            <div className='cont3 container'>
                <div className='con1'>
                   <div>
                   <h4>Address</h4>
                   <p> <FaAddressBook/> Unima Box 266 ,Zomba</p>
                   </div>
                   <div>
                    
                   <h4>Phone</h4>
                   <p> <FaPhoneAlt/> +265 997 509 133</p>
                   </div>
                   <div>
                   <h4>Email</h4>
                   <FaVoicemail/>
                   <p>manyekapetros29@gmail.com</p>
                   </div>
                </div>
                <div className='con2'>
                    <div>
                    <h2>Send Massape</h2>
                    </div>

                    <form onSubmit={sends}>
                    <div>
                        <label>Full Name</label>
                        <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={username}
                        autoComplete='off'
                        onChange={handle}
                        required
                        />
                    </div>
                    <div>
                        <label>email</label>
                        <input
                        type='text'
                        name='email'
                        value={email}
                        placeholder='Email'
                        onChange={handle}
                        autoComplete='off'

                        required
                        />
                    </div>
                    <div>
                        <label>Your message</label>
                        <textarea
                        type='text'
                        name='message'
                        value={message}
                        placeholder='Username'
                        onChange={handle}
                        autoComplete='off'
                        required
                        />
                    </div>
                   <div className='con4'>
                   <button type='submit' className='btn btn-primary'>Send</button>
                   </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs