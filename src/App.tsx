
import axios from "axios";
import "./styles.css";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/TodoType";
import {Text}from "./Text"


export default function App() {
  const [todos,setTodos]=useState<Array<TodoType>>([]);
  const onClickFetchData=()=>{
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      setTodos(res.data);
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>call API</button>
      {todos.map((todo)=>(
        <Todo title={todo.title} userId={todo.userId} completed={todo.completed}/>
      ))}
      <Text color="red"fontSize="18px"/>
    </div>
  );
}
