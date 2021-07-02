// import firebase from "../database/firebaseDB";
// import { useState, useEffect, useRef, FlatList, View } from "react";
// import { Route } from "react-router";

function Todo() {
  // const [notes, setNotes] = useState([]);
  // const [text, setText] = useState("");
  // const inputRef = useRef();
  // const db = firebase.firestore().collection("todos");
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

  return <div>todos</div>;
}

export default Todo;
