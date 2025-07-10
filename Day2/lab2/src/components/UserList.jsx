import React from 'react'
import {useState} from 'react';

// here we are importing useState from react to manage the state of the search term and the state is object that contains the users array
//so we need to convert the users object to an array so we can use the filter method on it
export default function UserList(users) {
 const userArray = users.users || []; // Ensure users is an array

  
        const [searchTerm, setSearchTerm] = useState('');
         const filteredUsers = userArray.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (

    <>
    <br />
   
    <br /><br />
      <div className="container my-4">
  <input
    type="text"
    placeholder="Search by Name or Email..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="form-control mb-4"
  />

  <div className="row g-4">
    {filteredUsers.map((user) => (
      <div key={user.id} className="col-12 col-sm-6 col-md-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body d-flex align-items-center gap-3">
            <img
              src={user.profilePic}
              alt={user.username}
              className="rounded-circle border"
              width="64"
              height="64"
            />
            <div>
              <h5 className="card-title mb-1">{user.username}</h5>
              <p className="card-text mb-1">{user.email}</p>
              <p className="card-text mb-1">{user.phone}</p>
              <span
                className={`badge ${
                  user.isVerified ? 'bg-success' : 'bg-danger'
                }`}
              >
                {user.isVerified ? 'Verified' : 'Not Verified'}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </>

    
  )
}
