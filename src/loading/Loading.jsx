import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import "./loading.css";

export default function Loading() {
  return (
    <div className="contentWrap">
      <span className="msgTop">조금만 기다려주세요!</span>
      <span className="msg">O-log가 글을 생성중입니다!</span>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <FadeLoader
          color=" #d8d9cf"
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    </div>
  );
}
