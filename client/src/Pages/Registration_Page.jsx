import React, { lazy, Suspense } from "react";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
const Registration = lazy(() =>
  import("../Components/Registration/Registration")
);

const Registration_Page = () => {
  return (
    <div>
      <Suspense fallback={<LazyLoader />}>
        <Registration />
      </Suspense>
    </div>
  );
};

export default Registration_Page;
