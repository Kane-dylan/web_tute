import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [userName, setUsername]=useState()
  const [password, setPassword]=useState()

  const {setUser}= useContext(UserContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(userName,password);
    setUser({userName,password})
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      {" "}
      <input 
      type="text"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='password'
       />
      <button onClick={handleSubmit}
      >Submit</button>
    </div>
  );
}

export default Login