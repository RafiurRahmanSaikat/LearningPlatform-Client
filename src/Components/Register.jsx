import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AllContext/AuthProvider';
import RegPic from '../Assest/register.jpg'

const Register = () => {
    const [error, setError] = useState(null)
    const { SignUp, setProfile } = useContext(AuthContext)

    const SubmitForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.PhotoUrl.value;
        const mobile = form.phoneNumber.value;
        const email = form.email.value;
        const password = form.password.value;
        const ConfrimPassword = form.ConfrimPassword.value;
        console.log(mobile, name);
        const Profile = { displayName: name, photoURL: photo, phoneNumber: mobile }

        setError("")
        if (password !== ConfrimPassword) {
            setError("Password not matching !")
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 digit!")
            return;
        }
        SignUp(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                form.reset()
                setProfile(Profile)
                    .then(result => { })
                    .catch((error) => {
                        const errorMessage = error.message;
                        setError(errorMessage)
                    })
                setError("You are successfully registered ")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        <>
            <div className="hero min-h-screen bg-gray-800  mx-auto   ">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-center">
                        <h1 className="text-5xl text-white font-bold underline decoration-yellow-400"> Please Complete Registration</h1>
                        <img className='rounded-full ml-16 mt-4 w-[80%]' src={RegPic} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={SubmitForm} className="card-body">
                            <p className='text-xl bg-red-500 text-white rounded-full font-semibold'>{error}</p>
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
                                <input type="text" placeholder="Photo Url" name='PhotoUrl' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Contact Number</span>
                                </label>
                                <input type="Number" placeholder="Contact Number" name='phoneNumber' className="input input-bordered" required />
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
                                <input type="password" name='ConfrimPassword' placeholder="Confrim Password" className="input input-bordered" required />
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