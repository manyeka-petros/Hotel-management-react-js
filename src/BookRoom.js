 import React from 'react'
 import './BookRoom.css'
 
 const BookRoom = () => {
   return (
     <div className='htds'> 
        <div>
            <h2>BOOK YOUR ROOM</h2>
        </div>
        <div className='mais'>
            <div>
                <h2>Person information</h2>
                <form>
                    <div>
                        <label>Name</label>
                        <input
                        name=''
                        type= ''
                        />
                    </div>
                    
                    <div>
                        <label>Email</label>
                        <input
                        name=''
                        type= ''
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input
                        name=''
                        type= ''
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <input
                        name=''
                        type= ''
                        />
                    </div>
                    <div>
                        <label>Bedding Type</label>
                        <input
                        name=''
                        type= ''
                        />
                    </div>
                </form>
            </div>
            <div>
                <h2>Bookings Information</h2>
                <form>
                <div>
               <label>Cost Per Room</label>
                     <input
                     name=''
                      type= ''
                        />
                    </div>
                    <div>
                        <label>No Of Room</label>
                        <input
                        name=''
                        type= ''
                        />
                    </div>
                    <div>
                        <label>Check Out</label>
                        <input
                        name=''
                        type= ''
                        />
                    </div>
                    <div>
                        <label>Check In</label>
                        <input
                        name=''
                        type= ''
                        />
                    </div>
                    <div>
                        <label>Total Cost</label>
                        <input
                        name=''
                        type= ''
                        />
                    </div>

                    <div>
                        <button>Book</button>
                    </div>

                </form>
            </div>
        </div>
     </div>
   )
 }
 
 export default BookRoom