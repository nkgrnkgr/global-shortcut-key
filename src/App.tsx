import { useEffect, useRef, useState } from "react";
import { Input } from "./input";

export function App() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
          setCount((prev) => prev + 1);
          return;
        }
        if (e.key === "ArrowDown") {
          setCount((prev) => prev - 1);
          return;
        }
      });
    }
  }, []);

  return (
    // biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
    <div ref={ref} tabIndex={0}>
      <Input />
      <div>
        <h2>上下キーでカウントアップ/カウントダウン</h2>
        <div>{count}</div>
      </div>
    </div>
  );
}
