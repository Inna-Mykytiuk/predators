import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home"));
const Wasp = lazy(() => import("./pages/Wasp"));
const Hawk = lazy(() => import("./pages/Hawk"));
const Snake = lazy(() => import("./pages/Snake"));
const Wolf = lazy(() => import("./pages/Wolf"));
const Tiger = lazy(() => import("./pages/Tiger"));
const Shark = lazy(() => import("./pages/Shark"));
const Human = lazy(() => import("./pages/Human"));
const Virus = lazy(() => import("./pages/Virus"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/wasp' element={<Wasp />} />
            <Route path='/hawk' element={<Hawk />} />
            <Route path='/wolf' element={<Wolf />} />
            <Route path='/snake' element={<Snake />} />
            <Route path='/tiger' element={<Tiger />} />
            <Route path='/shark' element={<Shark />} />
            <Route path='/human' element={<Human />} />
            <Route path='/virus' element={<Virus />} />
          </Route>
          {/* <Route
          path='*'
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
