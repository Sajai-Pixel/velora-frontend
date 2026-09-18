import { useAuth } from "../../context/AuthContext";

const Profile = () => {
    const { user } = useAuth();
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Personal Information</h2>
                    <p className="text-black/50 text-sm mt-1">Manage your details and preferences here.</p>
                </div>
                <button
                    className="px-4 py-2 border border-black/15 rounded-lg text-sm font-medium hover:bg-black/5 transition-colors"
                >
                    Edit Profile
                </button>
            </div>
            <div
                className="bg-linear-to-br from-black to-gray-800 rounded-xl p-8 text-white relative overflow-hidden flex flex-col md:flex-row gap-6 items-center"
            >
                <div
                    className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"
                ></div>
                <div className="size-24 rounded-full p-px bg-white flex items-center justify-center">
                    <img
                        alt="Profile"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full object-cover aspect-square"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&amp;w=200"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold">{user?.name || "Jhon"}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-white/70 text-sm mt-1">
                        <span className="flex items-center gap-1.5"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-mail"
                            aria-hidden="true"
                        >
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            </svg>
                            {user?.email || "jhon@example.com"}</span
                        ><span className="flex items-center gap-1.5"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-circle-check-big text-green-400"
                            aria-hidden="true"
                        >
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                            </svg>
                            Verified Member</span
                        >
                    </div>
                </div>
                <div className="flex gap-6 mt-4 md:mt-0 text-center md:text-right shrink-0">
                    <div>
                        <p className="text-white/60 text-xs uppercase tracking-wider font-medium">Orders</p>
                        <p className="text-2xl font-bold mt-1">12</p>
                    </div>
                    <div>
                        <p className="text-white/60 text-xs uppercase tracking-wider font-medium">Rewards</p>
                        <p className="text-2xl font-bold mt-1 text-green-400">450</p>
                    </div>
                </div>
            </div>
            <form className="bg-white border border-black/10 rounded-xl p-6 sm:p-8 flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Full Name</label
                        ><label
                            className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-user text-black/40 shrink-0"
                            aria-hidden="true"
                        >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle></svg
                            ><input
                                disabled=""
                                className="flex-1 outline-none h-full text-sm placeholder:text-black/30 disabled:text-black/60"
                                type="text"
                                value={user?.name || "Jhon"}
                            /></label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Email Address</label
                        ><label
                            className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-mail text-black/40 shrink-0"
                            aria-hidden="true"
                        >
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect></svg
                            ><input
                                disabled=""
                                className="flex-1 outline-none h-full text-sm placeholder:text-black/30 disabled:text-black/60"
                                type="email"
                                value={user?.email || "Jhon"}
                            /></label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Phone Number</label
                        ><label
                            className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-phone text-black/40 shrink-0"
                            aria-hidden="true"
                        >
                                <path
                                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                                ></path></svg
                            ><input
                                disabled=""
                                className="flex-1 outline-none h-full text-sm placeholder:text-black/30 disabled:text-black/60"
                                type="tel"
                                value="+1 (555) 123-4567"
                            /></label>
                    </div>
                </div>
                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                    <div>
                        <p className="font-medium text-sm">Newsletter Preferences</p>
                        <p className="text-sm text-black/50 mt-0.5">Receive updates on new arrivals and offers.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer"
                    ><input disabled="" className="sr-only peer" type="checkbox" checked="" />
                        <div
                            className="w-11 h-6 bg-black/15 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black opacity-80 peer-disabled:opacity-50"
                        ></div
                        ></label>
                </div>
            </form>
        </div>
    )
}

export default Profile
