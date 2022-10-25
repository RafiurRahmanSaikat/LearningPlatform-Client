import React from 'react';
import { Link } from 'react-router-dom';
import LoginPic from '../Assest/login.svg'
import google from '../Assest/google.png'
import git from '../Assest/git.png'

const Login = () => {
    return (
        <>
            <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-center">
                        <h1 className="text-5xl mb-4 font-bold  text-white font-bold underline decoration-yellow-400">Login Please !</h1>
                        <img src={LoginPic} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="text-red-600 underline label-text-alt link link-hover">Forgot password?</Link>
                                    <Link to='/register' className="text-blue-600 label-text-alt link text-xs link-hover"> Create Account !</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <section className=' p-2 mx-auto'>
                            <button className='flex outline-2 outline  rounded-lg items-center justify-between px-1'>
                                <img className='w-12 bg-white rounded-full' src={google} alt="" />
                                <p className='font-semibold text-md '>Sign in with Google</p>

                            </button>
                            <button className=' flex  mt-2 mb-2 outline-2 outline  rounded-lg  items-center justify-between px-1'>
                                <img className='w-8  m-2' src={git} alt="" />
                                <p className='font-semibold text-md '> Sign in with Google</p>
                            </button>
                        </section>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Login;