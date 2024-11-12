import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const news = [
    {
      id: 1,
      title: "웨딩비용 20% 절감, 어느 NGO가 보여준 '거품빼기' [視리즈]",
      content:
        "대관료 0원. 하지만 부대비용은 그대로. 예비부부들이 '텅 빈 공간'만 제공하는 공공예식장을 찾지 않는 이유다. '아름다운 공간'을 뽐내는 공공예식장이 적지 않다는 점을 감안하면 아쉬운 부분이다. 해법은 없을까. '텅 빈 공간'을 채우는 금액을 '합리적'으로 설정하면, 많은 예비부부가 웨딩 비용을 절감할 수 있지 않을까. 비영리단체(NGO) 그린웨딩포럼이 그 해법을 제공하고 있다.",
    },
    {
      id: 2,
      title: "아이유 측 표절의혹 제기자 중 중학 동문 추정 인물…180여 명 고소",
      content:
        '아이유 소속사 이담엔터테인먼트는 "지난해 4∼5월경 근거 없이 표절 의혹을 제기해 아이유의 명예를 훼손한 이들 중 일부의 신상정보가 특정되었다"며 "그중엔 아이유의 중학교 동문으로 추정되는 사람도 있다"고 밝혔습니다',
    },
    {
      id: 3,
      title: "인천 간석동 홈플러스서 불…연기 올라와",
      content:
        "11일 오후 5시25분께 인천 남동구 간석동 홈플러스 메가푸드마켓 간석점 건물에서 불이 났다",
    },
  ];

  return (
    <>
      <h2>Top News</h2>
      <ul>
        {news.map((el) => {
          const { id, title, content } = el;
          console.log(el);
          return (
            <li key={id}>
              {/* <Link to={`/news/${el.id}`} state={{ news }}>
                <h3>{title}</h3>
              </Link> */}
              <h3
                onClick={() => {
                  navigate(`/news/${el.id}`, { state: { el } });
                }}
              >
                {el.title}
              </h3>
              {/* <p>{el.content}</p> */}
            </li>
          );
        })}
      </ul>
    </>
  );
}
