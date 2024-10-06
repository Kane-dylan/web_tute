import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

  const data = useLoaderData();

// const [data, setData] = React.useState([]);
// useEffect(() => {
//   fetch(`https://api.github.com/users/kane-dylan`)
//   .then((res) => res.json())
//   .then(data =>{
//     console.log(data);
//     setData(data)
//   });
// },[])

  return (
    <div
      className="flex justify-center items-center bg-no-repeat bg-cover w-full h-screen gap-40"
      style={{
        backgroundImage: `url(https://imgs.search.brave.com/OEo7DGuDF_56fg4xBvLN7C6XIpBzeaEQDmqSTEjgz-M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMi8wNy9yb21h/bi1zeW5rZXZ5Y2gt/d1gyTDhMLWZHZUEt/dW5zcGxhc2guanBn)`,
      }}
    >
      <h1 className="text-3xl font-bold bg-black text-orange-600
      py-5 px-2 text-center rounded-lg">Github repos:{data.public_repos}</h1>
      <img src={data.avatar_url} className="w-40 h-40 rounded-full" alt="" />
    </div>
  );
}

export default Github;


export const githubInfo =async () => {
  const response= await fetch(`https://api.github.com/users/kane-dylan`)
  return response.json();
}