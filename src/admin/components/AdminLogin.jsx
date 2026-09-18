import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { adminLogin } from '../../api/authApi'

const AdminLogin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/admin'
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        try {
            const response = await adminLogin(username, password)

            localStorage.setItem('admintoken', response.admintoken)

            navigate(from, { replace: true })
        } catch (error) {
            toast.error(
                error.response?.data?.message || 'Login failed'
            )

            console.log(error.response?.data?.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold mb-2">
                    Admin Login
                </h1>
                <p className="text-gray-500 mb-6">
                    Login to access the admin dashboard
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border rounded-lg px-4 py-3"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-lg px-4 py-3"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white rounded-lg px-4 py-3"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}
export default AdminLogin