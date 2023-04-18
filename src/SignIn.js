
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom';
import Admin from './Admin';
import Available from './Available';
import Bookings from './Bookings';
import AuthContext from './Contex/AuthProvider';
import Messag from './Messag';
import Navbar from './Navbar';
import './SignIn.css'

const SignIn = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setAuth } = useContext(AuthContext)
    useEffect(() => {
        userRef.current.focus()
    }, [])
    useEffect(() => {
        setErrMsg('')
    }, [username, password])


    const sign = async (e) => {
        e.preventDefault()
        console.log(username, password)
        try {

            const respon = await axios.post("http://localhost:8080/log",
                { username, password }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false
            })


            setAuth({ username, password })

            setUsername('')
            setPassword('')
            setSuccess(true)

        } catch (error) {
            if (!error.respon) {
                setErrMsg('No server respond')

            }
            else if (error.respon?.status === 400) {
                setErrMsg('missing username or password')
            }
            else if (error.respon?.status === 401) {
                setErrMsg('unauthorised')
            }
            else {
                setErrMsg('Login failed')
            }

        }
    }
    return (
        < >
            {
                success ? (
                    <section>
                      <Admin/>

                    </section>
                ) : (



                    <div className='cf'>
                        <div>
                            
                        </div>
                        <div className='bl'>


                            <div className='sig1  p-3 cps container' style={{ backgroundImage: "url(/lk4.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: "contain",width:"100%" }}
                            >
                                <div>
                                    <img src='sc.jpeg' className='sd' />
                                </div>
                                <div className='wrapp'>
                                    <div>
                                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"
                                        } aria-live='assertive'>{errMsg}</p>
                                    </div>

                                    <div>
                                        <h2 className='text-center text-primary'>Sign In</h2>
                                    </div>
                                    <div>
                                        <form onSubmit={sign}>
                                            <div>
                                                <label>Username</label>
                                                <input
                                                    type="text"
                                                    placeholder='Enter Username'
                                                    name='username'
                                                    value={username}
                                                    required
                                                    ref={userRef}
                                                    autoComplete='off'
                                                    onChange={(e) => setUsername(e.target.value)}

                                                />
                                            </div>
                                            <div>
                                                <label>Password</label>
                                                <input
                                                    type='password'
                                                    placeholder=' Password'
                                                    name='password'
                                                    value={password}
                                                    required

                                                    onChange={(e) => setPassword(e.target.value)}

                                                />
                                            </div>
                                            <div className='text-center pt-1 bt'>
                                                <button className='btn btn-primary text text-center ' type='submit'>submit</button>
                                            </div>
                                            <div

                                            >

                                            </div>
                                        </form>

                                        <p>
                                            Need an account <br />
                                            <span>
                                                <Link to={"/signup"}>Sign Up</Link>
                                              
                                            </span>
                                        </p>
                                    </div>

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