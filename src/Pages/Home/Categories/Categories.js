import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import Category from './Category';

const Categories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://recycle-bin-server.vercel.app/categories')
            const data = await res.json()
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <div>
            <div className='mt-10'>
                <h2 className='sm:text-2xl font-bold'>Choose Your Car By Favourite Brand Name:</h2>
            </div>
            <div className='grid sm:grid-cols-3 gap-10 grid-cols-1 mb-5 sm:mb-20 sm:mt-10'>
                {
                    categories.map((category, i) => <Category
                        key={i}
                        category={category}

                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;