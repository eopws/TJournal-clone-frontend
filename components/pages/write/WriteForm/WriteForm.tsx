import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { Button, Input } from '@material-ui/core';

import scss from './WriteForm.module.scss';

const Editor = dynamic(() => import('@components/Editor/Editor'));

const WriteForm: FC = () => {
    return (
        <div>
            <Input
                classes={{ root: scss.headerInput }}
                placeholder="Заголовок"
            />

            <Editor
                placeholder="Здесь текст вашей статьи"
                className={scss.editor}
            />

            <Button variant="contained" color="primary">
                Опубликовать
            </Button>
        </div>
    )
}

export default WriteForm
