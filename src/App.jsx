import { useEffect, useState } from "react";

import "./App.css";

function App() {
  //initialization------------------

  const [todo, setTodo] = useState("");
  //let [finalTodoList, setFinalTodoList] = useState(null);
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  console.log("to do text is:", todo);
  //finalTodoList = JSON.parse(localStorage.getItem("todoList")) || [];

  //methods---------------------------------------------------

  const saveTodo = () => {
    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    setTodoList(todoList);

    //setTodo("");
  };
  console.log("to do list", todoList);
  //useEffects--------------------------------------------------

  /*  useEffect(() => {
    finalTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    setTodoList(finalTodoList);
  }, []);
 */

  return (
    <>
      <h1>To Do App</h1>
      <h3>To Do List:</h3>

      <h4>
        <ol>
          {todoList.map((item, index) => (
            <li>{item}</li>
          ))}
        </ol>
      </h4>

      {todoList == "" && <h2>List is empty</h2>}

      <p>Enter the Todo List here:</p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Type here"
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button onClick={saveTodo}>Add+</button>
    </>
  );
}

export default App;
