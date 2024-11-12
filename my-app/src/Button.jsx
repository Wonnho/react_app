import React from "react";

export default function Button({ color, backgroundColor, text }) {
  return <button style={{ color, backgroundColor }}>{text}</button>;
}
