import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//import Login from "./Login";
//import Register from "./Register";
//import Profile from "./pages/Profile";

function App() {
    console.log("App component is rendered");
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log("Use effect is running");
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));  // Retrieve user data from localStorage
            console.log("Setting user");
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
