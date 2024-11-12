import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function WebtoonDetail() {
  // const { day,title.imgUrl } = useParams();
  const { day } = useParams();

  const location = useLocation();
  const imgUrl = location.state?.imgUrl;
  const title = location.state?.title;
  return (
    <div>
      <h3> {day} 웹툰 </h3>

      {imgUrl && <img src={imgUrl} alt="웹툰 이미지" />}
      {title && <h2>{title}</h2>}
      {/* <p>{content} </p> */}
    </div>
  );
}
