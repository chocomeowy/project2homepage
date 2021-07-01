import React from "react";
import { useState } from "react";
import motivations from "./motivations";

function MotivationQuotes() {
  const [randomQuote, setRandomQuote] = useState(
    motivations[Math.floor(Math.random() * motivations.length)]
  );
  //const quote = motivations[Math.floor(Math.random() * motivations.length)];
  //console.log(quote);

  const changeQuote = () => {
    setRandomQuote(motivations[Math.floor(Math.random() * motivations.length)]);
  };
  return (
    <>
      <button onClick={changeQuote}>I want another quote.</button>
      <h2>
        {randomQuote.quote} - {randomQuote.name}
      </h2>
    </>
  );
}

export default MotivationQuotes;
