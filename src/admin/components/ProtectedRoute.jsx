import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = () => {
    const token = localStorage.getItem('admintoken')
    const location = useLocation()

    if (!token) {
        return <Navigate to="/admin/login" state={{ from: location }} replace />
    }

    return <Outlet />
}

export default ProtectedRoute