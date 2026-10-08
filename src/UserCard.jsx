
import React from "react";

function UserCard({ user, onClick }) {
  console.log(`🔴 UserCard Rendered: ${user.name}`);

  // Artificial expensive work
  let total = 0;

  for (let i = 0; i < 1000000; i++) {
    total += i;
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "5px",
      }}
    >
      <strong>{user.name}</strong>

      <p>{user.email}</p>

      <button onClick={() => onClick(user)}>
        Select User
      </button>
    </div>
  );
}

export default UserCard;

