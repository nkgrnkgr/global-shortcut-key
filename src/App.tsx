import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./app.module.css";
import { Input } from "./input";

export function App() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handler = useCallback(
    (e: KeyboardEvent) => {
      console.log("ld");
      if (e.key === "ArrowUp") {
        setCount(count + 1);
        return;
      }
      if (e.key === "ArrowDown") {
        setCount(count - 1);
        return;
      }
    },
    [count],
  );

  useEffect(() => {
    if (ref.current === null) return;
    ref.current.addEventListener("keydown", handler);
    return () => ref.current?.removeEventListener("keydown", handler);
  }, [handler]);

  return (
    <div>
      <Input />
      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
      <div className={styles.wrapper} ref={ref} tabIndex={0}>
        <h2>上下キーでカウントアップ/カウントダウン</h2>
        <div>{count}</div>
      </div>
    </div>
  );
}
