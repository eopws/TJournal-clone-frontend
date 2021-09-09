import { IUser } from '.';

export default interface IAuthResponse {
    readonly accessToken: string
    readonly refreshToken: string
    readonly user: IUser
}
