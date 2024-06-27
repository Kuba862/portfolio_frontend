import { useState, useEffect } from 'react';
import axios from 'axios';

const useSinglePost = (url, params) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(url, params);
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPost();
    }, []);

    return { post };
}

export default useSinglePost;