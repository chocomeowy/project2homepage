import React from "react";
import { useEffect, useState } from "react";
const RandomCat = () => {
  const [cat, setCat] = useState("Cat image");
  const [status, setStatus] = useState("idle");
  const [changeCat, SetChangeCat] = useState();
  const url = "https://aws.random.cat/meow";

  useEffect(() => {
    setStatus("pending");
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setStatus("resolved");
        setCat(data);
        //console.log(data);
      })
      .catch((error) => {
        setStatus("error");
        setCat(error);
      });
  }, [changeCat]);

  const showCat = (status) => {
    if (status === "idle") {
      return "Please enter a currency";
    }

    if (status === "pending") {
      return "Loading...";
    }

    if (status === "resolved") {
      return cat;
    }

    if (status === "error") {
      return cat;
    }
  };

  const changingCat = () => {
    SetChangeCat(cat);
  };
  return (
    <div>
      <>
        <div>
          <button onClick={changingCat}>New Cat Picture</button>
        </div>
        <div>
          <img src={cat.file} alt="cat pic" />
        </div>
      </>
    </div>
  );
};

export default RandomCat;
