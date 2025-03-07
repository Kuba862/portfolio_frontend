import React, { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import { Link } from 'react-router-dom';
import { BlogContainer } from '../assets/styles/Blog.styled';

const Blog = () => {
    const { posts } = useContext(MainContext);
  return (
    <BlogContainer>
        {/* {posts.map((post) => {
            return (
                <Link key={post?.id} to={`${post?.id}`} >
                    <h1 dangerouslySetInnerHTML={{ __html: post?.title }} />
                    <img src={post?.image} alt={post?.title} />
                </Link>
            )
        })} */}
    </BlogContainer>
  )
}

export default Blog