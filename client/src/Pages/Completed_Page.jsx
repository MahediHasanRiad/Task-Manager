import React, { Suspense, lazy } from "react";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
import MasterLayout from "../Components/MasterLayout/MasterLayout";
const Completed = lazy(() => import("../Components/Completed/Completed"));

const Completed_Page = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Completed />
        </Suspense>
      </MasterLayout>
    </div>
  );
};

export default Completed_Page;
