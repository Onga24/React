function UserList({ Users  }) {
  return (
    <>
    <div>
        {
            Users.map(
                (user) => (
                 <li key={user.id}>{user.name}----------{user.age}</li>

            )
        )
        }
    </div>
    </>
  )}

  export default UserList;