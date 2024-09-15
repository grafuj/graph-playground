import { useState } from "react";
import blank from "./assets/images/blank-1.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pageDiv">
        <div className="graphAndMath">
          <div>
            <h1>input</h1>
            <h2>y = <input className="inputBase"></input>x + <input className="inputBase"></input></h2>
          </div>
          <div>
            <img className="graph-img" src={blank} alt="line graph" />
          </div>
        </div>
        <h1>Graph Playground</h1>
      </div>

      {/* <div className="card"></div> */}
    </>
  );
}

export default App;
