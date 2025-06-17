import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard/Dashboard'
import RetailerDashboard from '../pages/Retailer/Dashboard/RetailerDashboard'
import Login from '../pages/Login/Login'
import AuthLayout from '../components/AuthLayout'
import Register from '../pages/Register/Register'
import Retailer from '../pages/Retailer/Retailer'
import Connections from '../pages/Retailer/Connections/Connections'
import Favourites from '../pages/Retailer/Favourites/Favourites'
import Notifications from '../pages/Retailer/Notifications/Notifications'
import Settings from '../pages/Retailer/Settings/Settings'
import Catalog from '../pages/Retailer/Catalog/Catalog'
import RFQs from '../pages/Retailer/RFQs/RFQs'
import Wholesalers from '../pages/Retailer/Wholesalers/Wholesalers'
import Blog from '../pages/Blog/Blog'
import Faq from '../pages/Faq/Faq'

const AppRouter = () => {
    return (
        <Routes>
            {/* <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
            </Route>

            <Route path="/choose-store" element={<ChooseStore />} /> */}

            <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="blog" element={<Blog />} />
                <Route path="faq" element={<Faq />} />

                <Route path="retailer" element={<Retailer />}>
                    <Route path="" element={<RetailerDashboard />} />
                    <Route path="connections" element={<Connections />} />
                    <Route path="favorites" element={<Favourites />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                <Route path="retailer">
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="rfqs" element={<RFQs />} />
                    <Route path="wholesalers" element={<Wholesalers />} />
                </Route>
            </Route>

            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    )
}

export default AppRouter