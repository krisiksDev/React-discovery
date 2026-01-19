import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState<number[]>([initialValue]);

  const updateCount = (newValue: number) => {
    setCount(newValue);
    setHistory([...history, newValue]);
  };

  const undo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCount(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={() => updateCount(count + 1)}>+1</button>
      <button onClick={() => updateCount(count - 1)}>-1</button>
      <button onClick={() => updateCount(count + 5)}>+5</button>
      <button onClick={() => updateCount(count - 5)}>-5</button>
      <h3>Reset Button</h3>
      <button onClick={() => updateCount(0)}>Reset</button>
      <h4>Cancel</h4>
      <button onClick={undo} disabled={history.length <= 1}>Cancel</button>
      <p style={{ fontSize: "0.85em", color: "#666" }}>
        Historique: {history.join("-> ")} action(s)
      </p>
    </div>
  );
};

export default Counter;
