import React, { Fragment, lazy, Suspense } from 'react';
import DashBoard from '../Components/Dashboard/DashBoard';
import LazyLoader from '../Components/MasterLayout/LazyLoader';
const MasterLayout = lazy(() => import('../Components/MasterLayout/MasterLayout')) ;

const DashBoard_Page = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback = {<LazyLoader/>}>
                <DashBoard/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default DashBoard_Page;
