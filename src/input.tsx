import { useState } from "react";

export function Input() {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      placeholder="Type here"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
