import React, { FC } from 'react';
import { Button, TextField } from '@material-ui/core';

interface AuthModal__registerProps {
    scss: {
        readonly [key: string]: string
    }
}

const AuthModal__register: FC<AuthModal__registerProps> = ({scss}) => {
    return (
        <>
            <div className={scss.modalContent__main}>
                <TextField size="small" classes={{root: scss.modalContent__item}} label="Имя и фамилия" variant="outlined" fullWidth />
                <TextField size="small" classes={{root: scss.modalContent__item}} label="Почта" variant="outlined" fullWidth />
                <TextField size="small" classes={{root: scss.modalContent__item}} label="Пароль" variant="outlined" fullWidth />
            </div>

            <div className={scss.modalContent__mainSecondary}>
                <Button classes={{root: `${scss.modalContent__loginButton} ${scss.modalContent__loginButton_disabled}`}}>
                    Зарегистрироваться
                </Button>
            </div>
        </>
    )
}

export default AuthModal__register
