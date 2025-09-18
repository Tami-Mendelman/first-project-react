import React from "react";

export default function ChildB({ value, setValue }) {
  return (    
    <div>
      <h2>Child B</h2>
      <p>Current Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}
