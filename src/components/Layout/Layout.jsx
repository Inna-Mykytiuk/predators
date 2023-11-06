import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Navigation } from "../Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
