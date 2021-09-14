import { IPost, IUser } from ".";

export default interface IComment {
    author: IUser
    post: IPost
    content: string
    likes: number
    parent?: IComment
    children?: IComment[]
    createdAt: Date
}
