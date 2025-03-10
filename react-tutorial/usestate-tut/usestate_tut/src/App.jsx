import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCount] = useState(10);
  const [user, setUser] = useState({"name":"kalpesh", "age":24});
  const [text, setText] = useState("");
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
    <hr />
      <h1>Age Calculator</h1>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <button onClick={()=>setUser({...user, age:user.age+1})}>Increase Age</button>
      <button onClick={()=>setUser({...user, age:user.age-1})}>Decrease Age</button>
    <hr />
    <h1>Display Data</h1>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    <h2>{text}</h2>
    </>
  );
}

export default App;
