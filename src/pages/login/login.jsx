import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Optional: Add CSS for styling the login page

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            navigate("/shop"); 
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="login-container">
            <h2>Software Engineering</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
