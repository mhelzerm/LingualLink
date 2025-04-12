import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";


function NavbarWrapper() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        //console.log("Use effect")
        if (token) {
            const decodedToken = jwtDecode(token);
            //console.log("Decoded")
            //console.log(decodedToken)
            // Check if the token is expired
            if (decodedToken.exp * 1000 < Date.now()) {
                // Token expired
                localStorage.removeItem("token");
                setUser(null);
            } else {
                // Token is valid
                //console.log(decodedToken.username)
                setUser({
                    id: decodedToken.id,
                    username: decodedToken.username,
                    email: decodedToken.email,
                });
            }
        }
    }, []);

    return (
        <div>
            <Navbar user={user} setUser={setUser}/>
            <Outlet context={{ user, setUser }} />
        </div>
    )
};

export default NavbarWrapper;