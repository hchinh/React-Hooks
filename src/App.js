import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Welcome to React Hooks</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="Curtis" />
    </div>
  );
}

export default App;
