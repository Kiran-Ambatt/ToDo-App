import "./App.css";
import Header from "./Components/Header";
import List from "./Components/List";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <List />
              </>
            }
          />

          {/* <Link to={"/Login"}>Login</Link> */}

          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
