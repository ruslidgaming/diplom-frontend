import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export const RequireAuth = ({ role, children }) => {
    const { pathname } = useLocation();
    const { user } = useAuth();
    user.role = "mentor"

    console.log(user.role)
    console.log(role.includes(user.role))

    return role.includes(user.role)
        ? children
        : <Navigate to="/error/403" state={{ from: pathname }} replace />;
};