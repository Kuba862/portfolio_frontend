import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useSinglePost from '../hooks/useSinglePost';
import { SingleBlogPost } from '../assets/styles/Blog.styled';
import { BE_URL } from '../utils/URLS';
import { MainContext } from '../context/MainContext';

const BlogPost = () => {

    const { id } = useParams();
    const { post } = useSinglePost(`${BE_URL()}/api/v1/posts/${id}`);
    const { language } = useContext(MainContext);

  return (
    <SingleBlogPost>
        <h1 dangerouslySetInnerHTML={{ __html: post?.title }} />
        <p dangerouslySetInnerHTML={{ __html: language === 'en' ? post?.description_en : post?.description_pl }} />
    </SingleBlogPost>
  )
}

export default BlogPost;