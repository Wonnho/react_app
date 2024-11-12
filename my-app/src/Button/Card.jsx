import React from "react";

export default function Card({ title, content, style }) {
  // const title = "Avatar";
  // const content = "";
  return (
    <div style={{ ...style, backgroundColor: "Green" }}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
