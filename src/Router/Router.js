import { createBrowserRouter } from "react-router-dom";
import Error404 from "../Components/Error404";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/', element: <Layout></Layout>,
        children: ([
            { path: 'login', element: <Login></Login> },
            { path: 'register', element: <Register></Register>},
            { path: 'FAQ', element: <h1>FAQ PAGE</h1> },
        ])
    },
    {
        path: '*', element: <Error404></Error404>
    }
])