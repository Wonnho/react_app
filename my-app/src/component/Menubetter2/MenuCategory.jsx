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