"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const phoneNumber = "919289895632";
  const whatsappMessage = encodeURIComponent(
    "Hello Zammaya, I would like to know more about your venue and reservations."
  );

  return (
    <>
      <footer className="zm-footer">
        <div className="zm-footer-container">
          <div className="zm-footer-main">
            <div className="zm-footer-brand">
              <Link href="/" className="zm-footer-logo" aria-label="Zammaya Home">
                <img
                  src="/logo-zammay.jpg"
                  alt="Zammaya"
                  className="zm-footer-logo-image"
                />
              </Link>

              <p className="zm-footer-tagline">
                A promise to reimagine the night.
              </p>

              <p className="zm-footer-description">
                A premium lounge bar and dining destination in Adchini,
                South Delhi, bringing together global flavours, crafted
                cocktails, and memorable evenings.
              </p>
            </div>

            <div className="zm-footer-column">
              <h3>Explore</h3>
              <nav aria-label="Footer navigation">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/franchise">Franchise</Link>
                <Link href="/contact">Contact Us</Link>
              </nav>
            </div>

            <div className="zm-footer-column">
              <h3>Visit Zammaya</h3>
              <address>
                81, Sri Aurobindo Marg,
                <br />
                Adchini, South Delhi,
                <br />
                New Delhi, India
              </address>

              <a href={`tel:+${phoneNumber}`}>
                +91 92898 95632
              </a>

              <a
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=81+Sri+Aurobindo+Marg+Adchini+South+Delhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions ↗
              </a>
            </div>

            <div className="zm-footer-column zm-footer-reserve">
              <h3>Your Evening Awaits</h3>
              <p>
                Make your next dinner, celebration, or evening out
                something to remember.
              </p>

              <a href="#reservation" className="zm-footer-reserve-button">
                Reserve Your Table <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="zm-footer-bottom">
            <p>
              © 2026 Zammaya. All rights reserved.
            </p>

            <a href="#top" className="zm-footer-back-top">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .zm-footer {
          width: 100%;
          padding: 76px 24px 24px;
          background: #080a08;
          color: #e8e0d0;
          border-top: 1px solid rgba(198, 164, 91, 0.35);
        }

        .zm-footer *,
        .zm-footer *::before,
        .zm-footer *::after {
          box-sizing: border-box;
        }

        .zm-footer-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        .zm-footer-main {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1.1fr 1.1fr;
          gap: 44px;
          padding-bottom: 58px;
        }

        .zm-footer-logo {
          display: inline-block;
          width: 150px;
          max-width: 100%;
        }

        .zm-footer-logo-image {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .zm-footer-tagline {
          margin: 20px 0 12px;
          color: #c6a45b;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 23px;
          font-style: italic;
          line-height: 1.4;
        }

        .zm-footer-description,
        .zm-footer-reserve p {
          margin: 0;
          color: rgba(232, 224, 208, 0.68);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
          line-height: 1.9;
        }

        .zm-footer-column h3 {
          margin: 4px 0 22px;
          color: #c6a45b;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 23px;
          font-weight: 400;
          line-height: 1.3;
        }

        .zm-footer-column nav {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .zm-footer-column a,
        .zm-footer-column address {
          color: rgba(232, 224, 208, 0.75);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12px;
          font-style: normal;
          line-height: 1.9;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .zm-footer-column address {
          margin-bottom: 12px;
        }

        .zm-footer-column > a:not(.zm-footer-reserve-button) {
          display: block;
          width: fit-content;
          margin-top: 9px;
        }

        .zm-footer-column a:hover,
        .zm-footer-back-top:hover {
          color: #c6a45b;
        }

        .zm-footer-reserve p {
          margin-bottom: 22px;
        }

        .zm-footer-reserve-button {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 16px;
          border: 1px solid #c6a45b;
          background: #c6a45b;
          color: #080a08 !important;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px !important;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          transition: background 180ms ease, color 180ms ease;
        }

        .zm-footer-reserve-button:hover {
          background: transparent;
          color: #c6a45b !important;
        }

        .zm-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 22px;
          border-top: 1px solid rgba(198, 164, 91, 0.2);
        }

        .zm-footer-bottom p,
        .zm-footer-back-top {
          margin: 0;
          color: rgba(232, 224, 208, 0.55);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          line-height: 1.8;
          text-decoration: none;
        }

        .zm-footer-back-top {
          white-space: nowrap;
        }

        .zm-footer a:focus-visible {
          outline: 2px solid #c6a45b;
          outline-offset: 4px;
        }

        @media (max-width: 1000px) {
          .zm-footer-main {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .zm-footer {
            padding: 56px 20px 22px;
          }

          .zm-footer-main {
            grid-template-columns: 1fr;
            gap: 36px;
            padding-bottom: 38px;
          }

          .zm-footer-logo {
            width: 135px;
          }

          .zm-footer-tagline {
            font-size: 22px;
          }

          .zm-footer-column h3 {
            margin-bottom: 16px;
            font-size: 22px;
          }

          .zm-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-footer-reserve-button {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
