import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const DashboardNav = () => {
    const { user, allUsersFromDb } = useContext(AuthContext);
    const [singleUser, setSingleUser] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/singleuser?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSingleUser(data)
            });
    }, [user?.email]);



    const dashboardMenu = <>
        {
            (singleUser.account_type === 'buyer' && <li><Link to='/dashboard/myorders'>My Orders</Link></li>) || (!singleUser.account_type && <li><Link to='/dashboard/myorders'>My Orders</Link></li>)
        }
        {
            singleUser.account_type === 'seller' &&
            <>
                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
            </>
        }
        {
            singleUser.account_type === 'admin' && <>
                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                <li><Link>Reported Items</Link></li>

            </>
        }

    </>
    return (
        <div className='my-10'>
            <div><h4 className='text-center text-2xl font-semibold text-teal-700'>Welcome To Your Dashboard</h4></div>
            <div className="navbar bg-base-100">

                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                dashboardMenu
                            }
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DashboardNav;