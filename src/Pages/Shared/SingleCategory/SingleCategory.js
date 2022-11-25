import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ProductsCard from './ProductsCard';

const SingleCategory = () => {
    const products = useLoaderData();
    const [bookingProduct, setBookingProduct] = useState(null)
    return (
        <div>
            <div className='grid gap-10'>
                {products &&
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                        setBookingProduct={setBookingProduct}
                    ></ProductsCard>)
                }

            </div>
            {bookingProduct &&

                <BookingModal
                    bookingProduct={bookingProduct}
                    setBookingProduct={setBookingProduct}
                ></BookingModal>}
        </div>
    );
};

export default SingleCategory;