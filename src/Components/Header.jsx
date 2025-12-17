import { useState } from "react";

function Header({ num }) {
  const [res, setResult] = useState([]);
  const [n, setN] = useState(0);
  console.log("the array is", num);

  const show = () => {
    if (n < num.length) {
      // condition to check if the n reached end of an array
      setResult(num[n]); // set the result to state variable res.
      let newn = n + 1; // incrementing the value of n for clicking show button
      setN(newn);
    } else {
      setResult(num); //if the n reached end of array then setting the state variable to initial props value. that is the original array
    }
  };
  console.log("number is", res);
  return (
    <>
      <button onClick={show}>show</button>
      <h1>{res}</h1>
    </>
  );
}
export default Header;
