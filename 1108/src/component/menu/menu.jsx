import React from "react";

export default function menu() {
  const coffee = [
    { name: "아메리카노", price: "5.0/5.5" },
    { name: "카페 라떼", price: "6.0/6.5" },
    { name: "바닐라 라떼", price: "6.0/6.5" },
  ];
  const ade = [
    { name: "레몬에이드", price: "6.0" },
    { name: "자몽에이드", price: "6.0" },
    { name: "유자에이드", price: "6.0" },
  ];
  return (
    <>
      <h1>Menu</h1>
      <main>
        <section id="coffee">
          <h1>COFFEE</h1>
          <ul>
            <li>
              <div>Americano</div>
              <div>5.0/5.5</div>
            </li>
            <li>
              <div>Cafe Latte</div>
              <div>5.0/5.5</div>
            </li>
            <li>
              <div>Vanila Latte</div>
              <div>5.0/5.5</div>
            </li>
            <li>
              <div>Caramel Machiatto</div>
              <div>5.0/5.5</div>
            </li>
          </ul>
        </section>
        <section>
        <h1>ADE</h1>
        <ul>
          <li>
            <div>LemonAde</div> <div>5.0/5.5</div>
          </li>
          <li>
            <div>JamonAde</div> <div>5.0/5.5</div>
          </li>
          <li>
            <div>CitronAde</div> <div>5.0/5.5</div>
          </li>
        </ul>
        </section>
      </main>
    </>
  );
}
