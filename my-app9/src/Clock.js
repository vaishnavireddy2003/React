import { useState, useEffect } from "react";
import ClockComponent from "react-clock";
import "react-clock/dist/Clock.css";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-gray-700">Live Clock</h1>
      <ClockComponent value={time} size={150} />
      <p className="text-lg text-gray-500">{time.toDateString()}</p>
      <p className="text-2xl mt-2 text-blue-500 font-mono">
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}
