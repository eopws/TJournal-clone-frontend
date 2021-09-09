import { AuthAction, AuthActionEnum, AuthState } from './types';

const defaultState: AuthState = {
    isAuth: false,
    user: null
};

export default function authReducer(state = defaultState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }

        case AuthActionEnum.SET_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}
