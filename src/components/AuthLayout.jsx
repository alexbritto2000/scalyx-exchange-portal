import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const AuthLayout = () => {
    return (
        <div className='relative flex flex-col min-h-screen'>
            <div className="sticky top-0 z-50 bg-[#FBFFFF]" >
                <NavBar className="sticky top-0 z-50 bg-[#FBFFFF]" />
            </div>

            <Outlet />
        </div>
    )
}

export default AuthLayout