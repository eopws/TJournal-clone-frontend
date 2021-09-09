import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import AppWrapper from '@components/AppWrapper';
import { MainBar } from '@components/index';
import '@styles/globals.scss';
import '@styles/_variables.css';
import { store } from '@store/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <AppWrapper>
                <MainBar />
                <Component {...pageProps} />
            </AppWrapper>
        </Provider>
    )
}

export default MyApp
