import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [adminID, setAdminID] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        const storedAdminID = localStorage.getItem('aID');

        if(token && storedAdminID) {
            verifyToken(token).then(isValid => {
                setAuth(isValid);
                if(!isValid) {
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('aID');
                }
                setLoading(false);
            })
        } else {
            setLoading(false);
        }
    }, []);

    const verifyToken = async (token) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_VERIFY}`, {
                headers: {
                    'x-auth-token': token
                }
            });
            setAdminID(res.data.adminID);
            return true;
        } catch(err) {
            console.log(err);
            return false;
        }
    }

    const loginContext = (token, userID) => {
        localStorage.setItem('auth_token', token);
        localStorage.setItem('aID', userID);
        setAuth(true);
    }

    const logoutContext = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('aID');
        setAuth(false);
        setAdminID(null);
    }

    return (
        <AuthContext.Provider value={{ auth, adminID, loading, loginContext, logoutContext }}>
            {children}
        </AuthContext.Provider>
    );
};