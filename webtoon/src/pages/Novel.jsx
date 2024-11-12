import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Novel() {
  const nagivate = useNavigate();
  // const genres = ["행동소설", "성격소설", "극적소설", "시대소설", "연대기소설"];
  const imgUrl =
    "https://contents.kyobobook.co.kr/pmtn/2024/book/241031_hankang/bnD1_con01_03.jpg";
  return (
    <div>
      <h2>Novel</h2>

      <h3>
        <i>"Han Gang"</i>, Novel Prize Winner !!
      </h3>
      <img src={imgUrl} alt="Han Gang" />
      <main>
        <ul className="novel">
          <li>
            {/* <Link to="/novel/행동소설"> */}
            <h3
              onClick={() => {
                nagivate(`/novel/${genre}`);
              }}
            >
              행동소설
            </h3>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/novel/성격소설"> */}
            <h3
              onClick={() => {
                nagivate(`/novel/${genre}`);
              }}
            >
              성격소설
            </h3>

            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/novel/극적소설"> */}
            <h3
              onClick={() => {
                nagivate(`/novel/${genre}`);
              }}
            >
              극적 소설
            </h3>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/novel/연대기소설">  */}
            <h3
              onClick={() => {
                nagivate(`/novel/${genre}`);
              }}
            >
              연대기 소설
            </h3>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/novel/시대소설"> */}
            <h3
              onClick={() => {
                nagivate(`/novel/시대소설`);
              }}
            >
              시대소설
            </h3>
            {/* </Link> */}
          </li>
        </ul>
      </main>
    </div>
  );
}
