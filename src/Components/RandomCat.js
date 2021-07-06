import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Quotes from "./Quotes";
const RandomCat = (props) => {
  const [cat, setCat] = useState("Cat image");
  const [status, setStatus] = useState("idle");
  const [changeCat, setChangeCat] = useState();
  const [dog, setDog] = useState("Dog");
  const [changeDog, setChangeDog] = useState();
  const url = "https://aws.random.cat/meow";
  const url2 = "https://random.dog/woof.json";
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

  useEffect(() => {
    fetch(url2)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setDog(data);
        //console.log(data);
      })
      .catch((error) => {
        setDog(error);
      });
  }, [changeDog]);

  const showCat = (status) => {
    if (status === "idle") {
      return "New Cat incoming.";
    }

    if (status === "pending") {
      return "Loading...";
    }

    if (status === "resolved") {
      return cat.file;
    }

    if (status === "error") {
      return cat.file;
    }
  };

  const changingCat = () => {
    props.setCat(cat.file);
    setChangeCat(cat);
  };

  const changingDog = () => {
    props.setCat(dog?.url);
    setChangeDog(dog);
  };

  //const image = {cat[file]}

  return (
    <>
      <Quotes />
      <div>
        <Button variant="contained" color="primary" onClick={changingCat}>
          GIVE ME MORE CATS!
        </Button>
        <Button variant="contained" color="primary" onClick={changingDog}>
          🐶?
        </Button>
      </div>

      <div>
        <img src={showCat(status)} alt="cat pic" style={{ width: "100vw" }} />
      </div>
    </>
  );
};

export default RandomCat;
