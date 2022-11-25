import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import axios from 'axios'


export const AuthContext = createContext();


const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [adProducts, setAdProducts] = useState([])

    const [allUsersFromDb, setAllUsersFromDb] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(data => {
                setAllUsersFromDb(data.data)

            })
    }, []);



    useEffect(() => {
        axios.get('http://localhost:5000/advertisment')
            .then(data => {
                setAdProducts(data.data)
            })
    }, []);





    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    };

    const updateUserProfile = userInfo => {
        return updateProfile(auth.currentUser, userInfo)
    };

    const userLogout = () => {
        return signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        });
        return () => unsubscribe()
    }, []);



    const AuthInfo = {
        createNewUser,
        userLogin,
        googleLogin,
        updateUserProfile,
        user,
        userLogout,
        loading,
        allUsersFromDb,
        adProducts

    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;