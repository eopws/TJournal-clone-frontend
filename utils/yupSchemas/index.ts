import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Почта обязательна'),
    password: yup.string().min(6, 'Пароль не может быть меньше 6 символов').required('Пароль обязателен')
});

export const RegistrationFormSchema = yup.object().shape({
    fullname: yup.string().required('Имя и фамилия обязательны')
}).concat(LoginFormSchema);

export const RestorePasswordFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Почта обязательна'),
});
