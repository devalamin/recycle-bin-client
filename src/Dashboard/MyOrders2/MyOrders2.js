import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import Loading from '../../Pages/Loading/Loading';


const MyOrders2 = () => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user);

    const url = `http://localhost:5000/purchasedproducts?email=${user?.email}`

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['purchasedproducts', user?.email],
        queryFn: async () => {
            if (user) {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
        }
    });


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <span className='text-4xl'>Orders:</span>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map(product => <tr key={product._id}>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask w-24 h-24">
                                                    <img src={product?.picture} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <p className='font-bold text-lime-800'>{product?.productName}</p>
                                    </td>
                                    <td><p>{product?.productPrice}</p></td>
                                    <th>
                                        {
                                            product?.productPrice && !product.paid && <Link to={`/dashboard/payment/${product?._id}`}><button className="btn btn-ghost bg-cyan-900 btn-sm text-white">Pay</button></Link>
                                        }
                                        {
                                            product.productPrice && product.paid && <span className='btn btn-ghost bg-cyan-400 btn-sm text-white'>Paid</span>
                                        }
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

export default MyOrders2;