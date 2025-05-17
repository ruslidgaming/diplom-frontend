import { createContext, useState, useContext, type ReactNode } from 'react'

type User = { role: string }
type AuthContextType = {
    user: User
    signin: (user: User) => void
    signout: () => void
}

const AuthContext = createContext<AuthContextType>({
    user: { role: 'main' },
    signin: () => { },
    signout: () => { },
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(
        JSON.parse(localStorage.getItem('user') || JSON.stringify({ role: 'main' })
        ))

    const signin = (newUser: User) => {
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
    }

    const signout = () => {
        setUser({ role: 'main' })
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)