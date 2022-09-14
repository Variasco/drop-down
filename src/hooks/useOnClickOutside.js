import { useEffect, useRef } from "react";

export default function useOnClickOutside(onClick) {
  const containerRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClick();
      }
    }
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [containerRef]);

  return containerRef;
}
