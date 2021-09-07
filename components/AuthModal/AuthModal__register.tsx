import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { RegistrationFormSchema } from '@utils/yupSchemas/';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormField from './FormField';

interface AuthModal__registerProps {
    scss: {
        readonly [key: string]: string
    }
}

const AuthModal__register: FC<AuthModal__registerProps> = ({scss}) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegistrationFormSchema)
    });

    const onSubmit = (data: any): void => console.log(data);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className={scss.modalContent__main}>
                    <FormField name="fullname" label="Имя и фамилия" />
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                </div>

                <div className={scss.modalContent__mainSecondary}>
                    <Button
                        type="submit"
                        classes={{
                            root: scss.modalContent__loginButton
                                  + (form.formState.isValid ? '' : ' ' + scss.modalContent__loginButton_disabled)
                        }}
                    >
                        Зарегистрироваться
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default AuthModal__register
