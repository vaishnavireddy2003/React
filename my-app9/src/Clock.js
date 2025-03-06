import React, { useState, useEffect } from "react";
import "./App.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      {/* Analog Clock */}
      <div className="analog-clock">
        <div className="clock-face">
          <div
            className="hour-hand"
            style={{
              transform: `rotate(${(time.getHours() % 12) * 30 + time.getMinutes() * 0.5}deg)`,
            }}
          />
          <div
            className="minute-hand"
            style={{
              transform: `rotate(${time.getMinutes() * 6}deg)`,
            }}
          />
          <div
            className="second-hand"
            style={{
              transform: `rotate(${time.getSeconds() * 6}deg)`,
            }}
          />
        </div>
      </div>

      {/* Digital Clock */}
      <div className="digital-clock">
        <h1>Live Clock</h1>
        <h2>{time.toLocaleDateString()}</h2>
        <h3>{time.toLocaleTimeString()}</h3>
      </div>
    </div>
  );
};

export default Clock;
