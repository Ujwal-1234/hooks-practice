import { func } from "prop-types";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

function Todo () {
  const newtodo = useRef(null)
  const [todo, changeTodo] = useState([]);
  function addTodo(){
    const newdata = newtodo.current.value
    const values = [...todo];
    if(newdata != '')
    values.push(newdata)
    console.log(todo)
    changeTodo(values)
    newtodo.current.value=null
  }
  function removeTodo(){
    const data = [...todo];
    data.pop()
    console.log(data)
    changeTodo(data)
  }
  
  return (
    <div>
      <input type={"text"} ref={newtodo} />
      <button type={"submit"} onClick={addTodo} >create ToDo</button>
      <button type={"submit"} onClick={removeTodo} >Remove ToDo</button>
      <div>To do's List : {todo.map(item => {
        return (
          <li>{item}</li>
        )
      })}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Todo />);
