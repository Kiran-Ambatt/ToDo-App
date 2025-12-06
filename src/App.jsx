import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //initialization------------------
  const [todo, setTodo] = useState(""); // for storing input variable to state
  const [list, setList] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [showList, setShowList] = useState([]);

  //useEffect-------------------------------------------------
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todoList")) || []; //useeffect to get the data from local storage
    setTodoList(data);
  }, [todo]);
  //methods---------------------------------------------------
  const saveTodo = () => {
    // method to store the items to local storage.
    if (todo != "") {
      todoList.push({ name: todo, id: Date.now() });
      //todoList.push(list); // push the input to todoList
      localStorage.setItem("todoList", JSON.stringify(todoList)); //store the list to local storage
      setTodo(""); // empty the input field
      //localStorage.removeItem(qq);
      console.log(todoList);
    }
  };
  const remove = (itemId) => {
    console.log("remove method called", itemId);
    let removelist = todoList.filter((task) => task.id !== itemId);
    console.log("list after removal is", removelist);
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
