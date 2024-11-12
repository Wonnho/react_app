import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/webtoon">Webtoon</Link>
        </li>
        <li>
          <Link to="/novel">Novel</Link>
        </li>
      </ul>
    </div>
  );
}
