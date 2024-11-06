import React from "react";

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} gadget="Space Suit"></Item>
        <Item isPacked={true} gadget="Helmet with a golden leaf"></Item>
        <Item isPacked={false} gadget="Photo of Tam"></Item>
      </ul>
    </section>
  );
}

function Item({gadget, isPacked}) {
 return <li className="Item">{isPacked?`${gadget}`:gadget} </li>
}
