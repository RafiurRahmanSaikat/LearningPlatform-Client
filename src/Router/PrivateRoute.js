import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AllContext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading)
        return (
            <div className='flex-col p-[20rem] justify-center items-center '>
                <progress className="progress  progress-error w-[80%] h-10"></progress>
                <p className=' text-red-500 text-4xl'>LOADING........ DATA PLEASE WAIT !!!</p>
            </div>
        )
    if (user?.uid)
        return (
            <>
                {children}
            </>
        );
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

};

export default PrivateRoute;