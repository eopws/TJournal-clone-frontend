import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { NextPage } from 'next';

import { PostService, CommentService } from '@api/index';
import { MainLayout } from '@components/index';
import { IComment, IPost, SortTypesEnum } from '@models/index';
import { PostComments, SinglePost as PostSection } from '@components/pages/single-post';

const SinglePost: NextPage = () => {
    const [post, setPost]         = useState<IPost>();
    const [comments, setComments] = useState<IComment[]>([]);

    const [commentsSort, setCommentsSort] = useState<SortTypesEnum>(SortTypesEnum.popular);

    const [areCommentsLoading, setAreCommentsLoading] = useState<boolean>(true);

    const router = useRouter();
    const slug = router.query.slug;

    const fetchComments = useCallback(async (postId: string) => {
        const response = await CommentService.getAll({ post: postId }, commentsSort);

        setComments(response.data);
    }, [commentsSort]);

    useEffect(() => {
        if (typeof slug === 'string') {
            PostService.getOne(slug)
                .then((response) => {
                    setPost(response.data);
                });
            }
    }, [slug]);

    useEffect(() => {
        if (typeof slug === 'string' && post) {
            setAreCommentsLoading(true);

            fetchComments(post._id)
                .finally(() => {
                    setAreCommentsLoading(false);
                });
        }
    }, [slug, post, commentsSort]);

    const addCommentFormSubmitHandler = useCallback(async (newComment: any) => {
        if (post) {
            await CommentService.create({
                post: post._id,
                content: newComment.content
            });

            // update comments list
            fetchComments(post._id);
        }
    }, [post]);

    return (
        <>
            {post != null ?
                <MainLayout extended>
                    <PostSection
                        post={post}
                    />
                    <br />
                    <PostComments
                        areCommentsLoading={areCommentsLoading}
                        comments={comments}
                        setSortType={setCommentsSort}
                        addCommentFormSubmitHandler={addCommentFormSubmitHandler}
                    />
                </MainLayout>
                :
                'Loading'
            }
        </>
    )
}

export default SinglePost
