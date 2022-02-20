import React from "react";
import { Link } from "@tanstack/react-location";

export const Page1 = () => {
  return (
    <div>
      <h4>これはページ１です。</h4>
      <Link to="/">ホームに戻る</Link>
    </div>
  );
};
