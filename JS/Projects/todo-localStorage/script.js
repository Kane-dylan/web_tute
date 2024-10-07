document.addEventListener("DOMContentLoaded",()=>{
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem('tasks')) ||[];

  tasks.forEach((tasks)=>renderTasks(tasks))

  addTaskBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    todoInput.value = "";
    console.log(tasks);
  });

  function renderTasks(){
    console.log(tasks);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

})