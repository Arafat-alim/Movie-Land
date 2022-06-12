import { useState, useEffect } from "react";
import "./App.css";

//! converted into Arrow function
//create a counter using state
const App = () => {
  const [counter, setCounter] = useState(0);
  //using React function lifeCycle
  //! Mounting State
  useEffect(() => {});

  //! Updating state
  useEffect(() => {}, []);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
      <h2>Counter:{counter} </h2>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
    </div>
  );
};

export default App;
