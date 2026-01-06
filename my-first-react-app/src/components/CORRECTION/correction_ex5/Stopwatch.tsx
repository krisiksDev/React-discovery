// 🎯 EXERCICE 4.3 - Solution: Stopwatch.tsx

import { useState, useEffect } from "react";

export const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isRunning) {
      // Démarrer le timer
      intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function : nettoyer le timer
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // Re-exécuter l'effet si isRunning change

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="max-w-md mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">⏱️ Chronomètre</h2>

      {/* Affichage du temps */}
      <div
        className={`text-7xl font-mono font-bold mb-8 transition-colors ${
          isRunning ? "text-green-600" : "text-gray-400"
        }`}
      >
        {formatTime(seconds)}
      </div>

      {/* Boutons de contrôle */}
      <div className="flex gap-3 justify-center mb-6">
        <button
          onClick={handleStart}
          disabled={isRunning}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            isRunning
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white active:scale-95"
          }`}
        >
          ▶️ Start
        </button>

        <button
          onClick={handleStop}
          disabled={!isRunning}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            !isRunning
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600 text-white active:scale-95"
          }`}
        >
          ⏸️ Stop
        </button>

        <button
          onClick={handleReset}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all active:scale-95"
        >
          🔄 Reset
        </button>
      </div>

      {/* Indicateur d'état */}
      <div className="flex items-center justify-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            isRunning ? "bg-green-500 animate-pulse" : "bg-gray-300"
          }`}
        ></div>
        <p
          className={`text-sm font-medium ${
            isRunning ? "text-green-600" : "text-gray-500"
          }`}
        >
          {isRunning ? "En cours..." : "Arrêté"}
        </p>
      </div>

      {/* Statistiques */}
      {seconds > 0 && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Temps écoulé : <strong>{seconds}</strong> seconde
            {seconds > 1 ? "s" : ""}
          </p>
        </div>
      )}
    </div>
  );
};
 