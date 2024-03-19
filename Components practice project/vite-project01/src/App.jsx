import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/addTodo";
import "./App.css"
import TodoItems from "./components/TodoItems";
function App() {
  const TodoItem = [
    {name:"Buy Milk",date:"4/10/2023"},
    {name:"Buy Cake",date:"10/11/2024"},
    {name:"Go to college",date:"6/12/2024"},
    {name:"Take medicine",date:"16/08/2024"},
  ]

  return (
    <center class="todo-container">
      <AppName/>
      <AddTodo/>
      <TodoItems TodoItems={TodoItem}></TodoItems>
    </center>
  );
}

export default App;
