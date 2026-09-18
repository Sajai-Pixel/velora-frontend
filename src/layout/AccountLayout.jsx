import React from 'react'
import Header from '../components/Header'
import Sidenav from '../components/Sidenav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const AccountLayout = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col md:flex-row gap-8 mt-6 md:mt-10 lg:gap-12 px-auto'>
                <Sidenav />
                <main className='flex-1'>
                    <Outlet />
                </main>
            </div>
            <Footer/>
        </>
    )
}

export default AccountLayout
