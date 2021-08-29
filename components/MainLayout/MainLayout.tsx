import React, { FC, ReactChild, ReactNode } from 'react'
import { MainBar } from '..'
import Head from 'next/head'

import scss from "./MainLayout.module.scss"

interface MainLayoutProps {
    children: ReactChild | ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <Head>
                <title>TJournal</title>
                <meta name="description" content="новости" />
                <link rel="icon" href="/favicon.png" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700&amp;subset=cyrillic,cyrillic-ext,latin-ext"></link>
            </Head>

            <MainBar />

            {children}
        </div>
    )
}

export default MainLayout
