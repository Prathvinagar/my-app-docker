
import React from "react";
import UserCard from "./UserCard";

const users = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
}));

function UserList({ onUserClick }) {
  console.log("🟠 UserList Rendered");

  return (
    <div>
      <h3>User List</h3>

      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}minikube version
          onClick={onUserClick}
        />
      ))}
    </div>
  );
}

export default UserList;

