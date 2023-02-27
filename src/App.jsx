import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="min-h-screen">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="w-[75vw] m-auto border-green-500 border-4">
        <h1
          onClick={() => console.log("clicked")}
          className="border-red-500 border-4 w-[70%] m-auto text-center text-blue-500 flex flex-[1fr 1fr 1fr] justify-around"
        >
          <p>Vite + React</p>
          <p> check out these cool things </p>
          <p> thing 3 </p>
        </h1>
      </div>
      <div>
        <button
          className="bg-darkPink"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p id="docs" className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
