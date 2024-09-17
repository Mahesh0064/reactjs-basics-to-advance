import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  console.log("App rendered");

  // //const [multipliedValue, setMultipliedValue] = useState(1);
  // let multipliedValue = value * 5;

  // const multiplyByFive = () => {
  //   // setMultipliedValue(value * 5);
  //   setValue(value + 1);
  // };

  const clickMe = () => {
    console.log("Logged");
  };

  return (
    <>
      <h1>Main Value : {value} </h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
      {/* <h2>Multiply Value :{multipliedValue} </h2> */}
    </>
  );
}

export default App;
