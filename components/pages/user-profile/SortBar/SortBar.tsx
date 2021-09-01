import React from 'react';

import scss from './SortBar.module.scss';

const SortBar = () => {
    return (
        <div className={scss.sortBlock}>
            <span className={scss.sortBlock__item}>Популярное</span>
            <span className={`${scss.sortBlock__item} ${scss.sortBlock__item_active}`}>Свежее</span>
        </div>
    )
}

export default SortBar
