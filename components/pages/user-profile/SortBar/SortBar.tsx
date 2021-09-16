import React, { FC } from 'react';

import { SortTypesEnum } from '@models/index';
import scss from './SortBar.module.scss';

interface SortBarProps {
    value: SortTypesEnum
    setSortType: (sort: SortTypesEnum) => void
}

const SortBar: FC<SortBarProps> = ({ value, setSortType }) => {
    return (
        <div className={scss.sortBlock}>
            <span
                className={scss.sortBlock__item + ' ' + (value === SortTypesEnum.popular && scss.sortBlock__item_active)}
                onClick={() => setSortType(SortTypesEnum.popular)}
            >
                Популярное
            </span>

            <span
                className={scss.sortBlock__item + ' ' + (value === SortTypesEnum.newest && scss.sortBlock__item_active)}
                onClick={() => setSortType(SortTypesEnum.newest)}
            >
                Свежее
            </span>
        </div>
    )
}

export default SortBar
