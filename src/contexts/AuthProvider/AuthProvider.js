import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const AuthInfo = {
        user: 'Motin Mia'
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;