//import firebase from "../database/firebaseDB";
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
import { useState } from "react";
// import { Route } from "react-router";
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
function Todo(props) {
  const [todos, setTodos] = useState([]);
  // const [text, setText] = useState("");
  // const inputRef = useRef();
  // const db = firebase.firestore().collection("todos");
  // useEffect(() => {
  //   const unsubscribe = db.orderBy("created").onSnapshot((collection) => {
  //     const updatedNotes = collection.docs.map((doc) => {
  //       const todos = { ...doc.data(), id: doc.id };
  //     });
  //     setTodos(updatedNotes);
  //     console.log(collection);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // const deleteNote = (id) => {
  //   console.log("deleting" + id);

  //   db.doc(id).delete();
  // };
  function Todo({ todo, index }) {
    return (
      <>
        <div className="todo">{todo.text}</div>{" "}
        <button onClick={() => removeTodo(index)}>x</button>
      </>
    );
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
}

export default Todo;
