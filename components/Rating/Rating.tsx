import React, { FC } from 'react';
import {default as LikeIcon} from '@material-ui/icons/ExpandLessOutlined';
import {default as DisLikeIcon} from '@material-ui/icons/ExpandMoreOutlined';

import scss from './Rating.module.scss';

interface RatingProps {
    ratingValue: number
}

const Rating: FC<RatingProps> = ({ratingValue}) => {
    let ratingValueClass = scss.ratingValue_neutral;

    if (ratingValue > 0) {
        ratingValueClass = scss.ratingValue_positive;
    } else if (ratingValue < 0) {
        ratingValueClass = scss.ratingValue_negative;
    }

    return (
        <div className={scss.ratingWrapper}>
            <LikeIcon classes={{root: scss.button}} fontSize="large" />
                <span className={`${scss.ratingValue} ${ratingValueClass}`}>{ratingValue}</span>
            <DisLikeIcon classes={{root: scss.button}} fontSize="large" />
        </div>
    )
}

export default Rating
