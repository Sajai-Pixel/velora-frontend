import React, { useState } from 'react'
import { updatePassword } from '../../api/authApi'
import toast from 'react-hot-toast';

const Settings = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            return toast.error('New passwords do not match');
        }

        try {
            await updatePassword(currentPassword, newPassword, confirmNewPassword);
            toast.success('Password updated successfully');
            navigate('/');
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
            toast.error(errorMessage);
        }
    };


    return (
        <div className="flex flex-col gap-10">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Account Settings</h2>
                <p className="text-black/50 text-sm mt-1">Manage your security preferences and notifications.</p>
            </div>
            <section className="bg-white border border-black/10 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="size-10 rounded-full bg-black/5 flex items-center justify-center text-black/60">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-lock"
                            aria-hidden="true"
                        >
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold">Security</h3>
                        <p className="text-sm text-black/50">Update your password to keep your account secure.</p>
                    </div>
                </div>
                <form className="max-w-md flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Current Password</label
                        ><label
                            className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors"
                        ><input
                                className="flex-1 outline-none h-full text-sm placeholder:text-black/30 disabled:text-black/60"
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            /></label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1.5">New Password</label
                        ><label
                            className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors"
                        ><input
                                className="flex-1 outline-none h-full text-sm placeholder:text-black/30 disabled:text-black/60"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            /></label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Confirm New Password</label
                        ><label
                            className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors"
                        ><input
                                className="flex-1 outline-none h-full text-sm placeholder:text-black/30 disabled:text-black/60"
                                type="password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                            /></label>
                    </div>
                    <button
                        type="submit"
                        className="mt-2 w-fit px-6 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-black/80 transition-colors"
                    >
                        Update Password
                    </button>
                </form>
            </section>
            <section className="bg-white border border-black/10 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="size-10 rounded-full bg-black/5 flex items-center justify-center text-black/60">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-bell"
                            aria-hidden="true"
                        >
                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                            <path
                                d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold">Notifications</h3>
                        <p className="text-sm text-black/50">Choose how we contact you regarding your orders.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <label className="flex items-center justify-between cursor-pointer"
                    ><div>
                            <p className="font-medium text-sm">Order Updates via Email</p>
                            <p className="text-sm text-black/50 mt-0.5">Receive shipping confirmations and delivery updates.</p>
                        </div>
                        <div className="relative inline-flex items-center">
                            <input className="sr-only peer" type="checkbox" checked="" />
                            <div
                                className="w-11 h-6 bg-black/15 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black opacity-80"
                            ></div></div
                        ></label>
                    <hr className="border-black/5" />
                    <label className="flex items-center justify-between cursor-pointer"
                    ><div>
                            <p className="font-medium text-sm">SMS Alerts</p>
                            <p className="text-sm text-black/50 mt-0.5">
                                Get text messages when your package goes out for delivery.
                            </p>
                        </div>
                        <div className="relative inline-flex items-center">
                            <input className="sr-only peer" type="checkbox" />
                            <div
                                className="w-11 h-6 bg-black/15 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black opacity-80"
                            ></div></div
                        ></label>
                </div>
            </section>
            <section className="bg-red-50 border border-red-100 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-shield-alert"
                            aria-hidden="true"
                        >
                            <path
                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                            ></path>
                            <path d="M12 8v4"></path>
                            <path d="M12 16h.01"></path>
                        </svg>
                    </div>
                    <div><h3 className="font-semibold text-red-900">Danger Zone</h3></div>
                </div>
                <p className="text-sm text-red-800/70 mb-6 max-w-xl">
                    Once you delete your account, there is no going back. All your order history, saved addresses, and rewards
                    will be permanently wiped.
                </p>
                <button
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash2 lucide-trash-2"
                        aria-hidden="true"
                    >
                        <path d="M10 11v6"></path>
                        <path d="M14 11v6"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                        <path d="M3 6h18"></path>
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    Delete Account
                </button>
            </section>
        </div>

    )
}

export default Settings
