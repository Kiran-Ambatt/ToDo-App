function Header({ setTodo = () => {} }) {
  const clear = () => {
    setTodo("");
  };
  return (
    <div>
      <h1>To Do App</h1>
      <button onClick={clear}>clear</button>
    </div>
  );
}
export default Header;
