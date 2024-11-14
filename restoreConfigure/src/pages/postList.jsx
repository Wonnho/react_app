import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function PostList() {
  const navigate=useNavigate();
  
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`} state={{ post }}>
                <h3>{post.title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
