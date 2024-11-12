import React from "react";
import { Link } from "react-router-dom";

export default function Webtoon() {
  const imgUrl =
    "https://comicthumb-phinf.pstatic.net/20170217_69/pocket_1487311960467qQo6P_JPEG/image.jpg?type=m260";
  const imgUrl2 =
    "https://comicthumb-phinf.pstatic.net/20230102_210/pocket_1672624864279x0xDp_JPEG/%C6%D0%BC%C7%BF%D5-%C0%AF%B7%E1%C8%AD-690X1000.jpg?type=m260";
  return (
    <div className="flex-center">
      <h2>Webtoon</h2>
      <h3> Spending time with webtoon If you relax yourself with fun!</h3>
      <main>
        <ul className="webtoon_day">
          <li>
            <Link
              to="/webtoon/일요일"
              state={{ imgUrl: imgUrl, title: "송곳" }}
            >
              일요일
            </Link>
          </li>
          <li>
            <Link to={`/webtoon/월요일/미생/${imgUrl2}`}>월요일</Link>
          </li>
          <li>
            <Link to="/webtoon/화요일">화요일</Link>
          </li>
          <li>
            <Link to="/webtoon/수요일">수요일</Link>
          </li>
          <li>
            <Link to="/webtoon/목요일">목요일</Link>
          </li>
          <li>
            <Link to="/webtoon/금요일">금요일</Link>
          </li>
          <li>
            <Link to="/webtoon/토요일">토요일</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
