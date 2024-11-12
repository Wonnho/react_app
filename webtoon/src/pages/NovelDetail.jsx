import React from "react";
import { useParams } from "react-router-dom";

export default function NovelDetail() {
  const { genre } = useParams();

  // const location = useLocation();
  // const { genre, content } = location.state;

  return (
    <div>
      <h3> {genre} </h3>
      {/* <p>{content} </p> */}
    </div>
  );
}
