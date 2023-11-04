import React from 'react';

const login = () => {
  return (
    <>
    <div>
      <input type="email" placeholder='Enter your email' name='email' />
      <input type="password" placeholder='Enter your password' name='password' />
      <button>Login</button>
    </div>
    </>
  );
}

export default login;
