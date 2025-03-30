
import React, { createContext, useContext } from "react";
import'./App.css'

// 1. Create a Context
const UserContext = createContext();

// 2. GrandChild component (Directly accesses `user` using useContext)
function GrandChild() {
  const user = useContext(UserContext);
  return (
    <div>
      <h3>Hello, {user.name} ! </h3>
      <h3>My Age is {user.age} </h3>
    </div>
  );
}

// 3. Child component (No need to pass `user`)
function Child() {
  return <GrandChild />; // No prop drilling!
}

// 4. Parent component (Provides `user` globally)
function App() {
  const user = { name: "Kalpesh", age: 25 };

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
}

export default App;
