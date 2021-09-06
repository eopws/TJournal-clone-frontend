import React, { FC } from 'react';
import { Button, TextField } from '@material-ui/core';

interface AuthModal__restorePasswordProps {
    scss: {
        readonly [key: string]: string
    }
}

const AuthModal__restorePassword: FC<AuthModal__restorePasswordProps> = ({scss}) => {
    return (
        <>
            <div className={scss.modalContent__main}>
                <TextField size="small" classes={{root: scss.modalContent__item}} label="Почта" variant="outlined" fullWidth />
            </div>

            <div className={scss.modalContent__mainSecondary}>
                <Button classes={{root: `${scss.modalContent__loginButton} ${scss.modalContent__loginButton_disabled}`}}>
                    Восстановить пароль
                </Button>
            </div>
        </>
    )
}

export default AuthModal__restorePassword
