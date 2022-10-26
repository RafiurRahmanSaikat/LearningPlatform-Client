import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../Components/AllCourse";
import Blogs from "../Components/Blogs";
import Checkout from "../Components/Checkout";
import CourseDetails from "../Components/CourseDetails";
import Error404 from "../Components/Error404";
import FAQ, { Faq } from "../Components/FAQ";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Layout from "../Layout/Layout";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Layout></Layout>,
        children: ([

            { path: '/', element: <Home></Home> },
            { path: 'login', element: <Login></Login> },
            { path: 'register', element: <Register></Register> },
            {
                path: 'course',
                loader: () => {
                    return fetch('https://techworld-psi.vercel.app/')
                },
                element: <AllCourse></AllCourse>
            },
            {
                path: 'course-details/:id',
                loader: ({ params }) => {
                    return fetch(`https://techworld-psi.vercel.app/${params.id}`)
                },
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
            },
            {
                path: 'purchase/:id',
                loader: ({ params }) => {
                    return fetch(`https://techworld-psi.vercel.app/${params.id}`)
                },
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            { path: 'FAQ', element: <FAQ></FAQ> },
            { path: '/blogs', element: <Blogs></Blogs> },
        ])
    },
    {
        path: '*', element: <Error404></Error404>
    }
])