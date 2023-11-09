import React from 'react';
import {getAuth,createUserWithEmailAndPassword } from "firebase/auth"
import {useState} from 'react'
import {app} from "./firebase";


const Login = () => {
  const {email,setEmail} = useState('');
  const {password,setPassword} = useState('');
  const EHandle=(e)=>{
    setEmail(e)
  }
  const PHandle=(e)=>{
    setPassword(e)
  }

  const createUser = (e) => {
    var emai = e.email
    var passwor = e.password
    createUserWithEmailAndPassword(auth,emai,passwor)
    .then((value)=>{
      console.log(value)
      setEmail('');
      setPassword('');
    });

  }
  const auth = getAuth()

  return (
    <>
    <div className='h-screen display:flex flex-center bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className='w-60 h-auto  flex-center border-2 border-style:solid border-black rounded-lg display:flex flex-col justify-center'>
      <div className='text-white '>Welcome Back!!</div>
      <form >
      <div >
          <input 
          type="email"
          className='mt-5 mb-2 my-input'
          value={email} 
          onChange={(e) => EHandle(e.target.value)}  
          placeholder='Enter Your Email' required />
      </div>
      <div>
          <input 
          type="password" 
          className='mb-20 mt-2 my-input' 
          value={password} 
          onChange={(e) => PHandle(e.target.value)}  
          placeholder='Enter Your Password' required />
      </div>
        <button  className='h-8 w-14 mb-5 bg-cyan-800 hover:bg-green-600 my-button' type="submit">Login</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default Login;
