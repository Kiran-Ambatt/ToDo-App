import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [number] = useState([5, 6, 7, 8, 9]); // initializing array to a state variable to send it as props
  return (
    <>
      <Header num={number} /> {/* passing props to Header component */}
    </>
  );
}

export default App;
