import React from "react";
import { useEffect, useState } from "react";
function CatPic(props) {
  const [cat, setCat] = useState("Cat image");
  const [changeCat, SetChangeCat] = useState();
  const url2 = "https://thatcopy.pw/catapi/rest/";

  useEffect(() => {
    fetch(url2)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setCat(data.webpurl);
        //console.log(data);
      })
      .catch((error) => {
        setCat(error);
      });
  }, [changeCat]);

  const changingCat = () => {
    SetChangeCat(cat);
  };
  return (
    <>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${cat})` }}
      />
      <button onClick={changingCat}>New Cat Picture</button>
    </>
  );
}

export default CatPic;
