import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loader } from "./components";
import { PublicRoutes } from "./constant-definitions";
import Home from "./screens/Home";
import NotFound from "./screens/NotFount";

const Application = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
      <Routes>
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route path={PublicRoutes.NOTFOUND} element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default Application;
