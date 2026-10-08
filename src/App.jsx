
import React, { useCallback, useMemo, useState } from "react";
import Counter from "./counter.jsx";
import UserList from "./userlist.jsx";
import SlowComponent from "./SlowComponent.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  console.log("🔵 App Rendered");

  const expensiveValue = useMemo(() => {
    console.log("🟡 Expensive calculation running...");

    let total = 0;

    for (let i = 0; i < 50000000; i++) {
      total += i;
    }

    return total + count;
  }, [count]);

  // Stable function
  const handleUserClick = useCallback((user) => {
    setSelectedUser(user);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>React Performance Demo</h1>

      <hr />
      <h2>Docker and Kubbernates</h2>
      
      <h2>1. Counter</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>

      <p>Expensive Value: {expensiveValue}</p>

      <hr />

      <h2>2. Name Input</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />

      <p>Hello: {name}</p>

      <hr />

      <h2>3. Counter Component</h2>

      <Counter count={count} />

      <hr />

      <h2>4. User List</h2>

      <UserList onUserClick={handleUserClick} />

      <hr />

      <h2>5. Selected User</h2>

      {selectedUser ? (
        <p>
          Selected: <strong>{selectedUser.name}</strong>
        </p>
      ) : (
        <p>No user selected</p>
      )}

      <hr />

      <h2>6. Slow Component</h2>

      <SlowComponent />
    </div>
  );
}

export default App;


