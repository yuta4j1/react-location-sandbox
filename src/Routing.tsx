import React from "react";
import { Router, ReactLocation, Outlet } from "@tanstack/react-location";
import App from "./App";
// import Page2 from "./Page2";
import Layout from "./Layout";

function mockHeavyComponentLoad<T>(fn: () => Promise<T>) {
  return new Promise(r => {
    setTimeout(() => {
      r(fn());
    }, 3000);
  });
}

const Routing = () => {
  const location = new ReactLocation();
  return (
    <Router
      location={location}
      routes={[
        {
          path: "/",
          element: <App />
        },
        {
          path: "page1",
          element: () =>
            mockHeavyComponentLoad(() => import("./Page1")).then(r => (
              <r.Page1 />
            )),
          pendingElement: <p>Loading now...</p>
        },
        {
          path: "page2",
          element: () => import("./Page2").then(r => <r.default />)
        }
      ]}
      defaultPendingElement={async () => <div>見てるそ</div>}
    >
      {/* <Layout>
        <Outlet />
      </Layout> */}
    </Router>
  );
};

export default Routing;
