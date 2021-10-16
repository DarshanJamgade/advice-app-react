import { useEffect, useState } from "react";
import "./App.css";
import fetchAdvice from "./fetchAdvice";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice(setAdvice);
  }, []);

  const handleClick = () => {
    fetchAdvice(setAdvice);
  };
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button onClick={handleClick} className="button">
          <span>GIVE ME ADVICE</span>
        </button>
      </div>
    </div>
  );
}

export default App;
