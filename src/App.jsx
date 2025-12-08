import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //initialization------------------
  const [todo, setTodo] = useState(""); // for storing input variable to state
  const [todoList, setTodoList] = useState([]);
  let [removelist, setRemovelist] = useState([]);
  const [show, setShow] = useState("");

  console.log("todo list before removal:", todo);

  //useEffect-------------------------------------------------
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todoList")) || []; //useeffect to get the data from local storage
    setTodoList(data);
  }, [todo, show]);
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
    console.log("remove method called", itemId);
    removelist = todoList.filter((task) => task.id !== itemId); // using filter method, comparing the existing todo list to the one-
    //-which passed during calling the remove method and return the remaining list.
    console.log("list after removal is", removelist);
    localStorage.setItem("todoList", JSON.stringify(removelist)); //storing the remaining list to local storage.
    setShow(Date.now()); // this is used to update the state variable "show" by assigning present date so that useEffect will be called-
    // - each time you call the remove method.here the show variable keep changing
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
      {/* print if the list is empty */}
      <p>Enter the Todo List here:</p>
      <input
        type="text"
        value={todo}
        //name="name"
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
