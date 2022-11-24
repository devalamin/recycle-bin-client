import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SingleCategory from "../../Pages/Shared/SingleCategory/SingleCategory";

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
                path: '/category/:brandname',
                element: <SingleCategory></SingleCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.brandname}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]) 