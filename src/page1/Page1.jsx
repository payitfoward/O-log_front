import React from "react";
import logo from "./logo1.png";
import "./page1.css";

export default function Page1() {
  return (
    <div>
      <figure className="logo__thumb">
        <img src={logo} alt="" className="logo" />
      </figure>
      <div>
        <input
          className="inputUrl"
          type="text"
          placeholder="url을 입력하세요"
        />
      </div>
    </div>
  );
}
