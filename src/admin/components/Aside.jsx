import React from 'react'
import { NavLink } from 'react-router-dom'

const Aside = () => {

    const navItems = [
        {
            name: 'Add Items',
            path: 'add',
            icon: 'fa-plus'
        },
        {
            name: 'List Items',
            path: 'list',
            icon: 'fa-box'
        },
        {
            name: 'Orders',
            path: 'orders',
            icon: 'fa-cart-shopping'
        },
        {
            name: 'Customers',
            path: 'customers',
            icon: 'fa-users'
        },
    ]

    return (
        <aside className="w-64 shrink-0 min-h-[calc(100vh-80px)] border-r border-black/10 bg-white p-4">

            <nav className="flex flex-col gap-1.5">

                <p className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-black/40">
                    Management
                </p>

                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                                isActive
                                    ? 'bg-black text-white shadow-sm'
                                    : 'text-black/65 hover:bg-black/5 hover:text-black'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <span
                                    className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
                                        isActive
                                            ? 'bg-white/15'
                                            : 'bg-black/5 group-hover:bg-black/10'
                                    }`}
                                >
                                    <i
                                        className={`fa-solid ${item.icon} text-sm`}
                                    ></i>
                                </span>

                                <span className="flex-1">
                                    {item.name}
                                </span>

                                <i
                                    className={`fa-solid fa-chevron-right text-xs transition-transform duration-200 ${
                                        isActive
                                            ? 'opacity-100'
                                            : 'opacity-0 group-hover:opacity-50'
                                    }`}
                                ></i>
                            </>
                        )}
                    </NavLink>
                ))}

            </nav>

        </aside>
    )
}

export default Aside