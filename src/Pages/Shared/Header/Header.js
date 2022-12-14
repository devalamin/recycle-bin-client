import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, userLogout } = useContext(AuthContext);

    const handleLogout = () => {
        userLogout()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const navItems = <>
        {user && <li className='font-semibold mt-3 btn btn-sm py-2'>{user?.displayName}</li>}
        <li><Link className='font-semibold' to='/'>Home</Link></li>
        <li><Link className='font-semibold' to='/blogs'>Blogs</Link></li>
        <>
            {
                user?.uid ? <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li className='mt-3'><button onClick={handleLogout} className='btn btn-sm py-2'>Logout</button></li>
                </>
                    :
                    <li><Link className='font-semibold' to='/login'>Login</Link></li>
            }
        </>

    </>


    return (
        <div className="navbar bg-slate-700 sm:text-white py-10 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn hidden lg:inline border-0 bg-gradient-to-r from-stone-800 to-cyan-900  normal-case text-xl">Recycle Bin</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;