export default function BlogStyles() {
  return (
    <style>{`
      .zm-blog {
        width: 100%;
        background: #080a08;
        color: #e8e0d0;
        font-family: var(--font-sans), Arial, sans-serif;
      }

      .zm-blog *,
      .zm-blog *::before,
      .zm-blog *::after {
        box-sizing: border-box;
      }

      .zm-blog-wrap {
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        padding-left: clamp(24px, 6vw, 72px);
        padding-right: clamp(24px, 6vw, 72px);
      }

      .zm-blog-section {
        padding-top: clamp(40px, 5vw, 64px);
        padding-bottom: clamp(40px, 5vw, 64px);
      }

      .zm-blog-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 14px;
        margin: 0;
        color: #c6a45b;
        font-size: 11px;
        letter-spacing: 0.3em;
        text-transform: uppercase;
      }

      .zm-blog-eyebrow--lines::before,
      .zm-blog-eyebrow--lines::after {
        content: "";
        width: 32px;
        height: 1px;
        background: currentColor;
        opacity: 0.7;
      }

      .zm-blog h1,
      .zm-blog h2,
      .zm-blog h3 {
        font-family: var(--font-cormorant), Georgia, serif;
        font-weight: 400;
        margin: 0;
      }

      .zm-blog em {
        font-style: italic;
        color: #c6a45b;
      }

      .zm-blog a {
        text-decoration: none;
        color: inherit;
      }

      .zm-blog a:focus-visible {
        outline: 2px solid #c6a45b;
        outline-offset: 4px;
      }

      .zm-blog-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 8px 18px;
        color: rgba(232, 224, 208, 0.6);
        font-size: 12px;
        letter-spacing: 0.08em;
      }

      .zm-blog-more {
        color: #c6a45b;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }

      .zm-blog-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        min-height: 50px;
        padding: 0 28px;
        border: 1px solid #c6a45b;
        background: #c6a45b;
        color: #080a08 !important;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        transition: background 180ms ease, color 180ms ease;
      }

      .zm-blog-btn:hover {
        background: transparent;
        color: #c6a45b !important;
      }

      .zm-blog-btn--ghost {
        background: transparent;
        color: #e8e0d0 !important;
        border-color: rgba(232, 224, 208, 0.5);
      }

      .zm-blog-btn--ghost:hover {
        border-color: #c6a45b;
      }

      /* Listing intro */
      .zm-blog-intro {
        padding-top: clamp(48px, 6vw, 84px);
        padding-bottom: clamp(28px, 4vw, 44px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
        text-align: center;
      }

      .zm-blog-intro h1 {
        font-size: clamp(46px, 6.6vw, 92px);
        line-height: 0.98;
      }

      .zm-blog-intro p:last-child {
        margin: 0;
        color: rgba(232, 224, 208, 0.75);
        font-size: 12px;
        letter-spacing: 0.24em;
        text-transform: uppercase;
      }

      /* Featured card */
      .zm-blog-featured {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
        border: 1px solid rgba(198, 164, 91, 0.3);
        overflow: hidden;
      }

      .zm-blog-featured-img {
        overflow: hidden;
        min-height: 360px;
      }

      .zm-blog-featured-img img,
      .zm-blog-card-img img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1);
      }

      .zm-blog-featured:hover img,
      .zm-blog-card:hover img {
        transform: scale(1.04);
      }

      .zm-blog-featured-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 18px;
        padding: clamp(32px, 4vw, 56px);
        background: #101b14;
      }

      .zm-blog-featured-body h2 {
        font-size: clamp(30px, 3.2vw, 44px);
        line-height: 1.1;
      }

      .zm-blog-featured-body p {
        margin: 0;
        color: rgba(232, 224, 208, 0.74);
        font-size: 16px;
        line-height: 1.75;
      }

      /* Card grid */
      .zm-blog-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 40px 28px;
      }

      .zm-blog-card {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .zm-blog-card-img {
        height: 280px;
        overflow: hidden;
        background: #101b14;
      }

      .zm-blog-card h3 {
        font-size: 26px;
        line-height: 1.2;
        transition: color 180ms ease;
      }

      .zm-blog-card:hover h3 {
        color: #c6a45b;
      }

      .zm-blog-card p {
        margin: 0;
        color: rgba(232, 224, 208, 0.7);
        font-size: 14px;
        line-height: 1.7;
      }

      .zm-blog-cta-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 18px;
        padding: 36px 32px;
        background: #101b14;
        border: 1px solid rgba(198, 164, 91, 0.3);
      }

      .zm-blog-cta-card h3 {
        font-size: 30px;
        line-height: 1.15;
      }

      /* Article */
      .zm-article-head {
        max-width: 860px;
        margin: 0 auto;
        padding-top: clamp(48px, 6vw, 80px);
        padding-bottom: clamp(28px, 3vw, 40px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        text-align: center;
      }

      .zm-article-head h1 {
        font-size: clamp(38px, 5vw, 66px);
        line-height: 1.05;
      }

      .zm-article-back {
        color: rgba(232, 224, 208, 0.65);
        font-size: 11px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }

      .zm-article-back:hover {
        color: #c6a45b;
      }

      .zm-article-hero {
        max-width: 1100px;
        margin: 0 auto;
        height: clamp(280px, 48vw, 560px);
        overflow: hidden;
      }

      .zm-article-hero img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .zm-article-body {
        max-width: 720px;
        margin: 0 auto;
        padding-top: clamp(40px, 5vw, 64px);
        padding-bottom: clamp(24px, 3vw, 40px);
      }

      .zm-article-body h2 {
        margin: 40px 0 14px;
        font-size: clamp(28px, 3vw, 36px);
        line-height: 1.15;
      }

      .zm-article-body p {
        margin: 0 0 18px;
        color: rgba(232, 224, 208, 0.84);
        font-size: 17px;
        line-height: 1.85;
      }

      .zm-article-body > div:first-child > p:first-child::first-letter {
        float: left;
        margin: 6px 12px 0 0;
        color: #c6a45b;
        font-family: var(--font-cormorant), Georgia, serif;
        font-size: 64px;
        line-height: 0.8;
      }

      .zm-article-body ul {
        margin: 0 0 22px;
        padding: 0;
        list-style: none;
      }

      .zm-article-body li {
        position: relative;
        padding: 10px 0 10px 26px;
        border-bottom: 1px solid rgba(198, 164, 91, 0.15);
        color: rgba(232, 224, 208, 0.84);
        font-size: 16px;
        line-height: 1.7;
      }

      .zm-article-body li::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 20px;
        width: 7px;
        height: 7px;
        transform: rotate(45deg);
        background: #c6a45b;
      }

      .zm-article-cta {
        max-width: 720px;
        margin: 0 auto clamp(40px, 5vw, 64px);
        padding: 36px clamp(24px, 4vw, 44px);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 22px;
        background: #101b14;
        border: 1px solid rgba(198, 164, 91, 0.3);
      }

      .zm-article-cta h2 {
        font-size: clamp(26px, 3vw, 34px);
        line-height: 1.15;
      }

      .zm-article-related {
        border-top: 1px solid rgba(198, 164, 91, 0.18);
      }

      .zm-article-related h2 {
        margin-bottom: 28px;
        font-size: clamp(30px, 3.4vw, 44px);
      }

      @media (max-width: 900px) {
        .zm-blog-featured {
          grid-template-columns: minmax(0, 1fr);
        }

        .zm-blog-featured-img {
          min-height: 0;
          height: 300px;
        }

        .zm-blog-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 600px) {
        .zm-blog-grid {
          grid-template-columns: minmax(0, 1fr);
        }

        .zm-blog-card-img {
          height: 240px;
        }

        .zm-article-body p {
          font-size: 16px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .zm-blog-featured-img img,
        .zm-blog-card-img img,
        .zm-blog-card h3,
        .zm-blog-btn {
          transition: none;
        }
      }
    `}</style>
  );
}
