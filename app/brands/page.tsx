"use client";

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { productsByBrand, type BrandKey } from '../content/products';
import { brandTaglines } from '../content/msipl';

const brands: { key: BrandKey; name: string; tagline: string; extra?: string }[] = [
  { key: 'shashi', name: 'SHASHI', tagline: brandTaglines.shashi },
  { key: 'savaal', name: 'SAVAAL', tagline: brandTaglines.savaal },
  { key: 'shashi-plus', name: 'SHASHI+', tagline: brandTaglines.shashiPlus, extra: brandTaglines.shashiPlusExtra },
];

const ALL = 'All Segments';

export default function BrandsPage() {
  const [activeBrand, setActiveBrand] = useState<BrandKey>('shashi');
  const [activeSegment, setActiveSegment] = useState(ALL);

  const brand = brands.find((b) => b.key === activeBrand)!;
  const products = useMemo(
    () => (activeBrand === 'shashi-plus' ? [] : productsByBrand(activeBrand)),
    [activeBrand]
  );

  const segments = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return [ALL, ...unique];
  }, [products]);

  const filtered =
    activeSegment === ALL ? products : products.filter((p) => p.category === activeSegment);

  function selectBrand(key: BrandKey) {
    setActiveBrand(key);
    setActiveSegment(ALL);
  }

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
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-sm text-white tracking-wider uppercase">Brand &amp; Products</span>
            </div>
            <h1 className="text-white mb-6">Three Brands. One Promise of Clean.</h1>
          </motion.div>
        </div>
      </section>

      {/* Brand tabs */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container-padding mx-auto flex flex-wrap justify-center gap-3">
          {brands.map((b) => (
            <button
              key={b.key}
              onClick={() => selectBrand(b.key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeBrand === b.key
                  ? 'bg-gold text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>
      </section>

      {/* Brand intro */}
      <section className="py-14 bg-cream">
        <div className="container-padding mx-auto text-center">
          <motion.div
            key={brand.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="mb-2">{brand.name}</h2>
            <p className="text-lg text-gray-700">{brand.tagline}</p>
            {brand.extra && <p className="text-sm text-gray-500 italic mt-1">{brand.extra}</p>}
          </motion.div>
        </div>
      </section>

      {activeBrand === 'shashi-plus' ? (
        <section className="py-20 lg:py-32 bg-white">
          <div className="container-padding mx-auto">
            <div className="max-w-xl mx-auto text-center bg-cream rounded-3xl border-2 border-dashed border-gray-200 py-20 px-8">
              <p className="text-2xl text-gray-400 mb-3">SHASHI+ product lineup launching soon.</p>
              <p className="text-sm text-gray-400">
                {brandTaglines.shashiPlusExtra} — full product listings will appear here once
                available.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Segment filter */}
          <section className="py-8 bg-white border-b border-gray-200">
            <div className="container-padding mx-auto flex flex-wrap justify-center gap-2">
              {segments.map((segment) => (
                <button
                  key={segment}
                  onClick={() => setActiveSegment(segment)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all ${
                    activeSegment === segment
                      ? 'bg-gold text-white shadow'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {segment}
                </button>
              ))}
            </div>
          </section>

          {/* Product grid */}
          <section className="py-16 bg-white">
            <div className="container-padding mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {filtered.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.04 }}
                    className="bg-cream rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-5 sm:p-8"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="text-[10px] sm:text-xs text-gold tracking-wider uppercase mb-1 sm:mb-2">
                        {product.category}
                      </div>
                      <h3 className="text-base sm:text-lg mb-1 sm:mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <a
                        href="/products"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                      >
                        View in Shop →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="text-center text-gray-500 py-16">
                  No products in this segment yet.
                </p>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
