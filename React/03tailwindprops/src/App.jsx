import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {

  return (
    <>
      <h2 className="text-3xl bg-neutral-900 text-blue-800 rounded-xl p-5 mb-4">
        Hey i am learning tailwind props
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Card className="flex flex-row w-1/3" userName="Jonathon" post="Production Engineer" />
        <Card className="flex flex-row w-1/3" userName="Kevin" post="Senior Software Engineer" />
        <Card className="flex flex-row w-1/3" userName="Jack" post="Junior Software Engineer" />
      </div>
    </>
  );
}

export default App
