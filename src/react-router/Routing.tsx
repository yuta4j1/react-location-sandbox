import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Page1 from "./Page1";
import Page2 from "./Page2";

// const Page1 = lazy(() => import("./Page1"));
// const Page2 = lazy(() => import("./Page2"));

const Rooter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading now...</p>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Rooter;
