import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../api/authApi'


const Customers = () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await getAllUsers()
                setUsers(data)
            } catch (error) {
                console.error(error)
            }
        }

        getUsers()
    }, [users])

    const filteredUsers = users.filter((user) =>
        user.name?.toLowerCase().includes(search.toLowerCase()) ||
        user.email?.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="space-y-6">

            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-black/40">
                        Customer Management
                    </p>

                    <h1 className="mt-1 text-3xl font-semibold tracking-tight">
                        Customers
                    </h1>

                    <p className="mt-2 text-sm text-black/50">
                        Manage and view all registered customers.
                    </p>
                </div>

                <div className="rounded-xl border border-black/10 bg-white px-5 py-3 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-black/40">
                        Total Customers
                    </p>

                    <p className="mt-1 text-2xl font-semibold">
                        {users.length}
                    </p>
                </div>
            </div>


            {/* Search + Stats */}
            <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Search */}
                    <div className="relative w-full sm:max-w-md">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-sm text-black/30"></i>

                        <input
                            type="text"
                            placeholder="Search customers..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-xl border border-black/10 bg-black/[0.02] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-black/30 focus:bg-white"
                        />
                    </div>

                    <p className="text-sm text-black/40">
                        Showing <span className="font-medium text-black/70">
                            {filteredUsers.length}
                        </span> customers
                    </p>

                </div>
            </div>


            {/* Customer Table */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px]">

                        <thead>
                            <tr className="border-b border-black/10 bg-black/[0.02]">
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-black/40">
                                    Customer
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-black/40">
                                    Email
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-black/40">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-black/40">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-black/5">

                            {filteredUsers.map((user) => (
                                <tr
                                    key={user._id}
                                    className="transition hover:bg-black/[0.015]"
                                >

                                    {/* Customer */}
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">

                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                                                {user.name?.charAt(0)?.toUpperCase()}
                                            </div>

                                            <div>
                                                <p className="font-medium">
                                                    {user.name}
                                                </p>
                                            </div>

                                        </div>
                                    </td>

                                    {/* Email */}
                                    <td className="px-6 py-5 text-sm text-black/60">
                                        {user.email}
                                    </td>


                                    {/* Status */}
                                    <td className="px-6 py-5">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1.5 text-xs font-medium text-black/60">
                                            <span className="h-1.5 w-1.5 rounded-full bg-black/50"></span>
                                            Active
                                        </span>
                                    </td>


                                    {/* Action */}
                                    <td className="px-6 py-5 text-right">
                                        <button
                                            type="button"
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 text-black/50 transition hover:bg-black hover:text-white"
                                        >
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>
                </div>


                {/* Empty State */}
                {filteredUsers.length === 0 && (
                    <div className="px-6 py-16 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/5">
                            <i className="fa-solid fa-users text-black/30"></i>
                        </div>

                        <h3 className="mt-4 font-medium">
                            No customers found
                        </h3>

                        <p className="mt-1 text-sm text-black/40">
                            Try searching with a different name or email.
                        </p>
                    </div>
                )}

            </div>

        </section>
    )
}

export default Customers