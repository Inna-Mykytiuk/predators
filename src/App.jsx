import React from "react";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home"));
const Wasp = lazy(() => import("./pages/Wasp"));
const Hawk = lazy(() => import("./pages/Hawk"));
const Snake = lazy(() => import("./pages/Snake"));
const Wolf = lazy(() => import("./pages/Wolf"));
const Bear = lazy(() => import("./pages/Bear"));
const Shark = lazy(() => import("./pages/Shark"));
const Human = lazy(() => import("./pages/Human"));
const Virus = lazy(() => import("./pages/Virus"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/wasp' element={<Wasp />} />
          <Route path='/hawk' element={<Hawk />} />
          <Route path='/snake' element={<Snake />} />
          <Route path='/wolf' element={<Wolf />} />
          <Route path='/bear' element={<Bear />} />
          <Route path='/shark' element={<Shark />} />
          <Route path='/human' element={<Human />} />
          <Route path='/virus' element={<Virus />} />
        </Route>
        <Route
          path='*'
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
