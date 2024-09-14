import { useState } from "react";
import blank from "../assets/images/blank-1.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={blank} alt="blank graph" />
      </div>
      <h1>Graph Playground</h1>

      <div className="card"></div>
    </>
  );
}

export default App;
