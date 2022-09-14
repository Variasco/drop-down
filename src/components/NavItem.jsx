import React, { useState } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

export default function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);
  const containerRef = useOnClickOutside(() => setOpen(false));

  function toggle(e) {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <li className="nav-item">
      <a href="/" className="icon-button" ref={containerRef} onClick={toggle}>
        {icon}
      </a>
      {open && children}
    </li>
  );
}
