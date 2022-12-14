import React from 'react';
import { MdOutlineVerified } from 'react-icons/md';

const AdProductCard = ({ adProduct }) => {
    const { model, picture, condition, resale_price, original_price,
        using_duration,
        location,
        seller_name,
        seller_status,
        description,
        time
    } = adProduct;


    return (
        <div>
            <div className="card lg:card-side bg-gradient-to-r from-cyan-800 to-teal-300">
                <figure><img className='sm:h-64 sm:w-96 object-cover' src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-xl sm:font-bold'>Model:</span>{model}</h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-xl sm:font-bold'>Condition:</span>  {condition} <span><small className='text-green-900 text-xs'>{`${using_duration} Years used`}</small></span></h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-xl sm:font-bold'>Description:</span>  <span><small>{description}</small></span></h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-xl sm:font-bold'>Resale Price:</span>  ${resale_price}</h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-xl sm:font-bold'>Original Price:</span> ${original_price}</h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-xl sm:font-bold'>Location:</span>  {location}</h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-xl sm:font-bold'>Sell By:</span>  {seller_name} {seller_status ? <MdOutlineVerified className='text-amber-900 font-bold rounded-full' /> : <span><small className='text-xs text-lime-600'>New Seller</small></span>}</h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-xl sm:font-bold'>Posted On:</span>  {time?.slice(0, 16)}</h2>

                    <div className="card-actions justify-end">
                        {/* <label onClick={() => setBookingProduct(product)} htmlFor="product-modal" className="btn bg-amber-900">Buy Now</label> */}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdProductCard;