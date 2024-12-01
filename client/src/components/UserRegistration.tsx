// client/src/components/UserRegistration.tsx
import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/users/register", { username, email, password });
            console.log(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Handle Axios error
                console.error("Error registering user", error.response?.data); // Use optional chaining
            } else {
                // Handle generic error
                console.error("An unexpected error occurred", error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default UserRegistration;
