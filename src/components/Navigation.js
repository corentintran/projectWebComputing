import React from "react";
import { Link } from "react-router-dom";

// navigation links
export default function Navigation() {
  const token = localStorage.getItem("token");

if (token === "null"){
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/VolcanoList">VolcanoList</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </ul>
    </nav>
  );

} else {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/VolcanoList">VolcanoList</Link>
        </li>
        <li>
          <Link to="/Logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
}
