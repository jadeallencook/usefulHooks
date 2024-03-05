import { useState, useEffect } from "react";

const useDebounce = (value: any, delay: number) => {
  const [state, setState] = useState<any>(value);
  const [debounced, setDebounced] = useState<any>(value);
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);

  useEffect(() => {
    setIsDebouncing(!(state === debounced));
    const handler = setTimeout(() => setDebounced(state), delay);
    return () => clearTimeout(handler);
  }, [state]);

  useEffect(() => setIsDebouncing(false), [debounced]);

  return [state, setState, debounced, isDebouncing];
};

export default useDebounce;
