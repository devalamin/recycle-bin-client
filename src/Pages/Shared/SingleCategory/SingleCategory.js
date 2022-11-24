import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const SingleCategory = () => {
    const products = useLoaderData();
    return (
        <div className='grid gap-10'>
            {
                products.map(product => <ProductsCard
                    key={product._id}
                    product={product}
                ></ProductsCard>)
            }
        </div>
    );
};

export default SingleCategory;