// UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

export const useUser = () => {
    //console.log("useUser called");
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem('token');
                setUser(null);
            } else {
                //console.log("decodedToken")
                //console.log(decodedToken)
                setUser({
                    id: decodedToken.id,
                    fullname: decodedToken.fullname,
                    email: decodedToken.email,
                });
                //console.log(user.fullname)
            }
        }
    }, []);

    const logout = () => {
        console.log("Logging out")
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};
