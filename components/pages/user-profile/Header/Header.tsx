import React from 'react';

import scss from './Header.module.scss';

const Header = () => {
    return (
        <div className={scss.headerBlock}>
            <div className={scss.headerBlock__wrapper}>
                <div className={scss.headerBlock__userInfo}>
                    <img src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/300x300/-/format/webp/" />
                    <h2 className={scss.headerBlock__userNickname}>Nickname</h2>
                    <span className={scss.headerBlock__changeInfoBtn}>Изменить имя или описание</span>
                    <span className={scss.headerBlock__regdate}>На проекте с 25 авг 2021</span>
                </div>

                <div className={`${scss.headerBlock__tabs} ${scss.tabs}`}>
                    <span className={`${scss.tabs__item} ${scss.tabs__item_active}`}>Статьи</span>
                    <span className={scss.tabs__item}>Комментарии</span>
                    <span className={scss.tabs__item}>Черновики 5</span>
                </div>
            </div>
        </div>
    )
}

export default Header
