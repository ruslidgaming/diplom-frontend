import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'
import type { JSX } from 'react'

export const RequireAuth = ({ role, children }: {
    role: string[]
    children: JSX.Element
}) => {
    const { pathname } = useLocation()
    const { user } = useAuth()

    return role.includes(user.role)
        ? children
        : <Navigate to="/error/403" state={{ from: pathname }} replace />
}