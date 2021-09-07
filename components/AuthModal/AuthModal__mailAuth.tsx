import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '@utils/yupSchemas/';

import FormField from './FormField';

interface AuthModal__mailAuthProps {
    scss: {
        readonly [key: string]: string
    }
    restorePasswordClickHandler: () => void
}

const AuthModal__mailAuth: FC<AuthModal__mailAuthProps> = ({scss, restorePasswordClickHandler}) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginFormSchema)
    });

    const onSubmit = (data: any): void => console.log(data);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className={scss.modalContent__main}>
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                </div>

                <div className={scss.modalContent__mainSecondary}>
                    <Button
                        type="submit"
                        classes={{root: scss.modalContent__loginButton
                                        + (form.formState.isValid ? '' : ' ' + scss.modalContent__loginButton_disabled)
                        }}
                    >
                        Войти
                    </Button>
                    <span
                        className={scss.modalContent__restorePasswordButton}
                        onClick={restorePasswordClickHandler}
                    >
                        Я забыл пароль
                    </span>
                </div>
            </form>
        </FormProvider>
    )
}

export default AuthModal__mailAuth
