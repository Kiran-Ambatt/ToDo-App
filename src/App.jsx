import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //initialization------------------
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // get the data from local storage
    setTodoList(JSON.parse(localStorage.getItem("todoList")) || []);
  }, [todo]);

  //methods---------------------------------------------------
  const saveTodo = () => {
    // method to store the items to local storage.
    if (todo != "") {
      todoList.push({ name: todo, id: Date.now() });
      localStorage.setItem("todoList", JSON.stringify(todoList)); //store the list to local storage
      setTodo(""); // empty the input field
      console.log(todoList);
    }
  };

  const remove = (itemId) => {
    //method to remove the items from list
    const removelist = todoList.filter((task) => task.id !== itemId); // using filter method, comparing the existing todo list to the one-
    setTodoList(removelist);
    localStorage.setItem("todoList", JSON.stringify(removelist));
  };

  return (
    <>
      <h1>To Do App</h1>
      <h3>To Do List:</h3>
      <h4>
        <ol>
          {todoList.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => remove(item.id)}>❌</button>
            </li>
          ))}
        </ol>
      </h4>
      {todoList == "" && <h2>List is empty</h2>}{" "}
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
