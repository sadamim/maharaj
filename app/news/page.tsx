"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FeaturedGallary } from '../components/Gallary';

type Category = 'News' | 'Blog' | 'Events';
const categories: Category[] = ['News', 'Blog', 'Events'];

export default function NewsPage() {
  const [active, setActive] = useState<Category>('News');

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
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        <div className="container-padding mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-sm text-white tracking-wider uppercase">News &amp; Blog</span>
            </div>
            <h1 className="text-white mb-6">Stories from MSIPL</h1>
          </motion.div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container-padding mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors ${
                active === category
                  ? 'bg-gold text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {active === 'News' ? (
        <FeaturedGallary />
      ) : (
        <section className="py-20 lg:py-32 bg-cream">
          <div className="container-padding mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto text-center bg-white rounded-3xl border-2 border-dashed border-gray-200 py-20 px-8"
            >
              <p className="text-2xl text-gray-400 mb-3">
                {active} content is coming soon.
              </p>
              <p className="text-sm text-gray-400">
                This section will be populated with real {active.toLowerCase()} as it becomes
                available.
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
