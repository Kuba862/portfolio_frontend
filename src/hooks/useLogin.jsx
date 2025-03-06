import { useContext } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { loginContext } = useContext(AuthContext);

    const login = async (e, p) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LOGIN}`, {
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