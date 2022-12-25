import React, { lazy, Suspense } from 'react';
import LazyLoader from '../Components/MasterLayout/LazyLoader';
const Forget_PW = lazy(() => import('../Components/Forget_PW/Forget_PW')) ;

const Forget_Pass = () => {
    return (
        <div>
            <Suspense fallback = {<LazyLoader/>}>
                <Forget_PW/>
            </Suspense>
        </div>
    );
};

export default Forget_Pass;