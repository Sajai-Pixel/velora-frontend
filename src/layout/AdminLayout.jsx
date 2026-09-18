import React from 'react'

import Aside from '../admin/components/Aside'
import Header from '../admin/components/Header'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <Header />

            <div className="flex h-[calc(100vh-96px)]">
                
                <Aside />

                <main className="flex-1 min-w-0 overflow-y-auto p-6">
                    <Outlet />
                </main>

            </div>
        </>
    )
}

export default AdminLayout