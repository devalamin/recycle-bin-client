import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>


            <main className="sm:py-56 py-12 w-full flex flex-col justify-center items-center bg-[#1A2238]">
                <h1 className="sm:text-9xl text-2xl font-extrabold text-white tracking-widest">404</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <div className=''>
                    <img className='rounded-3xl' src="https://media.istockphoto.com/id/1222806141/photo/computer-error.jpg?s=612x612&w=0&k=20&c=QqNEXgbPj31_dIabFdYxu61_H0XJCKc5S_2LO7Z_TeU=" alt="" />
                </div>
                <button className="mt-5">
                    <Link
                        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                    >
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            <Link to='/'>Go Home</Link>
                        </span>
                    </Link>
                </button>
            </main>
        </div>
    );
};

export default ErrorPage;