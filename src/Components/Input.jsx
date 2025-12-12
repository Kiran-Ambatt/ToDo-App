import { useEffect, useState } from "react";
import List from "./List";
import Header from "./Header";
function Input() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    // get the data from local storage
    setTodoList(JSON.parse(localStorage.getItem("todoList")) || []);
  }, [todo]);
  const saveTodo = () => {
    // method to store the items to local storage.
    if (todo != "") {
      todoList.push({ name: todo, id: Date.now() });
      localStorage.setItem("todoList", JSON.stringify(todoList)); //store the list to local storage
      setTodo(""); // empty the input field
    }
  };
  return (
    <>
      <div>
        <Header setTodo={setTodo} />
        <input
          type="text"
          value={todo}
          placeholder="Type here"
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />
        <button onClick={saveTodo}>Add+</button>
      </div>
      <List todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
export default Input;
