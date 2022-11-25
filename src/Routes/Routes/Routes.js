import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../../Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import Dashboard from "../../Dashboard/Dashboard";
import DashboardLayout from "../../Dashboard/DashboardLayout";
import MyOrders2 from "../../Dashboard/MyOrders2/MyOrders2";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";
import Main from "../../layouts/Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SingleCategory from "../../Pages/Shared/SingleCategory/SingleCategory";
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
                path: '/category/:id',
                element: <PrivateRoute><SingleCategory></SingleCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
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
                element: <AllBuyers></AllBuyers>
            },

        ]
    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]) 