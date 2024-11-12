import React, { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");
  const [color, setColor] = useState("grey");
  const [like, setLike] = useState("좋아요");
  return (
    <>
    <div>
      onClick={(num)=>setNum(num+1)}
      onClick={(num)=>setNum(num+1)}
      onClick={(num)=>setNum(num+1)}
    </div>

    

      <div>{num}</div>
      <button
        style={{ backgroundColor: "grey", color: "white" }}
        onClick={() => setNum(num + 1)}
      >
        +
      </button>
      <button
        style={{ backgroundColor: "grey", color: "white" }}
        onClick={() => setNum(num - 1)}
      >
        -
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="click + button then increase number while -one,decrease it"
        style={{
          marginTop: "10px",
          display: "block",
          padding: "20px",
          color: "white",
          backgroundColor: "brown",
        }}
      />
      <div>{text}</div>

      <div>displaying Color:{color}</div>
      <button style={{ color: "white", backgroundColor: color }}>
        click the button to change color
      </button>
      <input
        type="text"
        placeholder="write color"
        onChange={(e) => setColor(e.target.value)}
        style={{
          marginTop: "10px",
          display: "block",
          padding: "20px",
          color: "white",
          backgroundColor: "brown",
        }}
      />
      <button onClick={(e) => "좋아요"?setLike("좋아요 취소"):null}>{like}</button>
    </>
  );
}
