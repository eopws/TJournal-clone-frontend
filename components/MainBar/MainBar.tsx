import React, { FC, useState } from 'react';
import Link from 'next/link';
import { SearchOutlined as SearchIcon, AccountCircleOutlined as AccountIcon } from '@material-ui/icons/';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { AuthModal } from '@components/index';
import siteLogo from '@public/site-logo.png';
import scss from './MainBar.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';

interface MainBarProps {}

const MainBar: FC<MainBarProps> = () => {
    const { user, isAuth } = useTypedSelector(state => state.auth);

    const [authModalOpen, setAuthModalOpen] = useState<boolean>(true);

    const loginButtonClickHandler = (): void => {
        setAuthModalOpen(true);
    };

    return (
        <>
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

                {!isAuth ?
                    <div
                        className={`${scss.mainBar__item} ${scss.mainBar__userLogin}`}
                        onClick={loginButtonClickHandler}
                    >
                        <AccountIcon classes={{root: scss.avatar}} fontSize="medium" />
                        <span>Войти</span>
                    </div>
                    :
                    <div
                        className={`${scss.mainBar__item} ${scss.mainBar__userProfile}`}
                    >
                        <Link href={'/user/' + user?.nickname}>
                            <img src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/108x108/-/format/webp/" />
                        </Link>
                        <ExpandMoreIcon
                            classes={{root: scss.mainBar__expandArrow}}
                        />
                    </div>
                }
            </div>

            <AuthModal open={authModalOpen} AuthModalClosePropHandler={() => setAuthModalOpen(false)} />
        </>
    )
}

export default MainBar
