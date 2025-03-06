import axios from 'axios';
import { useState, useEffect } from 'react';

const useLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (e, p) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LOGIN}`, {
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
