import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav">
      <div className="nav-item">
        <Link to="/">Homepage</Link>
        <Link to="/catpic/">More Cat Pictures?</Link>
        <Link to="/todo/">To Do List</Link>
        <Link to="/about/">About</Link>
      </div>
    </div>
  );
}
export default Header;
