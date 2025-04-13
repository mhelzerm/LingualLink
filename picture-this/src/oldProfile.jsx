import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(res.data);
            } catch (err) {
                console.error("Not authenticated");
            }
        };

        fetchProfile();
    }, []);

    return user ? <div>Welcome, {user.fullname}!</div> : <div>Please log in.</div>;
};

export default Profile;
