import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import Page2 from "../page2/Page2";

export default function Result(response) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (response.desc === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    // setTimeout(() => {
    //   setLoading(false);
    // }, 10000);
  });
  return <div>{loading ? <Loading /> : <Page2 response={response} />}</div>;
}
