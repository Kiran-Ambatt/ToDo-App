function List({ todoList = [], setTodoList = () => {} }) {
  console.log("todoList from List is", todoList);
  const remove = (itemId) => {
    const removelist = todoList.filter((task) => task.id !== itemId); // using filter method, comparing the existing todo list to the one-
    setTodoList(removelist);
    localStorage.setItem("todoList", JSON.stringify(removelist));
  };
  return (
    <div>
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
    </div>
  );
}
export default List;
