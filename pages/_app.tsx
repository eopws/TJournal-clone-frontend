import type { AppProps } from 'next/app'
import { MainBar } from '../components'

import '../styles/globals.scss'
import '../styles/_variables.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <MainBar />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
