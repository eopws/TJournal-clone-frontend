import React, { FC } from 'react'
import Link from 'next/link'
import { SearchOutlined as SearchIcon, AccountCircleOutlined as AccountIcon } from '@material-ui/icons/';
import { Button } from '@material-ui/core';

import siteLogo from "../../public/site-logo.png"
import scss from "./MainBar.module.scss"

interface MainBarProps {}

const MainBar: FC<MainBarProps> = () => {
    return (
        <div className={scss.mainBar}>
            <div className={`${scss.mainBar__item} ${scss.mainBar__logo}`}>
                <Link href="/">
                    <a>
                        <img src={siteLogo.src} alt="" />
                    </a>
                </Link>
            </div>

            <div className={`${scss.mainBar__item} ${scss.mainBar__searchBar}`}>
                <SearchIcon classes={{root: scss.mainBar__searchIcon}} />
                <input type="text" placeholder='поиск' />
            </div>

            <div className={scss.mainBar__item}>
                <Button variant="contained" className={scss.mainBar__addPostBtn}>
                    <Link href="/write">
                        Новая запись
                    </Link>
                </Button>
            </div>

            <div className={scss.mainBar__whiteSpace}></div>

            <div className={`${scss.mainBar__item} ${scss.mainBar__userLogin}`}>
                <AccountIcon classes={{root: scss.avatar}} fontSize="medium" />
                <span>Войти</span>
            </div>
        </div>
    )
}

export default MainBar
