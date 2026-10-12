
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
    <header className="zm-navbar">
      <style>{`
        .zm-navbar {
          position: relative;
          z-index: 1000;
          width: 100%;
          min-height: 96px;
          padding: 14px clamp(20px, 5vw, 72px);
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr) auto;
          align-items: center;
          gap: 28px;
          background: #080a08;
          border-bottom: 1px solid rgba(198, 164, 91, 0.14);
          color: #e8e0d0;
          box-sizing: border-box;
        }

        .zm-navbar *,
        .zm-navbar *::before,
        .zm-navbar *::after {
          box-sizing: border-box;
        }

        .zm-brand {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          width: fit-content;
          text-decoration: none;
        }

        .zm-logo {
          display: block;
          width: 74px;
          max-width: 100%;
          height: 66px;
          object-fit: contain;
          object-position: left center;
        }

        .zm-desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(18px, 2.6vw, 40px);
          min-width: 0;
        }

        .zm-desktop-nav a {
          color: #e8e0d0;
          text-decoration: none;
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.16em;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .zm-desktop-nav a:hover {
          color: #c6a45b;
        }

        .zm-reserve {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          padding: 0 28px;
          background: #c6a45b;
          color: #080a08;
          border: 1px solid #c6a45b;
          text-decoration: none;
          font-family: var(--font-sans), Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          white-space: nowrap;
          transition: background 180ms ease, color 180ms ease;
        }

        .zm-reserve:hover {
          background: transparent;
          color: #c6a45b;
        }

        .zm-menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 46px;
          padding: 0;
          background: transparent;
          border: 1px solid rgba(198, 164, 91, 0.35);
          color: #e8e0d0;
          font-size: 23px;
          cursor: pointer;
        }

        .zm-navbar a:focus-visible,
        .zm-menu-toggle:focus-visible {
          outline: 2px solid #c6a45b;
          outline-offset: 4px;
        }

        @media (max-width: 900px) {
          .zm-navbar {
            grid-template-columns: 120px minmax(0, 1fr) auto;
            gap: 14px;
            padding-left: 22px;
            padding-right: 22px;
          }

          .zm-logo {
            width: 62px;
            height: 56px;
          }

          .zm-desktop-nav {
            gap: 12px;
          }

          .zm-desktop-nav a {
            font-size: 11px;
            letter-spacing: 0.06em;
          }

          .zm-reserve {
            min-height: 44px;
            padding: 0 16px;
            font-size: 11px;
          }
        }

        @media (max-width: 680px) {
          .zm-navbar {
            min-height: 78px;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 12px;
            padding: 12px 20px;
          }

          .zm-logo {
            width: 60px;
            height: 54px;
          }

          .zm-desktop-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 1001;
            padding: 18px 24px 24px;
            background: #080a08;
            border-top: 1px solid rgba(198, 164, 91, 0.14);
            border-bottom: 1px solid rgba(198, 164, 91, 0.22);
            align-items: stretch;
            flex-direction: column;
            gap: 0;
          }

          .zm-desktop-nav.zm-mobile-open {
            display: flex;
          }

          .zm-desktop-nav a {
            display: block;
            padding: 15px 0;
            border-bottom: 1px solid rgba(198, 164, 91, 0.12);
            font-size: 14px;
            letter-spacing: 0.12em;
          }

          .zm-desktop-nav a:last-child {
            border-bottom: 0;
          }

          .zm-reserve {
            display: none;
          }

          .zm-menu-toggle {
            display: inline-flex;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-navbar *,
          .zm-navbar *::before,
          .zm-navbar *::after {
            transition: none !important;
          }
        }
      `}</style>

      <a
        href="/"
        className="zm-brand"
        aria-label="Zammaya home"
        onClick={() => setMenuOpen(false)}
      >
        <img
          src="/logo-zammaya-nav.png"
          alt="Zammaya"
          className="zm-logo"
        />
      </a>

      <nav
        id="zm-main-navigation"
        className={`zm-desktop-nav ${
          menuOpen ? "zm-mobile-open" : ""
        }`}
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
        className="zm-reserve"
        onClick={() => setMenuOpen(false)}
      >
        RESERVE A TABLE
      </a>

      <button
        type="button"
        className="zm-menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="zm-main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "×" : "☰"}
      </button>
    </header>
  );
}
