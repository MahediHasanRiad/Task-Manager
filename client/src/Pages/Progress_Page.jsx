import React, { lazy, Suspense } from "react";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
import MasterLayout from "../Components/MasterLayout/MasterLayout";
const Progress = lazy(() => import("../Components/Progress/Progress")) ;

const Progress_Page = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback = {<LazyLoader/>}>
          <Progress/>
        </Suspense>
      </MasterLayout>
    </div>
  );
};

export default Progress_Page;
