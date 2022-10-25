import React from 'react';
import { Link } from 'react-router-dom';
import RegPic from '../Assest/register.jpg'

const Register = () => {
    return (

        <>
            <div className="hero min-h-screen bg-base-200 mx-auto   ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-center">
                        <h1 className="text-5xl font-bold"> Please Register</h1>
                        <img className='rounded-full mt-4 h-[80%]' src={RegPic} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
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
                                <label className="label">
                                </label>
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