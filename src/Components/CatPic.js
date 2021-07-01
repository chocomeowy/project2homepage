import React from "react";
import { useEffect, useState } from "react";
function CatPic() {
  const [cat, setCat] = useState("Cat image");
  const [status, setStatus] = useState("idle");
  const [changeCat, SetChangeCat] = useState();
  const url2 = "https://thatcopy.pw/catapi/rest/";

  useEffect(() => {
    setStatus("pending");
    fetch(url2)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setStatus("resolved");
        setCat(data.webpurl);
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
    <>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${cat})` }}
      >
        <button onClick={changingCat}>New Cat Picture</button>
      </div>
    </>
  );
}

export default CatPic;
