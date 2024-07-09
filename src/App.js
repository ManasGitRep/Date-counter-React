import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  const getDate = date.setDate(date.getDate() + count);
  function handlePrevious() {
    setCount((c) => count - step);
  }
  function handleNext() {
    setCount((c) => count + step);
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div>
      <h1>Date-Counter-App</h1>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <button onClick={() => setStep((e) => e - 1)}>-</button> */}
        <span>Step:{Math.abs(step)}</span>
        {/* <button onClick={() => setStep((e) => e + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={handlePrevious}>-</button>
        {/* <span>Count:{count}</span> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleNext}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago from today is `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
