import { createContext,useContext } from "react";

export const TodoContext = createContext({
  todo:[
    {
      id:1,
      title:"Todo Massage",
      completed:false
    }
  ],
  addTodo:(todo)=>{},
  updateTodo:(id,updatedTodo)=>{},
  deleteTodo:(id)=>{},
  toggleCompleted:(id)=>{}
})

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider