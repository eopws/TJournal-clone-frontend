import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { MainBar } from '@components/index';
import '@styles/globals.scss';
import '@styles/_variables.css';
import { store } from '@store/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <MainBar />
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
