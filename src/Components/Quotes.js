import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
const Quotes = () => {
  const [quote, setQuote] = useState();
  const [changeQuote, setChangeQuote] = useState();

  useEffect(() => {
    async function randomQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      //console.log(`${data.content} —${data.author}`);
      setQuote(data);
    }
    randomQuote();
  }, [changeQuote]);

  const changingQuote = () => {
    setChangeQuote(quote);
  };

  return (
    <>
      <h3 className="trans">
        {quote?.content}
        <br></br>
        {quote?.author}
      </h3>
      <Button variant="contained" color="primary" onClick={changingQuote}>
        New Quote!
      </Button>
    </>
  );
};

export default Quotes;
