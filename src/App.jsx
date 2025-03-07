import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import PrivateRoute from './routes/PrivateRoute'
import Profile from './pages/dashboard/Profile'
import BankDetails from './pages/dashboard/BankDetails'
import Login from './pages/auth/Login'
import Verify from './pages/auth/Verify'

const App = () => {
  const routes = createBrowserRouter([
    {
      path:"",
      element: <Home/>,
    },
    {
      path:"/login",
      element: <Login/>,
    },
    {
      path:"/verify",
      element: <Verify/>,
    },
    {
      path:"user",
      element: <PrivateRoute/>,
      children: [
        {
          path: "profile",
          element: <Profile/>
        },
        {
          path: "bank-details",
          element: <BankDetails/>
        },
      ]
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App