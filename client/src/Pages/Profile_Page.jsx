import React, { lazy, Suspense } from 'react';
import LazyLoader from '../Components/MasterLayout/LazyLoader';
const Profile = lazy(() => import('../Components/Profile/Profile'));

const Profile_Page = () => {
    return (
        <div>
            <Suspense fallback = {<LazyLoader/>}>
                <Profile/>
            </Suspense>
        </div>
    );
};

export default Profile_Page;