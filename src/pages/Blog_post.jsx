import React from 'react';
import { useParams } from 'react-router-dom';
import useSinglePost from '../hooks/useSinglePost';
import { SingleBlogPost } from '../assets/styles/Blog.styled';
import { BE_URL } from '../utils/URLS';

const BlogPost = () => {

    const { id } = useParams();
    const { post } = useSinglePost(`${BE_URL()}/api/v1/posts/${id}`);

  return (
    <SingleBlogPost>
        <h1 dangerouslySetInnerHTML={{ __html: post?.title }} />
        <p dangerouslySetInnerHTML={{ __html: post?.description }} />
    </SingleBlogPost>
  )
}

export default BlogPost;