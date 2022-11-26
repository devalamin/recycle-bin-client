import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineVerified } from 'react-icons/md'

const ProductsCard = ({ product, setBookingProduct }) => {

    const [disableButton, setDisableButton] = useState(false)

    const { _id, model, picture, condition, resale_price, original_price,
        using_duration,
        location,
        seller_name,
        seller_status,
        description,
        time
    } = product;

    const handleReportToAdmin = reportedProduct => {
        const { model, picture, resale_price, seller_name } = reportedProduct;


        const reportedFinal = {
            model,
            picture,
            resale_price,
            seller_name
        }

        fetch('http://localhost:5000/reported', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportedFinal)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Reported To Admin')
                    setDisableButton(true)

                }
                console.log(data);
            })
        // console.log(reportedProduct);

    }

    return (
        <div>

            <div className="card lg:card-side bg-gradient-to-r from-white to-teal-900">

                <figure><img className='sm:h-64 sm:w-96 object-cover' src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-2xl sm:font-bold'>Model:</span>{model}</h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-2xl sm:font-bold'>Condition:</span>  {condition} <span><small className='text-green-900 text-xs'>{`${using_duration} Years used`}</small></span></h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-2xl sm:font-bold'>Description:</span>  <span><small>{description}</small></span></h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-2xl sm:font-bold'>Resale Price:</span>  ${resale_price}</h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-2xl sm:font-bold'>Original Price:</span> ${original_price}</h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-2xl sm:font-bold'>Location:</span>  {location}</h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-2xl sm:font-bold'>Sell By:</span>  {seller_name} {seller_status ? <MdOutlineVerified className='text-amber-900 font-bold rounded-full' /> : <span><small className='text-xs text-lime-600'>New Seller</small></span>}</h2>
                    <h2 className="card-title sm:text-lg text-xs"><span className='text-teal text-xs sm:text-2xl sm:font-bold'>Posted On:</span>  {time?.slice(0, 16)}</h2>

                    <div className="card-actions justify-end items-center">
                        <label onClick={() => setBookingProduct(product)} htmlFor="product-modal" className="btn bg-amber-900">Buy Now</label>
                        <button disabled={disableButton} onClick={() => handleReportToAdmin(product)} className='btn btn-sm'>Report To Admin</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsCard;