import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const id = useParams().id
  return (
    <div
      className="flex justify-center items-center bg-gray-200 h-96 bg-cover bg-transparent bg-no-repeat"
      style={{
        backgroundImage: `url(https://dcstatic.com/images/brandcrowd/background/404-81ef1e08fc.jpg)`,
      }}
    >
      <div className="text-3xl py-5 text-center text-orange-600 font-bold ">
        User: {id}
      </div>
    </div>
  );
}

export default User