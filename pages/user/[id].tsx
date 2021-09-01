import React from 'react';

import { MainLayout } from '@components/index';
import { Header, UserPosts } from '@components/pages/user-profile';

const UserProfile = () => {
    return (
        <MainLayout extended>
            <Header />

            <div className="userProfile__vertical-spacer" />

            <UserPosts />
        </MainLayout>
    )
}

export default UserProfile
