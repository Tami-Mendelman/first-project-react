import { useState } from "react";
import "./Sidebar.css";

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
          <a href="#current" className="nav-item">Current Mood</a>
          <a href="#choose" className="nav-item">Choose Mood</a>
          <a href="#actions" className="nav-item">Actions</a>
          <a href="#recent" className="nav-item">Recent</a>
        </nav>

        <div className="sidebar-footer">
        </div>
      </aside>
    </>
  );
}
