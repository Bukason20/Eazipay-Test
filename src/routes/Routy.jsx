import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import DashboardCont from '../pages/DashboardPages/DashboardCont/DashboardCont'
import LandingPage from '../pages/LandingPage/LandingPage'
import Home from '../pages/DashboardPages/Home/Home'
import Employee from '../pages/DashboardPages/Employee/Employee'
import Setting from '../pages/DashboardPages/Settings/Setting'
import Wallet from '../pages/DashboardPages/Wallet'
import Payroll from '../pages/DashboardPages/Payroll'
import Compliance from '../pages/DashboardPages/Compliance'
import Loan from '../pages/DashboardPages/Loan'
import Book from '../pages/DashboardPages/Book'
import Support from '../pages/DashboardPages/Support'

function Routy() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<DashboardCont />}>
          <Route index element={<Home />} />
          <Route path="employee" element={<Employee />} />
          <Route path="settings" element={<Setting />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="loan" element={<Loan />} />
          <Route path="loan" element={<Loan />} />
          <Route path="book-keeping" element={<Book />} />
          <Route path="support" element={<Support />} />
        </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default Routy