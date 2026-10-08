
import React from "react";

function SlowComponent() {
  console.log("🐌 SlowComponent Rendered");

  let total = 0;

  // Artificially expensive calculation
  for (let i = 0; i < 80000000; i++) {
    total += i;
  }

  return (
    <div>
      <h3>Slow Component</h3>
      <p>Expensive calculation completed.</p>
      <p>Result: {total}</p>
    </div>
  );
}

export default SlowComponent;

