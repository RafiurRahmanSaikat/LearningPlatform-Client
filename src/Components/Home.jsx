import React from 'react';

const Home = () => {
    return (
        <>
            <div className="hero min-h-screen " style={{ backgroundImage: `url("https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?w=1480&t=st=1666688281~exp=1666688881~hmac=47ab3a74dbbca7e9a3d7c4cb573fcd8dc7f4721bf654f2eca61f67014e5d5d60")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">You are Welcome to <br />
                         <span className='text-red-500'>Tech World!!</span></h1>
                        <p className="mb-5 text-white">techworld is learning platform in bangladesh where you can learn different types of technology and we provide you the highest opportunity to get your Goal !!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;