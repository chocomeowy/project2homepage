import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const DogAPI = (props) => {
  const [dog, setDog] = useState("Dog");
  const [changeDog, setChangeDog] = useState();

  const url2 = "https://random.dog/woof.json";

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

  const changingDog = () => {
    props.setCat(dog?.url);
    setChangeDog(dog);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={changingDog}>
        🐶?
      </Button>
      <div>
        <div>{dog?.url}</div>
        <img src={dog?.url} alt="dog" style={{ width: "100vw" }} />
      </div>
    </>
  );
};

export default DogAPI;
