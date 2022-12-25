import React, { lazy, Suspense } from "react";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
import MasterLayout from "../Components/MasterLayout/MasterLayout";
const New = lazy(() => import("../Components/New/New"));

const New_Page = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback = {<LazyLoader/>}>

          <New/>
        </Suspense>
      </MasterLayout>
    </div>
  );
};

export default New_Page;
