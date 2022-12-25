import React, { lazy, Suspense } from "react";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
const Login = lazy(() => import("../Components/Login/Login"));

const Login_Page = () => {
  return (
    <div>
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    </div>
  );
};

export default Login_Page;
