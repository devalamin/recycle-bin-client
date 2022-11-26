import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri'
import toast from 'react-hot-toast';
import Loading from '../../Pages/Loading/Loading';

const ReportedProducts = () => {

    const { data: reportedProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reported')
            const data = await res.json()
            return data;
        }
    });

    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/reported/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Deleted The reported Item')
                    refetch()
                }
                console.log(data);
            })

    }

    if (isLoading) {
        <Loading></Loading>
    }


    return (
        <div>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Product
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>

                            <th scope="col" className="py-3 px-6">
                                Seller
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedProducts.map(reported => <tr key={reported._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className='h-16 w-16 rounded-full' src={reported?.picture} alt="" />
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {reported?.model}
                                </th>
                                <td className="py-4 px-6">
                                    {reported?.seller_name}
                                </td>

                                <td className="py-4 px-6">$
                                    {reported?.resale_price}
                                </td>
                                <td className="py-4 px-6">
                                    <button onClick={() => handleDelete(reported._id)}><Link className="font-bold text-2xl text-red-600 dark:text-blue-500 hover:underline"><RiDeleteBin6Line /></Link></button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ReportedProducts;