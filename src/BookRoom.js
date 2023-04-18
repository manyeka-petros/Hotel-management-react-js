 import axios from 'axios'
import React, { useState } from 'react'
 import './BookRoom.css'
 
 const BookRoom = () => {
   
    const[userBook,setUserBook] = useState({
        username:'',
        email:'',
        phoneNumber:'',
        address:'',
        bedType:'',
        checkIn:'',
        checkOut:'',
        cost:'',
        numbeOfRoom:'',
        costPerRoom:''

    })
    const{username,email,phoneNumber,address,bedType,checkIn,checkOut,cost,numbeOfRoom,costPerRoom} =userBook;
    const dataHandler = (e)=>{
        setUserBook({...userBook,[e.target.name]:e.target.value})
    }

    const books = async(e)=>{
        e.preventDefault()
        
        await axios.post("http://localhost:8080/book",userBook)
    }

   return (
     <div className='htds'> 
        
        <div >
            <img className='im' src='../lk.jpg'/>
        </div>
        <div className='head'>
        <h2>BOOK YOUR ROOM</h2>
        </div>
        <div className='sk'>
            <img src='../vt2.jpeg'/>
        </div>
        <div className='mps'>
            <div>
               
                <form onSubmit={books} className='mais'> 
               
                <div className='vut'>
                <h2 className='pep'>Person information</h2>
                    <div>
                        <label>Name</label>
                        <input
                        name='username'
                        placeholder='Name'
                        type= 'text'
                        value={username}
                        onChange={dataHandler}
                        />
                    </div>
                    
                    <div>
                        <label>Email</label>
                        <input
                        name='email'
                        type= 'text'
                        value={email}
                        onChange = {dataHandler}
                        placeholder = 'Email'
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input
                        name='phoneNumber'
                        placeholder='Password'
                        type= 'text'
                        value={phoneNumber}
                        onChange = {dataHandler}
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <input
                        name='address'
                        placeholder='Address'
                        type= 'text'
                        value={address}
                        onChange = {dataHandler}
                        />
                    </div>
                    <div>
                        <label>Bedding Type</label>
                        <input
                        name='bedType'
                        placeholder='BedType'
                        type= 'text'
                        value={bedType}
                        onChange = {dataHandler}
                        />
                    </div>
                    </div>
                    <div className='vit'>
                    <div>
    
                <h2 className='pep'>Bookings Information</h2>
                
                <div>
               <label>Cost Per Room</label>
                     <input
                     name='costPerRoom'
                     placeholder='CostPerRoom'
                      type= 'text'
                      value={costPerRoom}
                      onChange = {dataHandler}
                        />
                    </div>
                    <div>
                        <label>No Of Room</label>
                        <input
                        name='numbeOfRoom'
                        placeholder='Number Of Room'
                        type= 'text'
                        value={numbeOfRoom}
                        onChange = {dataHandler}
                        />
                    </div>
                    
                    <div>
                        <label>Check In</label>
                        <input
                        name='checkIn'
                        placeholder='Check In'
                        type= 'date'
                        value={checkIn}
                        onChange = {dataHandler}
                        />
                    </div>
                    <div>
                        <label>Check Out</label>
                        <input
                        name='checkOut'
                        placeholder='Check Out'
                        type= 'date'
                        value={checkOut}
                        onChange = {dataHandler}
                        />
                    </div>
                    <div>
                        <label>Total Cost</label>
                        <input
                        name='cost'
                        placeholder='Cost'
                        type= 'text'
                        value={cost}
                        onChange = {dataHandler}
                        />
                    </div>

                    <div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>

               
            </div>
            </div>
                </form>
            </div>
            
        </div>
     </div>
   )
 }
 
 export default BookRoom