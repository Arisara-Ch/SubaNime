import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        return new Promise((resolve) => {
            // สมมุติว่าล็อกอินสำเร็จ
            setIsLoggedIn(true);
            resolve();
        });
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const value = {
        isLoggedIn,
        handleLogin,
        handleLogout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};