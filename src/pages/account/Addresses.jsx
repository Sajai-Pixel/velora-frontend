import React from 'react'

const Addresses = () => {
  return (
    <div className="flex flex-col gap-8">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h2 className="text-2xl font-bold tracking-tight">Saved Addresses</h2>
            <p className="text-black/50 text-sm mt-1">Manage your shipping and billing addresses for a faster checkout.</p>
        </div>
        <button
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-black/80 transition-colors shrink-0"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-plus"
                aria-hidden="true"
            >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
            </svg>
            Add New Address
        </button>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border transition-colors relative flex flex-col border-black/15 bg-black/3">
            <span className="absolute top-6 right-6 text-xs bg-black text-white px-2.5 py-1 rounded-md font-medium"
                >Default</span
            >
            <div className="flex items-center gap-3 mb-4">
                <div
                    className="size-10 rounded-full bg-white border border-black/10 flex items-center justify-center shrink-0 text-black/60"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-house"
                        aria-hidden="true"
                    >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                        <path
                            d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                        ></path>
                    </svg>
                </div>
                <h3 className="font-semibold">Home</h3>
            </div>
            <div className="text-sm text-black/70 flex-1 leading-relaxed">
                <p className="font-medium text-black">Jane Doe</p>
                <p>123 Main St, Apt 4B</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-black/5">
                <button className="text-sm font-medium hover:text-black/70">Edit</button><span className="text-black/20">|</span
                ><button className="text-sm font-medium text-red-600 hover:text-red-500">Remove</button>
            </div>
        </div>
        <div
            className="p-6 rounded-xl border transition-colors relative flex flex-col border-black/10 hover:border-black/20 bg-white"
        >
            <div className="flex items-center gap-3 mb-4">
                <div
                    className="size-10 rounded-full bg-white border border-black/10 flex items-center justify-center shrink-0 text-black/60"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-briefcase"
                        aria-hidden="true"
                    >
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                </div>
                <h3 className="font-semibold">Work</h3>
            </div>
            <div className="text-sm text-black/70 flex-1 leading-relaxed">
                <p className="font-medium text-black">Jane Doe (Company Inc)</p>
                <p>456 Business Pkwy, Suite 200</p>
                <p>San Francisco, CA 94107</p>
                <p>United States</p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-black/5">
                <button className="text-sm font-medium hover:text-black/70">Edit</button><span className="text-black/20">|</span
                ><button className="text-sm font-medium text-red-600 hover:text-red-500">Remove</button
                ><span className="text-black/20">|</span
                ><button className="text-sm font-medium hover:text-black/70">Set as Default</button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Addresses
