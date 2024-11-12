<<<<<<< HEAD
import React from "react";

export default function MenuCategoryItem({ name, price }) {
  return (
    <li>
      <div>{name}</div>
      <div>{price}</div>
    </li>
  );
}
=======
import React from "react";

export default function MenuCategoryItem({ name, price }) {
  return (
    <li className="flex justify-between">
      <div>{name}</div>
      <div>{price}</div>
    </li>
  );
}
>>>>>>> 97ff5540d99a13d59072ce22c57b3a4c71d96a96
