import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Почта обязательна'),
    password: yup.string().min(6, 'Пароль не может быть меньше 6 символов').required('Пароль обязателен')
});

export const RegistrationFormSchema = yup.object().shape({
    nickname: yup.string().required('Псевдоним обязателен')
}).concat(LoginFormSchema);

export const RestorePasswordFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Почта обязательна'),
});

export const AddCommentFormSchema = yup.object().shape({
    content: yup.string().min(10, 'Слишком короткий комментарий').max(400, 'Слишком длинный комментарий').required('Текст комментария обязателен')
});
