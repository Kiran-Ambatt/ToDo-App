import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(name);
  console.log(email);
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
