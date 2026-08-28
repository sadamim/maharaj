"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts, getReadingTime } from '../content/blogPosts';

export default function NewsPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-deep-maroon overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/web banner2.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        
      </section>

      {/* Blog posts */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container-padding mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-xs font-semibold text-gold uppercase tracking-wider bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Blog
            </span>
            <h1 className="text-gold text-lg mb-4">Stories from MSIPL</h1>
            <p className="text-gold/75 text-sm mb-20">
              Insights on quality, ingredients and everyday home care from the MSIPL team.
            </p>
          </motion.div>
        </div>
        <div className="container-padding mx-auto">
          {/* Featured post */}
          {blogPosts[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Link
                href={`/news/blog/${blogPosts[0].slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 items-stretch bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[16/9] lg:aspect-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-gold uppercase tracking-wider bg-gold/10 rounded-full px-3 py-1 mb-5 w-fit">
                    Featured &bull; Blog
                  </span>
                  <h3 className="text-2xl lg:text-3xl mb-4 group-hover:text-gold transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {blogPosts[0].metaDescription}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span>{getReadingTime(blogPosts[0])} min read</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold">
                    Read Story →
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Remaining posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/news/blog/${post.slug}`}
                  className="group block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <span className="inline-block text-[11px] font-semibold text-gold uppercase tracking-wider bg-gold/10 rounded-full px-3 py-1 mb-4">
                      Blog
                    </span>
                    <h3 className="text-xl mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {post.metaDescription}
                    </p>
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-xs text-gray-500">{getReadingTime(post)} min read</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
