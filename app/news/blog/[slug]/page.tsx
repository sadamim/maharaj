import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  blogPosts,
  getBlogPost,
  getReadingTime,
  getTableOfContents,
  slugifyHeading,
  type BlogBlock,
} from '../../../content/blogPosts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return {
    title: post ? `${post.title} | MSIPL` : 'Blog | MSIPL',
    description: post?.metaDescription,
  };
}

function Block({ block }: { block: BlogBlock }) {
  if (block.type === 'heading') {
    if (block.level === 2) {
      return (
        <h2 id={slugifyHeading(block.text)} className="scroll-mt-24 mt-12 mb-4 pb-3 border-b border-gray-100">
          {block.text}
        </h2>
      );
    }
    return <h3 className="scroll-mt-24 mt-8 mb-3 text-xl">{block.text}</h3>;
  }
  if (block.type === 'p') {
    return <p className="text-gray-700 leading-relaxed mb-5">{block.text}</p>;
  }
  if (block.type === 'list') {
    return (
      <ul className="space-y-2 mb-5 pl-1">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
            <span className="text-gold shrink-0 mt-1">&bull;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  // table
  return (
    <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200">
      <table className="w-full text-sm text-left">
        <thead className="bg-cream">
          <tr>
            {block.headers.map((h, i) => (
              <th key={i} className="px-4 py-3 font-semibold text-charcoal whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i} className="border-t border-gray-200">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-700 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug);
  const toc = getTableOfContents(post);

  return (
    <div className="pt-24 min-h-screen blog-post-page">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-deep-maroon overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-padding mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-4">{post.title}</h1>
            <p className="text-white/75 text-lg">{post.metaDescription}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-padding mx-auto max-w-6xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-dark transition-colors mb-10"
          >
            &larr; Back to News &amp; Blog
          </Link>

          <div className="blog-layout items-start">
            {/* Article column */}
            <div className="min-w-0">
              <div className="flex items-center gap-3 pb-8 mb-8 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold font-semibold text-sm shrink-0">
                  MS
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">MSIPL Editorial Team</p>
                  <p className="text-xs text-gray-500">{getReadingTime(post)} min read</p>
                </div>
              </div>

              <article>
                {post.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </article>

              {/* FAQs */}
              {post.faqs.length > 0 && (
                <div className="mt-16 pt-12 border-t border-gray-200">
                  <h2 className="mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {post.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group bg-cream rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden"
                      >
                        <summary className="cursor-pointer font-semibold text-charcoal list-none flex items-center justify-between gap-4">
                          {faq.q}
                          <span className="text-gold shrink-0 transition-transform group-open:rotate-45 text-xl leading-none">
                            +
                          </span>
                        </summary>
                        <p className="text-gray-600 leading-relaxed mt-3">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar space-y-6">
              {toc.length > 0 && (
                <nav className="rounded-2xl border border-gray-100 bg-cream p-6">
                  <p className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-4">
                    On This Page
                  </p>
                  <ul className="space-y-3">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-gray-600 hover:text-gold transition-colors leading-snug block"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              <div className="rounded-2xl bg-charcoal p-6 text-white">
                <p className="font-semibold mb-2">Explore Our Products</p>
                <p className="text-sm text-white/75 mb-5 leading-relaxed">
                  Browse the full Shashi and Savaal range of detergents, dishwash and home-care essentials.
                </p>
                <Link
                  href="/brands"
                  className="inline-flex items-center gap-1 text-sm font-semibold bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 transition-colors"
                >
                  View Products →
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-100 p-6">
                <p className="font-semibold text-charcoal mb-2">Have a Question?</p>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  Get in touch with our team for enquiries, distribution or partnerships.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                >
                  Contact Us →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-20 bg-cream">
          <div className="container-padding mx-auto">
            <h2 className="mb-10">More from MSIPL</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/news/blog/${p.slug}`}
                  className="group block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {p.metaDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-gold">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
