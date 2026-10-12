import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogStyles from "../components/BlogStyles";
import { posts, formatDate } from "./posts";

export const metadata: Metadata = {
  title: "The Zammaya Journal | Nightlife, Cocktails & Dining in South Delhi",
  description:
    "Guides to nightlife, cocktails, date nights and celebrations in South Delhi, from Zammaya — a premium lounge bar and dining destination in Adchini.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "The Zammaya Journal",
    description:
      "Food, cocktails, nights out and celebrations in South Delhi.",
    url: "/blog",
    type: "website",
    locale: "en_IN",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />

      <main id="top" className="zm-blog">
        <BlogStyles />

        <section className="zm-blog-wrap zm-blog-intro" aria-labelledby="blog-heading">
          <p className="zm-blog-eyebrow zm-blog-eyebrow--lines">Blog</p>
          <h1 id="blog-heading">
            The Zammaya <em>Journal</em>
          </h1>
          <p>Food · Cocktails · Nights · The Zammaya Way</p>
        </section>

        <section className="zm-blog-wrap" aria-label="Featured story">
          <Link href={`/blog/${featured.slug}`} className="zm-blog-featured">
            <div className="zm-blog-featured-img">
              <img src={featured.image} alt={featured.imageAlt} />
            </div>
            <div className="zm-blog-featured-body">
              <span className="zm-blog-eyebrow">Featured · {featured.category}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="zm-blog-meta">
                <span>{formatDate(featured.date)}</span>
                <span>{featured.readMinutes} min read</span>
              </div>
              <span className="zm-blog-more">Read the Story →</span>
            </div>
          </Link>
        </section>

        <section className="zm-blog-wrap zm-blog-section" aria-label="More stories">
          <div className="zm-blog-grid">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="zm-blog-card">
                <div className="zm-blog-card-img">
                  <img src={post.image} alt={post.imageAlt} loading="lazy" />
                </div>
                <span className="zm-blog-eyebrow">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="zm-blog-meta">{post.readMinutes} min read</span>
              </Link>
            ))}

            <div className="zm-blog-cta-card">
              <h3>
                Read enough? <em>Come experience it.</em>
              </h3>
              <a href="/contact#reservation" className="zm-blog-btn">
                Reserve a Table
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
