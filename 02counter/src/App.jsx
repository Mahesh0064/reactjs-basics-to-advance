import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    // //console.log("Value added", Math.floor(Math.random() * 100));
    // console.log(counter);
    // counter = counter + 5;
    //setCounter(counter + 1);

    // to call multiple time we can use call back function
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    //setCounter(counter - 1);

    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Your value is Zero we can't decrease now");
    }
  };
  return (
    <>
      <h1>Hello Mahesh How are u</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br></br>
      <br></br>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
