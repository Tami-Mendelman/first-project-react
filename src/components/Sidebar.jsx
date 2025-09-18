import { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";


export default function Sidebar() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(o => !o);
  }

  return (
    <>
      <button
        className="sidebar-toggle"
        aria-label={open ? "סגור תפריט צד" : "פתח תפריט צד"}
        onClick={toggle}
      >
        ☰
      </button>

     
      {open && <div className="sidebar-backdrop" onClick={toggle} />}

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="brand">Mood Tracker</span>
          <button className="close-btn" aria-label="סגור" onClick={toggle}>×</button>
        </div>

      <nav className="sidebar-nav">
  <NavLink
    to="/"
    end
    className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
  >
    About
  </NavLink>
</nav>

        <div className="sidebar-footer">
        </div>
      </aside>
    </>
  );
}
