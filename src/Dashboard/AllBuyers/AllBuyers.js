import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Loading from '../../Pages/Loading/Loading';

const AllBuyers = () => {
    const { data: allBuyers = [], isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyeraccount')
            const data = await res.json()
            return data;
        }
    });
    const handleDelete = id => {
        fetch(`http://localhost:5000/buyerdelete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Deleted The Seller')
                    refetch()
                }
            })

    }
    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className="py-3 px-6">
                                Buyers Name
                            </th>

                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>

                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers.map(reported => <tr key={reported._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">


                                <td className="py-4 px-6">
                                    {reported?.name}
                                </td>

                                <td className="py-4 px-6">
                                    {reported?.email}
                                </td>
                                <td className="py-4 px-6">
                                    <button onClick={() => handleDelete(reported._id)}><span className="font-bold text-2xl text-red-600 dark:text-blue-500 hover:underline"><RiDeleteBin6Line /></span></button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyers;