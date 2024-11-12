import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function PageDetail() {
  const { newsId } = useParams();
  const location = useLocation();

  console.log(location.state);
  // const { id, title, content } = location.state.el;
  const { id, title, content } = location.state.el;

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
