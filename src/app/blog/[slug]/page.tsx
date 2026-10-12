import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogStyles from "../../components/BlogStyles";
import { posts, getPost, formatDate } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      locale: "en_IN",
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://zammaya.in${post.image}`,
    datePublished: post.date,
    mainEntityOfPage: `https://zammaya.in/blog/${post.slug}`,
    author: { "@type": "Organization", name: "Zammaya" },
    publisher: {
      "@type": "Organization",
      name: "Zammaya",
      logo: {
        "@type": "ImageObject",
        url: "https://zammaya.in/logo-zammaya-nav.png",
      },
    },
  };

  return (
    <>
      <Navbar />

      <main id="top" className="zm-blog">
        <BlogStyles />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article>
          <header className="zm-blog-wrap zm-article-head">
            <Link href="/blog" className="zm-article-back">
              ← The Zammaya Journal
            </Link>
            <span className="zm-blog-eyebrow zm-blog-eyebrow--lines">
              {post.category}
            </span>
            <h1>{post.title}</h1>
            <div className="zm-blog-meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>{post.readMinutes} min read</span>
            </div>
          </header>

          <div className="zm-blog-wrap">
            <div className="zm-article-hero">
              <img src={post.image} alt={post.imageAlt} />
            </div>
          </div>

          <div className="zm-blog-wrap">
            <div className="zm-article-body">
              {post.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs.map((text, j) => (
                    <p key={j}>{text}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="zm-blog-wrap">
          <aside className="zm-article-cta" aria-label="Reserve a table">
            <h2>
              Make it a <em>Zammaya night.</em>
            </h2>
            <a href="/contact#reservation" className="zm-blog-btn">
              Reserve Your Table
            </a>
          </aside>
        </div>

        <section className="zm-article-related" aria-labelledby="related-heading">
          <div className="zm-blog-wrap zm-blog-section">
            <h2 id="related-heading">
              More from the <em>Journal</em>
            </h2>
            <div className="zm-blog-grid">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="zm-blog-card">
                  <div className="zm-blog-card-img">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" />
                  </div>
                  <span className="zm-blog-eyebrow">{p.category}</span>
                  <h3>{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
