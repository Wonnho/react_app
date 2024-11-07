import React from "react";

export default function Button({color="white", backgroundColor, children }) {
  return <button style={{ color: "white", backgroundColor }}>{children}</button>;
}
