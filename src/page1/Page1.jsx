import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo1.png";
import "./page1.css";

export default function Page1() {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 백과 연동하는 부분
  };

  return (
    <div>
      <figure className="logo__thumb">
        <img src={logo} alt="" className="logo" />
      </figure>
      <form onSubmit={handleSubmit}>
        <input
          className="inputUrl"
          type="text"
          placeholder="url을 입력하세요"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" className="button">
          <Link className="link" to="/result">
            URL 입력
          </Link>
        </button>
      </form>
    </div>
  );
}
