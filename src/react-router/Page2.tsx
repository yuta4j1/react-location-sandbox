import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <h4>これはページ２です。</h4>
      <Link to="/">ホームに戻る</Link>
    </div>
  );
};

export default Page2;
