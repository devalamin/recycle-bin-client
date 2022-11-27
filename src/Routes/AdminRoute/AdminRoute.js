import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Pages/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [singleUser, setSingleUser] = useState('');
    const [adminLoading, setIsAdminLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/singleuser?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSingleUser(data)
                setIsAdminLoading(false)
            });
    }, [user?.email]);

    if (loading || adminLoading) {
        return <Loading></Loading>
    }


    if (user && singleUser.account_type === 'admin') {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;