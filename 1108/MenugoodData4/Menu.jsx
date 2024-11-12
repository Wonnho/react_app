import React from "react";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  const beverages = {
    categories: ["coffee", "ade", "tea"],
    result: {
      coffee: [
        { name: "아메리카노", price: "5.0/5.5" },
        { name: "카페 라떼", price: "6.0/6.5" },
        { name: "바닐라 라떼", price: "6.0/6.5" },
      ],
      ade: [
        { name: "레몬에이드", price: "6.0" },
        { name: "자몽에이드", price: "6.0" },
        { name: "유자에이드", price: "6.0" },
      ],
      tea: [
        { name: "홍차", price: "6.0" },
        { name: "녹차", price: "6.0" },
        { name: "쌍화차", price: "6.0" },
      ],
    },
  };

  const { categories, result } = beverages;
  // const beveragesObject = {};

  const beverageList = categories.map((category) => {
    return [category, result[category]];
  });

  // categories.forEach((category) => {
  //   beveragesObject[category] = result.filter((beverage) => {
  //     return beverage.category === category;
  //   });
  // });
  // // const beverageList = Object.entries(beveragesObject);

  const menuCategories = beverageList.map((el) => {
    const [category, beverage] = el;
    return (
      <MenuCategory category={category} beverages={beverage}></MenuCategory>
    );
  });

  // console.log(beveragesObject);
  return (
    <>
      <h1 className="text-center">Menu</h1>
      <main>{menuCategories}</main>
    </>
  );
}
