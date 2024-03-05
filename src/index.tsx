import React from "react";
import { createRoot } from "react-dom/client";
import useDebounce from "./hooks/useDebounce";

const App = () => {
  const [state, setState, debounced, isDebouncing] = useDebounce("test", 1000);
  return (
    <>
      <h1>{isDebouncing ? "loading..." : debounced}</h1>
      <input value={state} onChange={(event) => setState(event.target.value)} />
    </>
  );
};

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

createRoot(root).render(<App />);
