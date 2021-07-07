import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import AirTable from "./Components/AirTable";
import Header from "./Components/Header";
import Home from "./Components/Home";
import RandomCat from "./Components/RandomCat";
//import Todo from "./Components/Todo";
import Cat from "./pexels-photo.jpeg";
import DogAPI from "./Components/DogAPI";
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
            <AirTable />
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
