import React from "react";

export default function Button({backgroundColor, text}) {
  // const backgroundColor = "blue";
  // const text = "확인";
  return <button style={{ backgroundColor, color: "white" }}>{text}</button>;
}


