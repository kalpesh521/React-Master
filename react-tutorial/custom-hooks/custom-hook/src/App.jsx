import React from "react";
import useWindowSize from "./hook/useWindowSize"; // Import custom hook
import "./App.css";
function App() {
  const { width, height } = useWindowSize(); // Use the hook

  return (
    <div>
      <h1>Window Size Tracker</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default App;
