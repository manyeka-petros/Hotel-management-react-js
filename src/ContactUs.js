

import React from 'react'
import './Contac.css'
import { FaAddressBook, FaPhoneAlt, FaVoicemail } from "react-icons/fa";

const ContactUs = () => {
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

                    <form>
                    <div>
                        <label>Full Name</label>
                        <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        autoComplete='off'
                        required
                        />
                    </div>
                    <div>
                        <label>email</label>
                        <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        autoComplete='off'
                        required
                        />
                    </div>
                    <div>
                        <label>Your message</label>
                        <textarea
                        type='text'
                        name='username'
                        placeholder='Username'
                        autoComplete='off'
                        required
                        />
                    </div>
                   <div className='con4'>
                   <button>Send</button>
                   </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs