import React from 'react';
import { useState } from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { Link } from 'react-router-dom';


const Create_user = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setConfirmpassword] = useState('');
  const [message,setMessage] = useState('');
// user
const user = {
  email:email,
  password:password
}

    const handleSubmit = (e)=>{
      if (password !== confirmpassword){
        alert("password doesn't match .REVERIFY");
        return;
      }
      var repassword = e.password.value;
      var password = e.password.value;
      var email = e.input.value;
      setEmail('');
      setPassword('');
      setConfirmpassword('');
    }
  return (
    <>
     <div id="create-form">
      <form onSubmit={{handleSubmit}}>
        <div>
          <input type="email" value={email} onChange = {(e)=>setEmail(e.target.value)} required />
        </div>
        <div>
          <input type="password" value={password} onChange = {(e)=>setPassword(e.target.value)} required />
        </div>
        <div>
          <input type="email" value={confirmpassword} onChange = {(e)=>setConfirmpassword(e.target.value)} required />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
     </div>
     <div>
      <Link to="/">Back To Login</Link>
     </div>
    </>
  );
}

export default Create_user;
