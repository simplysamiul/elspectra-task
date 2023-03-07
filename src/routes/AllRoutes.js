import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Homepage = React.lazy(() => import("../views/pages/Homepage"));

const AllRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
