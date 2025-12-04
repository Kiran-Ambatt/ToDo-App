import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //initialization------------------
  const [todo, setTodo] = useState(""); // for storing input variable to state
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  ); // for getting the initial item from local storage

  //methods---------------------------------------------------
  const saveTodo = () => {
    // method to store the items to local storage.
    if (todo != "") {
      let todoList = JSON.parse(localStorage.getItem("todoList")) || []; //get the item from local storage
      todoList.push(todo); // push the input to todoList
      localStorage.setItem("todoList", JSON.stringify(todoList)); //store the list to local storage
      setTodoList(todoList); // assign the pushed list to state variable
      setTodo(""); // empty the input field
    }
  };

  return (
    <>
      <h1>To Do App</h1>
      <h3>To Do List:</h3>
      <h4>
        <ol>
          {todoList.map((item, index /* for printig the list in order */) => (
            <li>{item}</li>
          ))}
        </ol>
      </h4>
      {todoList == "" && <h2>List is empty</h2>}{" "}
      {/* print if the list is empty */}
      <p>Enter the Todo List here:</p>
      <input
        type="text"
        value={todo}
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
