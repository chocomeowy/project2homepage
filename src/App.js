import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Todo from "./Components/Todo";
import RandomCat from "./Components/RandomCat";
import { Route, Redirect, Switch } from "react-router-dom";
import background from "./pexels-photo.jpeg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
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
