import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import DogAPI from "./Components/DogAPI";
import FirebaseToDo from "./Components/FirebaseToDo";
import Header from "./Components/Header";
import Home from "./Components/Home";
import RandomCat from "./Components/RandomCat";
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
            <RandomCat setCat={setCat} />
          </Route>
          <Route path="/dogs/">
            <DogAPI setCat={setCat} />
          </Route>
          <Route path="/todo/">
            <FirebaseToDo />
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
