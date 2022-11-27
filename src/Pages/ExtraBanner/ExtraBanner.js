import React from 'react';

const ExtraBanner = () => {
    return (
        <div className='mb-10'>
            <div className='text-center'><h2 className='text-teal-700 sm:text-4xl text-xl font-bold my-10'>Our Vintage Collections</h2></div>
            <div className="hero h-3/5 py-10 bg-gradient-to-r from-cyan-800 to-teal-900">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://images.unsplash.com/photo-1572194121169-d8cdfaa40ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwY2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="rounded-lg w-3/4 shadow-2xl" alt='' />
                    <div>
                        <h1 className="sm:text-3xl text-xl font-bold text-white">Vintage Collection</h1>
                        <p className="py-6 text-indigo-200">
                            It is our passion that led us to start our business 20 years ago and the excellence that has led us to where we are today. Our customers have been putting their trust in us to deliver the most meticulous and custom care for each transaction. Whether you are selling or buying, we are here to serve your needs!</p>
                        <button className="btn btn-primary border-0 bg-cyan-500">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraBanner;