import React, { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import { Link } from 'react-router-dom';
import { Blog_container } from '../assets/styles/Blog.styled';

const Blog = () => {
    const { posts } = useContext(MainContext);
  return (
    <Blog_container>
        {posts.map((post) => {
            return (
                <Link key={post?.id} to={`${post?.id}`} >
                    <h1 dangerouslySetInnerHTML={{ __html: post?.title }} />
                    <img src={post?.image} alt={post?.title} />
                </Link>
            )
        })}
    </Blog_container>
  )
}

export default Blog