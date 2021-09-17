import React, { FC } from 'react';

import { IUser } from '@models/index';
import scss from './Header.module.scss';

interface HeaderProps {
    user: IUser
    activeTab: 'Posts' | 'Comments'
    setActiveTab: (newTab: any) => void
}

const Header: FC<HeaderProps> = ({ user, activeTab, setActiveTab }) => {
    const registeredAt = new Date(user.createdAt);

    const monthNames = [
        "янв", "фев", "мар", "апр", "май", "июнь",
        "июль", "авг", "сен", "окт", "ноя", "дек"
    ];

    const tabs = {
        'Posts': 'Статьи',
        'Comments': 'Комментарии',
        'Drafts': 'Черновики'
    };

    return (
        <div className={scss.headerBlock}>
            <div className={scss.headerBlock__wrapper}>
                <div className={scss.headerBlock__userInfo}>
                    <img src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/300x300/-/format/webp/" />
                    <h2 className={scss.headerBlock__userNickname}>{user.nickname}</h2>
                    <span className={scss.headerBlock__changeInfoBtn}>Изменить имя или описание</span>
                    <span className={scss.headerBlock__regdate}>
                        На проекте с
                        {
                            ' ' +
                            (registeredAt.getDay() + 1) + ' ' +
                            (monthNames[registeredAt.getMonth()]) + ' ' +
                            (registeredAt.getFullYear())
                        }
                    </span>
                </div>

                <div className={`${scss.headerBlock__tabs} ${scss.tabs}`}>
                    {Object.keys(tabs).map((tabId) => {
                        let className = scss.tabs__item;

                        if (tabId === activeTab) {
                            className += ' ' + scss.tabs__item_active;
                        }

                        return (
                            <span
                                key={tabId}
                                className={className}
                                onClick={() => setActiveTab(tabId)}
                            >
                                {tabs[tabId]}
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header
