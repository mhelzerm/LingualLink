import { useState } from "react";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useOutletContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting login:", { email, password });
            //console.log("setUser is:", setUser);

            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, { email, password });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));  // Store user data
            setUser(res.data.user);
            navigate("/");
        } catch (err) {
            console.error(err.response?.data?.error || "Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
