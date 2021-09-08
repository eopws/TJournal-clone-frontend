import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { NextPage } from 'next';

import { PostService } from '@api/index';
import { MainLayout } from '@components/index';
import { PostComments, SinglePost as PostSection } from '@components/pages/single-post';
import { IPost } from '@models/index';

const SinglePost: NextPage = () => {
    const [post, setPost] = useState<IPost>();

    const router = useRouter();
    const slug = router.query.slug;

    useEffect(() => {
        if (typeof slug === 'string') {
            PostService.getOne(slug)
                .then((response) => {
                    setPost(response.data);
                });
            }
    }, [slug]);

    return (
        <>
            {post != null ?
                <MainLayout extended>
                    <PostSection
                        post={post}
                    />
                    <br />
                    <PostComments />
                </MainLayout>
                :
                'Loading'
            }
        </>
    )
}

export default SinglePost
