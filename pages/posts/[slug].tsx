import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { NextPage } from 'next';

import { PostService, CommentService } from '@api/index';
import { MainLayout } from '@components/index';
import { IComment, IPost } from '@models/index';
import { PostComments, SinglePost as PostSection } from '@components/pages/single-post';

const SinglePost: NextPage = () => {
    const [post, setPost]         = useState<IPost>();
    const [comments, setComments] = useState<IComment[]>([]);

    const [areCommentsLoading, setAreCommentsLoading] = useState<boolean>(true);

    const router = useRouter();
    const slug = router.query.slug;

    const fetchComments = async (postId: string) => {
        const response = await CommentService.getAll({ post: postId });

        setComments(response.data);
    };

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
    }, [slug, post]);

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
