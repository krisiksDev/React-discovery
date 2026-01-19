import { useEffect, useRef, useState, type FC } from "react";

const Timer: FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps((prev) => [seconds, ...prev]);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
      <h2>Timer</h2>

      <div style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        {formatTime(seconds)}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={start} disabled={isRunning}>Start</button>
        <button onClick={pause} disabled={!isRunning}>Pause</button>
        <button onClick={reset}>Reset</button>
        <button onClick={addLap} disabled={!isRunning}>Lap</button>
      </div>

      {laps.length > 0 && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h4>Laps</h4>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>
                Lap {laps.length - index} — {formatTime(lap)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Timer;