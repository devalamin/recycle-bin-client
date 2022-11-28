import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Pages/Loading/Loading';

const AllSellers = () => {

    const { data: allsellers = [], isLoading, refetch } = useQuery({
        queryKey: ['selleraccount'],
        queryFn: async () => {
            const res = await fetch('https://recycle-bin-server.vercel.app/selleraccount')
            const data = await res.json()
            return data
        }

    })

    const handleDelete = id => {
        fetch(`https://recycle-bin-server.vercel.app/sellerdelete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Deleted Successfully')
                    refetch()
                }

            })
    };



    const handleSellerVerify = id => {
        fetch(`https://recycle-bin-server.vercel.app/sellerverify/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        // console.log(id);
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allsellers.map((seller, i) => <tr key={seller?._id}>
                                <th>{i + 1}</th>
                                <td>{seller?.name}</td>
                                <td>{seller?.email}</td>
                                <td>
                                    {
                                        seller?.seller_status === 'verified' ? <button className='btn btn-sm bg-success border-0'>Verified</button>
                                            :
                                            <button onClick={() => handleSellerVerify(seller?._id)} className='btn btn-sm'>Verify Seller</button>
                                    }
                                </td>
                                <td><button onClick={() => handleDelete(seller?._id)} className='btn btn-sm bg-red-700 border-0'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;