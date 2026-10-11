import React from "react";

const tickerItems = [
  "ZAMMAYA",
  "PREMIUM LOUNGE BAR IN SOUTH DELHI",
  "CRAFTED COCKTAILS",
  "GLOBALLY INSPIRED CUISINE",
  "MEMORABLE NIGHTS",
];

export default function MovingTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <>
      <section
        className="zm-ticker"
        aria-label="Discover Zammaya"
      >
        <div className="zm-ticker-track" aria-hidden="true">
          {items.map((item, index) => (
            <span className="zm-ticker-item" key={`${item}-${index}`}>
              {item}
              <span className="zm-ticker-separator">✦</span>
            </span>
          ))}
        </div>

        <span className="zm-ticker-accessible">
          Zammaya — Premium lounge bar in South Delhi.
          Crafted cocktails, globally inspired cuisine, and memorable nights.
        </span>
      </section>

      <style>{`
        .zm-ticker {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 17px 0;
          background: #160f0a;
          border-top: 1px solid rgba(198, 164, 91, 0.35);
          border-bottom: 1px solid rgba(198, 164, 91, 0.35);
          color: #e8e0d0;
        }

        .zm-ticker-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: zm-ticker-scroll 38s linear infinite;
          will-change: transform;
        }

        .zm-ticker-item {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 30px;
          padding-left: 30px;
          color: #e8e0d0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.2px;
          line-height: 1.5;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .zm-ticker-separator {
          color: #c6a45b;
          font-size: 12px;
        }

        .zm-ticker-accessible {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @keyframes zm-ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 600px) {
          .zm-ticker {
            padding: 14px 0;
          }

          .zm-ticker-track {
            animation-duration: 30s;
          }

          .zm-ticker-item {
            gap: 20px;
            padding-left: 20px;
            font-size: 10px;
            letter-spacing: 1.6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zm-ticker-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
