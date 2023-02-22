import React, { useEffect, useState } from "react";
import "./page2.css";
import logo from "./logo3.png";
import { Link } from "react-router-dom";
import TopBar from "../component/topbar/TopBar";
import facebook from "./facebook.png";
import home from "./home.png";
import instar from "./instargram.png";
import tistory from "./tistory.png";
import retry from "./retry.png";
import jen from "./jen.jpg";
import store from "./store.jpg";
import Loading from "../loading/Loading";

export default function Page2() {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);

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
          <span className="title">
            추천제목 | 서대문구 술집 '술인'에서는 맛있는 안주와 편안한 분위기를
            만나보세요!
          </span>
          <span className="date">생성날짜 | {today}</span>
          <hr className="bar"></hr>
          <div className="desc">
            <img src={store} alt="" className="img2" />
            술인에서는 맛있는 안주를 시키는 것도 좋지만, 무료로 제공되는 서비스
            안주 또한 충분합니다. 그리고 서비스 직원들은 항상 웃는 얼굴로
            친절하게 고객들을 대해줍니다. 또한, 고객들이 이전에 시식해본 적 없는
            새로운 메뉴를 먼저 시식하게 해주는 더욱 깜짝 놀랄만한 이벤트를
            진행하고 있습니다. 술인의 인테리어는 사장님의 감성이 담긴 깔끔한
            <img src={jen} alt="" className="img3" />
            디자인으로 구성되어 있으며, 사장님의 친절하고 예쁜 모습도 고객들에게
            더할 나위 없이 좋은 기분을 선사합니다. 또한, 고객들은 편안한
            분위기에서 대화를 나누며 맥주를 즐길 수 있습니다. 술인에서는 떡볶이,
            묵은지찜, 묵은지찌개, 오뎅탕 등의 전통 음식들 뿐만 아니라, 토치로
            구운 묵은지전과 같은 새로운 시도의 요리도 제공하고 있습니다. 이 모든
            것들은 어떤 고객들의 입맛에도 맞게끔 준비되어 있습니다. 술인에서는
            단독 칸도 준비되어 있어, 일반 식당과 달리 조용하게 즐길 수 있는
            장소를 제공합니다. 또한, 화장실도 청결하게 관리되어 있어 고객들의
            만족도를 높이고 있습니다. 전통적인 맛과 새로운 요리의 조합, 친절하고
            깨끗한 매장 분위기와 최고의 서비스로 고객들의 마음을 사로잡는
            술인에서는, 친구들과 함께 맥주 한 잔을 즐기는 것은 물론, 소중한
            사람들과 좋은 추억을 쌓을 수 있습니다.
          </div>
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
