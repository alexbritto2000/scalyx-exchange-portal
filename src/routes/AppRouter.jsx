import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard/dashboard'

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
            </Route>
        </Routes>
    )
}

export default AppRouter