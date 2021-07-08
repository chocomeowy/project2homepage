import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

import firebase from "../database/firebaseDB";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "100%",
    height: 520,
  },
}));

const DogAPI = (props) => {
  const [dog, setDog] = useState("Dog");
  const [changeDog, setChangeDog] = useState();
  const [dogList, setDogList] = useState([]);
  const classes = useStyles();
  const url = "https://random.dog/woof.json?include=jpg,jpeg,gif";
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("dogs");

  useEffect(() => {
    const getDog = () => {
      fetch(url)
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
    };
    getDog();
  }, [changeDog]);

  const changingDog = (newDog) => {
    props.setCat(dog?.url);
    setChangeDog(dog?.url);
    setDogList((newArr) => [...newArr, { title: dog?.url }]);
    if (dogList.length > 5) {
      dogList.shift();
    }
  };

  useEffect(() => {
    const getDog = () => {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setDogList(items);
        setLoading(false);
        //console.log(items[0].title);
      });
    };
    getDog();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={changingDog}>
        🐶?
      </Button>

      <ImageList rowHeight={250} className={classes.imageList} cols={3}>
        {dogList.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item.title} alt={item} />
          </ImageListItem>
        ))}
      </ImageList>
      <div>{dog?.url}</div>
      <img src={dog?.url} alt="dog" style={{ width: "100vw" }} />
    </>
  );
};

export default DogAPI;
