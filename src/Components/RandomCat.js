import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

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
    SetChangeCat(cat);
  };

  //const image = {cat[file]}

  return (
    <div>
      <>
        <div>
          <Button variant="contained" color="primary" onClick={changingCat}>
            GIVE ME MORE CATS!
          </Button>
        </div>

        <div>
          <img src={showCat(status)} alt="cat pic" style={{ width: "100vw" }} />
        </div>
      </>
    </div>
  );
};

export default RandomCat;
