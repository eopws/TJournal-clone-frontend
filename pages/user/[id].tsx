import React from 'react';

import { MainLayout } from '@components/index';
import { Header } from '@components/pages/user-profile';

const UserProfile = () => {
    return (
        <MainLayout extended>
            <Header />
        </MainLayout>
    )
}

export default UserProfile
