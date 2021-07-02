import React, { useState, useEffect } from "react";

const Timer = () => {
  let [time, setTime] = useState(new Date());
  useEffect(() => {
    const currTime = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(currTime);
    };
  });
  return (
    <>
      <h1 style={{ fontSize: "7em" }}>
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </h1>
      <div>{time.toLocaleDateString()}</div>
    </>
  );
};

export default Timer;
