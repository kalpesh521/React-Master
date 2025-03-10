import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCount] = useState(10);
  
  const addValue =() =>{
    setCount(counter+1);
  }
  const subtractValue =() =>{
     setCount(counter-1);
  }
  return (
    <>
      <h1>Counter</h1>
      <h1>Counter value : {counter}</h1>

      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={subtractValue} style={{marginTop:"20px"}}>Subtract</button>
    </>
  );
}

export default App;
