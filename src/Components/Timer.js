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
      <h4>
        {time.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h4>
      <h1 className="div-center" style={{ fontSize: "5em" }}>
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </h1>
    </>
  );
};

export default Timer;
