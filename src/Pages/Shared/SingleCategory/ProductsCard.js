import React from 'react';
import { MdOutlineVerified } from 'react-icons/md'

const ProductsCard = ({ product }) => {
    const { model, picture, condition, resale_price, original_price,
        using_duration,
        location,
        seller_name,
        seller_status,
        description,
        time
    } = product;

    return (
        <div>
            <div className="card lg:card-side bg-gradient-to-r from-white to-teal-900">
                <figure><img className='sm:h-64 sm:w-96 object-cover' src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='text-teal text-2xl font-bold'>Model:</span>{model}</h2>
                    <h2 className="card-title"><span className='text-teal text-2xl font-bold'>Condition:</span>  {condition} <span><small className='text-green-900'>{`${using_duration} Years`}</small></span></h2>
                    <h2 className="card-title"><span className='text-teal text-2xl font-bold'>Description:</span>  <span><small>{description}</small></span></h2>
                    <h2 className="card-title"><span className='text-teal text-2xl font-bold'>Resale Price:</span>  ${resale_price}</h2>
                    <h2 className="card-title"><span className='text-teal text-2xl font-bold'> Original Price:</span> ${original_price}</h2>
                    <h2 className="card-title"><span className='text-teal text-2xl font-bold'>Location:</span>  {location}</h2>
                    <h2 className="card-title"><span className='text-teal text-2xl font-bold'>Sell By:</span>  {seller_name} {seller_status ? <MdOutlineVerified className='text-amber-900 font-bold rounded-full' /> : <span><small className='text-xs text-lime-600'>New Seller</small></span>}</h2>
                    <h2 className="card-title"><span className='text-teal text-2xl font-bold'>Posted On:</span>  {time}</h2>

                    <div className="card-actions justify-end">
                        <button className="btn bg-amber-900">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;