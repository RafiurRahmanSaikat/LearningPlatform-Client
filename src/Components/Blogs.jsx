import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='bg-gray-800 text-white '>
            <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mb-10  divide-y">
                    <div className="grid py-8 items-center sm:grid-cols-4">
                        <div className="mb-4  sm:mb-0">
                            <div className="  text-xl font-bold  tracking-wide uppercase">
                                What is cors ?

                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <p className="text-white text-xl text-start ">
                                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 items-center sm:grid-cols-4">
                        <div className="mb-4  sm:mb-0">
                            <div className="  text-xl font-bold  tracking-wide uppercase">
                                Why I use Firebase ? <br />
                                It's alternatives ?
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <p className="text-white text-xl text-start ">
                                Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.

                                <div className='text-start mx-20'>
                                    <span className='text-yellow-500'> Some Alternatives ,  </span>
                                    <li>MongoDB.</li>
                                    <li>Oracle Database.</li>
                                    <li>Amazon Redshift.</li>
                                    <li>DataStax Enterprise.</li>
                                    <li>Redis Enterprise Cloud.</li>
                                    <li>Cloudera Enterprise Data Hub.</li>
                                    <li>Db2.</li>
                                    <li>Couchbase Server.</li>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 items-center sm:grid-cols-4">
                        <div className="mb-4  sm:mb-0">
                            <div className="  text-xl font-bold  tracking-wide uppercase">
                                What NODE.JS  ?
                                <br />
                                How it runs ?
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <p className="text-white text-xl text-start  text-start">

                                Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.
                                <br /><br />
                                Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Thats How NODE.js runs .
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 items-center sm:grid-cols-4">
                        <div className="mb-4  sm:mb-0">
                            <div className="  text-xl font-bold  tracking-wide uppercase">
                                What is private route ?
                                <br />
                                How it works ?
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <p className="text-white text-xl text-start  text-start">

                                The private route component is used to protect selected pages in a React app from unauthenticated users.
                                <br /><br />
                                The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Blogs;