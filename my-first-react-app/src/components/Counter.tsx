import { useState } from "react";

interface CounterProps {
  max?: number;
}

const Counter = ({ max = 20 }: CounterProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => (prev < max ? prev + 1 : prev));
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <div className="counter-buttons">
        <button onClick={decrement} disabled={count === 0}>
          ➖
        </button>

        <span className={`count ${count > 10 ? "count-high" : ""}`}>
          {count}
        </span>

        <button onClick={increment} disabled={count === max}>
          ➕
        </button>
      </div>

      {count === 0 && <p className="count-msg">Le compteur est à 0</p>}

      <button className="reset" onClick={reset}>
        Reset
      </button>

      <small className="hint">Max : {max}</small>
    </div>
  );
};

export default Counter;
