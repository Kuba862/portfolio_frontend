import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const { auth } = useContext(AuthContext);

    return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute; 