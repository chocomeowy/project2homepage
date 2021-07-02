import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
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
    props.setCat(cat);
    SetChangeCat(cat);
  };
  return (
    <>
      <Button variant="contained" onClick={changingCat}>
        New Cat Picture
      </Button>
    </>
  );
}

export default CatPic;
