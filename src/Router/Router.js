import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../Components/AllCourse";
import CourseDetails from "../Components/CourseDetails";
import Error404 from "../Components/Error404";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Layout from "../Layout/Layout";

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
                element: <CourseDetails></CourseDetails>
            },
            { path: 'FAQ', element: <h1>FAQ IS LOADING</h1> },
        ])
    },
    {
        path: '*', element: <Error404></Error404>
    }
])