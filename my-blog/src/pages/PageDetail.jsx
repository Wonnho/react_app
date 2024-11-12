import React from "react";
import { useLocation, useParams } from "react-router-dom";
export default function PageDetail() {
  const { postId } = useParams();
  const location = useLocation();
  const { post } = location.state;

  return (
    <div>
      <h3>{post.title}</h3>
      <h3>{post.content}</h3>;
    </div>
  );
}
