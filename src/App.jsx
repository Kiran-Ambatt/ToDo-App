import { useEffect, useState } from "react";

import "./App.css";

function App() {
  console.log("component rendering....");
  const [count, setCount] = useState(0);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("useEffect componnet re rendered");
  });
  /* console.log(name);
  console.log(email); */
  /*  useEffect(() => {
    console.log("the name is", name);
  }, [name]);

  useEffect(() => {
    console.log("the email Only once");
  }, []); */

  const counter = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  useEffect(() => {
    console.log("count changed to:", count);
  }, [count]);
  return (
    <>
      <h1>Loginsss</h1>
      {/* <input
        type="text"
        name=""
        id=""
        value={name}
        placeholder="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        name=""
        id=""
        value={email}
        placeholder="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      /> */}
      <h1>Count:{count}</h1>
      <button onClick={counter}>Increment</button>
    </>
  );
}

export default App;
