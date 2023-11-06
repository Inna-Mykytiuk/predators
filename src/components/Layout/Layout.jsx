// import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import Loader from "../Loader/Loader";

export const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
