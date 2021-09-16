import { IUser } from "@models/index";

export default interface IPost {
    readonly _id: string
    readonly author: IUser
    readonly header: string
    readonly content: string
    readonly createdAt: string
    readonly likes: number
    readonly slug: string
    readonly isDraft: boolean
}
