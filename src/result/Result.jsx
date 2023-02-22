import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import Page2 from "../page2/Page2";

export default function Result() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  });
  return <div>{loading ? <Loading /> : <Page2 />}</div>;
}
