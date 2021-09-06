import React, { FC } from 'react';
import { Button, TextField } from '@material-ui/core';

interface AuthModal__mailAuthProps {
    scss: {
        readonly [key: string]: string
    }
    restorePasswordClickHandler: () => void
}

const AuthModal__mailAuth: FC<AuthModal__mailAuthProps> = ({scss, restorePasswordClickHandler}) => {
    return (
        <>
            <div className={scss.modalContent__main}>
                <TextField size="small" classes={{root: scss.modalContent__item}} label="Почта" variant="outlined" fullWidth />
                <TextField size="small" classes={{root: scss.modalContent__item}} label="Пароль" variant="outlined" fullWidth />
            </div>

            <div className={scss.modalContent__mainSecondary}>
                <Button classes={{root: `${scss.modalContent__loginButton} ${scss.modalContent__loginButton_disabled}`}}>
                    Войти
                </Button>
                <span
                    className={scss.modalContent__restorePasswordButton}
                    onClick={restorePasswordClickHandler}
                >
                    Я забыл пароль
                </span>
            </div>
        </>
    )
}

export default AuthModal__mailAuth
