import React, { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Input } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';

import { AddCommentFormSchema } from '@utils/yupSchemas';
import scss from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    formSubmitHandler: (data: any) => void
}

const AddCommentForm: FC<AddCommentFormProps> = ({ formSubmitHandler }) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(AddCommentFormSchema)
    });

    const [inputExpanded, setInputExpanded] = useState(false);

    const commentFormClickHandler = () => {
        setInputExpanded(true);
    };

    const commentFormSubmitHandler = (data: any): void => {
        formSubmitHandler(data);
        form.reset();
        setInputExpanded(false);
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(commentFormSubmitHandler)}>
                <div onClick={commentFormClickHandler} className={scss.commentForm}>
                    {inputExpanded ?
                        <>
                            <Input
                                {...form.register('content')}
                                minRows={5}
                                classes={{root: scss.inputField}}
                                placeholder="Написать комментарий..."
                                fullWidth
                                multiline
                            />
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary"
                                disabled={!form.formState.isValid}
                            >
                                Отправить
                            </Button>
                        </>
                        :
                        <span className={scss.inputPlaceholder}>Написать комментарий...</span>
                    }
                </div>
            </form>
        </FormProvider>
    )
}

export default AddCommentForm
