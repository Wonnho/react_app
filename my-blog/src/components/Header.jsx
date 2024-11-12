import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Post</Link>
        </li>
        <li>
          <Link></Link>
        </li>
      </ul>
    </div>
  );
}
