import React, { useContext, useEffect, useState } from 'react';
import { FcAdvertising } from 'react-icons/fc'

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AdProductCard from './AdProductCard';

const AdvertisedProducts = () => {

    const { adProducts } = useContext(AuthContext);
    console.log(adProducts);


    return (
        <div className='mt-10 '>
            <div className='flex items-center'>
                <h3 className='sm:text-2xl font-bold text-yellow-600 mr-2'>Advertisement</h3>
                <FcAdvertising className='text-3xl' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-5 my-10'>
                {
                    adProducts?.map(adProduct => <AdProductCard
                        key={adProduct?._id}
                        adProduct={adProduct}
                    ></AdProductCard>)
                }

            </div>
        </div>
    );
};

export default AdvertisedProducts;