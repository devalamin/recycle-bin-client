import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Pages/Loading/Loading';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async () => {
            if (user) {
                const res = await fetch(`https://recycle-bin-server.vercel.app/dashboard/myproducts?email=${user?.email}`)
                const data = await res.json();
                console.log(data);
                return data;
            }
        }
    });



    const handleBoosting = id => {
        fetch(`https://recycle-bin-server.vercel.app/dashboard/advertise/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const handleDelete = id => {
        fetch(`https://recycle-bin-server.vercel.app/dashboard/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.error('Deleted This Product')
                    refetch()
                }
                console.log(data)
            })
    };



    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <span>Delete</span>
                                    </label>
                                </th>
                                <th>Product</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>Boost This Product</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myProducts?.map(myProduct => <tr key={myProduct?._id}>
                                    <th>
                                        <label>
                                            <MdDelete onClick={() => handleDelete(myProduct?._id)} className='text-2xl cursor-pointer' />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={myProduct?.picture} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{myProduct?.model}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span> {myProduct?.product_status ? myProduct?.product_status : 'Available'}</span>
                                    </td>
                                    <td> ${myProduct?.resale_price}</td>
                                    <th>
                                        <button onClick={() => handleBoosting(myProduct?._id)} className="btn border-0 btn-sm bg-lime-600">{myProduct?.adstatus ? 'Boosted' : 'Boost'}</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;