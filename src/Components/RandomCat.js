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

const RandomCat = (props) => {
  const classes = useStyles();
  const [cat, setCat] = useState("Cat image");
  const [status, setStatus] = useState("idle");
  const [changeCat, setChangeCat] = useState();
  const [catList, setCatList] = useState([]);
  const url = "https://aws.random.cat/meow";
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("cats");

  useEffect(() => {
    setStatus("pending");
    const getCat = () => {
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
    };
    getCat();
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

  useEffect(() => {
    const getCat = () => {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setCatList(items);
        setLoading(false);
        //console.log(items[0].title);
      });
    };
    getCat();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (loading) {
    return <h1>loading...</h1>;
  }

  const changingCat = () => {
    props.setCat(cat.file);
    setChangeCat(cat);
    setCatList((newArr) => [...newArr, { file: cat?.file }]);
    //console.log(catList);

    if (catList.length > 5) {
      catList.shift();
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={changingCat}>
        GIVE ME MORE CATS!
      </Button>
      <ImageList rowHeight={250} className={classes.imageList} cols={3}>
        {catList.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item.file} alt={item} />
          </ImageListItem>
        ))}
      </ImageList>
      <div></div>
      <div>{showCat(status)}</div>
      <div>
        <img src={showCat(status)} alt="cat pic" style={{ width: "99vw" }} />
      </div>
    </>
  );
};

export default RandomCat;
