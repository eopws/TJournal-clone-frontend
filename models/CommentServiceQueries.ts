export interface CreateCommentDto {
    readonly post: string
    readonly parent?: string
    readonly content: string
}

export interface IGetAll {
    author?: string
    post?: string
}
