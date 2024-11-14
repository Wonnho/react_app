import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  const posts = useSelector((state) => {
    return state.posts;
  });
  console.log(posts);

  const [post, setPost] = useState();

  useEffect(() => {
    setPost(posts.find((post) => post.id === parseInt(postId)));
  }, []);
  return (
    <div>
      Detail
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
}
