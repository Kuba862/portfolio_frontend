import React from 'react';
import { useParams } from 'react-router-dom';
import useSinglePost from '../hooks/useSinglePost';
import { Single_blog_post } from '../assets/styles/Blog.styled';
import { BE_URL } from '../utils/URLS';

const Blog_post = () => {

    const { id } = useParams();
    const { post } = useSinglePost(`${BE_URL()}/api/v1/posts/${id}`);

  return (
    <Single_blog_post>
        <h1 dangerouslySetInnerHTML={{ __html: post?.title }} />
        <p dangerouslySetInnerHTML={{ __html: post?.description }} />
    </Single_blog_post>
  )
}

export default Blog_post