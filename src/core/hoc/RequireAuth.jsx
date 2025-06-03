import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { useEffect } from 'react';

export const RequireAuth = ({ role, children }) => {
    const { pathname } = useLocation();
    const { user } = useAuth();

    useEffect(()=>{
        console.log(user)
    },[])

    return role.includes(user.role)
        ? children
        : <Navigate to="/error/403" state={{ from: pathname }} replace />;
};