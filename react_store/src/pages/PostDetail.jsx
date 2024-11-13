import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  // const location = useLocation();

  // const { post } = location.state;
  // const { title, content } = post;
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const [post, setPost] = useState();
  useEffect(() => {
    setPost(posts.find((post) => post.id === parseInt(postId)));
  }, []);

  return (
    <div>
      Detail
      <h3>{post?.title}</h3>an
      <p>{post?.content}</p>
    </div>
  );
}
