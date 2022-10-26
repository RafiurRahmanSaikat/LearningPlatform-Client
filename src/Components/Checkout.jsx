import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { id, title, price, img, description, category } = useLoaderData();
    return (
        <>
            <section className=' bg-gray-800'>
                <p className='text-5xl font-semibold text-orange-500  p-8'>Checkout This Course</p>
                <div className="flex mx-auto ">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="bg-gray-800 text-white ">
                            <section className="text-white body-font bg-gray-800 overflow-hidden">
                                <div className="container py-8 mx-auto">
                                    <div className="lg:w-[100%] p-8 mx-auto flex flex-wrap">
                                        <img alt="ecommerce"
                                            className="lg:w-[80%] w-full mx-auto lg:h-auto h-[100%] rounded" src={img} />

                                        <div className=" mx-auto mt-6 ">

                                            <h1 className="text-white text-3xl title-font font-medium mb-1">{title}</h1>
                                            <p className='text-2xl my-4 text-gray-200 font-bold'>Category : <span className='underline'> {category}</span></p>
                                            <span className="flex items-center">
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <span className="text-gray-100 ml-3">4 Reviews</span>
                                            </span>
                                            <p className="leading-relaxed text-gray-300">{description}</p>
                                            <p className='font-semibold mt-2 text-orange-400'><span className='text-white text-sm'>Price :</span> {price} TK/=</p>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>


                        <section className=''>
                            <div className="bg-gray-800 mx-auto py-12 md:py-24">
                                <div className="mx-auto w-[80%]  p-4">
                                    <form className="grid grid-cols-6 gap-4">

                                        <div className="col-span-6">
                                            <label className="mb-1 block text-sm text-white" htmlFor="email">
                                                Full Name
                                            </label>

                                            <input
                                                className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                                type="text"
                                                id="FullName"
                                            />
                                        </div>
                                        <div className="col-span-6">
                                            <label className="mb-1 block text-sm text-white" htmlFor="email">
                                                Email
                                            </label>

                                            <input
                                                className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                                type="email"
                                                id="email"
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label className="mb-1 block text-sm text-white" htmlFor="phone">
                                                Phone
                                            </label>

                                            <input
                                                className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                                type="tel"
                                                id="phone"
                                            />
                                        </div>

                                        <fieldset className="col-span-6">
                                            <legend className="mb-1 block text-sm text-white">
                                                Card Details
                                            </legend>

                                            <div className="-space-y-px rounded-lg bg-white shadow-sm">
                                                <div>
                                                    <label className="sr-only" htmlFor="card-number">Card Number</label>

                                                    <input
                                                        className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                        type="text"
                                                        name="card-number"
                                                        id="card-number"
                                                        placeholder="Card number"
                                                    />
                                                </div>

                                                <div className="flex -space-x-px">
                                                    <div className="flex-1">
                                                        <label className="sr-only" htmlFor="card-expiration-date">
                                                            Expiration Date
                                                        </label>

                                                        <input
                                                            className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                            type="text"
                                                            name="card-expiration-date"
                                                            id="card-expiration-date"
                                                            placeholder="MM / YY"
                                                        />
                                                    </div>

                                                    <div className="flex-1">
                                                        <label className="sr-only" htmlFor="card-cvc">CVC</label>

                                                        <input
                                                            className="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                            type="text"
                                                            name="card-cvc"
                                                            id="card-cvc"
                                                            placeholder="CVC"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>

                                        <fieldset className="col-span-6">
                                            <legend className="mb-1 block text-sm text-white">
                                                Billing Address
                                            </legend>

                                            <div className="-space-y-px rounded-lg bg-white shadow-sm">
                                                <div>
                                                    <label className="sr-only" htmlFor="country">Country</label>

                                                    <select
                                                        className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                    >
                                                        <option>England</option>
                                                        <option>Wales</option>
                                                        <option>Scotland</option>
                                                        <option>France</option>
                                                        <option>Belgium</option>
                                                        <option>Japan</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="sr-only" htmlFor="postal-code">
                                                        ZIP/Post Code
                                                    </label>

                                                    <input
                                                        className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                        type="text"
                                                        name="postal-code"
                                                        id="postal-code"
                                                        autoComplete="postal-code"
                                                        placeholder="ZIP/Post Code"
                                                    />
                                                </div>
                                            </div>
                                        </fieldset>

                                        <div className="col-span-6">
                                            <button
                                                className="block w-full rounded-lg bg-orange-500 p-2.5 text-sm text-white"
                                                type="submit"
                                            >
                                                Pay Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Checkout;