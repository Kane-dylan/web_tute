import React from 'react'
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {

  const {user}= useContext(UserContext)

  if(!user) return <h1>Please Login</h1>
  return (
    <>
      <div></div>
      <h2>Profile:{user.userName}</h2>
    </>
  );
}

export default Profile