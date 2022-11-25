import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Pages/Loading/Loading';

const AllSellers = () => {

    const { data: allsellers = [], isLoading, refetch } = useQuery({
        queryKey: ['selleraccount'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/selleraccount')
            const data = await res.json()
            return data
        }

    })

    const handleDelete = id => {
        fetch(`http://localhost:5000/sellerdelete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Deleted Successfully')
                    refetch()
                }
                console.log(data);
            })
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
                                <td><button className='btn btn-sm'>Verify Seller</button></td>
                                <td><button onClick={() => handleDelete(seller?._id)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;