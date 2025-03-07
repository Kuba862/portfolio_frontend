import { useContext } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { defineEnv } from '../utils/helpers';

const useLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { loginContext } = useContext(AuthContext);

    const login = async (e, p) => {
        console.log(`${defineEnv().API_URL}/login`);
        try {
            const res = await axios.post(`${defineEnv().API_URL}${defineEnv().LOGIN}`, {
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
        login();
    }, []);

    return { isLoggedIn, login };
}

export default useLogin;