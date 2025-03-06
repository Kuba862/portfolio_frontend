import axios from 'axios';
import { useState, useEffect } from 'react';

const basePath = process.env.REACT_APP_API_URL;
const endpoint = process.env.REACT_APP_LOGIN;

const useLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (e, p) => {
        try {
            const res = await axios.post(`${basePath}${endpoint}`, {
                email: e,
                password: p
            })
            console.log(res.data);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        login();
    }, []);

    return { isLoggedIn, login };
}

export default useLogin;
