import { useState, useRef } from "react";
import Input from "./Input";
function List() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(); // creating an object using useRef hook

  const remove = (itemId) => {
    const removelist = todoList.filter((task) => task.id !== itemId); // using filter method, comparing the existing todo list to the one-
    setTodoList(removelist);
    localStorage.setItem("todoList", JSON.stringify(removelist));
  };
  const clear = () => {
    //method for clearing an input field
    inputRef.current.value = ""; // to clear the input field using ref.
  };
  const focus = () => {
    //method for focusing an input field
    inputRef.current.focus(); // if you need to focus an input field, then you must use useRef.
  };
  return (
    <>
      {/* for clearing the input field in the child component from paremt */}
      <button onClick={clear}>clear</button>
      <button onClick={focus}>focus</button>
      <div>
        <Input
          todo={todo}
          setTodo={setTodo}
          todoList={todoList}
          setTodoList={setTodoList}
          inputRef={inputRef} //passing input ref as props
        />
      </div>
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
      {todoList == "" && <h2>is empty</h2>}{" "}
    </>
  );
}
export default List;
