
"use client";

import { useState } from "react";

const links = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "GALLERY", href: "/gallery" },
  { label: "FRANCHISE", href: "/franchise" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a
        href="/"
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
        href="/contact#reservation"
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
