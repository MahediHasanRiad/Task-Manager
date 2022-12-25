import React, {Suspense, lazy} from "react";
import LazyLoader from "../Components/MasterLayout/LazyLoader";
import MasterLayout from "../Components/MasterLayout/MasterLayout";
const Create = lazy(() => import("../Components/Create/Create")) ;

const Create_Page = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback = {<LazyLoader/>}>
          <Create/>
        </Suspense>
      </MasterLayout>
    </div>
  );
};

export default Create_Page;
