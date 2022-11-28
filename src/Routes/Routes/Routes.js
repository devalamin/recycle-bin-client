import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../../Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Dashboard/Dashboard";
import DashboardLayout from "../../Dashboard/DashboardLayout";
import MyOrders2 from "../../Dashboard/MyOrders2/MyOrders2";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";
import Payment from "../../Dashboard/Payment/Payment";
import ReportedProducts from "../../Dashboard/ReportedProducts/ReportedProducts";
import Main from "../../layouts/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SingleCategory from "../../Pages/Shared/SingleCategory/SingleCategory";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><SingleCategory></SingleCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`https://recycle-bin-server.vercel.app/category/${params.id}`)
            }
        ]
    },
    // dashboard routes start
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders2></MyOrders2>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reported',
                element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://recycle-bin-server.vercel.app/purchased/${params.id}`)

            }

        ]
    },
    // error route

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]) 