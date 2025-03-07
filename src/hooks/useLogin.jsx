import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { defineEnv } from '../utils/helpers';

const useLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { loginContext } = useContext(AuthContext);

    const login = async (e, p) => {
        
        try {
            const res = await axios.post(`${defineEnv().API_URL}/login`, {
                email: e,
                password: p
            })
            setIsLoggedIn(res.data.logged);
            loginContext(res.data.token, res.data.id);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return { isLoggedIn, login };
}

export default useLogin;