import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCourse = () => {
    const CourseData = useLoaderData();
    console.log(CourseData[0]);


    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl dark:text-white">ALL COURSE</h1>

                    <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                        <div className="lg:mx-12">
                            <h1 className="text-2xl font-semibold text-orange-500  ">Available Courses</h1>

                            <div className="mt-4 space-y-4 lg:mt-8">
                                {
                                    CourseData.map((course) =>
                                        <Link to={`/course-details/${course.id}`}
                                            key={course.id}
                                            className="block text-xl text-white hover:bg-red-500 rounded-lg">
                                            {course.category}
                                        </Link>)
                                }
                            </div>
                        </div>
                        <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                                {
                                    CourseData.map((course) =>
                                        <div key={course.id}>
                                            <Link to={`/course-details/${course.id}`} key={course.id}>

                                                <div>
                                                    
                                                    <img className="object-cover w-full rounded-lg h-96 "
                                                        src={course.img}
                                                        alt="" />

                                                    <p className='font-semibold mt-2 text-orange-400'><span className='text-white text-sm'>Price :</span> {course.price} TK/=</p>
                                                    <p className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">{course.title}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllCourse;