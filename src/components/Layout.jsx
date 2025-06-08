import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className='relative flex flex-col'>
            <div className="sticky top-0 z-50 bg-[#FBFFFF]" >
                <NavBar className="sticky top-0 z-50 bg-[#FBFFFF]" />
            </div>
            
            <Outlet />

            <Footer />
        </div>
    )
}

export default Layout