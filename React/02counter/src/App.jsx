import { useState } from 'react'
import './App.css'

function App() {
  
let counter = 15;

  return (
    <>
    <h1>React learning{counter}</h1>
    <h2>Counter Value:{counter}</h2>
    <button>Add value</button> {" "}
    <button>Remove value</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
