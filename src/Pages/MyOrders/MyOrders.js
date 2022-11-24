import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['purchasedproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/purchasedproducts?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })
    console.log(products);


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
                                products.map(product => <tr key={product._id}>

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
                                        <button className="btn btn-ghost bg-lime-700 btn-sm text-white">Pay</button>
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

export default MyOrders;