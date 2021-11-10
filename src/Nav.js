import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to="/Feed">Home</Link>
        </li>
        <li>
          <Link to="/Feed">Feed</Link>
        </li>
        <li>
          <Link to="/LogIn">Log In</Link>
        </li>
        <li>
          <Link to="/SignUp">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
