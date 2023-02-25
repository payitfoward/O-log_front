import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import Page2 from "../page2/Page2";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Result() {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [post, setPost] = useState(false);
  const location = useLocation();

  const url = location.state.url;

  console.log("url", url);

  const fetch = async () => {
    try {
      if (post === false) {
        const res = await axios.post("/", {
          url: url,
        });
        setResponse(res.data);
        setLoading(false);
        setPost(true);
      }
    } catch {}
  };
  fetch();
  useEffect(() => {
    fetch();
  }, [url]);

  return <div>{loading ? <Loading /> : <Page2 response={response} />}</div>;
}
