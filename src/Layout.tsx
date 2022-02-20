import React from "react";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <h2>React Router Sandbox</h2>
      {children}
    </div>
  );
};

export default Layout;
