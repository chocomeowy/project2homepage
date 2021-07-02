import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import RandomCat from "./Components/RandomCat";
import Todo from "./Components/Todo";
import Cat from "./pexels-photo.jpeg";
function App() {
  const [cat, setCat] = useState(Cat);
  return (
    <div className="backgroundImage" style={{ backgroundImage: `url(${cat})` }}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home setCat={setCat} />
          </Route>
          <Route path="/CatPic/">
            <RandomCat />
          </Route>
          <Route path="/todo/">
            <Todo />
          </Route>
          <Route path="/about/">
            <About />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
