import React from "react";

function List(props) {
  console.log("todoList is", props.todoList);
  //const todoItems = props.todoList || [];
  const remove = (itemId) => {
    //method to remove the items from list
    const removelist = props.todoList.filter((task) => task.id !== itemId); // using filter method, comparing the existing todo list to the one-
    props.setTodoList(removelist);
    localStorage.setItem("todoList", JSON.stringify(removelist));
  };

  return (
    <div>
      {props.todoList && ( //if you do not use this line, then it will through an error saying that" cannot read properties of undefined :todoList"
        <div>
          <h3>To Do List:</h3>
          <h4>
            <ol>
              {props.todoList.map((item, index) => (
                <li key={item.id}>
                  {item.name}
                  <button onClick={() => remove(item.id)}>❌</button>
                </li>
              ))}
            </ol>
          </h4>
        </div>
      )}
      {props.todoList == "" && <h2>is empty</h2>}{" "}
    </div>
  );
}

export default List;
