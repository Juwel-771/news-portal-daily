import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;