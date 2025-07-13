import { useState, useEffect } from 'react';

export default function UserFetch() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true); // Set loading to true at the start of the fetch
                setError(null); // Clear any previous errors

                const res = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!res.ok) {
                    throw new Error(`Network response was not ok: ${res.statusText}`);
                }

                const data = await res.json();
                setUsers(data); 
            } catch (err) {
                console.error("Error fetching user data:", err); // Log the error for debugging
                setError(err.message); // Set the error message
            } finally {
                setLoading(false); // Always set loading to false when done (success or failure)
            }
        }

        fetchUsers(); // <--- CRITICAL: Call the async function 

    }, []); // Empty dependency array means this effect runs once after the initial render

    if (loading) {
        return <h2>Loading users...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    // Only render the list if not loading and no error
    return (
        <>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </>
    );
}