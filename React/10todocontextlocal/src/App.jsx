import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todo, setTodo] = useState([])

  const addTodo=(todo)=>{
    setTodo((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const deleteTodo=(id)=>{
    setTodo((prev)=>prev.filter((prevTodo)=>prevTodo.id !== id))
  }

  const toggleCompleted=(id)=>{
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo)))
  }

  useEffect(()=>{
    const todo=JSON.parse(localStorage.getItem('todo'))
    if(todo && todo.length > 0) {
      setTodo(todo)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(todo))
  },[todo])

  return (
    <TodoProvider
      value={{ todo, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todo
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
