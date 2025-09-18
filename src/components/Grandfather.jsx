import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

export default function Grandfather() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>Grandfather</h1>
      <ChildA value={value} />
      <ChildB value={value} setValue={setValue} />
    </div>
  );
}
