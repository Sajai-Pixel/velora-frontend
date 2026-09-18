import React, { useState } from 'react'
import { loginUser } from '../api/authApi.js'
import { data, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await loginUser(email, password)
            toast.success('Login successful')            
            navigate('/')
        } catch (error) {
            toast.error(
                error.response?.data?.message || 'Invalid email or password'
            )
        }
    }

    return (
        <div className="flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-sm">
                <a className="lg:hidden flex mb-10" href="/"
                ><img
                        alt="Logo"
                        loading="lazy"
                        width="131"
                        height="37"
                        decoding="async"
                        data-nimg="1"
                        className="h-8.5 w-auto"
                        src="/images/logo.svg"
                    /></a>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
                    <p className="text-black/50 text-sm mt-1.5">Sign in to your account to continue</p>
                    <button
                        className="flex items-center justify-center gap-2 py-2.5 w-full mt-7 border border-black/10 rounded-lg text-sm font-medium hover:bg-black/3 transition-colors"
                    >
                        <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
                            <path
                                d="M43.6 24.5c0-1.5-.1-3-.4-4.5H24v8.5h11c-.5 2.5-1.9 4.7-4 6.1v5h6.5c3.8-3.5 6.1-8.7 6.1-15.1z"
                                fill="#4285F4"
                            ></path>
                            <path
                                d="M24 44c5.5 0 10.1-1.8 13.4-4.9l-6.5-5c-1.8 1.2-4.1 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.9v5.2C9.2 39.1 16.1 44 24 44z"
                                fill="#34A853"
                            ></path>
                            <path
                                d="M12.6 27.6c-.4-1.2-.7-2.5-.7-3.8s.2-2.6.7-3.8v-5.2H5.9A19.9 19.9 0 0 0 4 24c0 3.2.8 6.2 2.2 8.8l6.4-5.2z"
                                fill="#FBBC04"
                            ></path>
                            <path
                                d="M24 9.5c3 0 5.7 1 7.8 3l5.8-5.8C34.1 3.5 29.4 1.5 24 1.5 16.1 1.5 9.2 6.4 5.9 13.2l6.4 5.2C14.2 13.1 18.7 9.5 24 9.5z"
                                fill="#EA4335"
                            ></path></svg
                        >Google</button>
                    <div className="flex items-center gap-3 my-6">
                        <hr className="flex-1 border-black/10" />
                        <span className="text-xs text-black/40 uppercase tracking-wider">or</span>
                        <hr className="flex-1 border-black/10" />
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-1.5">Email address</label
                            ><label
                                className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-mail text-black/40 shrink-0"
                                aria-hidden="true"
                            >
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect></svg
                                >
                                <input
                                    placeholder="you@example.com"
                                    className="flex-1 outline-none h-full text-sm placeholder:text-black/30 disabled:text-black/60"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <div>
                                <label className="block text-sm font-medium mb-1.5">Password</label
                                ><label
                                    className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-lock text-black/40 shrink-0"
                                    aria-hidden="true"
                                >
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg
                                    >
                                    <input
                                        placeholder="Enter your password"
                                        className="flex-1 outline-none h-full text-sm placeholder:text-black/30 disabled:text-black/60"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <a className="text-xs text-black/50 hover:text-black transition-colors" href="#">Forgot password?</a>
                        </div>
                        <label className="flex gap-2 items-center cursor-pointer"
                        ><input className="hidden peer" type="checkbox" /><span
                            className="size-4.5 border border-black/15 rounded relative flex items-center justify-center peer-checked:border-black peer-checked:bg-black"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check text-white"
                            aria-hidden="true"
                        >
                                    <path d="M20 6 9 17l-5-5"></path></svg></span
                            ><span className="text-sm text-black/60 select-none">Remember me for 30 days</span></label
                        ><button
                            type="submit"
                            className="flex items-center justify-center gap-2 py-3 bg-black text-white rounded-lg font-semibold hover:bg-black/80 transition-colors disabled:opacity-60 mt-1"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="text-center text-sm text-black/50 mt-7">
                        Don't have an account?
                        <a className="text-black font-medium hover:underline" href="/auth/signup">Create one</a>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Login
