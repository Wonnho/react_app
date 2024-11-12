<<<<<<< HEAD
import React from "react";
import MenuCategoryItem from "./MenuCategoryItem";

export default function MenuCategory({ category, beverages }) {
  const menuList = beverages.map((beverage) => (
    <MenuCategoryItem key={beverage.name} {...beverage} />
  ));

  return (
    <section>
      <h2 className="text-center">{category}</h2> {/* Fixed typo */}
      <ul>{menuList}</ul>
    </section>
  );
}
=======
import React from "react";
import MenuCategoryItem from "./MenuCategoryItem";

export default function MenuCategory({ category, beverages }) {
  const menuList = beverages.map((beverage) => {
    return <MenuCategoryItem {...beverage}></MenuCategoryItem>;
  });

  return (
    <section>
      <h2 className="text-center">{category}</h2>
      <ul>{menuList}</ul>
    </section>
  );
}
>>>>>>> 97ff5540d99a13d59072ce22c57b3a4c71d96a96
