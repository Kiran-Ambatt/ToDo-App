import axios from "axios";
import { useState } from "react";

function Header() {
  const [data, setData] = useState([]);
  axios.get("https://localhost:7168/api/Data").then((res) => setData(res.data));
  return (
    <div>
      <h1>To Do App</h1>
      <h3>from API: {data}</h3>
    </div>
  );
}
export default Header;
