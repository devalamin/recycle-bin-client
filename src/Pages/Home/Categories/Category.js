import React from 'react';

const Category = ({ category }) => {
    const { brandsName, image } = category;


    return (
        <div>
            <div className="card w-full object-cover h-full bg-base-100 shadow-xl image-full">
                <figure><img className='object-cover w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-white">{brandsName}</h2>
                    <div className="card-actions justify-center sm:mt-20">
                        <button className="btn btn-info">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;