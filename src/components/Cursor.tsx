import { useEffect, useRef } from "react";

const CURSOR_SIZE = 26;
const CURSOR_SIZE_HOVER = 40;

function isClickable(el: EventTarget | null): boolean {
  let node = el as Element | null;
  while (node) {
    if (
      node.classList?.contains("clickable") ||
      node.tagName?.toLowerCase() === "button"
    ) {
      return true;
    }
    node = node.parentElement;
  }
  return false;
}

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const hovered = isClickable(e.target);
      const size = hovered ? CURSOR_SIZE_HOVER : CURSOR_SIZE;
      if (cursorRef.current) {
        cursorRef.current.style.width = `${size}px`;
        cursorRef.current.style.height = `${size}px`;
        cursorRef.current.style.left = `${e.clientX - size / 2}px`;
        cursorRef.current.style.top = `${e.clientY - size / 2}px`;
      }
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed rounded-full pointer-events-none origin-center z-[9999]"
      style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        transition: "width 150ms, height 150ms",
        backdropFilter: "invert(1)",
        WebkitBackdropFilter: "invert(1)",
        left: -CURSOR_SIZE,
        top: -CURSOR_SIZE,
      }}
    />
  );
}
