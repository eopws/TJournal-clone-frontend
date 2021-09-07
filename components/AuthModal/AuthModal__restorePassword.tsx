import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import FormField from './FormField';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RestorePasswordFormSchema } from '@utils/yupSchemas/';

interface AuthModal__restorePasswordProps {
    scss: {
        readonly [key: string]: string
    }
}

const AuthModal__restorePassword: FC<AuthModal__restorePasswordProps> = ({scss}) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RestorePasswordFormSchema)
    });

    const onSubmit = (data: any): void => console.log(data);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className={scss.modalContent__main}>
                    <FormField name="email" label="Почта" />
                </div>

                <div className={scss.modalContent__mainSecondary}>
                    <Button
                        type="submit"
                        classes={{
                            root: scss.modalContent__loginButton
                                  + (form.formState.isValid ? '' : ' ' + scss.modalContent__loginButton_disabled)
                        }}
                    >
                        Восстановить пароль
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default AuthModal__restorePassword
