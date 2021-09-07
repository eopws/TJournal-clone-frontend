import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

import scss from './AuthModal.module.scss';

interface FormFieldProps {
    name: string
    label: string
}

const FormField: FC<FormFieldProps> = ({ name, label }) => {
    const {register, formState} = useFormContext();

    return (
        <TextField
            {...register(name)}
            size="small"
            classes={{root: scss.modalContent__item}}
            label={label}
            variant="outlined"
            error={!!formState.errors[name]}
            fullWidth
        />
    )
}

export default FormField
