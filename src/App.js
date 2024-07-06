import { useState } from "react";
import "./App.css";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
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
  return (
    <div>
      <h1>Date-Counter-App</h1>
      <div>
        <button onClick={() => setStep((e) => e - 1)}>-</button>
        <span>Step:{Math.abs(step)}</span>
        <button onClick={() => setStep((e) => e + 1)}>+</button>
      </div>
      <div>
        <button onClick={handlePrevious}>-</button>
        <span>Count:{count}</span>
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
    </div>
  );
}
