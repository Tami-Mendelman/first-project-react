import React from "react";
import GrandSon from "./GrandSon";

export default function ChildA({ value }) {
  return (    
    <div>
      <h2>Child A</h2>
      <p>Value from Grandfather: {value}</p>

      <GrandSon value={value} />
    </div>
  );
}
