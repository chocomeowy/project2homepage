import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import firebase from "../database/firebaseDB";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FirebaseToDO = () => {
  const classes = useStyles();
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const ref = firebase.firestore().collection("todos");
  //console.log(ref)

  //snapshot for real time update
  const getTodos = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTodo(items);
      setLoading(false);
    });
  };

  //useEffect
  useEffect(() => {
    getTodos();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  //add function
  const addTodo = (newTodo) => {
    ref
      .doc(newTodo.id)
      .set(newTodo)
      .catch((err) => {
        console.log.error(err);
      });
  };

  // delete function

  const deleteTodo = (todo) => {
    ref
      .doc(todo.id)
      .delete()
      .catch((err) => {
        console.log.error(err);
      });
  };

  //edit function

  const editTodo = (updatedToDo) => {
    setLoading();
    ref
      .doc(updatedToDo.id)
      .update(updatedToDo)
      .catch((err) => {
        console.log.error(err);
      });
  };

  return (
    <>
      <h1 className="trans">To do</h1>
      {todo.map((todo) => (
        <div key={todo.id}>
          <p className="trans">
            {todo.title} -
            <IconButton onClick={() => deleteTodo(todo)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={() => editTodo({ title, id: todo.id })}>
              <EditIcon fontSize="small" />
            </IconButton>
          </p>
        </div>
      ))}
      <Input
        className="trans"
        placeholder="Add To Do"
        variant="filled"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => addTodo({ title, id: uuidv4() })}
      >
        Submit
      </Button>
    </>
  );
};

export default FirebaseToDO;
