import { useEffect } from "react";
function Input({
  todo = "",
  setTodo = () => {},
  todoList = [],
  setTodoList = () => {},
  inputRef, //all these are props, so that other person can see what are the props passed.
}) {
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
      <input
        type="text"
        value={todo}
        ref={inputRef}
        placeholder="Type here"
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button onClick={saveTodo}>Add+</button>
    </>
  );
}
export default Input;
