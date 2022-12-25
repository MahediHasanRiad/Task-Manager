import React, { lazy, Suspense } from 'react';
import LazyLoader from '../Components/MasterLayout/LazyLoader';
const Not_Found = lazy(() => import('../Components/Not_Found/Not_Found'));

const Page_Not_Found = () => {
    return (
        <div>
            <Suspense fallback = {<LazyLoader/>}>

            <Not_Found/>
            </Suspense>
        </div>
    );
};

export default Page_Not_Found;