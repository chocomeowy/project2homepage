import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Todo from "./Components/Todo";
import RandomCat from "./Components/RandomCat";
import { Route, Redirect, Switch } from "react-router-dom";
import Cat from "./pexels-photo.jpeg";
import { useState } from "react";
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
