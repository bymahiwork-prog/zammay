
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "HOME", href: "#home" },
    { label: "THE EXPERIENCE", href: "#experience" },
    { label: "DINING", href: "#dining" },
    { label: "COCKTAILS", href: "#cocktails" },
    { label: "PRIVATE EVENTS", href: "#events" },
    { label: "LOCATION", href: "#location" },
  ];

  return (
    <header className="site-header">
      <a
        href="#home"
        className="brand"
        aria-label="Zammaya home"
        onClick={() => setMenuOpen(false)}
      >
        <img
          src="/logo-zammay.jpg"
          alt="Zammaya"
          className="navbar-logo"
        />
      </a>

      <nav
        id="main-navigation"
        className={`desktop-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#reservation"
        className="gold-button header-button"
        onClick={() => setMenuOpen(false)}
      >
        RESERVE A TABLE
      </a>

      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}
