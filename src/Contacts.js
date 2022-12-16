
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
    let navs = useNavigate()
    const[mesa,setMesa] = useState({
        username:'',
        email:'',
        message:''
    })
    const {username,email,message} = mesa
    const onTake = (e) =>{
        setMesa({...mesa,[e.target.name]:e.target.value})
       
    }
    const onHand = async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8080/contact",mesa)
        navs("/Message")
    }
  return (
    <div>
        <div>
            <h3>Contacts Us </h3>
        </div>
        <div>
            <form onSubmit={onHand}>
                <div>
                    <label>Username</label>
                    <input
                    type= 'text'
                    name = 'username'
                    value = {username}
                    onChange ={onTake}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                    type= 'text'
                    name = 'email'
                    value = {email}
                    onChange ={onTake}
                    />
                </div>
                <div>
                    <label>Message</label>
                    <input
                    type= 'text'
                    name = 'message'
                    value = {message}
                    onChange ={onTake}
                    />
                </div>

                <div>
                    <button type='submit'>Send Message</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contacts