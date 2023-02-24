import React, { useEffect } from "react";
import "./page2.css";
import { Link } from "react-router-dom";
import TopBar from "../component/topbar/TopBar";
import facebook from "./facebook.png";
import home from "./home.png";
import instar from "./instargram.png";
import tistory from "./tistory.png";
import retry from "./retry.png";

export default function Page2(response) {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);

  // const test = "이거 실험용";
  // const res1 = test.length;
  // console.log(test.substring(0, 5));

  // const len = response.length;
  // const res1 = response.desc.substring(0, len / 2);
  // const res2 = response.desc.substring(len / 2, len);

  useEffect(() => {});

  return (
    <>
      <TopBar />
      <div className="page2">
        <div className="side">
          <div className="category">SNS 플랫폼 종류</div>
          <div className="SNS">
            <img src={instar} alt="" />
            인스타그램
          </div>
          <div className="SNS">
            <img src={facebook} alt="" />
            페이스북
          </div>
          <div className="SNS">
            <img src={tistory} alt="" />
            티스토리
          </div>
          <hr className="side__bar"></hr>
          <div className="SNS">
            <img src={home} alt="" />
            메인 화면으로
          </div>
          <div className="SNS">
            <img src={retry} alt="" />
            다시 생성하기
          </div>
          <div className="side__plus">
            <span>다른 리뷰 사이트를 이용해보세요!</span>
            <span>네이버 플레이스 이외의 </span>
            <span>숨고,카카오맵, 구글맵, 배달의 민족 등 </span>
            <span>다양한 리뷰 URL을 </span>
            <span>입력하시면 더욱</span>
            <span>다양한 게시글을 생성할 수 있습니다.</span>
          </div>
        </div>
        <div className="main">
          <span className="title">추천제목 | {response.data.result.title}</span>
          <span className="date">생성날짜 | {today}</span>
          <hr className="bar"></hr>
          <div className="desc"></div>
          <button className="button">
            <Link to={"/"} className="link">
              확인
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
