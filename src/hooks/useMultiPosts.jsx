import { useState, useEffect } from 'react';
import axios from 'axios';

const useMultiPosts = (url, params) => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(url, params);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, []);
    
    return { posts };
    }

export default useMultiPosts;