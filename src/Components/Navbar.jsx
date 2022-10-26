import React, { useContext, useState } from 'react';
import logo from '../Assest/favicon.jpg'
import avatar from '../Assest/avatar.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AllContext/AuthProvider';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, LogOut } = useContext(AuthContext);
    console.log(user);


    return (
        <>
            <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                <div className="px-4 py-1  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <Link
                            to='/'
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img className='w-14 ' src={logo} alt="" />
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                Tech World
                            </span>
                        </Link>

                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    to='/course'
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/FAQ'
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/'
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/'
                                    aria-label="About us"
                                    title="About us"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-white">
                                        <span>Dark</span>
                                        <span className="relative">
                                            <input id="Toggle2" type="checkbox" className="hidden peer" />
                                            <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-white"></div>
                                            <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
                                        </span>
                                        <span>Light</span>
                                    </label>

                                </Link>
                            </li>
                        </ul>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                {
                                    user?.uid ?

                                        <>
                                            <img className='inline-flex items-center justify-center  w-14 ml-8 rounded-full' src={user?.photoURL} alt="" title={user?.displayName} />
                                            <Link
                                                to='/login'
                                                className="inline-flex items-center justify-center text-sm font-semibold text-white btn border-none hover:bg-red-700 bg-red-600  rounded-full     "
                                                aria-label="Logout"
                                                title="Logout"
                                                onClick={LogOut}
                                            >
                                                Logout
                                            </Link>


                                        </>
                                        :
                                        <>
                                            <img className='inline-flex items-center justify-center  w-14 ml-8 rounded-full ' src={avatar} alt="" />
                                            <Link
                                                to='/login'
                                                className="inline-flex items-center justify-center text-sm font-semibold text-white btn border-none hover:bg-green-700 bg-green-600  rounded-full    "
                                                aria-label="Login"
                                                title="Login"
                                            >
                                                Login
                                            </Link>
                                        </>
                                }

                            </li>
                        </ul>
                        <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 right-0 w-60">
                                    <div className="p-5 bg-white border rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4">

                                            <div className='w-full'>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-8 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="red"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link
                                                        to='/course'
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                                                    >
                                                        Courses
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to='/'
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                                                    >
                                                        FAQ
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to='/'
                                                        aria-label="Product pricing"
                                                        title="Product pricing"
                                                        className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                                                    >
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to='/'
                                                        aria-label="About us"
                                                        title="About us"
                                                        className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                                                    >
                                                        <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-red-900">
                                                            <span>Dark</span>
                                                            <span className="relative">
                                                                <input id="Toggle2" type="checkbox" className="hidden peer" />
                                                                <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-violet-400"></div>
                                                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
                                                            </span>
                                                            <span>Light</span>
                                                        </label>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;