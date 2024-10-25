import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import { Input } from "./input";

function isInteractiveElement(element: Element): boolean {
  if (element.role === "button") {
    return true;
  }
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLTextAreaElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLButtonElement
  );
}

export function App() {
  const [count, setCount] = useState(0);
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (isInteractiveElement(e.target as Element)) {
        console.log("インタラクティブな要素の場合は無視する?");
        return;
      }
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
    document.body.addEventListener("keydown", handler);
    return () => document.body.removeEventListener("keydown", handler);
  }, [handler]);

  return (
    <div>
      <Input />
      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
      <div className={styles.wrapper} tabIndex={0}>
        <h2>上下キーでカウントアップ/カウントダウン</h2>
        <div>{count}</div>
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
        {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
        <div className={styles.button} role="button" tabIndex={0}>
          ボタンだよ
        </div>
      </div>
    </div>
  );
}
