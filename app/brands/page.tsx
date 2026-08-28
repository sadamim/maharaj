"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { brandTaglines } from '../content/msipl';
import type { BrandMeta } from './[brand]/BrandPageClient';

const brands: BrandMeta[] = [
  { key: 'shashi', name: 'SHASHI', tagline: brandTaglines.shashi },
  { key: 'savaal', name: 'SAVAAL', tagline: brandTaglines.savaal },
  { key: 'shashi-plus', name: 'SHASHI+', tagline: brandTaglines.shashiPlus, extra: brandTaglines.shashiPlusExtra },
];

export default function BrandsOverviewPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-deep-maroon overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/productbanner.webp')`,
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
            <h1 className="text-white mb-6">Three Brands. One Promise of Clean.</h1>
          </motion.div>
        </div>
      </section>

      {/* Brand tiles */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-padding mx-auto">
          <div className="brand-tiles-grid gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/brands/${brand.key}`}
                  className="group block h-full rounded-2xl border border-gray-200 bg-cream p-10 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all"
                >
                  <h2 className="mb-3 group-hover:text-gold transition-colors">{brand.name}</h2>
                  <p className="text-gray-600 leading-relaxed text-center">{brand.tagline}</p>
                  {brand.extra && (
                    <p className="text-sm text-gray-500 italic mt-2 text-center">{brand.extra}</p>
                  )}
                  <span className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-gold">
                    Explore {brand.name} →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
