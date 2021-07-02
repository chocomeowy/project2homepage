// import firebase from "../database/firebaseDB";
// import {
//   List,
//   Button,
//   ListItem,
//   InboxIcon,
//   ListItemText,
//   Checkbox,
//   TextField,
//   ListItemSecondaryAction,
//   IconButton,
// } from "@material-ui/core";
// import { useState, useEffect, useRef, FlatList, View } from "react";
// import { Route } from "react-router";

function Todo(props) {
  // const [notes, setNotes] = useState([]);
  // const [text, setText] = useState("");
  // const inputRef = useRef();
  //const db = firebase.firestore().collection("todos");
  // useEffect(() => {
  //   const unsubscribe = db.orderBy("created").onSnapshot((collection) => {
  //     const updatedNotes = collection.docs.map((doc) => {
  //       const noteObject = { ...doc.data(), id: doc.id };
  //     });
  //     setNotes(updatedNotes);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // const deleteNote = (id) => {
  //   console.log("deleting" + id);

  //   db.doc(id).delete();
  // };

  return (
    <>
      <h1>todo</h1>
    </>
  );
}

export default Todo;
