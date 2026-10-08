
import React from "react";

function Counter({ count }) {
  console.log("🟢 Counter Rendered");

  // Artificial work
  let total = 0;

  for (let i = 0; i < 5000000; i++) {
    total += i;
  }

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count received from App: {count}</p>
      <p>Calculation: {total}</p>
    </div>
  );
}

export default Counter;

