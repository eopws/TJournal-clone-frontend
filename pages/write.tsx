import type { NextPage } from 'next';

import { MainLayout } from '@components/index';
import { WriteForm } from '@components/pages/write';

const Write: NextPage = () => {
    return (
        <MainLayout className="main-layout-white">
            <div>
                <WriteForm />
            </div>
        </MainLayout>
    )
}

export default Write
