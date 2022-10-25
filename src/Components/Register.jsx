import React from 'react';
import { Link } from 'react-router-dom';
import RegPic from '../Assest/register.jpg'

const Register = () => {
    return (

        <>
            <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mx-auto   ">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-center">
                        <h1 className="text-5xl text-white font-bold underline decoration-yellow-400"> Please Complete Registration</h1>
                        <img className='rounded-full ml-16 mt-4 w-[80%]' src={RegPic} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" name='PhotoUrl' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confrim Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Confrim Password" className="input input-bordered" required />
                                <label className="label">
                                </label>
                            </div>
                            <Link to='/login' className="text-red-600 underline label-text-alt link link-hover">Already have an Account ?</Link>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;