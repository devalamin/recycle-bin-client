import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import Category from './Category';

const Categories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='grid sm:grid-cols-3 gap-10 grid-cols-1 my-5 sm:my-20'>
            {
                categories.map((category, i) => <Category
                    key={i}
                    category={category}

                ></Category>)
            }
        </div>
    );
};

export default Categories;