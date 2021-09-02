import React, { FC, useState } from 'react';
import { Button, Input } from '@material-ui/core';

import scss from './AddCommentForm.module.scss';

const AddCommentForm: FC = () => {
    const [inputExpanded, setInputExpanded] = useState(false);

    const commentFormClickHandler = () => {
        setInputExpanded(true);
    };

    return (
        <div onClick={commentFormClickHandler} className={scss.commentForm}>
            {inputExpanded ?
                <>
                    <Input
                        minRows={5}
                        classes={{root: scss.inputField}}
                        placeholder="Написать комментарий..."
                        fullWidth
                        multiline
                    />
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Отправить
                    </Button>
                </>
                :
                <span className={scss.inputPlaceholder}>Написать комментарий...</span>
            }
        </div>
    )
}

export default AddCommentForm
