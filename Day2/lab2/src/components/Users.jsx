import React from 'react'
import UserList from './UserList';
// here we send sending the users array to the UserList component
export default function Users() {
  const users = [
    {
      id: 1,
      username: 'Alice Smith',
      email: 'am@example.com',
      phone: '123-456-7890',
      profilePic: 'https://via.placeholder.com/150/ADD8E6?text=AS',
      isVerified: true,
    },
    {
      id: 2,
      username: 'Bob Johnson',
      email: 'bj@example.com',
      phone: '098-765-4321',
      profilePic: 'https://via.placeholder.com/150/ADD8E6?text=BJ',
      isVerified: false,
    },
    {
      id: 3,
      username: 'Charlie Brown',
      email: 'cb@example.com',
      phone: '555-123-4567',
      profilePic: 'https://via.placeholder.com/150/ADD8E6?text=CB',
      isVerified: true,
    },
    {
      id: 4,
      username: 'Diana Miller',
      email: 'dm@example.com',
      phone: '111-222-3333',
      profilePic: 'https://via.placeholder.com/150/ADD8E6?text=DM',
      isVerified: false,
    },
    {
      id: 5,
      username: 'Eve Davis',
      email: 'eve.davis@example.com',
      phone: '444-555-6666',
      profilePic: 'https://via.placeholder.com/150/ADD8E6?text=ED',
      isVerified: true,
    },
    {
      id: 6,
      username: 'Frank White',
      email: 'frank.white@example.com',
      phone: '777-888-9999',
      profilePic: 'https://via.placeholder.com/150/ADD8E6?text=FW',
      isVerified: false,
    },
  ];

  return (
    <>
      <div>Users</div>
      <UserList users={users}/>
    </>
  );
}
