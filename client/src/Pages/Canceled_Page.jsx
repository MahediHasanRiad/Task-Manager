import React, { Suspense, lazy } from "react";
import MasterLayout from "../Components/MasterLayout/MasterLayout";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
const Canceled = lazy(() => import("../Components/Cenceled/Canceled")) ;

const Canceled_Page = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
           <Canceled/>
        </Suspense>
      </MasterLayout>
    </div>
  );
};

export default Canceled_Page;
