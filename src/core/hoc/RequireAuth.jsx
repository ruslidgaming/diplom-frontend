import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export const RequireAuth = ({ role, children }) => {
    const { pathname } = useLocation();
    const { user } = useAuth();




    // return role.includes(user.role)
    return true
        ? children
        : <Navigate to="/error/403" state={{ from: pathname }} replace />;
};