import AuthService from '@api/AuthService';
import { IUser } from '@models/index';
import { AppDispatch } from '@store/index';
import { AuthActionEnum, SetIsAuthAction, SetUserAction } from './types';

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetIsAuthAction => ({type: AuthActionEnum.SET_IS_AUTH, payload: auth}),

    login: (email: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            const { user, accessToken } = (await AuthService.login(email, password)).data;

            localStorage.setItem('auth', 'true');
            localStorage.setItem('token', accessToken);

            dispatch(AuthActionCreators.setIsAuth(true));
            dispatch(AuthActionCreators.setUser(user));
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
};
