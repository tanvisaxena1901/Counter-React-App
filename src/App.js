import React, { useState } from 'react';
import './App.css';
//Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
function App() {
   // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>
      <h2>Value : {count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => count >= 15 ? "" : setCount(count + 1)}>Increment</button>
      <button onClick={() => count <= 0 ? "" : setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
