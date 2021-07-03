import React, { useState } from "react";
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
      <h4 className="div-bottom" onClick={changeQuote}>
        <div className="trans">
          {randomQuote.quote} - {randomQuote.name}
        </div>
      </h4>
    </>
  );
}

export default MotivationQuotes;
