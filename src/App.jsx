import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");
  /* console.log(name);
  console.log(email); */
  useEffect(() => {
    console.log("the name is", name);
  }, [name]);

  useEffect(() => {
    console.log("the email Only once");
  }, []);

  return (
    <>
      <h1>Login</h1>
      <input
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
      />
    </>
  );
}

export default App;
