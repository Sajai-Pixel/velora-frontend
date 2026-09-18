import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user'))
    )

    const [token, setToken] = useState(
        localStorage.getItem('token')
    )

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated: !!token
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}