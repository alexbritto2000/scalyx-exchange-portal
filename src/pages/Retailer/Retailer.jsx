import React from 'react'
import SideBar from './Common/SideBar'
import RetailerDashboard from './Dashboard/RetailerDashboard'
import { Outlet } from 'react-router-dom'

const Retailer = () => {
    return (
        <div className='px-8 py-8 flex justify-center items-center bg-[#EBF0F2]'>
            <div className='w-full max-w-7xl flex gap-3'>
                <SideBar />
                <div className="flex flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Retailer