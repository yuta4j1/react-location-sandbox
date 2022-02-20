import React from "react";
import { Link } from "react-router-dom";

const App: React.VFC<{}> = ({}) => {
  return (
    <div>
      <h4>Hello, React</h4>
      <div>
        <Link to="page1">Page1へ</Link>
        <Link to="page2">Page2へ</Link>
      </div>
    </div>
  );
};

export default App;
