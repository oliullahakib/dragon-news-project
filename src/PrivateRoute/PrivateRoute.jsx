import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContex';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user}=use(AuthContext);
    return (
        <div>
            {
                user?children:<Navigate state={location.pathname} to="/auth/login" replace></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;