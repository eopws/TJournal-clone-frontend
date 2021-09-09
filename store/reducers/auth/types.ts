import { IUser } from "@models/index";

export interface AuthState {
    isAuth: boolean
    user: IUser | null
}

export enum AuthActionEnum {
    SET_IS_AUTH = 'SET_IS_AUTH',
    SET_USER    = 'SET_USER'
}

export interface SetIsAuthAction {
    type: AuthActionEnum.SET_IS_AUTH
    payload: boolean
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
}

export type AuthAction = SetIsAuthAction | SetUserAction
