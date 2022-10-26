import React from 'react';
import { jsPDF } from "jspdf";
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const { id, title, price, img, description, category, syllabus } = useLoaderData();

    const pdf = () => {
        const doc = new jsPDF();
        doc.setFontSize(30)
        doc.text(35, 20, 'Tech World learning Platfrom')
        doc.addImage(img, 'JPEG', 15, 40, 180, 160)
        let Splitedsyllbus = doc.splitTextToSize(syllabus, 200);
        doc.text(Splitedsyllbus, 10, 215);
        doc.addPage()
        let Splitedsyllbus2 = doc.splitTextToSize(syllabus, 290);
        doc.setFontSize(20)
        doc.text(Splitedsyllbus2, 10, 20)

        doc.save("syllabus.pdf");
    }
    return (


        <section className="text-gray-600 body-font bg-gray-800 overflow-hidden">

            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                        <button
                            onClick={pdf}
                            className="flex mx-auto mb-4 text-white  bg-green-500  border-0 py-2 px-6 focus:outline-none hover:bg-green-700 font-semibold rounded">
                            Download Syllabus
                        </button>

                        <h2 className="text-sm title-font text-white tracking-widest">Tech World</h2>
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
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        </div>
                        <div className="flex">
                            <p className="title-font font-medium text-2xl text-gray-100">$  {price} TK/= </p>



                            <Link to={`/purchase/${id}`} className="flex ml-auto text-white  bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Purchase</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CourseDetails;