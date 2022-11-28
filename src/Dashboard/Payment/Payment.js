import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);



const Payment = () => {

    const product = useLoaderData();
    console.log(product);
    const { productName, productPrice, CustomerName } = product;

    return (
        <div>
            <div className='my-10'><h2 className='text-center text-2xl'>Please Pay <span className='font-bold text-teal-800'>{productPrice} </span>For Your <span className='font-bold text-teal-700'>{productName}</span></h2></div>
            <div className='w-2/4 mx-auto border border-teal-900 p-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        product={product}
                    />
                </Elements>

            </div>
        </div>
    );
};

export default Payment;